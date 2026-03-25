import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to throttle mouse move updates
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hovering = !!(target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button'));
      
      setIsHovering(prev => {
        if (prev !== hovering) return hovering;
        return prev;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-accent-cyan selection:text-black">
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center p-6"
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <motion.h1 
              className="text-6xl md:text-9xl font-display font-black tracking-tighter mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              PORT<span className="text-accent-red">FOLIO</span>
            </motion.h1>
            <div className="w-64 h-2 bg-white/10 border-2 border-white relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent-cyan"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-4 font-display font-bold uppercase tracking-widest text-sm">Loading Experience...</p>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Custom Cursor */}
            <motion.div 
              className="custom-cursor hidden md:block"
              animate={{ 
                x: mousePos.x, 
                y: mousePos.y,
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.2)' : 'transparent'
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
            />

            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
