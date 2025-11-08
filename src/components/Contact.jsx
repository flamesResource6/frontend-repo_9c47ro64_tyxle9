import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4">
              <input className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-300/50" placeholder="Name" />
              <input className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-300/50" placeholder="Email" type="email" />
              <textarea className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-300/50" placeholder="Message" rows={5} />
              <button className="px-5 py-3 rounded-xl bg-cyan-400/20 border border-cyan-300/30 text-cyan-200 hover:bg-cyan-400/30 hover:border-cyan-300 transition-colors w-max">
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <p className="text-white/80">Connect with me on social platforms:</p>
            <div className="mt-4 grid gap-3">
              <a href="https://github.com/rehan-shaik" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Github size={18} className="text-cyan-300" /> github.com/rehan-shaik
              </a>
              <a href="https://linkedin.com/in/rehan-shaik" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Linkedin size={18} className="text-cyan-300" /> linkedin.com/in/rehan-shaik
              </a>
              <a href="https://instagram.com/rehan" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Instagram size={18} className="text-cyan-300" /> instagram.com/rehan
              </a>
              <a href="mailto:rehanroshan09@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Mail size={18} className="text-cyan-300" /> rehanroshan09@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
