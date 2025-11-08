import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">About</h2>
            <p className="text-white/80 leading-relaxed">
              I’m Rehan, a curious technologist who enjoys turning ideas into interactive products. My journey blends
              code, design, and a love for gaming to craft seamless, functional experiences.
            </p>
            <p className="text-white/70 mt-4">
              I’m studying at Nxt Wave Institute of Advanced Technology and continuously exploring new tools and
              frameworks. I love UI/UX, No-Code platforms, and building practical solutions that make an impact.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/20 border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.25)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
