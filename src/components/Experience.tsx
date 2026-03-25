import { motion } from 'motion/react';

const experiences = [
  {
    year: '2026 - PRESENT',
    role: 'FRONTEND DEVELOPER INTERN',
    company: 'KRYTEL',
    description: 'Developed responsive websites and learned the fundamentals of modern web development',
  },
  {
    year: '2026',
    role: 'ACHIVEMENT',
    company: 'CIRCUIT-X HACKATHON WINNER 3RD PLACE',
    description: 'Secured a 3rd place in circuit-x hackathon held at cit, banglore',
  },
  {
    year: '2026',
    role: 'ISR COORDINATOR',
    company: 'CIT, BANGALORE',
    description: 'Organized and led various social service activities, fostering teamwork and community engagement',
  },
  {
    year: '2025',
    role: 'NSS COORDINATOR',
    company: 'CIT, BANGALORE',
    description: 'Organized and led various social service activities, fostering teamwork and community engagement',
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl md:text-8xl leading-none mb-20 text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          EXPERI<span className="text-accent-yellow">ENCE</span>
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.year}-${exp.company}-${i}`}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b-4 border-white/20 pb-12 group hover:border-accent-cyan transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-accent-cyan font-display font-bold text-xl">{exp.year}</div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-black mb-2 group-hover:text-accent-cyan transition-colors">{exp.role}</h3>
                <p className="text-white/60 font-light leading-relaxed">{exp.description}</p>
              </div>
              <div className="text-right font-display font-black text-2xl text-white/40 uppercase">{exp.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
