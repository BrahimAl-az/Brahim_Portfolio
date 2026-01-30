import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';
const skills = [
  {
    name: 'Python',
    level: 90,
    category: 'Backend & AI'
  },
  {
    name: 'Django',
    level: 85,
    category: 'Backend & AI'
  },
  {
    name: 'React',
    level: 80,
    category: 'Frontend'
  },
  {
    name: 'JavaScript/TS',
    level: 85,
    category: 'Frontend'
  },
  {
    name: 'AI / ML',
    level: 75,
    category: 'Backend & AI'
  },
  {
    name: 'REST APIs',
    level: 85,
    category: 'Backend & AI'
  },
  {
    name: 'SQL / Database',
    level: 80,
    category: 'Data'
  },
  {
    name: 'Git / DevOps',
    level: 70,
    category: 'Tools'
  }];

export function Skills() {
  const { t } = useLanguage();
  return (
    <Section
      id="skills"
      className="bg-slate-900 text-white rounded-3xl my-20 relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm mb-2 block">
              {t('skills.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('skills.title')}
            </h2>
          </div>
          <p className="text-slate-400 max-w-md">
            {t('skills.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) =>
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-200">{skill.name}</span>
                <span className="text-slate-500 text-sm">{skill.category}</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{
                    width: 0
                  }}
                  whileInView={{
                    width: `${skill.level}%`
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: 'easeOut'
                  }}
                  className="h-full bg-cyan-500 rounded-full relative">

                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>);

}