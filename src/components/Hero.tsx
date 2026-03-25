import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import ThreeDScene from './ThreeDScene';

const roles = ['Developer', 'Designer', 'freelancer', 'UI/UX Designer', 'creative'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    // If we finished typing a role, wait 2 seconds before deleting
    if (!isDeleting && displayText === currentRole) {
      const timer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timer);
    }

    // If we finished deleting a role, move to the next role
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    // Typing/Deleting logic
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden modern-grid">
      {/* 3D Background Scene */}
      <ThreeDScene />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* 1. Text Section - Always first */}
        <div className="z-10 order-1 lg:col-start-1 lg:row-start-1">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-9xl leading-none mb-2 lg:mb-4">
              I AM <br />
              <span className="text-accent-cyan">SAINATH</span>
            </h1>
            <div className="h-8 lg:h-12 flex items-center">
              <span className="text-xl sm:text-2xl md:text-4xl font-display font-light uppercase tracking-widest text-accent-yellow">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* 2. Animated Character Section - Second on mobile, Right column on desktop */}
        <div className="relative order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-[300px] lg:max-w-none mx-auto aspect-square border-2 lg:border-4 border-accent-cyan p-2 lg:p-4 relative"
          >
            <div className="absolute -top-2 -left-2 lg:-top-8 lg:-left-8 w-8 h-8 lg:w-24 lg:h-24 bg-accent-yellow z-0" />
            <div className="absolute -bottom-2 -right-2 lg:-bottom-8 lg:-right-8 w-10 h-10 lg:w-32 lg:h-32 border-2 lg:border-4 border-accent-red z-0" />

            <div className="w-full h-full bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <video
                src="/my.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* 3. Buttons Section - Third on mobile, Below text on desktop */}
        <div className="z-10 order-3 lg:col-start-1 lg:row-start-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="mb-8 text-sm sm:text-lg md:text-xl max-w-md text-white/70 font-light leading-relaxed hidden sm:block">
              Crafting digital experiences with sharp edges and bold ideas.
              Pushing the boundaries of modern UI design.
            </p>
            <div className="flex flex-row gap-4 lg:gap-6">
              <a
                href="#projects"
                className="flex-1 lg:flex-none px-6 lg:px-8 py-3 lg:py-4 bg-accent-red text-white text-sm lg:text-base font-bold uppercase tracking-widest border-2 border-accent-red hover:bg-transparent transition-all duration-300 text-center"
              >
                Work
              </a>
              <a
                href="#contact"
                className="flex-1 lg:flex-none px-6 lg:px-8 py-3 lg:py-4 border-2 border-white text-white text-sm lg:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent-red/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-cyan/10 blur-3xl -z-10" />
    </section>
  );
}
