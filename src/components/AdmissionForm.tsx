import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Lock, ArrowRight, Phone, Calendar, User, Check, RefreshCw } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface AdmissionFormProps {
  t: Translations;
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({ t }) => {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedAge, setSelectedAge] = useState(t.form.ageOptions[1] || '7–9 yosh');
  const [selectedObjective, setSelectedObjective] = useState(t.form.objectiveOptions[0]);
  const [selectedBranch, setSelectedBranch] = useState<'yashnobod' | 'sergeli'>('yashnobod');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { playSound } = useSound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phoneNumber.trim()) {
      playSound('error');
      return;
    }
    playSound('cta');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      playSound('success');
    }, 700);
  };

  const handleReset = () => {
    playSound('click');
    setSubmitted(false);
    setParentName('');
    setPhoneNumber('');
    setPreferredDate('');
  };

  return (
    <section id="tashrif-form" className="w-full bg-[#FAF9F6] py-20 lg:py-28 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E8E4] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Value Proposition Narrative Column (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF9F6] p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#E8E8E4] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[#DD0000] font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
                  <span>{t.form.leftBadge}</span>
                </div>

                <h3 className="text-[28px] sm:text-[34px] font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
                  {t.form.leftTitle}
                </h3>

                <p className="text-[15px] text-neutral-600 leading-relaxed mb-8">
                  {t.form.leftDesc}
                </p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-[#DD0000]/10 flex items-center justify-center text-[#DD0000] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[14px] font-bold text-neutral-900 block">
                        {t.form.benefit1Title}
                      </strong>
                      <p className="text-[13px] text-neutral-600 mt-0.5">
                        {t.form.benefit1Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-[#DD0000]/10 flex items-center justify-center text-[#DD0000] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[14px] font-bold text-neutral-900 block">
                        {t.form.benefit2Title}
                      </strong>
                      <p className="text-[13px] text-neutral-600 mt-0.5">
                        {t.form.benefit2Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-[#DD0000]/10 flex items-center justify-center text-[#DD0000] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[14px] font-bold text-neutral-900 block">
                        {t.form.benefit3Title}
                      </strong>
                      <p className="text-[13px] text-neutral-600 mt-0.5">
                        {t.form.benefit3Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E8E4] flex items-center justify-between text-[13px]">
                <span className="text-neutral-500 font-medium">{t.form.phoneConfirmLabel}</span>
                <a
                  href="tel:+998550550444"
                  className="font-extrabold text-neutral-900 hover:text-[#DD0000] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DD0000]" />
                  <span>+998 55 055 0444</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Form Console (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-[24px] sm:text-[28px] font-extrabold text-neutral-900 tracking-tight mb-2">
                      {t.form.formTitle}
                    </h4>
                    <p className="text-[14px] text-neutral-600 mb-8 leading-relaxed">
                      {t.form.formSubtitle}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12px] font-bold text-neutral-800 uppercase tracking-wider mb-2">
                            {t.form.parentNameLabel}
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              value={parentName}
                              onChange={(e) => setParentName(e.target.value)}
                              placeholder={t.form.parentNamePlaceholder}
                              className="w-full bg-[#FAF9F6] border border-[#E8E8E4] focus:border-neutral-900 focus:bg-white px-4 py-3.5 rounded-xl text-[14px] text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all duration-200"
                            />
                            <User className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[12px] font-bold text-neutral-800 uppercase tracking-wider mb-2">
                            {t.form.phoneLabel}
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              required
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder={t.form.phonePlaceholder}
                              className="w-full bg-[#FAF9F6] border border-[#E8E8E4] focus:border-neutral-900 focus:bg-white px-4 py-3.5 rounded-xl text-[14px] text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all duration-200"
                            />
                            <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Age Selection Filter Chips */}
                      <div>
                        <label className="block text-[12px] font-bold text-neutral-800 uppercase tracking-wider mb-2.5">
                          {t.form.ageLabel}
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {t.form.ageOptions.map((age, aIdx) => {
                            const isSelected = selectedAge === age;
                            return (
                              <button
                                key={aIdx}
                                type="button"
                                onClick={() => {
                                  playSound('click');
                                  setSelectedAge(age);
                                }}
                                className={`px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? 'bg-neutral-900 text-white shadow-xs'
                                    : 'bg-[#FAF9F6] text-neutral-700 hover:bg-neutral-200/70 border border-[#E8E8E4]'
                                }`}
                              >
                                {age}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Primary Objective Dropdown */}
                      <div>
                        <label className="block text-[12px] font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          {t.form.objectiveLabel}
                        </label>
                        <select
                          value={selectedObjective}
                          onChange={(e) => {
                            playSound('click');
                            setSelectedObjective(e.target.value);
                          }}
                          className="w-full bg-[#FAF9F6] border border-[#E8E8E4] focus:border-neutral-900 focus:bg-white px-4 py-3.5 rounded-xl text-[14px] text-neutral-900 focus:outline-none transition-all duration-200 cursor-pointer"
                        >
                          {t.form.objectiveOptions.map((opt, oIdx) => (
                            <option key={oIdx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Branch Choice */}
                      <div>
                        <label className="block text-[12px] font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          {t.form.branchLabel}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <label
                            onClick={() => {
                              playSound('click');
                              setSelectedBranch('yashnobod');
                            }}
                            className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              selectedBranch === 'yashnobod'
                                ? 'bg-white border-[#DD0000] ring-1 ring-[#DD0000] shadow-xs'
                                : 'bg-[#FAF9F6] border-[#E8E8E4] hover:bg-white'
                            }`}
                          >
                            <input
                              type="radio"
                              name="branch"
                              value="yashnobod"
                              checked={selectedBranch === 'yashnobod'}
                              onChange={() => setSelectedBranch('yashnobod')}
                              className="accent-[#DD0000]"
                            />
                            <span className="text-[13px] font-bold text-neutral-900">
                              {t.form.branchYashnobod}
                            </span>
                          </label>

                          <label
                            onClick={() => {
                              playSound('click');
                              setSelectedBranch('sergeli');
                            }}
                            className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              selectedBranch === 'sergeli'
                                ? 'bg-white border-[#DD0000] ring-1 ring-[#DD0000] shadow-xs'
                                : 'bg-[#FAF9F6] border-[#E8E8E4] hover:bg-white'
                            }`}
                          >
                            <input
                              type="radio"
                              name="branch"
                              value="sergeli"
                              checked={selectedBranch === 'sergeli'}
                              onChange={() => setSelectedBranch('sergeli')}
                              className="accent-[#DD0000]"
                            />
                            <span className="text-[13px] font-bold text-neutral-900">
                              {t.form.branchSergeli}
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* Preferred Date Optional */}
                      <div>
                        <label className="block text-[12px] font-bold text-neutral-800 uppercase tracking-wider mb-2">
                          {t.form.preferredDateLabel}
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            className="w-full bg-[#FAF9F6] border border-[#E8E8E4] focus:border-neutral-900 focus:bg-white px-4 py-3 rounded-xl text-[14px] text-neutral-900 focus:outline-none transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Submit CTA */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        type="submit"
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#DD0000] hover:bg-[#B80000] text-white font-bold text-[15px] sm:text-[16px] py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>{t.form.submitBtn}</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>

                      <div className="flex items-center justify-center gap-2 text-neutral-500 text-[12px] pt-1">
                        <Lock className="w-3.5 h-3.5" />
                        <span>{t.form.privacyNote}</span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[380px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#DD0000]/10 text-[#DD0000] flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-[26px] font-extrabold text-neutral-900 mb-2">
                      {t.form.successTitle}
                    </h4>
                    <p className="text-[15px] text-neutral-600 max-w-md mx-auto leading-relaxed mb-6">
                      {t.form.successDesc}
                    </p>

                    <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#E8E8E4] text-[13px] text-neutral-700 mb-6 text-left w-full max-w-sm">
                      <p><strong>Ism:</strong> {parentName}</p>
                      <p><strong>Telefon:</strong> {phoneNumber}</p>
                      <p><strong>Yosh:</strong> {selectedAge}</p>
                      <p><strong>Filial:</strong> {selectedBranch === 'yashnobod' ? t.form.branchYashnobod : t.form.branchSergeli}</p>
                    </div>

                    <button
                      onClick={handleReset}
                      type="button"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-[13px] font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{t.form.resetBtn}</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
