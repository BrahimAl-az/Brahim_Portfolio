import { User, Code, Rocket, MapPin, BookOpen } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();
  return (
    <Section
      id="about"
      className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] my-20 py-24 relative overflow-hidden shadow-xl"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left: Dynamic Image Stack - Increased separation */}
        <div className="relative h-[550px] md:h-[650px] max-w-md mx-auto lg:mx-0 w-full px-4">
          {/* Back Image - Pushed further up/left */}
          <div className="absolute top-0 left-0 w-[80%] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform -rotate-12 transition-all hover:rotate-0 hover:-translate-y-4 duration-500 border border-slate-200 dark:border-slate-800">
            <img
              src="/about-v2.jpg"
              alt="Brahim Al-az Traditional"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Front Image - Pushed further down/right */}
          <div className="absolute bottom-4 right-0 w-[80%] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] transform rotate-6 transition-all hover:rotate-0 hover:translate-y-4 duration-500 border-8 border-white dark:border-slate-900 z-10">
            <img
              src="/hero-v2.jpg"
              alt="Brahim Al-az Modern"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Content Sections */}
        <div className="flex flex-col items-start px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>

          <div className="space-y-10 mb-12">
            {/* Who I Am */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
                <User className="w-7 h-7 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {t('about.whoIAm')}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('about.whoIAmDesc')}
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
                <Code className="w-7 h-7 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t('about.whatIDo')}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('about.whatIDoDesc')}
                </p>
              </div>
            </div>

            {/* My Mission */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-slate-700">
                <Rocket className="w-7 h-7 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t('about.mission')}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('about.missionDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Location/University Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <MapPin className="w-5 h-5 text-cyan-500" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  {t('about.location')}
                </p>
                <p className="font-medium text-slate-900 dark:text-white">
                  Ndjamena / Tchad — Kigali / Rwanda
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <BookOpen className="w-5 h-5 text-cyan-500" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  {t('about.university')}
                </p>
                <p className="font-medium text-slate-900 dark:text-white">
                  ULK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}