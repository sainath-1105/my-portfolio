import { motion } from 'motion/react';
import {
  Code2,
  Terminal,
  Database,
  Layout,
  Figma,
  Image as ImageIcon,
  BarChart3,
  Box,
  Cloud,
  Github,
  GitBranch,
  Globe,
  Cpu,
  Layers,
  Braces,
  Wind,
  Flame,
  Brain,
  Table,
  LineChart,
  Palette,
  PenTool,
  Server,
  Monitor,
  FileCode,
  FileJson
} from 'lucide-react';

const skillGroups = [
  {
    category: 'LANGUAGES',
    lottie: 'https://lottie.host/79782559-007f-4796-9071-898124296489/X7O73m3q17.json',
    skills: [
      { name: 'Java', icon: FileCode },
      { name: 'Python', icon: Terminal },
      { name: 'JavaScript', icon: FileJson },
      { name: 'PHP', icon: Server },
      { name: 'HTML5', icon: Globe },
    ]
  },
  {
    category: 'FRAMEWORKS',
    lottie: 'https://lottie.host/8017d23d-007f-4796-9071-898124296489/X7O73m3q17.json',
    skills: [
      { name: 'Django', icon: Layers },
      { name: 'Flask', icon: Server },
      { name: 'Bootstrap', icon: Layout },
      { name: 'TailwindCSS', icon: Wind },
    ]
  },
  {
    category: 'DATA SCIENCE',
    lottie: 'https://lottie.host/a8a7a7a7-007f-4796-9071-898124296489/X7O73m3q17.json',
    skills: [
      { name: 'NumPy', icon: Table },
      { name: 'Pandas', icon: Table },
      { name: 'Matplotlib', icon: LineChart },
      { name: 'scikit-learn', icon: Brain },
      { name: 'mlflow', icon: BarChart3 },
      { name: 'Anaconda', icon: Box },
    ]
  },
  {
    category: 'TOOLS & CLOUD',
    lottie: 'https://lottie.host/8017d23d-007f-4796-9071-898124296489/X7O73m3q17.json',
    skills: [
      { name: 'Firebase', icon: Flame },
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'Vercel', icon: Cloud },
      { name: 'Windows Terminal', icon: Monitor },
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
    ]
  },
  {
    category: 'DESIGN',
    lottie: 'https://lottie.host/a8a7a7a7-007f-4796-9071-898124296489/X7O73m3q17.json',
    skills: [
      { name: 'Adobe', icon: PenTool },
      { name: 'Figma', icon: Figma },
      { name: 'Canva', icon: Palette },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            className="text-6xl md:text-8xl leading-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            SKILLS & <br />
            <span className="text-accent-red">TOOLS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="border-4 border-black p-6 bg-white relative group/card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute -top-4 -left-4 bg-accent-cyan px-4 py-1 border-2 border-black font-black text-xs uppercase tracking-widest z-10">
                {group.category}
              </div>

              {/* Category Icon */}
              <div className="absolute top-4 right-4 text-black/10 group-hover/card:text-accent-cyan group-hover/card:scale-110 transition-all duration-300">
                {group.skills[0] && (() => {
                  const Icon = group.skills[0].icon;
                  return <Icon size={48} />;
                })()}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 bg-black/5 px-3 py-2 border-2 border-black/10 hover:border-black hover:bg-accent-yellow transition-all group/item">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <skill.icon size={18} className="group-hover/item:text-accent-red transition-colors" />
                      </motion.div>
                    </div>
                    <span className="font-bold text-sm uppercase tracking-tighter">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee effect for visual interest */}
        <div className="mt-32 -mx-6 border-y-4 border-black py-6 overflow-hidden bg-accent-yellow">
          <motion.div
            className="flex whitespace-nowrap gap-12"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-4xl font-display font-black uppercase tracking-tighter">
                Frontend Developer • UI Engineer • Product Designer • Creative Developer • Interaction Designer • Full Stack Developer • UX Designer • Web Experience Builder •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
