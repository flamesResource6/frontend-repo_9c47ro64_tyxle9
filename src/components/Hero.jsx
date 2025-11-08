import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.35)]"
        >
          Rehan Shaik
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-3 text-cyan-300/90 text-lg md:text-2xl font-medium"
        >
          Student • Gamer • Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-5 text-white/80 max-w-2xl mx-auto"
        >
          Building the future one line of code at a time.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="mt-3 text-white/70 max-w-2xl mx-auto"
        >
          I’m Rehan Shaik — a student at Nxt Wave Institute of Advanced Technology who loves coding, designing, and gaming. I create digital experiences that blend design with functionality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-5 py-3 rounded-xl bg-cyan-400/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-400/30 hover:border-cyan-300 transition-colors shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'JavaScript' },
            { label: 'Node.js' },
            { label: 'Python' },
            { label: 'UI/UX' },
          ].map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.05 }}
              className="group p-3 rounded-xl bg-white/5 border border-white/10 text-white/80 backdrop-blur-xl hover:border-cyan-300/40 hover:bg-cyan-300/10 transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)] group-hover:scale-125 transition-transform" />
                <span>{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
