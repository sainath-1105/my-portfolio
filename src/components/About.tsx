import { motion } from 'motion/react';
import { Eye, Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with Fade-in from Left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-accent-red -z-10" />
            <img
              src="/image.jpg"
              alt="Sainath's Portrait"
              className="w-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-black object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute bottom-8 -right-8 bg-accent-yellow p-6 border-4 border-black hidden md:block">
              <p className="font-display font-black text-2xl uppercase">EST. 2005</p>
            </div>
          </motion.div>

          {/* Text Section with Fade-in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-8xl mb-8 leading-none">
              ABOUT <br />
              <span className="text-accent-red">ME</span>
            </h2>
            <p className="text-xl font-light leading-relaxed mb-8">
              I am a multidisciplinary developer and designer building digital products that are fast, functional, and visually striking. I combine engineering logic with design instinct to create interfaces that feel sharp, modern, and intentional.
              My work focuses on clarity over decoration, performance over noise, and originality over trends. Every project is crafted to deliver real impact — not just look good.
              I believe strong design should communicate instantly, work flawlessly, and leave a lasting impression.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-accent-red hover:text-white transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={20} /> View CV
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download="Sainath_Biradar_CV.pdf"
                className="px-8 py-4 border-4 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} /> Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
