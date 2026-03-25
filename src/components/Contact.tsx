import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import Player from 'react-lottie-player';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-accent-cyan text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              className="text-6xl md:text-9xl leading-none mb-8"
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
            >
              LET'S <br />
              <span className="bg-black text-white px-4">TALK</span>
            </motion.h2>
            <p className="text-2xl font-bold mb-12 max-w-md">
              Have a project in mind? Want to collaborate? Or just want to say hi?
            </p>

            <div className="space-y-4">
              <a href="mailto:sainath.23aiml@cambridge.edu.in" className="text-lg font-black uppercase tracking-widest border-b-2 border-black inline-block hover:text-white transition-colors">sainath.23aiml@cambridge.edu.in</a>
              <div className="flex gap-6 mt-8">
                {[
                  { name: 'IG', href: 'https://www.instagram.com/sai_here1105/' },
                  { name: 'LI', href: 'https://www.linkedin.com/in/sainath-biradar-9813aa307/?skipRedirect=true' },
                  { name: 'GH', href: 'https://github.com/sainath-1105' },
                ].map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black flex items-center justify-center font-black hover:bg-black hover:text-white transition-all">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-8 md:p-12 relative overflow-hidden">
            {status === 'success' ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <Player
                  play
                  path="https://lottie.host/79782559-007f-4796-9071-898124296489/X7O73m3q17.json"
                  style={{ height: '200px', width: '200px' }}
                />
                <h3 className="text-3xl font-black mt-6 uppercase">Message Sent!</h3>
                <p className="mt-4 font-bold">I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-8 py-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-accent-red transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2">Your Name</label>
                  <input
                    required
                    type="text"
                    className="w-full border-4 border-black p-4 font-bold focus:outline-none focus:bg-accent-yellow transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full border-4 border-black p-4 font-bold focus:outline-none focus:bg-accent-yellow transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border-4 border-black p-4 font-bold focus:outline-none focus:bg-accent-yellow transition-colors resize-none"
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                  />
                </div>
                <button
                  disabled={status === 'sending'}
                  className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-accent-red transition-all disabled:opacity-50"
                >
                  {status === 'sending' ? 'SENDING...' : (
                    <>
                      SEND MESSAGE <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
