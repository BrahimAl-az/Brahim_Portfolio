import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Database, Layout, PieChart, ShieldCheck, Terminal, Cpu } from 'lucide-react';

const categories = [
  {
    title: "Data Science & Analytics",
    icon: <PieChart className="w-6 h-6 text-purple-500" />,
    techs: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    bg: "bg-purple-500/10"
  },
  {
    title: "Web & App Development",
    icon: <Layout className="w-6 h-6 text-cyan-500" />,
    techs: ["React", "React Native", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    bg: "bg-cyan-500/10"
  },
  {
    title: "Backend & Infrastructure",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    techs: ["Node.js", "Django", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"],
    bg: "bg-emerald-500/10"
  }
];

const isometricIcons = [
  { char: 'Py', color: 'from-blue-400 to-yellow-400', delay: 0 },
  { char: 'Re', color: 'from-cyan-400 to-blue-500', delay: 0.1 },
  { char: 'Rn', color: 'from-blue-600 to-indigo-500', delay: 0.15 },
  { char: 'Ts', color: 'from-blue-500 to-blue-600', delay: 0.2 },
  { char: 'Tf', color: 'from-orange-500 to-orange-600', delay: 0.3 },
  { char: 'Dj', color: 'from-green-600 to-green-700', delay: 0.4 },
  { char: 'No', color: 'from-green-500 to-green-600', delay: 0.5 },
  { char: 'Pg', color: 'from-blue-600 to-indigo-600', delay: 0.6 },
  { char: 'Aw', color: 'from-orange-400 to-orange-500', delay: 0.7 },
];

export function TechStack() {
  return (
    <Section className="my-24 py-20 relative overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Tech Stack
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          The modern technologies and analytical tools I use to turn data into scalable solutions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Categorized Lists */}
        <div className="space-y-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-6 rounded-3xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cat.techs.join(", ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Isometric Grid */}
        <div className="relative h-[450px] flex items-center justify-center">
          <div className="grid grid-cols-3 gap-6 transform rotate-[30deg] skew-x-[-30deg]">
            {isometricIcons.map((icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: icon.delay,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: icon.delay
                  }
                }}
                animate={{
                  y: [-10, 10]
                }}
                className="relative group"
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${icon.color} shadow-2xl flex items-center justify-center transform group-hover:-translate-y-4 transition-transform duration-300 border border-white/20`}>
                  <span className="text-2xl md:text-3xl font-black text-white drop-shadow-md">
                    {icon.char}
                  </span>

                  {/* Glass overlay for the 3D look */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl transition-opacity opacity-0 group-hover:opacity-100" />
                </div>

                {/* 3D shadows */}
                <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}