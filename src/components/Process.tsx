import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'DISCOVERY',
    description: 'Deep dive into the project requirements, target audience, and competitive landscape. We define the problem and map out the strategy.',
    color: 'accent-cyan'
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Transforming ideas into high-fidelity designs. Focusing on neo-brutalist aesthetics that command attention and ensure usability.',
    color: 'accent-red'
  },
  {
    number: '03',
    title: 'DEVELOPMENT',
    description: 'Bringing designs to life with clean, efficient code. Using React, Tailwind, and cutting-edge frontend technologies for seamless performance.',
    color: 'accent-yellow'
  },
  {
    number: '04',
    title: 'DEPLOYMENT',
    description: 'Rigorous testing and optimization before the big launch. ensuring everything is fast, responsive, and ready for the world.',
    color: 'accent-cyan'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-background text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.h2 
            className="text-6xl md:text-9xl leading-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            WORK <br />
            <span className="text-accent-yellow">PROCESS</span>
          </motion.h2>
          <div className="max-w-xs text-white/40 font-bold uppercase tracking-widest text-sm text-right">
            A systematic approach to building exceptional digital products.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative p-8 border-4 border-white/10 hover:border-white transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`text-6xl font-black mb-6 group-hover:text-${step.color} transition-colors opacity-20 group-hover:opacity-100`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-white/60 group-hover:text-white transition-colors font-light leading-relaxed">
                {step.description}
              </p>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-transparent group-hover:border-${step.color} transition-all duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
