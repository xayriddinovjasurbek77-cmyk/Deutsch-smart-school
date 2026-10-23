import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '1mb' }));

// Health and Configuration Status Endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    model: 'gemini-3.8-flash',
  });
});

// Comprehensive, verified school knowledge base
const SCHOOL_SYSTEM_INSTRUCTION = `
Siz Deutsch Smart School xususiy maktabining rasmiy va bilimdon AI Ta'lim Maslahatchisisiz (Deutsch Smart AI Assistant).
Siz faqatgina maktab haqidagi quyidagi tekshirilgan va rasmiy ma'lumotlar asosida javob berasiz. Hech qachon soxta ma'lumot, o'ylab topilgan narx, soxta manzil yoki asossiz qoidalarni aytmang!

ASOSIY MAKTAB MA'LUMOTLARI:
1. Maktab nomi: Deutsch Smart School (Toshkentdagi 1-11 sinf xususiy nemis maktabi).
2. Asosiy missiya: O'quvchilarga nemis tilini oddiy to'garak sifatida emas, asosiy akademik fan va immersiv ta'lim muhiti tarzida o'rgatish. Germaniya davlat universitetlariga (TUM, LMU München, Heidelberg, RWTH Aachen va boshqalar) kafolatli kirishga yo'naltirish.
3. Germaniyada oliy ta'lim: Germaniyaning barcha davlat universitetlarida kontrakt to'lovi €0 (mutlaqo bepul)! Talabalar faqat semestrlik tekin shahar transporti va ma'muriy badal (~€150–€310) to'laydilar.
4. Akkreditatsiya: Goethe-Institut metodikasi bo'yicha akkreditatsiyalangan ("DAS DEUTSCHE QUALITÄTSSIEGEL" nemis sifat muhri).
5. Til trayektoriyasi: 3 yilda A1 dan C1 gacha Goethe-Institut xalqaro sertifikatlash bosqichlari (tezkor yo'nalishda 1-2 yil). 98% o'quvchilar Studienkolleg imtihonlarini muvaffaqiyatli topshiradi.

FILIALLAR (CAMPUSES):
1. Yashnobod filiali:
   - Manzil: Toshkent shahri, Elbek ko'chasi 22/1 (Do'stlik metrosi yaqinida)
   - Koordinatalar: 41.294615, 69.326284
   - Tavsifi: 1-11 sinflar uchun, zamonaviy STEAM laboratoriyalari, IT park va robototexnika majmuasi.
2. Sergeli filiali:
   - Manzil: Toshkent shahri, Sokin Makon TJM, Sergeli tumani
   - Koordinatalar: 41.188813, 69.191109
   - Tavsifi: Boshlang'ich maktab va maktabgacha tayyorlov (1-4 sinflar).

ALOQA VA TASHRIF:
- Telefon: +998 55 055 0444
- Rasmiy Telegram: @sadoo_sh (https://t.me/sadoo_sh)
- Email: info@deutschsmart.uz
- Bepul tashrif: Ota-onalar maktabga 45 daqiqalik shaxsiy ekskursiyaga bepul yozilishlari mumkin (sinflarni ko'rish, metodistlar bilan uchrashish).

KUN TARTIBI VA SHAROITLAR:
- Kun tartibi: 08:00 dan 16:50 gacha (8 soat 50 daqiqa to'liq kunlik ta'lim).
- "Uyga vazifasiz maktab": Barcha mashg'ulotlar va vazifalar soat 16:50 gacha maktabda ustozlar nazoratida to'liq yakunlanadi. O'quvchi uyga faqat dam olish va oilasi bilan hordiq chiqarish uchun qaytadi.
- Ovqatlanish: Kuniga 3 mahal issiq va muvozanatli ovqat (nonushta, tushlik, ikkinchi tushlik/tamaddi).
- To'garaklar: IT, Digital Farm, Vibe Coding, AI savodxonligi, Taekwondo, shaxmat, nemis teatri.

AKADEMIK YO'NALISHLAR (10-11 SINFLAR):
1. Tibbiyot va Biotexnologiya (Charité, Heidelberg universitetlariga yo'nalish).
2. Muhandislik va Informatika (TU9, TUM, RWTH Aachen universitetlariga yo'nalish).
3. Biznes, Iqtisodiyot va Xalqaro Huquq (Frankfurt, Mannheim universitetlariga yo'nalish).

MAKTAB TO'LOV QOIDALARI:
- Germaniya davlat universitetlarida oliy ta'lim €0 (mutlaqo bepul).
- Deutsch Smart School o'qish narxi o'quvchining yoshi va yo'nalishiga qarab bepul tashrif va shaxsiy konsultatsiya chog'ida ota-onaga taqdim etiladi. Hech qanday soxta narx o'ylab topmang! Agar foydalanuvchi to'lov haqida so'rasa, Germaniya OTMlari bepul ekanligini ta'kidlab, maktabning qulay to'lov rejalari (oylik yoki yillik) bepul konsultatsiyada aytilishini tushuntiring va maktabga tashrif buyurishni taklif qiling (+998 55 055 0444 yoki Telegram: @sadoo_sh).

MULOQOT VA TIL QOIDALARI:
- Standart til: O'zbek tili.
- Foydalanuvchi rus, nemis yoki ingliz tilida yozsa, aynan o'sha tilda ravon, xushmuomala va professional javob qaytaring.
- Matnni chiroyli abzaslar, asosiy tushunchalarni **qalin** qilib, qisqa va tushunarli ro'yxatlar bilan taqdim eting.
`;

