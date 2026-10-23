export type Language = 'uz' | 'ru' | 'de' | 'en';

export interface Translations {
  nav: {
    about: string;
    programs: string;
    schedule: string;
    faculty: string;
    campuses: string;
    faq: string;
    bookVisit: string;
    callNow: string;
  };
  hero: {
    badge: string;
    accreditation: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    statBranchesLabel: string;
    statBranchesVal: string;
    statLevelLabel: string;
    statLevelVal: string;
    statTuitionLabel: string;
    statTuitionVal: string;
    statDayLabel: string;
    statDayVal: string;
    floatingBadgeTopTitle: string;
    floatingBadgeTopSubtitle: string;
    floatingBadgeBottomTitle: string;
    floatingBadgeBottomSubtitle: string;
    floatingBadgeBottomBadge: string;
  };
  metrics: {
    m1Label: string;
    m1Value: string;
    m1Sub: string;
    m1Desc: string;
    m2Label: string;
    m2Value: string;
    m2Desc: string;
    m3Label: string;
    m3Value: string;
    m3Desc: string;
    m4Label: string;
    m4Value: string;
    m4Desc: string;
  };
  pillars: {
    sectionTag: string;
    titlePre: string;
    titleHighlight1: string;
    titleMid: string;
    titleHighlight2: string;
    titlePost: string;
    subtitle: string;
    items: Array<{
      number: string;
      title: string;
      germanTerm: string;
      description: string;
    }>;
  };
  schedule: {
    sectionTag: string;
    title: string;
    smartWord: string;
    description: string;
    badge: string;
    blocks: Array<{
      step: string;
      germanTime: string;
      timeRange: string;
      phase: string;
      accentColor: string;
      events: Array<{
        time: string;
        title: string;
        desc: string;
      }>;
    }>;
  };
  roadmap: {
    sectionTag: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    description: string;
    levels: Array<{
      step: string;
      code: string;
      title: string;
    }>;
    years: Array<{
      tag: string;
      codeBadge: string;
      title: string;
      skillsTitle: string;
      skills: string[];
      grammarTitle: string;
      grammar: string;
      outcomeTitle: string;
      outcome: string;
      exam: string;
      institution: string;
      isTarget?: boolean;
    }>;
    fastTrackTag: string;
    fastTrackTitle: string;
    fastTrackDesc: string;
    fastTrackStat: string;
    fastTrackStatLabel: string;
  };
  tracks: {
    sectionTag: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    description: string;
    list: Array<{
      tag: string;
      germanName: string;
      name: string;
      desc: string;
      subjects: string[];
      careers: string;
      partnerUnis: string;
      accent: string;
    }>;
  };
  futureSkills: {
    sectionTag: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    description: string;
    cardTag: string;
    cardFormula: string;
    cardSub: string;
    pillars: Array<{
      number: string;
      title: string;
      desc: string;
      bulletPoints: string[];
      toolsLabel: string;
      tools: string;
    }>;
  };
  faculty: {
    sectionTag: string;
    title: string;
    description: string;
    standards: Array<{
      tag: string;
      title: string;
      desc: string;
    }>;
    ctaButton: string;
  };
  campuses: {
    futureTag: string;
    futureTitle: string;
    futureDesc: string;
    futureFeatures: string[];
    futureBadge: string;
    yashnobodTag: string;
    yashnobodTitle: string;
    yashnobodAddress: string;
    yashnobodCoords: string;
    yashnobodNote: string;
    sergeliTag: string;
    sergeliTitle: string;
    sergeliAddress: string;
    sergeliCoords: string;
    sergeliNote: string;
    openInMap: string;
    getDirections: string;
  };
  form: {
    leftBadge: string;
    leftTitle: string;
    leftDesc: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    phoneConfirmLabel: string;
    formTitle: string;
    formSubtitle: string;
    parentNameLabel: string;
    parentNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    ageLabel: string;
    ageOptions: string[];
    objectiveLabel: string;
    objectiveOptions: string[];
    branchLabel: string;
    branchYashnobod: string;
    branchSergeli: string;
    preferredDateLabel: string;
    submitBtn: string;
    privacyNote: string;
    successTitle: string;
    successDesc: string;
    resetBtn: string;
  };
  faq: {
    sectionTag: string;
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
    questions: Array<{
      q: string;
      a: string;
    }>;
  };
  footer: {
    tagline: string;
    seal: string;
    partnerGoethe: string;
    partnerLevel: string;
    colSchoolTitle: string;
    colTracksTitle: string;
    colContactTitle: string;
    copyright: string;
    privacy: string;
    terms: string;
    accreditation: string;
  };
  telegram: {
    tooltip: string;
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    online: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      about: "Maktab haqida",
      programs: "Ta'lim & Dasturlar",
      schedule: "Maktab kuni",
      faculty: "Ustozlar",
      campuses: "Filiallar",
      faq: "Savol-Javob",
      bookVisit: "Maktabga tashrif →",
      callNow: "+998 55 055 0444",
    },
    hero: {
      badge: "XUSUSIY MAKTAB · 1–11 SINF · TOSHKENT",
      accreditation: "Goethe-Institut akkreditatsiyalangan metodikasi",
      titlePart1: "Farzandingizni",
      titleHighlight: "Yevropaga",
      titlePart2: "tayyorlovchi nemis maktabi.",
      description:
        "Deutsch Smart School — Toshkentdagi 1-11 sinf xususiy maktabi. Biz nemis tilini oddiy to'garak sifatida emas, asosiy o'quv dasturi tarzida o'rgatamiz — Germaniya davlat universitetlarida bepul ta'lim olishga kafolatli yo'naltiramiz.",
      primaryCta: "Maktabga tashrif",
      secondaryCta: "Dasturlar bilan tanishish",
      statBranchesLabel: "Filiallar",
      statBranchesVal: "Yashnobod & Sergeli",
      statLevelLabel: "Til darajasi",
      statLevelVal: "A1 → C1 Sertifikat",
      statTuitionLabel: "Germaniya OTM",
      statTuitionVal: "€0 Bepul Ta'lim",
      statDayLabel: "Maktab kuni",
      statDayVal: "08:00 – 16:50",
      floatingBadgeTopTitle: "KAFOLATLANGAN YO'NALISH",
      floatingBadgeTopSubtitle: "98% Studienkolleg muvaffaqiyati",
      floatingBadgeBottomTitle: "Uyga vazifasiz maktab",
      floatingBadgeBottomSubtitle: "Barcha mashg'ulotlar 16:50 gacha yakunlanadi",
      floatingBadgeBottomBadge: "100% Nazorat",
    },
    metrics: {
      m1Label: "GLOBAL DARAJA",
      m1Value: "6 TOP-100",
      m1Sub: "OTM",
      m1Desc: "Germaniyaning eng nufuzli OTMlari: TUM, LMU München, Heidelberg, RWTH Aachen.",
      m2Label: "YILLIK O'QISH SHARTNOMASI",
      m2Value: "€0",
      m2Desc: "Germaniya davlat universitetlarida mutlaqo bepul. Faqat semestrlik tekin transport yig'imi.",
      m3Label: "STANDART TRAYEKTORIYA",
      m3Value: "A1 → C1",
      m3Desc: "3 yilda Goethe-Institut xalqaro sertifikatlash bosqichlari. Tezkor yo'lda 1-2 yil.",
      m4Label: "KUN TARTIBI",
      m4Value: "8s 50m",
      m4Desc: "Akademik fanlar + Nemis immersiyasi + IT va AI laboratoriyasi + Taekwondo + Issiq taom.",
    },
    pillars: {
      sectionTag: "BIZNING YONDASHUVIMIZ",
      titlePre: "Nemis",
      titleHighlight1: "intizomi",
      titleMid: "va O'zbek",
      titleHighlight2: "ma'rifatining",
      titlePost: "mukammal uyg'unligi.",
      subtitle:
        "Bizning falsafamiz bir vaqtning o'zida ikki qadriyatni ko'taradi: Germaniya ta'limining texnik qat'iyati hamda milliy oilaviy muhitning samimiy e'tibori.",
      items: [
        {
          number: "01",
          title: "Aniqlik",
          germanTerm: "Ordnung & Präzision",
          description:
            "Til, matematika va har kungi metodikada shaffoflik. Biz muhandis ko'prikni imzolagandek baho qo'yamiz — ortda qolish ham, sun'iy ko'zbo'yamachilik ham yo'q.",
        },
        {
          number: "02",
          title: "Kelajak",
          germanTerm: "Zukunftsorientiert",
          description:
            "Har bir dars uzoq muddatli karyeraga qaratilgan. Bola Toshkentdan Münchenga, oddiy tinglovchidan xalqaro darajadagi malakali yetakchiga aylanadi.",
        },
        {
          number: "03",
          title: "Iliqlik",
          germanTerm: "Gemeinschaft & Respekt",
          description:
            "Maktab — ikkinchi oilaviy uy. O'quvchilar ruhiy bosimsiz, o'zaro hurmat, murabbiylik mehri va sog'lom jamoaviy muhitda shaxs bo'lib kamol topadi.",
        },
        {
          number: "04",
          title: "Ko'prik",
          germanTerm: "Kulturelle Brücke",
          description:
            "Biz ikki buyuk madaniyat o'rtasidagi yorqin aloqamiz. O'zbek milliy qadriyatlarini saqlagan holda, Yevropaning global texnologik yutuqlarini singdiramiz.",
        },
      ],
    },
    schedule: {
      sectionTag: "KUN TARTIBI // BIR O'QUVCHINING KUNI",
      title: "Bir",
      smartWord: "SMART",
      description:
        "O'quvchining kuni 08:00 dan 16:50 gacha to'liq rejalashtirilgan. Bola uyga vazifasiz qaytadi — barcha darslar va amaliy mashqlar ustozlar nazoratida to'liq bajariladi.",
      badge: "Hausaufgabenbetreuung (Uy vazifasiz ta'lim)",
      blocks: [
        {
          step: "01",
          germanTime: "Morgen",
          timeRange: "08:00 – 09:25",
          phase: "Bosqich I · Uyg'onish & Ritm",
          accentColor: "border-black",
          events: [
            { time: "08:00", title: "Morgenkreis (Davra suhbati)", desc: "Kun rejasi, ritm va kayfiyatni belgilash." },
            { time: "08:30", title: "Aniq fanlar bloki", desc: "Matematika va mantiqiy tafakkur darslari." },
            { time: "09:10", title: "Frühstück (Nonushta)", desc: "Issiq nonushta va mevali vitaminlar." },
          ],
        },
        {
          step: "02",
          germanTime: "Vormittag",
          timeRange: "09:25 – 12:20",
          phase: "Bosqich II · Nemis immersiyasi",
          accentColor: "border-[#DD0000]",
          events: [
            { time: "09:25", title: "Deutsch Immersiya", desc: "Kichik guruhlarda darajaga mos intensiv nemis tili." },
            { time: "10:05", title: "Ochiq havoda dam olish", desc: "Faol harakat va yengil tanaffus." },
            { time: "10:10", title: "Deutsch in Aktion", desc: "Munozara, taqdimot va rolli amaliy o'yinlar." },
          ],
        },
        {
          step: "03",
          germanTime: "Mittag",
          timeRange: "12:20 – 15:25",
          phase: "Bosqich III · Energiya & Klublar",
          accentColor: "border-[#FFCE00]",
          events: [
            { time: "12:20", title: "Mittagessen (Issiq Tushlik)", desc: "40 daqiqalik tabiiy, mutanosib issiq taom." },
            { time: "13:00", title: "Klublar & Future Skills", desc: "IT, Robotika, Taekwondo, Shaxmat, Nemis teatri." },
            { time: "15:10", title: "Tolma Choy", desc: "Vitaminli shirinlik va tetiklashtiruvchi choy." },
          ],
        },
        {
          step: "04",
          germanTime: "Nachmittag",
          timeRange: "15:25 – 16:50",
          phase: "Bosqich IV · Vazifalarsiz uy",
          accentColor: "border-black",
          events: [
            { time: "15:25", title: "Hausaufgabenbetreuung", desc: "Barcha uyga vazifalar o'qituvchilar bilan to'liq tugatiladi." },
            { time: "16:30", title: "Refleksiya & Yutuqlar", desc: "Kunlik baholash va portfolio qaydlari." },
            { time: "16:50", title: "Kun yakuni — Tschüss!", desc: "Ota-onalarga xotirjam va darsdan bo'sh holda topshirish." },
          ],
        },
      ],
    },
    roadmap: {
      sectionTag: "NEMIS TILI YO'L XARITASI // CEFR · GOETHE-INSTITUT",
      titlePre: "Noldan",
      titleHighlight: "B1 / C1",
      titlePost: "gacha. Uch yilda.",
      description:
        "Standart trayektoriyamiz uch yilni o'z ichiga oladi: 0 → A1 → A2 → B1. Bu Germaniya Studienkolleg va davlat universitetiga kirish uchun xalqaro darajadir.",
      levels: [
        { step: "0 DARAJA", code: "A0", title: "Boshlanish" },
        { step: "1-YIL", code: "A1", title: "Fit in Deutsch 1" },
        { step: "2-YIL", code: "A2", title: "Fit in Deutsch 2" },
        { step: "3-YIL (DSS)", code: "B1", title: "Goethe Zertifikat B1" },
        { step: "TAYYORGARLIK", code: "B2", title: "Studienkolleg" },
        { step: "OTM DARAJASI", code: "C1", title: "Universitet & TestDaF" },
      ],
      years: [
        {
          tag: "01 · BIRINCHI YIL",
          codeBadge: "0 → A1",
          title: "Fundament va Tovushlar",
          skillsTitle: "Asosiy ko'nikma",
          skills: ["Alifbo, to'g'ri fonetika va intonatsiya", "Sonlar, vaqt, oila va atrof-muhit", "500+ kundalik leksika bazasi"],
          grammarTitle: "Grammatik tayanch",
          grammar: "Präsens hozirgi zamon, der / die / das artikllari, Nominativ va Akkusativ kelishiklari.",
          outcomeTitle: "Natija",
          outcome: "O'zini mustaqil tanishtirish, do'kon va oddiy jamoat joylarida erkin savol-javob.",
          exam: "Fit in Deutsch 1",
          institution: "Goethe-Institut",
        },
        {
          tag: "02 · IKKINCHI YIL",
          codeBadge: "A1 → A2",
          title: "Mustahkamlash & Nutq",
          skillsTitle: "Kengaytirilgan ko'nikma",
          skills: ["Maktab hayoti, qiziqishlar, sayohat", "O'tmish va kelajak rejalarni bayon etish", "1 200+ faol so'z boyligi"],
          grammarTitle: "Grammatik tayanch",
          grammar: "Perfekt va Präteritum o'tgan zamonlari, Dativ kelishigi, Komparativ taqqoslash.",
          outcomeTitle: "Natija",
          outcome: "Qisqa insholar yozish, telefon orqali bemalol muloqot qilish, voqealarni hikoya qilish.",
          exam: "Fit in Deutsch 2",
          institution: "Goethe-Institut",
        },
        {
          tag: "03 · UCHINCHI YIL (MAQSAD)",
          codeBadge: "A2 → B1",
          title: "Mustaqil Foydalanuvchi",
          skillsTitle: "Murakkab ko'nikma",
          skills: ["Yangiliklar, ilmiy va badiiy matnlar", "Mantiqiy fikr bayoni va bahs-munozara", "2 500+ akademik va sohaviy leksika"],
          grammarTitle: "Grammatik tayanch",
          grammar: "Konjunktiv II (shart mayli), Passiv, ergash gap bog'lovchilari (weil, obwohl, dass).",
          outcomeTitle: "Natija",
          outcome: "Germaniyaga bemalol sayohat qilish, rasmiy ariza va xatlar yozish, Studienkolleg ga to'liq kirish.",
          exam: "Zertifikat B1",
          institution: "TestDaF asosi",
          isTarget: true,
        },
      ],
      fastTrackTag: "1–2 YILLIK TEZKOR GURUH",
      fastTrackTitle: "Iqtidorli bolalar uchun tezlashtirilgan trayektoriya",
      fastTrackDesc:
        "Til o'rganish tezligi har kimda har xil. Kuchli o'quvchilar B1 darajaga 1-2 yil ichida ham yetishadi. Bilim darajasi o'sgan zahoti yuqori sinf guruhiga o'tkaziladi.",
      fastTrackStat: "~50%",
      fastTrackStatLabel: "O'quvchilar tezkor guruh dasturida o'qimoqda",
    },
    tracks: {
      sectionTag: "9–11 SINF · IXTISOSLASHUV // OTM GA MAQSADLI TAYYORGARLIK",
      titlePre: "Uchta",
      titleHighlight: "yo'nalish.",
      titlePost: "Birini tanlang.",
      description:
        "DSSning 9–11-sinf o'quvchilari Yevropa universitetlariga aniq sohaviy profil bilan tayyorgarlik ko'radi. Tanlangan yo'nalishdagi barcha fanlar chuqurlashtirilgan darajada o'qitiladi.",
      list: [
        {
          tag: "01 · PROFIL",
          germanName: "Medizin",
          name: "Tibbiyot",
          desc: "Germaniya tibbiyot fakultetlari — Yevropadagi eng talabchan va nufuzli soha. Profil biologiya va chuqur kimyo bazasiga asoslanadi.",
          subjects: [
            "Biologiya · profil chuqur darajada",
            "Kimyo · organik va biokimyo",
            "Anatomiya asoslari",
            "Tibbiy nemis tili · Fachsprache",
          ],
          careers: "Shifokor · Stomatolog · Farmatsevt · Neyrobiolog",
          partnerUnis: "Charité Berlin · Heidelberg",
          accent: "border-[#DD0000]",
        },
        {
          tag: "02 · PROFIL",
          germanName: "Technik",
          name: "Muhandislik",
          desc: "Germaniya — jahon sanoati va avtomobilsozlik poytaxti. TUM, RWTH Aachen va KIT bitiruvchilarimiz uchun ochiq eshikdir.",
          subjects: [
            "Matematika · kengaytirilgan OTM kursi",
            "Fizika · laboratoriya va tadqiqot",
            "Texnik chizmachilik & 3D CAD",
            "Texnik nemis tili (Fachdeutsch)",
          ],
          careers: "Mexatronik · IT muhandisi · Avia-kosmik · Robototexnik",
          partnerUnis: "TUM · RWTH Aachen · KIT Karlsruhe",
          accent: "border-black",
        },
        {
          tag: "03 · PROFIL",
          germanName: "Wirtschaft",
          name: "Tadbirkorlik & IT",
          desc: "XXI asr biznesi — AI, mahsulot va global iqtisodiyot kesishmasida. WHU, Mannheim va LMU nufuzli biznes maktablariga to'g'ri yo'l.",
          subjects: [
            "Tadbirkorlik & Biznes asoslari",
            "Sun'iy intellekt savodxonligi & AI tools",
            "IT · Mahsulot boshqaruvi (Product)",
            "Raqamli brending va kontent strategiyasi",
          ],
          careers: "Startap asoschisi · Mahsulot rahbari · AI Strategist",
          partnerUnis: "WHU · Univ. Mannheim · LMU",
          accent: "border-[#FFCE00]",
        },
      ],
    },
    futureSkills: {
      sectionTag: "DIGITAL FARM // FUTURE SKILLS",
      titlePre: "Biz faqat til maktabi emasmiz.",
      titleHighlight: "future-skills",
      titlePost: "markazimiz.",
      description:
        "Nemis tili — Yevropaga ochiladigan eshik. Eshikdan kirib qanday loyihalar yaratishi, qanday ishlashi muhimroq. DSSda o'quvchi til bilan birga sun'iy intellekt, yangi avlod kodi va raqamli biznesni o'rganadi.",
      cardTag: "DSS · SMART INTEGRATSIYA",
      cardFormula: "Til + Fan + AI / Code / Business",
      cardSub: "Xalqaro standartdagi 3 amaliy kompetensiya",
      pillars: [
        {
          number: "01",
          title: "AI Savodxonligi",
          desc: "Bola ChatGPT, Claude va Gemini vositalaridan ta'lim, tahlil va tadqiqotda professional darajada foydalanadi. Axborotni tekshirish va tanqidiy fikrlash rivojlanadi.",
          bulletPoints: [
            "Professional Prompt Engineering",
            "Manba xolisligini tekshirish va fact-checking",
            "AI bilan akademik loyihalar tuzish",
            "Kiberxavfsizlik va axloqiy me'yorlar",
          ],
          toolsLabel: "Vositalar:",
          tools: "ChatGPT · Claude · Gemini · Midjourney",
        },
        {
          number: "02",
          title: "Vibe Coding",
          desc: "Yangi avlod dasturlash falsafasi: o'quvchi g'oyani tabiiy tilda ifodalaydi, zamonaviy AI agentlari esa uni to'laqonli ishlaydigan kodga aylantiradi.",
          bulletPoints: [
            "Cursor, Replit va Lovable da real loyihalar",
            "Haqiqiy web-sayt va dastur prototiplari",
            "API integratsiyasi va ma'lumotlar tahlili",
            "Mantiqiy debugging va arxitektura tushunchasi",
          ],
          toolsLabel: "Vositalar:",
          tools: "Cursor · Replit · Lovable · GitHub",
        },
        {
          number: "03",
          title: "Digital Tadbirkorlik",
          desc: "G'oyadan birinchi daromadgacha. Maktab davridayoq bozor talabini tahlil qilish, brend yaratish, kontent strategiyasi va MVP mahsulotni taqdim etish ko'nikmalari.",
          bulletPoints: [
            "Biznes-model va MVP sinovlari",
            "Vizual brending va professional pitch taqdimot",
            "Raqamli marketing va mijoz jalb qilish",
            "Nemis va ingliz tillarida loyiha himoyasi",
          ],
          toolsLabel: "Vositalar:",
          tools: "Figma · Notion · Canva · Stripe Docs",
        },
      ],
    },
    faculty: {
      sectionTag: "USTOZLAR // PEDAGOGIK TARKIB",
      title: "Xalqaro sifat va kuchli pedagogik jamoa",
      description:
        "Deutsch Smart School o‘qituvchilari Yevropa ta’lim standartlari, Goethe-Institut xalqaro metodikasi hamda zamonaviy pedagogik yondashuvlar asosida o‘quvchilarga ta’lim beradi.",
      standards: [
        {
          tag: "01 · METODIKA",
          title: "Goethe-Institut Standartlari",
          desc: "Barcha til darslari Goethe-Institut xalqaro dasturi bo‘yicha, A1 dan C1 gacha bo‘lgan bosqichlarda tizimli olib boriladi.",
        },
        {
          tag: "02 · TARKIB",
          title: "Kuchli Mutaxassislar",
          desc: "Goethe C1/C2 darajali tilshunoslar, malakali fan ustozlari va Germaniya OTMlari talablari bo‘yicha tajribali metodistlar.",
        },
        {
          tag: "03 · MUHIT",
          title: "Immersiv Nemis Muhiti",
          desc: "Darslar faqat nazariya emas, kundalik muloqot, interaktiv loyihalar va amaliy ko‘nikmalar orqali tabiiy ravishda o‘zlashtiriladi.",
        },
      ],
      ctaButton: "Maktabga tashrif buyurish",
    },
    campuses: {
      futureTag: "2028-YIL REJASI // KELAJAK KAMPUSI",
      futureTitle: "\"Yangi O'zbekiston\"da ekologik nemis kampusi.",
      futureDesc:
        "Toshkentning eng nufuzli yangi hududida 2 gektarlik Yevropa standartidagi zamonaviy ekologik kampus qurilmoqda. Ochiq amfiteatr, ilmiy biotexnologik laboratoriyalar va sport majmuasi.",
      futureFeatures: ["Yashil tomlar", "Sport majmuasi", "Ekologik bog'", "Laboratoriyalar"],
      futureBadge: "2028 Bahor · Yangi O'zbekiston",
      yashnobodTag: "01 · ASOSIY BINO",
      yashnobodTitle: "Yashnobod Filiali",
      yashnobodAddress: "Elbek ko'chasi 22/1, Toshkent shahri",
      yashnobodCoords: "41.294615, 69.326284",
      yashnobodNote: "1–11 sinf to'liq bino",
      sergeliTag: "02 · SERGELI FILIALI",
      sergeliTitle: "Sergeli Filiali",
      sergeliAddress: "Sokin Makon TJM, Toshkent shahri",
      sergeliCoords: "41.188813, 69.191109",
      sergeliNote: "Boshlang'ich & Tayyorlov",
      openInMap: "Google Xaritada ochish",
      getDirections: "Yo'nalish olish",
    },
    form: {
      leftBadge: "BEPUL · OTA-ONALAR UCHUN TASHRIF",
      leftTitle: "Farzandingiz uchun kelajak quring.",
      leftDesc:
        "Maktabga bepul tashrif buyuring: zamonaviy sinfxonalarimizni ko'ring, metodistlar bilan shaxsan suhbatlashing va nemis muhitini o'z ko'zingiz bilan his qiling.",
      benefit1Title: "45 daqiqalik shaxsiy ekskursiya",
      benefit1Desc: "Farzandingiz yoshiga mos sinf va dars jarayoni ko'rsatiladi.",
      benefit2Title: "Maktab rahbari bilan yakkama-yakka uchrashuv",
      benefit2Desc: "Germaniya universitetlariga chiqish yo'li bo'yicha to'liq konsultatsiya.",
      benefit3Title: "Hech qanday to'lov majburiyatisiz",
      benefit3Desc: "Tashrif 100% bepul va shaffof o'tadi.",
      phoneConfirmLabel: "Telefon orqali tasdiqlash:",
      formTitle: "Tashrif vaqtini bron qiling",
      formSubtitle: "Formani to'ldiring. Ma'murlarimiz 24 soat ichida bog'lanib, sizga qulay vaqtni tasdiqlaydi.",
      parentNameLabel: "Ota-ona ismi *",
      parentNamePlaceholder: "Masalan: Azizbek Aliyev",
      phoneLabel: "Telefon raqami *",
      phonePlaceholder: "+998 90 123 45 67",
      ageLabel: "Farzandingiz yoshi *",
      ageOptions: ["5–6 yosh", "7–9 yosh", "10–12 yosh", "13–15 yosh", "16+ yosh"],
      objectiveLabel: "Asosiy maqsad",
      objectiveOptions: [
        "Germaniya davlat universiteti (bepul ta'lim) → Xalqaro karyera",
        "Nemis tilini 0 dan C1 gacha mukammal egallash",
        "Digital Farm (AI savodxonligi & Vibe Coding)",
        "Aniq fanlar & Muhandislik ixtisoslashuvi",
        "Hali aniq emas, maslahat kerak",
      ],
      branchLabel: "Qaysi filialga tashrif buyurmoqchisiz?",
      branchYashnobod: "Yashnobod (Elbek 22/1)",
      branchSergeli: "Sergeli (Sokin Makon)",
      preferredDateLabel: "Qulay kun / vaqt",
      submitBtn: "Tashrif vaqtini bron qilish",
      privacyNote: "Ma'lumotlaringiz shifrlangan holda himoyalanadi · Hech qanday spam yo'q",
      successTitle: "Arizangiz qabul qilindi!",
      successDesc:
        "Tashakkur! Deutsch Smart School maslahatchisi tez orada siz bilan bog'lanib, qulay tashrif vaqtini belgilaydi.",
      resetBtn: "Yana bitta ariza yuborish",
    },
    faq: {
      sectionTag: "SAVOL-JAVOB // FAQ",
      titlePre: "Ko'p beriladigan",
      titleHighlight: "savollar.",
      subtitle: "Agar savolingizga bu yerda javob topa olmasangiz, qo'ng'iroq qiling — har bir oila bilan shaxsan suhbatlashamiz.",
      questions: [
        {
          q: "Bola nemis tilini umuman bilmasa ham qabul qilasizmi?",
          a: "Ha, biz 0 darajadan (A0) boshlaymiz. Farzandingiz hatto nemis alifbosini bilmasligi mumkin. Bizning immersiv metodikamiz tufayli o'quvchi birinchi yilning o'zidayoq A1 darajasiga chiqadi va Goethe-Institut sertifikatini topshiradi.",
        },
        {
          q: "Maktab kuni nima vaqt boshlanadi va qachon tugaydi?",
          a: "Maktab kuni soat 08:00 da boshlanadi va 16:50 da yakunlanadi. Ushbu davr ichida bola darslarda qatnashadi, issiq taomlanadi, robotika/sport to'garaklarida bo'ladi va eng muhimi — ustozlar ko'magida barcha uyga vazifalarni bajaradi. Bola uyga dars qoldirmasdan, erkin qaytadi.",
        },
        {
          q: "Germaniyada o'qish to'lovi haqiqatan ham bepulmi (€0)?",
          a: "Ha, to'liq haqiqat. Germaniyaning barcha davlat universitetlarida mahalliy va xalqaro talabalar uchun yillik kontrakt to'lovi €0 etib belgilangan. Talabalar faqat semestriga ~€150–€310 ma'muriy badal to'laydilar (bunga butun shahar jamoat transporti chiptasi va kutubxona xizmatlari kiradi).",
        },
        {
          q: "Nima uchun o'quv dasturiga AI va Vibe Coding kiritilgan?",
          a: "Nemis tili — imkoniyatlar eshigi, lekin o'quvchining Yevropada nufuzli karyera qurishi uchun unga eng zamonaviy future-skills talab etiladi. Bizning Digital Farm dasturimiz bolalarga sun'iy intellektdan professional qurol sifatida foydalanishni, tezkor prototiplar yaratishni va tadbirkorona tafakkurni o'rgatadi.",
        },
        {
          q: "Maktab to'lovi qancha va nimani o'z ichiga oladi?",
          a: "O'qish narxi va qulay to'lov rejalari (oylik yoki yillik) bepul konsultatsiya davomida ota-onaga taqdim etiladi. O'qish to'lovi o'z ichiga to'liq kunlik dasturni, kuniga 3 mahal muvozanatli issiq taomni, barcha to'garaklar va xalqaro til sertifikatlash tayyorgarligini qamrab oladi.",
        },
      ],
    },
    footer: {
      tagline: "Germaniyada yashash, o'qish va karyera qurish uchun yangi avlod muhandis, shifokor va texnologlarini tayyorlaymiz.",
      seal: "DAS DEUTSCHE QUALITÄTSSIEGEL",
      partnerGoethe: "Goethe-Institut Hamkori",
      partnerLevel: "A1 → C1 Trayektoriyasi",
      colSchoolTitle: "Maktab",
      colTracksTitle: "Ta'lim Yo'nalishlari",
      colContactTitle: "Filiallar & Aloqa",
      copyright: "© 2026 Deutsch Smart School · Barcha huquqlar himoyalangan.",
      privacy: "Maxfiylik siyosati",
      terms: "Ommaviy oferta",
      accreditation: "Akkreditatsiya",
    },
    telegram: {
      tooltip: "Telegram orqali savol bering",
      title: "Deutsch Smart Maslahatchisi",
      subtitle: "Onlayn · 10 daqiqada javob beramiz",
      placeholder: "Savolingizni yozing...",
      send: "Yuborish",
      online: "Onlayn",
    },
  },
  ru: {
    nav: {
      about: "О школе",
      programs: "Обучение и программы",
      schedule: "Распорядок дня",
      faculty: "Преподаватели",
      campuses: "Филиалы",
      faq: "Вопросы и ответы",
      bookVisit: "Визит в школу →",
      callNow: "+998 55 055 0444",
    },
    hero: {
      badge: "ЧАСТНАЯ ШКОЛА · 1–11 КЛАССЫ · ТАШКЕНТ",
      accreditation: "Аккредитованная методика Goethe-Institut",
      titlePart1: "Немецкая школа, готовящая вашего ребенка к",
      titleHighlight: "Европе.",
      titlePart2: "",
      description:
        "Deutsch Smart School — частная немецкая школа с 1 по 11 классы в Ташкенте. Мы обучаем немецкому языку не как обычному кружку, а как фундаментальной академической программе с гарантированным выходом на бесплатное высшее образование в Германии.",
      primaryCta: "Визит в школу",
      secondaryCta: "Учебные программы",
      statBranchesLabel: "Филиалы",
      statBranchesVal: "Яшнабад & Сергели",
      statLevelLabel: "Уровень языка",
      statLevelVal: "A1 → C1 Сертификат",
      statTuitionLabel: "Вузы Германии",
      statTuitionVal: "€0 Бесплатно",
      statDayLabel: "Школьный день",
      statDayVal: "08:00 – 16:50",
      floatingBadgeTopTitle: "ГАРАНТИРОВАННЫЙ ПУТЬ",
      floatingBadgeTopSubtitle: "98% успеха в Studienkolleg",
      floatingBadgeBottomTitle: "Школа без домашних заданий",
      floatingBadgeBottomSubtitle: "Все занятия и уроки завершаются до 16:50",
      floatingBadgeBottomBadge: "100% Контроль",
    },
    metrics: {
      m1Label: "МИРОВОЙ УРОВЕНЬ",
      m1Value: "6 ВУЗОВ",
      m1Sub: "TOP-100",
      m1Desc: "Ведущие университеты Германии: TUM, LMU Мюнхен, Гейдельберг, RWTH Ахен.",
      m2Label: "СТОИМОСТЬ КОНТРАКТА В ГОД",
      m2Value: "€0",
      m2Desc: "В государственных университетах Германии обучение абсолютно бесплатное.",
      m3Label: "СТАНДАРТНАЯ ТРАЕКТОРИЯ",
      m3Value: "A1 → C1",
      m3Desc: "Международные сертификаты Goethe-Institut за 3 года. Ускоренно — за 1–2 года.",
      m4Label: "РАСПИСАНИЕ ДНЯ",
      m4Value: "8ч 50м",
      m4Desc: "Академические науки + языковое погружение + AI/IT лаборатория + спорт + горячее питание.",
    },
    pillars: {
      sectionTag: "НАШ ПОДХОД // ФИЛОСОФИЯ",
      titlePre: "Идеальный баланс",
      titleHighlight1: "немецкой дисциплины",
      titleMid: "и",
      titleHighlight2: "семейного тепла",
      titlePost: "в образовании.",
      subtitle:
        "Наша философия объединяет строгость и точность немецких академических стандартов с заботой и уважением к индивидуальности каждого ребенка.",
      items: [
        {
          number: "01",
          title: "Точность",
          germanTerm: "Ordnung & Präzision",
          description:
            "Прозрачность в языке, математике и методике. Оценки ставятся со всей строгостью — без отставания и без искусственного завышения.",
        },
        {
          number: "02",
          title: "Будущее",
          germanTerm: "Zukunftsorientiert",
          description:
            "Каждый урок ориентирован на долгосрочную международную карьеру от Ташкента до Мюнхена и Берлина.",
        },
        {
          number: "03",
          title: "Забота",
          germanTerm: "Gemeinschaft & Respekt",
          description:
            "Школа как второй дом. Обучение без психологического давления, в атмосфере дружбы, наставничества и взаимного уважения.",
        },
        {
          number: "04",
          title: "Мост культур",
          germanTerm: "Kulturelle Brücke",
          description:
            "Связующее звено между двумя великими культурами. Сохраняя национальные ценности, мы внедряем европейские технологические достижения.",
        },
      ],
    },
    schedule: {
      sectionTag: "РАСПОРЯДОК // ОДИН ДЕНЬ УЧЕНИКА",
      title: "Один",
      smartWord: "SMART",
      description:
        "День ученика спланирован с 08:00 до 16:50. Ребенок возвращается домой свободным — все домашние задания выполняются в школе под контролем педагогов.",
      badge: "Hausaufgabenbetreuung (Обучение без домашки)",
      blocks: [
        {
          step: "01",
          germanTime: "Morgen",
          timeRange: "08:00 – 09:25",
          phase: "Этап I · Пробуждение и ритм",
          accentColor: "border-black",
          events: [
            { time: "08:00", title: "Morgenkreis (Утренний круг)", desc: "Постановка целей на день, настройка фокуса и ритма." },
            { time: "08:30", title: "Блок точных наук", desc: "Уроки математики, логики и критического мышления." },
            { time: "09:10", title: "Frühstück (Завтрак)", desc: "Свежий горячий завтрак и фрукты." },
          ],
        },
        {
          step: "02",
          germanTime: "Vormittag",
          timeRange: "09:25 – 12:20",
          phase: "Этап II · Немецкое погружение",
          accentColor: "border-[#DD0000]",
          events: [
            { time: "09:25", title: "Deutsch Immersiya", desc: "Интенсивный немецкий в мини-группах по уровням." },
            { time: "10:05", title: "Перерыв на свежем воздухе", desc: "Активный отдых во дворе и полезный перекус." },
            { time: "10:10", title: "Deutsch in Aktion", desc: "Дебаты, презентации и ролевые языковые игры." },
          ],
        },
        {
          step: "03",
          germanTime: "Mittag",
          timeRange: "12:20 – 15:25",
          phase: "Этап III · Энергия и клубы",
          accentColor: "border-[#FFCE00]",
          events: [
            { time: "12:20", title: "Mittagessen (Горячий обед)", desc: "40 минут сбалансированного горячего питания." },
            { time: "13:00", title: "Клубы & Future Skills", desc: "IT, робототехника, тхэквондо, шахматы, немецкий театр." },
            { time: "15:10", title: "Полдник", desc: "Витаминный чай и выпечка." },
          ],
        },
        {
          step: "04",
          germanTime: "Nachmittag",
          timeRange: "15:25 – 16:50",
          phase: "Этап IV · Домой без уроков",
          accentColor: "border-black",
          events: [
            { time: "15:25", title: "Hausaufgabenbetreuung", desc: "Все домашние задания завершаются с преподавателями." },
            { time: "16:30", title: "Рефлексия дня", desc: "Фиксация академических достижений и портфолио." },
            { time: "16:50", title: "Завершение дня — Tschüss!", desc: "Передача родителям без стресса и нерешенных задач." },
          ],
        },
      ],
    },
    roadmap: {
      sectionTag: "ДОРОЖНАЯ КАРТА // CEFR · GOETHE-INSTITUT",
      titlePre: "С нуля до",
      titleHighlight: "B1 / C1",
      titlePost: "за 3 года.",
      description:
        "Наша стандартная траектория рассчитана на 3 года: 0 → A1 → A2 → B1. Это международный уровень для прямого поступления в Studienkolleg и государственные вузы Германии.",
      levels: [
        { step: "0 УРОВЕНЬ", code: "A0", title: "Старт" },
        { step: "1-Й ГОД", code: "A1", title: "Fit in Deutsch 1" },
        { step: "2-Й ГОД", code: "A2", title: "Fit in Deutsch 2" },
        { step: "3-Й ГОД", code: "B1", title: "Goethe Zertifikat B1" },
        { step: "ПОДГОТОВКА", code: "B2", title: "Studienkolleg" },
        { step: "ВУЗЫ ГЕРМАНИИ", code: "C1", title: "Университет & TestDaF" },
      ],
      years: [
        {
          tag: "01 · ПЕРВЫЙ ГОД",
          codeBadge: "0 → A1",
          title: "Фундамент и фонетика",
          skillsTitle: "Ключевые навыки",
          skills: ["Алфавит, немецкая фонетика и артикуляция", "Числа, время, семья и базовое окружение", "500+ слов активного словарного запаса"],
          grammarTitle: "Грамматика",
          grammar: "Настоящее время Präsens, артикли der / die / das, падежи Nominativ и Akkusativ.",
          outcomeTitle: "Результат",
          outcome: "Уверенный рассказ о себе, свободные диалоги в повседневных ситуациях.",
          exam: "Fit in Deutsch 1",
          institution: "Goethe-Institut",
        },
        {
          tag: "02 · ВТОРОЙ ГОД",
          codeBadge: "A1 → A2",
          title: "Закрепление и речь",
          skillsTitle: "Расширенные навыки",
          skills: ["Школьная жизнь, хобби, путешествия", "Описание событий прошлого и планов на будущее", "1 200+ слов словарного запаса"],
          grammarTitle: "Грамматика",
          grammar: "Прошедшие времена Perfekt и Präteritum, падеж Dativ, сравнительная степень.",
          outcomeTitle: "Результат",
          outcome: "Написание сочинений, телефонные разговоры, свободное выражение мнения.",
          exam: "Fit in Deutsch 2",
          institution: "Goethe-Institut",
        },
        {
          tag: "03 · ТРЕТИЙ ГОД (ЦЕЛЬ)",
          codeBadge: "A2 → B1",
          title: "Самостоятельный пользователь",
          skillsTitle: "Продвинутые навыки",
          skills: ["Новости, научно-популярные статьи", "Аргументация позиции и участие в дискуссиях", "2 500+ академических терминов"],
          grammarTitle: "Грамматика",
          grammar: "Сослагательное наклонение Konjunktiv II, пассивный залог, сложные союзы.",
          outcomeTitle: "Результат",
          outcome: "Беспрепятственные поездки в Германию, официальная переписка, допуск в Studienkolleg.",
          exam: "Zertifikat B1",
          institution: "Основа TestDaF",
          isTarget: true,
        },
      ],
      fastTrackTag: "ИНТЕНСИВ ЗА 1–2 ГОДА",
      fastTrackTitle: "Ускоренная программа для способных учеников",
      fastTrackDesc:
        "Скорость изучения языка индивидуальна. Мотивированные ученики достигают уровня B1 за 1–2 года и переводятся в группы продвинутого уровня.",
      fastTrackStat: "~50%",
      fastTrackStatLabel: "Учеников обучаются по ускоренной траектории",
    },
    tracks: {
      sectionTag: "9–11 КЛАССЫ // СПЕЦИАЛИЗАЦИЯ ДЛЯ ВУЗОВ",
      titlePre: "Три",
      titleHighlight: "направления.",
      titlePost: "Выберите свое будущее.",
      description:
        "Ученики 9–11 классов углубленно готовятся к профильным факультетам университетов Германии.",
      list: [
        {
          tag: "01 · ПРОФИЛЬ",
          germanName: "Medizin",
          name: "Медицина",
          desc: "Медицинские факультеты Германии — одни из самых престижных в мире. Углубленная биология и биохимия.",
          subjects: [
            "Углубленная биология профильного уровня",
            "Органическая и неорганическая химия",
            "Основы анатомии и физиологии",
            "Медицинский немецкий язык (Fachsprache)",
          ],
          careers: "Врач · Стоматолог · Фармацевт · Нейробиолог",
          partnerUnis: "Charité Berlin · Heidelberg",
          accent: "border-[#DD0000]",
        },
        {
          tag: "02 · ПРОФИЛЬ",
          germanName: "Technik",
          name: "Инженерия",
          desc: "Германия — мировая столица инженерии и автопрома. Прямой путь в TUM, RWTH Aachen и KIT.",
          subjects: [
            "Высшая математика и алгоритмы",
            "Лабораторная и прикладная физика",
            "Техническое черчение и 3D CAD",
            "Технический немецкий (Fachdeutsch)",
          ],
          careers: "Мехатроник · IT-инженер · Авиакосмический инженер",
          partnerUnis: "TUM · RWTH Aachen · KIT",
          accent: "border-black",
        },
        {
          tag: "03 · ПРОФИЛЬ",
          germanName: "Wirtschaft",
          name: "Бизнес & IT",
          desc: "Бизнес XXI века — на стыке искусственного интеллекта и глобальной экономики. Поступление в WHU и LMU.",
          subjects: [
            "Основы предпринимательства и экономики",
            "ИИ-грамотность и инструменты автоматизации",
            "IT · Управление цифровыми продуктами",
            "Цифровой маркетинг и стратегия бренда",
          ],
          careers: "Основатель стартапа · Product Manager · AI-стратег",
          partnerUnis: "WHU · Univ. Mannheim · LMU",
          accent: "border-[#FFCE00]",
        },
      ],
    },
    futureSkills: {
      sectionTag: "DIGITAL FARM // FUTURE SKILLS",
      titlePre: "Мы больше чем языковая школа.",
      titleHighlight: "future-skills",
      titlePost: "инновационный центр.",
      description:
        "Немецкий язык открывает двери в Европу. Но еще важнее то, какие продукты ребенок сможет создавать. Мы обучаем языку в связке с ИИ, программированием и предпринимательством.",
      cardTag: "DSS · СМАРТ ИНТЕГРАЦИЯ",
      cardFormula: "Язык + Науки + ИИ / Код / Бизнес",
      cardSub: "3 практические компетенции мирового стандарта",
      pillars: [
        {
          number: "01",
          title: "ИИ-Грамотность",
          desc: "Профессиональное владение ChatGPT, Claude и Gemini в учебе, аналитике и исследованиях. Развитие критического мышления.",
          bulletPoints: [
            "Профессиональный промпт-инжиниринг",
            "Проверка достоверности данных (фактчекинг)",
            "Создание академических проектов с помощью ИИ",
            "Кибербезопасность и этические стандарты",
          ],
          toolsLabel: "Инструменты:",
          tools: "ChatGPT · Claude · Gemini · Midjourney",
        },
        {
          number: "02",
          title: "Vibe Coding",
          desc: "Философия программирования нового поколения: ученик формулирует идею на человеческом языке, а ИИ генерирует рабочий код.",
          bulletPoints: [
            "Практические проекты в Cursor, Replit и Lovable",
            "Создание рабочих веб-сервисов и прототипов",
            "Интеграция API и анализ баз данных",
            "Архитектурное мышление и отладка",
          ],
          toolsLabel: "Инструменты:",
          tools: "Cursor · Replit · Lovable · GitHub",
        },
        {
          number: "03",
          title: "Digital Предпринимательство",
          desc: "От идеи до первого дохода. Анализ рынка еще в школе, создание бренда, маркетинг и защита MVP продукта.",
          bulletPoints: [
            "Тестирование бизнес-моделей и MVP",
            "Визуальный брендинг и презентации (Pitch)",
            "Цифровой маркетинг и привлечение клиентов",
            "Защита проектов на немецком и английском языках",
          ],
          toolsLabel: "Инструменты:",
          tools: "Figma · Notion · Canva · Stripe Docs",
        },
      ],
    },
    faculty: {
      sectionTag: "ПРЕПОДАВАТЕЛИ // АКАДЕМИЧЕСКИЙ СОСТАВ",
      title: "Международные стандарты и сильный педагогический состав",
      description:
        "Преподаватели Deutsch Smart School обучают по европейским стандартам, международной методике Goethe-Institut и современным педагогическим подходам.",
      standards: [
        {
          tag: "01 · МЕТОДИКА",
          title: "Стандарты Goethe-Institut",
          desc: "Все уроки немецкого языка проводятся по международной программе Goethe-Institut от уровня A1 до C1.",
        },
        {
          tag: "02 · СОСТАВ",
          title: "Квалифицированные педагоги",
          desc: "Лингвисты с сертификатами Goethe C1/C2, опытные преподаватели профильных предметов и академические кураторы.",
        },
        {
          tag: "03 · СРЕДА",
          title: "Иммерсивная языковая среда",
          desc: "Язык осваивается через интерактивную практику, живое общение и проектное обучение без зубрёжки.",
        },
      ],
      ctaButton: "Записаться на визит",
    },
    campuses: {
      futureTag: "ПЛАН 2028 // КАМПУС БУДУЩЕГО",
      futureTitle: "Экологичный немецкий кампус в «Янги Узбекистон».",
      futureDesc:
        "На территории 2 гектаров в самом престижном районе строится инновационный кампус европейского уровня с амфитеатром, био-лабораториями и спорткомплексом.",
      futureFeatures: ["Зеленые крыши", "Спортивный комплекс", "Эко-парк", "Лаборатории"],
      futureBadge: "Весна 2028 · Янги Узбекистон",
      yashnobodTag: "01 · ГЛАВНЫЙ КОРПУС",
      yashnobodTitle: "Филиал Яшнабад",
      yashnobodAddress: "ул. Эльбек 22/1, г. Ташкент",
      yashnobodCoords: "41.294615, 69.326284",
      yashnobodNote: "1–11 классы полный цикл",
      sergeliTag: "02 · ФИЛИАЛ СЕРГЕЛИ",
      sergeliTitle: "Филиал Сергели",
      sergeliAddress: "ЖК Sokin Makon, г. Ташкент",
      sergeliCoords: "41.188813, 69.191109",
      sergeliNote: "Начальные и подготовительные классы",
      openInMap: "Открыть в Google Maps",
      getDirections: "Маршрут",
    },
    form: {
      leftBadge: "БЕСПЛАТНЫЙ ВИЗИТ ДЛЯ РОДИТЕЛЕЙ",
      leftTitle: "Постройте будущее вашего ребенка.",
      leftDesc:
        "Приходите на бесплатную индивидуальную экскурсию: осмотрите учебные классы, побеседуйте с методистами и прочувствуйте атмосферу немецкой школы.",
      benefit1Title: "45 минут персональной экскурсии",
      benefit1Desc: "Увидите учебный процесс в классе, соответствующем возрасту вашего ребенка.",
      benefit2Title: "Личная встреча с руководством школы",
      benefit2Desc: "Полная консультация по поступлению в бесплатные вузы Германии.",
      benefit3Title: "Без каких-либо финансовых обязательств",
      benefit3Desc: "Визит полностью бесплатный и открытый.",
      phoneConfirmLabel: "Подтверждение по телефону:",
      formTitle: "Забронируйте удобное время визита",
      formSubtitle: "Заполните форму, и мы свяжемся с вами в течение 24 часов для подтверждения даты.",
      parentNameLabel: "Имя родителя *",
      parentNamePlaceholder: "Например: Азизбек Алиев",
      phoneLabel: "Номер телефона *",
      phonePlaceholder: "+998 90 123 45 67",
      ageLabel: "Возраст ребенка *",
      ageOptions: ["5–6 лет", "7–9 лет", "10–12 лет", "13–15 лет", "16+ лет"],
      objectiveLabel: "Главная цель обучения",
      objectiveOptions: [
        "Бесплатное образование в Германии → Международная карьера",
        "Владение немецким языком с нуля до C1",
        "Digital Farm (ИИ-грамотность и Vibe Coding)",
        "Точные науки и подготовка к инженерии",
        "Пока не определились, нужна консультация",
      ],
      branchLabel: "Какой филиал удобнее посетить?",
      branchYashnobod: "Яшнабад (ул. Эльбек 22/1)",
      branchSergeli: "Сергели (ЖК Sokin Makon)",
      preferredDateLabel: "Удобная дата / время",
      submitBtn: "Забронировать визит в школу",
      privacyNote: "Ваши контактные данные надежно защищены · Без спама",
      successTitle: "Заявка успешно принята!",
      successDesc:
        "Спасибо! Координатор Deutsch Smart School свяжется с вами в течение 24 часов для подтверждения времени.",
      resetBtn: "Отправить еще одну заявку",
    },
    faq: {
      sectionTag: "ВОПРОСЫ И ОТВЕТЫ // FAQ",
      titlePre: "Часто задаваемые",
      titleHighlight: "вопросы.",
      subtitle: "Если вы не нашли ответ, позвоните нам — мы подробно проконсультируем каждую семью.",
      questions: [
        {
          q: "Принимаете ли вы детей без знания немецкого языка?",
          a: "Да, обучение начинается с абсолютного нуля (A0). Наша методика погружения позволяет ученикам уже к концу первого года успешно сдать международный экзамен Goethe-Institut A1.",
        },
        {
          q: "Каков график учебного дня?",
          a: "Учебный день длится с 08:00 до 16:50. В это время входят основные академические предметы, немецкий язык, горячее питание, кружки и полное выполнение домашних заданий с учителями. Домой ребенок возвращается свободным.",
        },
        {
          q: "Действительно ли высшее образование в Германии бесплатное (€0)?",
          a: "Да, абсолютно верно. Во всех государственных университетах Германии контракт за обучение для иностранных студентов составляет 0 евро. Оплачивается лишь студенческий сбор 150–310 евро за семестр, включающий бесплатный проездной на транспорт.",
        },
        {
          q: "Зачем в школьную программу включены ИИ и Vibe Coding?",
          a: "Немецкий язык — это ключ, но для успешной мировой карьеры необходимы передовые навыки. Программа Digital Farm учит использовать искусственный интеллект как рабочий инструмент и быстро создавать прототипы продуктов.",
        },
        {
          q: "Какова стоимость обучения и что в нее входит?",
          a: "Стоимость и удобные графики оплаты подробно обсуждаются на бесплатной консультации. Оплата включает полный учебный день, 3-разовое горячее питание, кружки и подготовку к языковым сертификатам.",
        },
      ],
    },
    footer: {
      tagline: "Готовим новое поколение инженеров, врачей и лидеров технологий для жизни, учебы и карьеры в Германии.",
      seal: "DAS DEUTSCHE QUALITÄTSSIEGEL",
      partnerGoethe: "Партнер Goethe-Institut",
      partnerLevel: "Траектория A1 → C1",
      colSchoolTitle: "Школа",
      colTracksTitle: "Направления",
      colContactTitle: "Филиалы и контакты",
      copyright: "© 2026 Deutsch Smart School · Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Публичная оферта",
      accreditation: "Аккредитация",
    },
    telegram: {
      tooltip: "Задать вопрос в Telegram",
      title: "Консультант Deutsch Smart",
      subtitle: "Онлайн · Ответ в течение 10 минут",
      placeholder: "Напишите ваш вопрос...",
      send: "Отправить",
      online: "Онлайн",
    },
  },
  de: {
    nav: {
      about: "Über die Schule",
      programs: "Bildung & Programme",
      schedule: "Schultag",
      faculty: "Lehrkräfte",
      campuses: "Standorte",
      faq: "FAQ",
      bookVisit: "Schulbesuch buchen →",
      callNow: "+998 55 055 0444",
    },
    hero: {
      badge: "PRIVATSCHULE · KLASSEN 1–11 · TASCHKENT",
      accreditation: "Akkreditierte Methodik des Goethe-Instituts",
      titlePart1: "Die deutsche Schule, die Ihr Kind auf",
      titleHighlight: "Europa",
      titlePart2: "vorbereitet.",
      description:
        "Deutsch Smart School ist eine private deutsche Schule der Klassen 1 bis 11 in Taschkent. Wir unterrichten Deutsch als akademisches Hauptfach – mit garantierter Perspektive auf ein gebührenfreies Studium an staatlichen Universitäten in Deutschland.",
      primaryCta: "Schulbesuch",
      secondaryCta: "Programme entdecken",
      statBranchesLabel: "Standorte",
      statBranchesVal: "Yashnobod & Sergeli",
      statLevelLabel: "Sprachniveau",
      statLevelVal: "A1 → C1 Zertifikat",
      statTuitionLabel: "Universitäten DE",
      statTuitionVal: "€0 Studiengebühren",
      statDayLabel: "Schultag",
      statDayVal: "08:00 – 16:50 Uhr",
      floatingBadgeTopTitle: "GARANTIERTE BILDUNGSSCHIENE",
      floatingBadgeTopSubtitle: "98% Studienkolleg-Erfolgsquote",
      floatingBadgeBottomTitle: "Schule ohne Hausaufgaben",
      floatingBadgeBottomSubtitle: "Alle Aufgaben werden bis 16:50 Uhr abgeschlossen",
      floatingBadgeBottomBadge: "100% Betreuung",
    },
    metrics: {
      m1Label: "GLOBALES NIVEAU",
      m1Value: "6 TOP-100",
      m1Sub: "UNIS",
      m1Desc: "Spitzenuniversitäten in Deutschland: TUM, LMU München, Heidelberg, RWTH Aachen.",
      m2Label: "STUDIENGEBÜHREN PRO JAHR",
      m2Value: "€0",
      m2Desc: "An staatlichen Universitäten in Deutschland gebührenfrei. Lediglich Semesterbeitrag.",
      m3Label: "STANDARDSCHRITTE",
      m3Value: "A1 → C1",
      m3Desc: "Goethe-Institut Zertifikate in 3 Jahren. Im Schnellverfahren in 1–2 Jahren.",
      m4Label: "TAGESABLAUF",
      m4Value: "8h 50m",
      m4Desc: "Akademische Fächer + deutsche Immersion + KI-Labor + Sport + ausgewogene warme Mahlzeiten.",
    },
    pillars: {
      sectionTag: "UNSER ANSATZ // PÄDAGOGISCHES KONZEPT",
      titlePre: "Die perfekte Harmonie aus",
      titleHighlight1: "deutscher Disziplin",
      titleMid: "und",
      titleHighlight2: "familiärer Herzlichkeit.",
      titlePost: "",
      subtitle:
        "Unsere Philosophie verbindet die akademische Gründlichkeit deutscher Standards mit persönlicher Fürsorge und gegenseitigem Respekt.",
      items: [
        {
          number: "01",
          title: "Präzision",
          germanTerm: "Ordnung & Präzision",
          description:
            "Transparenz in Sprache, Mathematik und Methodik. Wir bewerten gewissenhaft und fair – ohne künstliche Noten.",
        },
        {
          number: "02",
          title: "Zukunft",
          germanTerm: "Zukunftsorientiert",
          description:
            "Jeder Unterricht ist auf eine langfristige internationale Karriere von Taschkent nach München oder Berlin ausgerichtet.",
        },
        {
          number: "03",
          title: "Gemeinschaft",
          germanTerm: "Gemeinschaft & Respekt",
          description:
            "Die Schule als zweites Zuhause. Ohne psychischen Druck, geprägt von Vertrauen und gegenseitiger Unterstützung.",
        },
        {
          number: "04",
          title: "Kulturbrücke",
          germanTerm: "Kulturelle Brücke",
          description:
            "Die lebendige Verbindung zweier großer Kulturen – modernste europäische Innovation bei Erhalt nationaler Werte.",
        },
      ],
    },
    schedule: {
      sectionTag: "DER SCHULTAG // EIN SMART-TAG",
      title: "Ein",
      smartWord: "SMART",
      description:
        "Der Tag ist von 08:00 bis 16:50 Uhr strukturiert. Schüler kehren ohne Hausaufgaben nach Hause zurück – alle Aufgaben werden vor Ort erledigt.",
      badge: "Hausaufgabenbetreuung inklusive",
      blocks: [
        {
          step: "01",
          germanTime: "Morgen",
          timeRange: "08:00 – 09:25",
          phase: "Phase I · Aufwachen & Rhythmus",
          accentColor: "border-black",
          events: [
            { time: "08:00", title: "Morgenkreis", desc: "Tagesplan, Rhythmus und positive Einstimmung." },
            { time: "08:30", title: "MINT-Fächerblock", desc: "Mathematik und logisches Denken." },
            { time: "09:10", title: "Frühstück", desc: "Warmes Frühstück und frisches Obst." },
          ],
        },
        {
          step: "02",
          germanTime: "Vormittag",
          timeRange: "09:25 – 12:20",
          phase: "Phase II · Deutsch-Immersion",
          accentColor: "border-[#DD0000]",
          events: [
            { time: "09:25", title: "Deutsch-Immersion", desc: "Intensivunterricht in Kleingruppen nach Niveau." },
            { time: "10:05", title: "Frischluftpause", desc: "Bewegung an der frischen Luft und gesunder Snack." },
            { time: "10:10", title: "Deutsch in Aktion", desc: "Debatten, Vorträge und interaktive Rollenspiele." },
          ],
        },
        {
          step: "03",
          germanTime: "Mittag",
          timeRange: "12:20 – 15:25",
          phase: "Phase III · Energie & AGs",
          accentColor: "border-[#FFCE00]",
          events: [
            { time: "12:20", title: "Mittagessen", desc: "40 Minuten nahrhafte, warme Mahlzeit." },
            { time: "13:00", title: "Clubs & Future Skills", desc: "IT, Robotik, Taekwondo, Schach, deutsches Theater." },
            { time: "15:10", title: "Nachmittagstee", desc: "Tee und gesunde Stärkung." },
          ],
        },
        {
          step: "04",
          germanTime: "Nachmittag",
          timeRange: "15:25 – 16:50",
          phase: "Phase IV · Freizeit zu Hause",
          accentColor: "border-black",
          events: [
            { time: "15:25", title: "Hausaufgabenbetreuung", desc: "Alle Aufgaben werden gemeinsam mit Lehrern beendet." },
            { time: "16:30", title: "Tagesreflexion", desc: "Fortschrittskontrolle und Portfolio-Einträge." },
            { time: "16:50", title: "Schulschluss — Tschüss!", desc: "Entspannte Übergabe an die Eltern." },
          ],
        },
      ],
    },
    roadmap: {
      sectionTag: "SPRACHPFAD // CEFR · GOETHE-INSTITUT",
      titlePre: "Von Null bis",
      titleHighlight: "B1 / C1",
      titlePost: "in 3 Jahren.",
      description:
        "Unser Pfad: 0 → A1 → A2 → B1. Dies ist der internationale Standard für die Aufnahme in deutsche Studienkollegs und Universitäten.",
      levels: [
        { step: "0 NIVEAU", code: "A0", title: "Anfang" },
        { step: "1. JAHR", code: "A1", title: "Fit in Deutsch 1" },
        { step: "2. JAHR", code: "A2", title: "Fit in Deutsch 2" },
        { step: "3. JAHR (DSS)", code: "B1", title: "Goethe Zertifikat B1" },
        { step: "VORBEREITUNG", code: "B2", title: "Studienkolleg" },
        { step: "UNIVERSITÄT", code: "C1", title: "TestDaF & Studium" },
      ],
      years: [
        {
          tag: "01 · ERSTES JAHR",
          codeBadge: "0 → A1",
          title: "Fundament & Phonetik",
          skillsTitle: "Kernkompetenzen",
          skills: ["Alphabet, Aussprache und Betonung", "Zahlen, Zeit, Familie und Umwelt", "500+ aktive Wörter"],
          grammarTitle: "Grammatik",
          grammar: "Präsens, Artikel der / die / das, Fälle Nominativ und Akkusativ.",
          outcomeTitle: "Ergebnis",
          outcome: "Sich selbst vorstellen, einfache Alltagsgespräche führen.",
          exam: "Fit in Deutsch 1",
          institution: "Goethe-Institut",
        },
        {
          tag: "02 · ZWEITES JAHR",
          codeBadge: "A1 → A2",
          title: "Vertiefung & Sprechen",
          skillsTitle: "Erweiterte Fertigkeiten",
          skills: ["Schulleben, Hobbys, Reisen", "Vergangenes und Zukunftspläne schildern", "1.200+ aktive Wörter"],
          grammarTitle: "Grammatik",
          grammar: "Perfekt und Präteritum, Dativ, Komparativ und Superlativ.",
          outcomeTitle: "Ergebnis",
          outcome: "Aufsätze verfassen, telefonieren, eigene Meinungen äußern.",
          exam: "Fit in Deutsch 2",
          institution: "Goethe-Institut",
        },
        {
          tag: "03 · DRITTES JAHR (ZIEL)",
          codeBadge: "A2 → B1",
          title: "Selbstständige Sprachanwendung",
          skillsTitle: "Komplexe Fertigkeiten",
          skills: ["Nachrichten, Sachtexte und Literatur", "Logische Argumentation und Diskussion", "2.500+ Fachbegriffe"],
          grammarTitle: "Grammatik",
          grammar: "Konjunktiv II, Passiv, Nebensätze mit weil, obwohl, dass.",
          outcomeTitle: "Ergebnis",
          outcome: "Reisen nach Deutschland, offizielle Briefe, Studienkolleg-Reife.",
          exam: "Zertifikat B1",
          institution: "TestDaF-Basis",
          isTarget: true,
        },
      ],
      fastTrackTag: "1–2 JAHRE INTENSIV",
      fastTrackTitle: "Beschleunigter Pfad für talentierte Schüler",
      fastTrackDesc:
        "Sprachlerntempo ist individuell. Begabte Schüler erreichen B1 bereits nach 1–2 Jahren.",
      fastTrackStat: "~50%",
      fastTrackStatLabel: "der Schüler lernen in Intensivgruppen",
    },
    tracks: {
      sectionTag: "KLASSEN 9–11 // PROFILBILDUNG FÜR HOCHSCHULEN",
      titlePre: "Drei",
      titleHighlight: "Profile.",
      titlePost: "Wählen Sie Ihre Zukunft.",
      description:
        "Schüler der Klassen 9–11 bereiten sich gezielt auf führende deutsche Universitäten vor.",
      list: [
        {
          tag: "01 · PROFIL",
          germanName: "Medizin",
          name: "Medizin & Biowissenschaften",
          desc: "Deutsche Medizinfakultäten gehören zu den anspruchsvollsten weltweit. Fundierte Vorbereitung in Biologie und Chemie.",
          subjects: [
            "Biologie auf Leistungskursniveau",
            "Organische und analytische Chemie",
            "Grundlagen der Anatomie",
            "Medizinisches Deutsch (Fachsprache)",
          ],
          careers: "Arzt · Zahnarzt · Pharmazeut · Neurobiologe",
          partnerUnis: "Charité Berlin · Heidelberg",
          accent: "border-[#DD0000]",
        },
        {
          tag: "02 · PROFIL",
          germanName: "Technik",
          name: "Ingenieurwesen",
          desc: "Deutschland ist das Herz der weltweiten Ingenieurskunst. Direkte Vorbereitung auf TUM, RWTH Aachen und KIT.",
          subjects: [
            "Erweiterte Hochschulmathematik",
            "Experimental- und Laborphysik",
            "Technisches Zeichnen & 3D CAD",
            "Technisches Deutsch (Fachdeutsch)",
          ],
          careers: "Mechatroniker · IT-Ingenieur · Luft- und Raumfahrt",
          partnerUnis: "TUM · RWTH Aachen · KIT",
          accent: "border-black",
        },
        {
          tag: "03 · PROFIL",
          germanName: "Wirtschaft",
          name: "Unternehmertum & IT",
          desc: "Wirtschaft im 21. Jahrhundert an der Schnittstelle von KI und globalen Märkten. Vorbereitung auf WHU und LMU.",
          subjects: [
            "Unternehmensführung & Wirtschaftsgrundlagen",
            "KI-Kompetenz & Automatisierungstools",
            "IT & Digital Product Management",
            "Digitales Branding und Content-Strategie",
          ],
          careers: "Startup-Gründer · Product Manager · KI-Stratege",
          partnerUnis: "WHU · Univ. Mannheim · LMU",
          accent: "border-[#FFCE00]",
        },
      ],
    },
    futureSkills: {
      sectionTag: "DIGITAL FARM // FUTURE SKILLS",
      titlePre: "Mehr als eine Sprachschule.",
      titleHighlight: "future-skills",
      titlePost: "Zukunftszentrum.",
      description:
        "Deutsch öffnet das Tor nach Europa. Entscheidend ist, was man daraus macht. Wir verknüpfen Sprachausbildung mit KI, modernem Coding und unternehmerischem Denken.",
      cardTag: "DSS · SMARTE INTEGRATION",
      cardFormula: "Sprache + MINT + KI / Code / Business",
      cardSub: "3 praxisnahe Kernkompetenzen nach Weltstandard",
      pillars: [
        {
          number: "01",
          title: "KI-Kompetenz",
          desc: "Professionelle Nutzung von ChatGPT, Claude und Gemini für Analyse und Forschung. Kritisches Hinterfragen von Quellen.",
          bulletPoints: [
            "Professionelles Prompt-Engineering",
            "Quellenanalyse und Faktencheck",
            "Akademische Projektarbeit mit KI-Tools",
            "Cybersicherheit und ethische Standards",
          ],
          toolsLabel: "Tools:",
          tools: "ChatGPT · Claude · Gemini · Midjourney",
        },
        {
          number: "02",
          title: "Vibe Coding",
          desc: "Die neue Generation der Softwareentwicklung: Ideen in natürlicher Sprache formulieren, KI-Agenten in Code übersetzen lassen.",
          bulletPoints: [
            "Reale Projekte mit Cursor, Replit und Lovable",
            "Erstellung funktionierender Web-Prototypen",
            "API-Integration und Datenanalyse",
            "Systemarchitektur und Debugging",
          ],
          toolsLabel: "Tools:",
          tools: "Cursor · Replit · Lovable · GitHub",
        },
        {
          number: "03",
          title: "Digitales Unternehmertum",
          desc: "Von der Idee zum ersten Ergebnis. Marktbedürfnisse analysieren, Marken aufbauen und MVPs präsentieren.",
          bulletPoints: [
            "Geschäftsmodelle und MVP-Tests",
            "Visuelles Branding und Pitch-Präsentationen",
            "Digitales Marketing und Kundengewinnung",
            "Projektpräsentation auf Deutsch und Englisch",
          ],
          toolsLabel: "Tools:",
          tools: "Figma · Notion · Canva · Stripe Docs",
        },
      ],
    },
    faculty: {
      sectionTag: "LEHRKRÄFTE // PÄDAGOGISCHES TEAM",
      title: "Internationale Bildungsstandards & Pädagogische Exzellenz",
      description:
        "Die Lehrkräfte der Deutsch Smart School unterrichten nach europäischen Bildungsstandards, der anerkannten Goethe-Institut-Methodik und modernen didaktischen Ansätzen.",
      standards: [
        {
          tag: "01 · METHODIK",
          title: "Goethe-Institut Standards",
          desc: "Der gesamte Deutschunterricht basiert auf dem internationalen Rahmen des Goethe-Instituts von A1 bis C1.",
        },
        {
          tag: "02 · QUALIFIKATION",
          title: "Erfahrene Fachdozenten",
          desc: "Germanisten mit Goethe C1/C2-Zertifikaten, erfahrene Fachlehrer und Berater für den Übergang an deutsche Universitäten.",
        },
        {
          tag: "03 · LERNUMFELD",
          title: "Immersive Sprachumgebung",
          desc: "Natürlicher Spracherwerb durch interaktive Kommunikation, praktische Projekte und eine lebendige deutsche Schulkultur.",
        },
      ],
      ctaButton: "Schulbesuch anfragen",
    },
    campuses: {
      futureTag: "CAMPUS 2028 // ZUKUNFTSPROJEKT",
      futureTitle: "Ökologischer deutscher Campus in «Yangi O'zbekiston».",
      futureDesc:
        "Auf 2 Hektar entsteht ein hochmoderner Campus nach europäischem Standard mit Amphitheater, MINT-Laboren und Sportarena.",
      futureFeatures: ["Gründächer", "Sportkomplex", "Ökogarten", "Hightech-Labore"],
      futureBadge: "Frühjahr 2028 · Yangi O'zbekiston",
      yashnobodTag: "01 · HAUPTSTANDORT",
      yashnobodTitle: "Standort Yashnobod",
      yashnobodAddress: "Elbek-Straße 22/1, Taschkent",
      yashnobodCoords: "41.294615, 69.326284",
      yashnobodNote: "Klassen 1–11 Gesamtschule",
      sergeliTag: "02 · STANDORT SERGELI",
      sergeliTitle: "Standort Sergeli",
      sergeliAddress: "Wohnkomplex Sokin Makon, Taschkent",
      sergeliCoords: "41.188813, 69.191109",
      sergeliNote: "Grund- und Vorschulklassen",
      openInMap: "In Google Maps öffnen",
      getDirections: "Route berechnen",
    },
    form: {
      leftBadge: "KOSTENFREIER ELTERNBESUCH",
      leftTitle: "Gestalten Sie die Zukunft Ihres Kindes.",
      leftDesc:
        "Besuchen Sie uns unverbindlich: Besichtigen Sie unsere Klassenräume, sprechen Sie mit unseren Dozenten und erleben Sie die deutsche Lernatmosphäre.",
      benefit1Title: "45-minütige persönliche Führung",
      benefit1Desc: "Passend zur Altersstufe Ihres Kindes gestaltet.",
      benefit2Title: "Gespräch mit der Schulleitung",
      benefit2Desc: "Ausführliche Beratung zu Studienmöglichkeiten in Deutschland.",
      benefit3Title: "Ohne finanzielle Verpflichtung",
      benefit3Desc: "Der Besuch ist 100% transparent und gebührenfrei.",
      phoneConfirmLabel: "Telefonische Bestätigung:",
      formTitle: "Termin für Schulbesuch reservieren",
      formSubtitle: "Füllen Sie das Formular aus. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      parentNameLabel: "Name der Eltern *",
      parentNamePlaceholder: "Z.B.: Azizbek Aliyev",
      phoneLabel: "Telefonnummer *",
      phonePlaceholder: "+998 90 123 45 67",
      ageLabel: "Alter des Kindes *",
      ageOptions: ["5–6 Jahre", "7–9 Jahre", "10–12 Jahre", "13–15 Jahre", "16+ Jahre"],
      objectiveLabel: "Hauptziel der Ausbildung",
      objectiveOptions: [
        "Gebührenfreies Studium in Deutschland → Internationale Karriere",
        "Deutsche Sprachkenntnisse von 0 auf C1",
        "Digital Farm (KI-Kompetenz & Vibe Coding)",
        "MINT-Fächer & Ingenieurswesen",
        "Noch unentschlossen, Beratung erwünscht",
      ],
      branchLabel: "Welchen Standort möchten Sie besuchen?",
      branchYashnobod: "Yashnobod (Elbek-Str. 22/1)",
      branchSergeli: "Sergeli (Sokin Makon)",
      preferredDateLabel: "Wunschtermin",
      submitBtn: "Schulbesuch verbindlich reservieren",
      privacyNote: "Ihre Daten werden vertraulich behandelt · Kein Spam",
      successTitle: "Anfrage erfolgreich übermittelt!",
      successDesc:
        "Vielen Dank! Unser Studienkoordinator wird sich in Kürze mit Ihnen in Verbindung setzen.",
      resetBtn: "Weitere Anfrage senden",
    },
    faq: {
      sectionTag: "FRAGEN & ANTWORTEN // FAQ",
      titlePre: "Häufig gestellte",
      titleHighlight: "Fragen.",
      subtitle: "Haben Sie weitere Fragen? Rufen Sie uns an – wir beraten jede Familie individuell.",
      questions: [
        {
          q: "Werden Kinder auch ohne Deutschkenntnisse aufgenommen?",
          a: "Ja, wir beginnen bei Stufe A0. Dank unserer Immersionsmethode erreichen Schüler bereits nach dem ersten Schuljahr das Goethe-Zertifikat A1.",
        },
        {
          q: "Wie sieht der Tagesablauf aus?",
          a: "Der Schultag dauert von 08:00 bis 16:50 Uhr. Dies umfasst Unterricht, warme Mahlzeiten, MINT-AGs und die vollständige Hausaufgabenbetreuung.",
        },
        {
          q: "Ist das Studium in Deutschland tatsächlich gebührenfrei (€0)?",
          a: "Ja. An staatlichen Universitäten in Deutschland betragen die Studiengebühren 0 Euro. Lediglich ein geringer Semesterbeitrag (150–310 €) für Nahverkehr und Verwaltung fällt an.",
        },
        {
          q: "Warum sind KI und Vibe Coding im Lehrplan integriert?",
          a: "Deutsch ist der Schlüssel zur Welt, doch für eine Spitzenkarriere braucht es moderne Zukunftskompetenzen. Unser Digital Farm-Programm vermittelt praxisnahes technologisches Rüstzeug.",
        },
        {
          q: "Wie hoch sind die Schulgebühren?",
          a: "Genaue Konditionen und flexible Zahlungsmodelle stellen wir Ihnen gern bei einem kostenfreien Beratungsgespräch vor. Enthalten sind Ganztagsunterricht, 3 Mahlzeiten und Prüfungsbetreuung.",
        },
      ],
    },
    footer: {
      tagline: "Wir bilden die nächste Generation von Ingenieuren, Medizinern und Tech-Pionieren für Studium und Karriere in Deutschland aus.",
      seal: "DAS DEUTSCHE QUALITÄTSSIEGEL",
      partnerGoethe: "Partner des Goethe-Instituts",
      partnerLevel: "Pfad A1 → C1",
      colSchoolTitle: "Schule",
      colTracksTitle: "Schwerpunkte",
      colContactTitle: "Standorte & Kontakt",
      copyright: "© 2026 Deutsch Smart School · Alle Rechte vorbehalten.",
      privacy: "Datenschutzerklärung",
      terms: "AGB",
      accreditation: "Akkreditierung",
    },
    telegram: {
      tooltip: "Frage über Telegram stellen",
      title: "Deutsch Smart Berater",
      subtitle: "Online · Antwort innerhalb von 10 Minuten",
      placeholder: "Ihre Nachricht...",
      send: "Senden",
      online: "Online",
    },
  },
  en: {
    nav: {
      about: "About School",
      programs: "Programs",
      schedule: "Daily Routine",
      faculty: "Faculty",
      campuses: "Campuses",
      faq: "FAQ",
      bookVisit: "Book Visit →",
      callNow: "+998 55 055 0444",
    },
    hero: {
      badge: "PRIVATE GERMAN SCHOOL · GRADES 1–11 · TASHKENT",
      accreditation: "Goethe-Institut Accredited Methodology",
      titlePart1: "The German school preparing your child for",
      titleHighlight: "Europe.",
      titlePart2: "",
      description:
        "Deutsch Smart School is a premier private German school in Tashkent for grades 1–11. We teach German as an academic core foundation with a guaranteed trajectory toward tuition-free higher education in Germany.",
      primaryCta: "Book a School Visit",
      secondaryCta: "Explore Programs",
      statBranchesLabel: "Campuses",
      statBranchesVal: "Yashnobod & Sergeli",
      statLevelLabel: "Language Level",
      statLevelVal: "A1 → C1 Certificate",
      statTuitionLabel: "German Universities",
      statTuitionVal: "€0 Tuition Free",
      statDayLabel: "School Day",
      statDayVal: "08:00 – 16:50",
      floatingBadgeTopTitle: "GUARANTEED PATHWAY",
      floatingBadgeTopSubtitle: "98% Studienkolleg Success Rate",
      floatingBadgeBottomTitle: "Homework-Free School",
      floatingBadgeBottomSubtitle: "All assignments completed by 16:50",
      floatingBadgeBottomBadge: "100% Supervised",
    },
    metrics: {
      m1Label: "GLOBAL EXCELLENCE",
      m1Value: "6 TOP-100",
      m1Sub: "UNIS",
      m1Desc: "Prestigious German universities: TUM, LMU Munich, Heidelberg, RWTH Aachen.",
      m2Label: "ANNUAL TUITION FEE",
      m2Value: "€0",
      m2Desc: "Completely tuition-free at German state universities. Only a small public transit semester fee.",
      m3Label: "STANDARD TIMELINE",
      m3Value: "A1 → C1",
      m3Desc: "Official Goethe-Institut certification in 3 years. Accelerated track in 1–2 years.",
      m4Label: "DAILY TIMEFRAME",
      m4Value: "8h 50m",
      m4Desc: "Academic STEM + German immersion + AI lab + athletics + healthy warm meals.",
    },
    pillars: {
      sectionTag: "OUR APPROACH // EDUCATIONAL VALUES",
      titlePre: "The seamless harmony of",
      titleHighlight1: "German discipline",
      titleMid: "and",
      titleHighlight2: "genuine care.",
      titlePost: "",
      subtitle:
        "Our educational philosophy unites the technical rigor of German standards with a nurturing family environment.",
      items: [
        {
          number: "01",
          title: "Precision",
          germanTerm: "Ordnung & Präzision",
          description:
            "Absolute clarity in languages, mathematics, and daily pedagogy. Assessments reflect genuine competence without artificial grade inflation.",
        },
        {
          number: "02",
          title: "Future",
          germanTerm: "Zukunftsorientiert",
          description:
            "Every lesson prepares students for long-term global careers, bridging Tashkent with Munich and Berlin.",
        },
        {
          number: "03",
          title: "Warmth",
          germanTerm: "Gemeinschaft & Respekt",
          description:
            "A second home for every student. Growth occurs free of undue stress, grounded in mutual respect and mentorship.",
        },
        {
          number: "04",
          title: "Cultural Bridge",
          germanTerm: "Kulturelle Brücke",
          description:
            "Connecting two distinguished cultures: preserving national character while integrating European technological excellence.",
        },
      ],
    },
    schedule: {
      sectionTag: "DAILY ROUTINE // A STUDENT'S DAY",
      title: "One",
      smartWord: "SMART",
      description:
        "The student's day is purposefully structured from 08:00 to 16:50. Students return home free of homework — all work is finished with teacher guidance.",
      badge: "Hausaufgabenbetreuung (Homework-Free School)",
      blocks: [
        {
          step: "01",
          germanTime: "Morgen",
          timeRange: "08:00 – 09:25",
          phase: "Phase I · Focus & Rhythm",
          accentColor: "border-black",
          events: [
            { time: "08:00", title: "Morgenkreis (Morning Circle)", desc: "Daily agenda, mindset alignment, and focus." },
            { time: "08:30", title: "STEM Academic Block", desc: "Advanced mathematics and analytical reasoning." },
            { time: "09:10", title: "Frühstück (Breakfast)", desc: "Warm breakfast and fresh fruit." },
          ],
        },
        {
          step: "02",
          germanTime: "Vormittag",
          timeRange: "09:25 – 12:20",
          phase: "Phase II · German Immersion",
          accentColor: "border-[#DD0000]",
          events: [
            { time: "09:25", title: "Deutsch Immersion", desc: "Level-based interactive German language cohorts." },
            { time: "10:05", title: "Fresh Air Break", desc: "Outdoor physical activity and healthy snacks." },
            { time: "10:10", title: "Deutsch in Aktion", desc: "Debates, presentations, and collaborative role-play." },
          ],
        },
        {
          step: "03",
          germanTime: "Mittag",
          timeRange: "12:20 – 15:25",
          phase: "Phase III · Energy & Clubs",
          accentColor: "border-[#FFCE00]",
          events: [
            { time: "12:20", title: "Mittagessen (Hot Lunch)", desc: "40 minutes of balanced, wholesome dining." },
            { time: "13:00", title: "Clubs & Future Skills", desc: "Coding, robotics, taekwondo, chess, German drama." },
            { time: "15:10", title: "Afternoon Snack", desc: "Herbal tea and wholesome pastries." },
          ],
        },
        {
          step: "04",
          germanTime: "Nachmittag",
          timeRange: "15:25 – 16:50",
          phase: "Phase IV · Homework-Free Home",
          accentColor: "border-black",
          events: [
            { time: "15:25", title: "Hausaufgabenbetreuung", desc: "All homework is completed with faculty mentorship." },
            { time: "16:30", title: "Reflection & Portfolios", desc: "Daily review, achievement logging, and feedback." },
            { time: "16:50", title: "Departure — Tschüss!", desc: "Carefree pickup by parents with no leftover tasks." },
          ],
        },
      ],
    },
    roadmap: {
      sectionTag: "GERMAN ROADMAP // CEFR · GOETHE-INSTITUT",
      titlePre: "From Zero to",
      titleHighlight: "B1 / C1",
      titlePost: "in 3 Years.",
      description:
        "Our standard progression: 0 → A1 → A2 → B1. This fulfills entrance requirements for Studienkolleg and German state universities.",
      levels: [
        { step: "LEVEL 0", code: "A0", title: "Beginner" },
        { step: "YEAR 1", code: "A1", title: "Fit in Deutsch 1" },
        { step: "YEAR 2", code: "A2", title: "Fit in Deutsch 2" },
        { step: "YEAR 3 (DSS)", code: "B1", title: "Goethe Zertifikat B1" },
        { step: "PREP", code: "B2", title: "Studienkolleg" },
        { step: "UNIVERSITY", code: "C1", title: "University & TestDaF" },
      ],
      years: [
        {
          tag: "01 · FIRST YEAR",
          codeBadge: "0 → A1",
          title: "Foundations & Phonetics",
          skillsTitle: "Core Competencies",
          skills: ["Alphabet, authentic German phonetics", "Numbers, time, family, and surroundings", "500+ active vocabulary words"],
          grammarTitle: "Grammar Core",
          grammar: "Präsens present tense, articles der / die / das, Nominative and Accusative cases.",
          outcomeTitle: "Key Outcome",
          outcome: "Independent self-introduction, smooth everyday dialogues.",
          exam: "Fit in Deutsch 1",
          institution: "Goethe-Institut",
        },
        {
          tag: "02 · SECOND YEAR",
          codeBadge: "A1 → A2",
          title: "Consolidation & Fluency",
          skillsTitle: "Expanded Skills",
          skills: ["School life, interests, and travel", "Describing past events and future plans", "1,200+ active vocabulary words"],
          grammarTitle: "Grammar Core",
          grammar: "Perfekt and Präteritum past tenses, Dative case, comparative structures.",
          outcomeTitle: "Key Outcome",
          outcome: "Short essays, phone conversations, expressing personal perspectives.",
          exam: "Fit in Deutsch 2",
          institution: "Goethe-Institut",
        },
        {
          tag: "03 · THIRD YEAR (GOAL)",
          codeBadge: "A2 → B1",
          title: "Independent User",
          skillsTitle: "Advanced Skills",
          skills: ["Current news, analytical essays, literature", "Logical debate and structured presentations", "2,500+ academic vocabulary words"],
          grammarTitle: "Grammar Core",
          grammar: "Konjunktiv II subjunctive, Passive voice, subordinate conjunctions.",
          outcomeTitle: "Key Outcome",
          outcome: "Confident travel in Germany, official correspondence, Studienkolleg eligibility.",
          exam: "Zertifikat B1",
          institution: "TestDaF Benchmark",
          isTarget: true,
        },
      ],
      fastTrackTag: "1–2 YEAR ACCELERATED TRACK",
      fastTrackTitle: "Fast-track trajectory for high-aptitude learners",
      fastTrackDesc:
        "Learning paces differ. Motivated students reach B1 within 1–2 years and transition directly to advanced cohorts.",
      fastTrackStat: "~50%",
      fastTrackStatLabel: "Students participate in accelerated tracks",
    },
    tracks: {
      sectionTag: "GRADES 9–11 // UNIVERSITY PREPARATION TRACKS",
      titlePre: "Three",
      titleHighlight: "Pathways.",
      titlePost: "Choose Your Future.",
      description:
        "DSS students in grades 9–11 prepare with specialized academic curricula designed for European top-tier universities.",
      list: [
        {
          tag: "01 · PROFILE",
          germanName: "Medizin",
          name: "Medicine & Life Sciences",
          desc: "German medical schools are among the most respected globally. Rigorous training in advanced biology and chemistry.",
          subjects: [
            "Advanced Placement Biology",
            "Organic and analytical chemistry",
            "Human anatomy and physiology",
            "Medical German terminology (Fachsprache)",
          ],
          careers: "Physician · Dentist · Pharmacist · Neurobiologist",
          partnerUnis: "Charité Berlin · Heidelberg",
          accent: "border-[#DD0000]",
        },
        {
          tag: "02 · PROFILE",
          germanName: "Technik",
          name: "Engineering & Applied Sciences",
          desc: "Germany is the global powerhouse of engineering and innovation. Direct pathway to TUM, RWTH Aachen, and KIT.",
          subjects: [
            "University-level advanced mathematics",
            "Experimental and theoretical physics",
            "Technical drafting & 3D CAD modeling",
            "Engineering German (Fachdeutsch)",
          ],
          careers: "Mechatronics · IT Architect · Aerospace Engineer",
          partnerUnis: "TUM · RWTH Aachen · KIT",
          accent: "border-black",
        },
        {
          tag: "03 · PROFILE",
          germanName: "Wirtschaft",
          name: "Business & Future IT",
          desc: "Modern commerce at the intersection of AI, digital products, and global economics. Target entry to WHU and LMU.",
          subjects: [
            "Entrepreneurship & Economics fundamentals",
            "AI Literacy & Automation toolsets",
            "Digital Product Management",
            "Brand strategy and digital storytelling",
          ],
          careers: "Startup Founder · Product Lead · AI Strategist",
          partnerUnis: "WHU · Univ. Mannheim · LMU",
          accent: "border-[#FFCE00]",
        },
      ],
    },
    futureSkills: {
      sectionTag: "DIGITAL FARM // FUTURE SKILLS",
      titlePre: "We are more than a language school.",
      titleHighlight: "future-skills",
      titlePost: "innovation hub.",
      description:
        "German opens the gate to Europe. What your child builds once through that gate matters even more. We unite languages with AI, modern code, and business creation.",
      cardTag: "DSS · SMART INTEGRATION",
      cardFormula: "Language + STEM + AI / Code / Business",
      cardSub: "3 core competencies meeting global industry standards",
      pillars: [
        {
          number: "01",
          title: "AI Literacy",
          desc: "Professional utilization of ChatGPT, Claude, and Gemini for analysis, research, and critical thinking.",
          bulletPoints: [
            "Advanced prompt engineering",
            "Source verification and fact-checking",
            "Academic research synthesis with AI",
            "Cybersecurity and ethical norms",
          ],
          toolsLabel: "Tools:",
          tools: "ChatGPT · Claude · Gemini · Midjourney",
        },
        {
          number: "02",
          title: "Vibe Coding",
          desc: "The next-generation programming philosophy: articulate intent in natural language, orchestrate AI agents to build production code.",
          bulletPoints: [
            "Building real apps in Cursor, Replit, Lovable",
            "Live web applications and functional prototypes",
            "API integration and data architecture",
            "Analytical debugging and modular design",
          ],
          toolsLabel: "Tools:",
          tools: "Cursor · Replit · Lovable · GitHub",
        },
        {
          number: "03",
          title: "Digital Entrepreneurship",
          desc: "From initial concept to viable product. Market validation, branding, distribution, and pitching in high school.",
          bulletPoints: [
            "Business model canvas & MVP validation",
            "Brand identity and professional pitch decks",
            "Digital marketing and client acquisition",
            "Defending projects in German and English",
          ],
          toolsLabel: "Tools:",
          tools: "Figma · Notion · Canva · Stripe Docs",
        },
      ],
    },
    faculty: {
      sectionTag: "FACULTY // ACADEMIC EXCELLENCE",
      title: "International Standards & Dedicated Faculty",
      description:
        "Educators at Deutsch Smart School instruct according to European educational standards, verified Goethe-Institut methodology, and student-centered pedagogy.",
      standards: [
        {
          tag: "01 · METHODOLOGY",
          title: "Goethe-Institut Standards",
          desc: "All German language instruction adheres to official Goethe-Institut frameworks advancing from A1 to C1 proficiency.",
        },
        {
          tag: "02 · QUALIFICATION",
          title: "Certified Instructors",
          desc: "Linguists holding Goethe C1/C2 credentials, certified subject educators, and experienced academic mentors.",
        },
        {
          tag: "03 · ENVIRONMENT",
          title: "Immersive Learning",
          desc: "Accelerated language acquisition through daily dialogue, active engagement, and real-world project assignments.",
        },
      ],
      ctaButton: "Book Campus Visit",
    },
    campuses: {
      futureTag: "2028 MASTERPLAN // ECO-CAMPUS",
      futureTitle: "Sustainable German Campus in 'Yangi O'zbekiston'.",
      futureDesc:
        "A 2-hectare European standard campus currently under development in Tashkent's premier modern district, featuring an open amphitheater, biotechnology labs, and a sports arena.",
      futureFeatures: ["Green Roofs", "Sports Arena", "Eco Park", "Advanced Labs"],
      futureBadge: "Spring 2028 · Yangi O'zbekiston",
      yashnobodTag: "01 · PRIMARY CAMPUS",
      yashnobodTitle: "Yashnobod Campus",
      yashnobodAddress: "22/1 Elbek Street, Tashkent City",
      yashnobodCoords: "41.294615, 69.326284",
      yashnobodNote: "Grades 1–11 Full Cycle",
      sergeliTag: "02 · SERGELI CAMPUS",
      sergeliTitle: "Sergeli Campus",
      sergeliAddress: "Sokin Makon Complex, Tashkent City",
      sergeliCoords: "41.188813, 69.191109",
      sergeliNote: "Primary & Preparatory",
      openInMap: "Open in Google Maps",
      getDirections: "Get Directions",
    },
    form: {
      leftBadge: "FREE IN-PERSON PARENT TOUR",
      leftTitle: "Build a World-Class Future for Your Child.",
      leftDesc:
        "Schedule a complimentary tour: view our high-tech classrooms, meet our academic directors, and experience our immersive German environment.",
      benefit1Title: "45-minute customized tour",
      benefit1Desc: "Observe live classes appropriate for your child's age group.",
      benefit2Title: "One-on-one session with school leadership",
      benefit2Desc: "Comprehensive roadmapping for tuition-free university entry in Germany.",
      benefit3Title: "Zero commitment required",
      benefit3Desc: "Our visits are 100% complimentary and transparent.",
      phoneConfirmLabel: "Confirm by phone:",
      formTitle: "Book Your School Visit",
      formSubtitle: "Complete the form below. Our admissions team will contact you within 24 hours to confirm.",
      parentNameLabel: "Parent's Full Name *",
      parentNamePlaceholder: "E.g., Azizbek Aliyev",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "+998 90 123 45 67",
      ageLabel: "Child's Age *",
      ageOptions: ["5–6 years", "7–9 years", "10–12 years", "13–15 years", "16+ years"],
      objectiveLabel: "Primary Academic Goal",
      objectiveOptions: [
        "Tuition-free German university degree → Global career",
        "Master German language from 0 to C1",
        "Digital Farm (AI Literacy & Vibe Coding)",
        "STEM & Engineering specialization",
        "Undecided, personalized advice needed",
      ],
      branchLabel: "Which campus would you like to visit?",
      branchYashnobod: "Yashnobod (22/1 Elbek St.)",
      branchSergeli: "Sergeli (Sokin Makon)",
      preferredDateLabel: "Preferred Date & Time",
      submitBtn: "Confirm Visit Reservation",
      privacyNote: "Your information is securely encrypted · No marketing spam",
      successTitle: "Reservation Received!",
      successDesc:
        "Thank you! A Deutsch Smart School advisor will contact you within 24 hours to confirm your scheduled visit.",
      resetBtn: "Submit another request",
    },
    faq: {
      sectionTag: "QUESTIONS & ANSWERS // FAQ",
      titlePre: "Frequently Asked",
      titleHighlight: "Questions.",
      subtitle: "Can't find your answer here? Give us a call — we personally consult with every family.",
      questions: [
        {
          q: "Can children apply without any prior German knowledge?",
          a: "Yes, our curriculum welcomes students starting at absolute zero (A0). Through our immersion approach, students reach Goethe-Institut A1 proficiency within their very first academic year.",
        },
        {
          q: "What are the school day hours?",
          a: "The school day operates from 08:00 to 16:50. This encompasses core academic coursework, German language immersion, hot meals, sports/robotics clubs, and supervised homework completion. Children return home completely free of schoolwork.",
        },
        {
          q: "Is higher education in Germany truly free (€0)?",
          a: "Yes. German public universities charge €0 tuition fees for domestic and international students alike. Students only contribute a minor administrative semester contribution of approx. €150–€310, which includes public transit.",
        },
        {
          q: "Why are AI Literacy and Vibe Coding part of the curriculum?",
          a: "German fluency opens European opportunities, but modern future-skills ensure high-impact leadership. Our Digital Farm prepares students to deploy AI as a superpower and rapidly prototype technology.",
        },
        {
          q: "What is the tuition fee and what does it include?",
          a: "Detailed fee options and flexible payment plans are provided during your complimentary visit. Tuition covers the full day program, 3 wholesome meals daily, clubs, and German certificate training.",
        },
      ],
    },
    footer: {
      tagline: "Preparing the next generation of engineers, physicians, and tech innovators for study and life in Germany.",
      seal: "DAS DEUTSCHE QUALITÄTSSIEGEL",
      partnerGoethe: "Goethe-Institut Partner",
      partnerLevel: "A1 → C1 Pathway",
      colSchoolTitle: "School",
      colTracksTitle: "Academic Tracks",
      colContactTitle: "Campuses & Contact",
      copyright: "© 2026 Deutsch Smart School · All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      accreditation: "Accreditation",
    },
    telegram: {
      tooltip: "Chat with an advisor on Telegram",
      title: "Deutsch Smart Advisor",
      subtitle: "Online · Replies within 10 minutes",
      placeholder: "Write your question...",
      send: "Send",
      online: "Online",
    },
  },
};
