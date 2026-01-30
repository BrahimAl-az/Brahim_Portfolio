import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}
export function Section({ children, id, className, delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
        delay
      }}
      className={cn('py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto', className)}>

      {children}
    </motion.section>);

}