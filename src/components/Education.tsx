import { Calendar, Award, CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

export function Education() {
  const { t } = useLanguage();
  return (
    <Section id="education">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider uppercase text-sm mb-2 text-center">
          {t('education.badge')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {t('education.title')}
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 md:translate-x-0 ml-8 md:ml-0" />

        <div className="space-y-20">
          {/* Bachelor's Degree */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right flex flex-col md:items-end pl-20 md:pl-0">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Bachelor of Science in Data Science
              </h3>
              <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                Kigali Independent University (ULK)
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                Specializing in Statistical Modeling, Big Data Analytics, and
                Applied Machine Learning algorithms to engineer data-driven solutions.
              </p>
            </div>

            <div className="absolute left-0 md:left-1/2 w-16 h-16 flex items-center justify-center -translate-x-0 md:-translate-x-1/2">
              <div className="w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-white dark:ring-slate-950" />
            </div>

            <div className="md:w-1/2 md:pl-12 pl-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-4 h-4" />
                <span>2023 - 2027 (Expected)</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right flex flex-col md:items-end justify-center pl-20 md:pl-0 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                <Award className="w-4 h-4" />
                <span>Professional Development</span>
              </div>
            </div>

            <div className="absolute left-0 md:left-1/2 w-16 h-16 flex items-center justify-center -translate-x-0 md:-translate-x-1/2 order-1 md:order-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white dark:ring-slate-950" />
            </div>

            <div className="md:w-1/2 md:pl-12 pl-20 order-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Professional Certifications
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Python Programming',
                  'Machine Learning Specialization',
                  'Data Visualization',
                  'Advanced Pandas for Data Analysis',
                  'Introduction to Programming'
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right flex flex-col md:items-end pl-20 md:pl-0">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Advanced Level National Examination
              </h3>
              <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                MPC (Math, Physics, Computer Science)
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                Successfully defended with high distinction, mastering the foundational
                mathematics and logic required for advanced computational science.
              </p>
            </div>

            <div className="absolute left-0 md:left-1/2 w-16 h-16 flex items-center justify-center -translate-x-0 md:-translate-x-1/2">
              <div className="w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full ring-4 ring-white dark:ring-slate-950" />
            </div>

            <div className="md:w-1/2 md:pl-12 pl-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-4 h-4" />
                <span>2020 - 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}