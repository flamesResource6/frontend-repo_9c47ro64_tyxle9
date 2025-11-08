import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Neon Dashboard',
    desc: 'A glassmorphic, real-time analytics dashboard with glowing accents.',
    demo: '#',
    repo: '#',
  },
  {
    name: 'Game Hub',
    desc: 'A gaming-inspired hub showcasing APIs, reviews, and trailers.',
    demo: '#',
    repo: '#',
  },
  {
    name: 'UX Components',
    desc: 'A set of accessible UI/UX components designed for speed and style.',
    demo: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col"
            >
              <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-400/15 to-blue-500/10 border border-white/10 mb-4" />
              <h3 className="text-white font-medium text-lg">{p.name}</h3>
              <p className="text-white/70 mt-2 flex-1">{p.desc}</p>
              <div className="mt-4 flex gap-3">
                <a href={p.demo} className="px-4 py-2 rounded-lg bg-cyan-400/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-400/30">View Demo</a>
                <a href={p.repo} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 hover:bg-white/10">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
