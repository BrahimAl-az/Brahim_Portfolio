import { motion } from 'framer-motion';
export function MeshGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base layer */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />

      {/* Animated mesh gradient */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40"
        xmlns="http://www.w3.org/2000/svg">

        <defs>
          <motion.radialGradient
            id="grad1"
            cx="30%"
            cy="30%"
            r="50%"
            animate={{
              cx: ['30%', '35%', '30%'],
              cy: ['30%', '25%', '30%']
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>

            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </motion.radialGradient>

          <motion.radialGradient
            id="grad2"
            cx="70%"
            cy="70%"
            r="50%"
            animate={{
              cx: ['70%', '65%', '70%'],
              cy: ['70%', '75%', '70%']
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}>

            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </motion.radialGradient>

          <motion.radialGradient
            id="grad3"
            cx="50%"
            cy="50%"
            r="50%"
            animate={{
              cx: ['50%', '55%', '50%'],
              cy: ['50%', '45%', '50%']
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}>

            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </motion.radialGradient>

          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur" />

            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo" />

          </filter>
        </defs>

        <g filter="url(#goo)">
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <rect width="100%" height="100%" fill="url(#grad2)" />
          <rect width="100%" height="100%" fill="url(#grad3)" />
        </g>
      </svg>

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

    </div>);

}