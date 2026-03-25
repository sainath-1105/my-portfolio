import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SXRVERSE',
    category: 'MOVIE STREAMING',
    description: 'A premium movie and TV show streaming platform with a modern Netflix-style interface.',
    image: '/projects/sxrverse.png',
    github: 'https://github.com/sainath-1105/SXRverse',
    external: 'https://sxr-verse.vercel.app/',
    color: 'accent-red',
  },
  {
    title: 'VOLTMETRIC AI',
    category: 'AI & EV PLATFORM',
    description: 'EV Battery State-of-Health (SoH) Platform with RUL Prediction and Safety Alerts.',
    image: '/projects/voltmetric_ai_thumbnail_1774470494474.png',
    github: 'https://github.com/sainath-1105/batteryos-ev-platform',
    external: '#',
    color: 'accent-cyan',
  },
  {
    title: 'SIDDHAROODHA ELECTRICALS',
    category: 'E-COMMERCE / B2B',
    description: 'Digital catalog and billing system for electrical shops with admin inventory management.',
    image: '/projects/siddharoodha_electricals_thumbnail_1774470512087.png',
    github: 'https://github.com/sainath-1105/siddharoodha_electricals',
    external: '#',
    color: 'accent-yellow',
  },
  {
    title: 'CODEZERO',
    category: 'SECURE NOTEPAD',
    description: 'A secure and clean private notepad application for developers.',
    image: '/projects/coded_pad.png',
    github: 'https://github.com/sainath-1105/private_notepad',
    external: 'https://codezero-cwhf.onrender.com/',
    color: 'accent-cyan',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.h2 
            className="text-6xl md:text-8xl leading-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            SELECTED <br />
            <span className="text-accent-cyan">WORKS</span>
          </motion.h2>
          <p className="max-w-xs text-white/60 font-light uppercase tracking-widest text-sm text-right">
            A collection of digital experiments and commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative border-4 border-white p-4 bg-white/5 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden border-2 border-white mb-6">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 font-bold text-xs uppercase tracking-widest">
                  {project.category}
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-black leading-tight group-hover:text-accent-cyan transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/40 group-hover:text-white/70 transition-colors font-light text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-4 pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="cursor-pointer hover:text-accent-red transition-colors" size={24} />
                  </a>
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="cursor-pointer hover:text-accent-red transition-colors" size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="px-12 py-5 border-4 border-white text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
