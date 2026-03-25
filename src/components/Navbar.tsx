import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b-2 border-white' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-display font-black tracking-tighter"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          PORT<span className="text-accent-red">FOLIO</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group text-sm font-bold uppercase tracking-widest"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-accent-cyan origin-left z-50"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display font-black uppercase hover:text-accent-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
