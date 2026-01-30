import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Code2, Coffee, GitBranch, Award } from 'lucide-react';
import { Section } from './ui/Section';
interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  delay?: number;
}
function AnimatedStat({
  value,
  label,
  suffix = '',
  icon,
  delay = 0
}: StatProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(count, value, {
            duration: 2,
            delay,
            ease: 'easeOut'
          });
          return controls.stop;
        }
      },
      {
        threshold: 0.5
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [count, value, delay]);
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5,
        delay
      }}
      className="flex flex-col items-center text-center group">

      <div className="p-4 bg-cyan-500/10 rounded-2xl mb-4 group-hover:bg-cyan-500/20 transition-colors">
        <div className="text-cyan-500 w-8 h-8">{icon}</div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
        <motion.span>{rounded}</motion.span>
        <span className="text-cyan-500">{suffix}</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">{label}</p>
    </motion.div>);

}
export function Statistics() {
  return (
    <Section className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-3xl my-20 border border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <span className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider uppercase text-sm mb-2 block">
          By The Numbers
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Journey in Numbers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <AnimatedStat
          value={15}
          suffix="+"
          label="Projects Completed"
          icon={<Code2 className="w-full h-full" />}
          delay={0} />

        <AnimatedStat
          value={1000}
          suffix="+"
          label="Hours of Coding"
          icon={<Coffee className="w-full h-full" />}
          delay={0.1} />

        <AnimatedStat
          value={500}
          suffix="+"
          label="GitHub Commits"
          icon={<GitBranch className="w-full h-full" />}
          delay={0.2} />

        <AnimatedStat
          value={8}
          suffix="+"
          label="Certifications"
          icon={<Award className="w-full h-full" />}
          delay={0.3} />

      </div>
    </Section>);

}