import { Book, Code, Trophy } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

export function Experience() {
  const { t } = useLanguage();
  return (
    <Section
      id="experience"
      className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl my-20">

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <span className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider uppercase text-sm mb-2 block">
            {t('experience.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t('experience.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {t('experience.desc')}
          </p>
        </div>

        <div className="md:col-span-2 grid gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl text-cyan-600 dark:text-cyan-400">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Data Hackathon Strategist
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  2023 - Present
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Spearheading data-driven solutions in regional hackathons. Applying
                  predictive modeling and exploratory data analysis (EDA) to build
                  scalable prototypes for Fintech and AgTech sectors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                <Book className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  AI & Data Science Mentorship
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  ULK CSDS Club
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Driving technical excellence at ULK by leading intensive workshops
                  on Python for Data Science. Mentoring junior developers in
                  algorithmic thinking and machine learning fundamentals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600 dark:text-orange-400">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Advanced Data Specializations
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  Professional Development
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Achieved certifications in high-demand areas: Machine Learning,
                  Advanced Pandas, and Data Visualization. Committed to continuous
                  learning in the evolving AI landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
