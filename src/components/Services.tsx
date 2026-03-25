import { motion } from 'motion/react';
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  Database, 
  Globe, 
  Code2, 
  Cpu, 
  Search 
} from 'lucide-react';

const services = [
  {
    title: 'FRONTEND DEVELOPMENT',
    description: 'Building high-performance, responsive web applications with React and modern CSS. Focusing on speed, accessibility, and smooth user experiences.',
    icon: Monitor,
    color: 'accent-cyan',
  },
  {
    title: 'UI/UX DESIGN',
    description: 'Creating intuitive and visually stunning interfaces that provide seamless user journeys. specialized in modern, neo-brutalist and cyberpunk aesthetics.',
    icon: Layers,
    color: 'accent-red',
  },
  {
    title: 'BACKEND SOLUTIONS',
    description: 'Developing robust server-side logic and database architectures using Python, Node.js, and various SQL/NoSQL databases.',
    icon: Database,
    color: 'accent-yellow',
  },
  {
    title: 'DATA SCIENCE & AI',
    description: 'Leveraging data to build intelligent systems. implementation of machine learning models and data visualization for actionable insights.',
    icon: Cpu,
    color: 'accent-cyan',
  },
  {
    title: 'MOBILE OPTIMIZATION',
    description: 'Ensuring your digital presence works perfectly across all devices and screen sizes with a mobile-first approach.',
    icon: Smartphone,
    color: 'accent-red',
  },
  {
    title: 'SOLO FREELANCING',
    description: 'Providing end-to-end digital solutions for startups and businesses. From concept to deployment, I handle the full lifecycle.',
    icon: Globe,
    color: 'accent-yellow',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            className="text-6xl md:text-9xl leading-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WHAT I <br />
            <span className="text-accent-red">DO</span>
          </motion.h2>
          <p className="mt-8 max-w-xl text-xl font-light leading-relaxed">
            I offer a wide range of services to help you build your next digital product.
            Combining technical expertise with a sharp eye for design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-black">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`p-10 border-black border-2 group hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Background index number */}
              <span className="absolute top-4 right-6 text-7xl font-black opacity-5 group-hover:opacity-20 transition-opacity">
                0{i + 1}
              </span>

              <div className={`mb-8 p-4 border-4 border-black inline-block group-hover:bg-accent-${service.color === 'accent-cyan' ? 'cyan' : service.color === 'accent-red' ? 'red' : 'yellow'} transition-colors duration-300`}>
                <service.icon size={32} />
              </div>

              <h3 className="text-3xl font-black mb-4 leading-none uppercase tracking-tighter">
                {service.title}
              </h3>
              
              <p className="font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className="mt-8 w-12 h-2 bg-black group-hover:bg-white transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tilted Marquee for visual interest */}
      <div className="mt-24 -mx-10 rotate-1 bg-black text-white py-6 border-y-4 border-accent-cyan overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12"
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-5xl font-display font-black uppercase tracking-tighter">
              INNOVATE • DISRUPT • BUILD • DESIGN • CODE • EVOLVE • CREATE • EXECUTE • 
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
