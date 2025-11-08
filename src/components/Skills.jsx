import { motion } from 'framer-motion';
import { Code2, Database, Palette, Boxes } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'Node.js', icon: Boxes },
  { name: 'Python', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'No-Code Tools', icon: Boxes },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />
              <div className="relative flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-400/15 border border-cyan-300/20 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                  {s.icon && <s.icon className="text-cyan-300" size={22} />}
                </div>
                <div>
                  <p className="text-white/90 font-medium">{s.name}</p>
                  <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.5)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
