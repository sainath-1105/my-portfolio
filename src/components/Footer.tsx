import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t-4 border-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-display font-black tracking-tighter mb-2">
            PORT<span className="text-accent-cyan">FOLIO  </span>
          </h2>
          <p className="text-white/40 text-sm font-bold uppercase tracking-widest">
            © 2026 SAINATH. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex gap-8">
          {[
            { name: 'INSTAGRAM', href: 'https://www.instagram.com/sai_here1105/' },
            { name: 'GITHUB', href: 'https://github.com/sainath-1105' },
            { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/sainath-biradar-9813aa307/?skipRedirect=true' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-black tracking-widest hover:text-accent-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          whileHover={{ y: -5 }}
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}
