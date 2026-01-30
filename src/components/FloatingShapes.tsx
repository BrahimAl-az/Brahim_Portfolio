import { motion } from 'framer-motion';
const shapes = [
  {
    size: 80,
    x: '10%',
    y: '20%',
    duration: 25,
    delay: 0
  },
  {
    size: 120,
    x: '80%',
    y: '10%',
    duration: 30,
    delay: 2
  },
  {
    size: 60,
    x: '70%',
    y: '60%',
    duration: 20,
    delay: 4
  },
  {
    size: 100,
    x: '20%',
    y: '70%',
    duration: 28,
    delay: 1
  },
  {
    size: 70,
    x: '50%',
    y: '40%',
    duration: 22,
    delay: 3
  },
  {
    size: 90,
    x: '85%',
    y: '80%',
    duration: 26,
    delay: 5
  }];

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) =>
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background:
              'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)',
            filter: 'blur(20px)'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay
          }} />

      )}
    </div>);

}