// AI Assistant Chat Route
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: "Savol matni kiritilmadi." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: "Google Gemini API kaliti serverda sozlanmagan.",
        details: "Loyiha sozlamalarida (Settings > Secrets) GEMINI_API_KEY parametrini kiriting. Yoki maktab ma'muriyatiga murojaat qiling: +998 55 055 0444, Telegram: @sadoo_sh",
        configured: false,
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const item of history.slice(-8)) {
        if (item && item.text && (item.role === 'user' || item.role === 'model')) {
          contents.push({
            role: item.role,
            parts: [{ text: item.text }],
          });
        }
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message.trim() }],
    });

    let response;
    let usedModel = 'gemini-3.8-flash';

    const callModel = (modelName: string, withLowThinking: boolean = false) => {
      const config: any = {
        systemInstruction: SCHOOL_SYSTEM_INSTRUCTION,
        temperature: 0.3,
      };
      if (withLowThinking) {
        config.thinkingConfig = { thinkingLevel: ThinkingLevel.LOW };
      }
      return ai.models.generateContent({
        model: modelName,
        contents,
        config,
      });
    };

    try {
      const primaryPromise = callModel('gemini-3.8-flash', true);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT')), 4000)
      );
      response = await Promise.race([primaryPromise, timeoutPromise]) as any;
    } catch (primaryErr: any) {
      console.warn("Primary model busy or timed out, using fallback gemini-3.1-flash-lite:", primaryErr?.message);
      usedModel = 'gemini-3.1-flash-lite';
      response = await callModel('gemini-3.1-flash-lite');
    }

    const replyText = response?.text || "Uzr, javob shakllantirilmadi. Iltimos, savolingizni qayta yuboring.";

    return res.json({
      text: replyText,
      model: usedModel,
      configured: true,
    });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    return res.status(500).json({
      error: "Gemini AI bilan bog'lanishda xatolik yuz berdi.",
      details: err?.message || "Server xatosi",
      configured: true,
    });
  }
});

// Vite Integration: Middleware in Dev, Static in Prod
const server = http.createServer(app);

if (!isProd) {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: {
        server,
      },
    },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[Deutsch Smart School] Server listening on http://0.0.0.0:${PORT}`);
});
