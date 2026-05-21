import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Send, Github, Linkedin, MessageSquare, Check, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');
    setIsSuccess(false);

    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_KEY || '';

    if (!accessKey) {
      // If VITE_WEB3FORMS_KEY is not defined, fall back to opening mailto: to send to sridharkonda553@gmail.com
      const mailtoUrl = `mailto:sridharkonda553@gmail.com?subject=${encodeURIComponent(
        `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      console.info("No VITE_WEB3FORMS_KEY found. Routing message via client-side mailto fallback to sridharkonda553@gmail.com.");
      
      // Open the user's mail client with draft pre-filled
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
          from_name: `${formData.name} via Portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMessage(result.message || 'Failed to transmit message. Please try again.');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setErrorMessage('Network connection lost. Please verify your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-18 xl:py-22 2xl:py-28 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative bg-transparent">
      {/* Background visual elements */}
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[95%] 2xl:max-w-[1800px] mx-auto z-10 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal text-white relative inline-block pb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Get In Touch
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-cyan-400 rounded-full"
            />
          </motion.h2>
          <p className="text-muted-foreground mt-4 text-sm xl:text-base 2xl:text-lg tracking-wider uppercase font-mono">
            Get connected in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 2xl:gap-24 items-stretch">
          
          {/* Info Side - Left (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl xl:text-4xl 2xl:text-5xl text-white font-normal mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Let's Connect
              </h3>
              
              <p className="text-gray-100 text-sm sm:text-base xl:text-lg 2xl:text-xl leading-relaxed mb-10 max-w-md xl:max-w-xl">
                I'm open to new opportunities to build scalable and responsive software. 
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
              </p>

              {/* Direct channels */}
              <div className="space-y-4">
                {/* Email Option */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 xl:gap-5 liquid-glass hover:bg-white/5 hover:border-cyan-500/20 p-4 xl:p-6 rounded-2xl shadow-md cursor-pointer group"
                >
                  <div className="p-3 xl:p-4 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Mail size={18} className="xl:w-5.5 xl:h-5.5" />
                  </div>
                  <div>
                    <span className="text-xs xl:text-sm text-muted-foreground font-mono block">Email</span>
                    <a href="mailto:sridharkonda553@gmail.com" className="text-sm xl:text-base text-white group-hover:text-cyan-400 transition-colors font-semibold font-mono">
                      sridharkonda553@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone Option */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 xl:gap-5 liquid-glass hover:bg-white/5 hover:border-indigo-500/20 p-4 xl:p-6 rounded-2xl shadow-md cursor-pointer group"
                >
                  <div className="p-3 xl:p-4 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-black transition-all">
                    <Phone size={18} className="xl:w-5.5 xl:h-5.5" />
                  </div>
                  <div>
                    <span className="text-xs xl:text-sm text-muted-foreground font-mono block">Phone</span>
                    <a href="tel:+919347389152" className="text-sm xl:text-base text-white group-hover:text-indigo-400 transition-colors font-semibold font-mono">
                      +91 9347389152
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social media links pile */}
            <div className="mt-12 pt-6 border-t border-white/5">
              <span className="text-xs xl:text-sm text-muted-foreground font-mono uppercase tracking-wider block mb-4">
                Explore Digital Portals
              </span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/sridhar56556" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3.5 xl:p-4.5 bg-white/5 hover:bg-cyan-500 hover:text-[#050e18] text-gray-300 rounded-full transition-all border border-white/5 flex items-center justify-center hover:scale-105"
                >
                  <Github size={20} className="xl:w-5.5 xl:h-5.5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kondasridhar" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3.5 xl:p-4.5 bg-white/5 hover:bg-cyan-500 hover:text-[#050e18] text-gray-300 rounded-full transition-all border border-white/5 flex items-center justify-center hover:scale-105"
                >
                  <Linkedin size={20} className="xl:w-5.5 xl:h-5.5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Form Side - Right (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 liquid-glass rounded-3xl p-8 sm:p-10 xl:p-14 2xl:p-18 shadow-xl backdrop-blur-xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Input Name */}
              <div className="space-y-1.5 animate-fade-rise">
                <label className="text-xs xl:text-sm 2xl:text-base font-mono font-medium text-slate-300 block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 xl:py-4.5 xl:text-base 2xl:py-5.5 2xl:text-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-gray-400"
                />
              </div>

              {/* Form Input Email */}
              <div className="space-y-1.5">
                <label className="text-xs xl:text-sm 2xl:text-base font-mono font-medium text-slate-300 block">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 xl:py-4.5 xl:text-base 2xl:py-5.5 2xl:text-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-gray-400"
                />
              </div>

              {/* Form Textarea Msg */}
              <div className="space-y-1.5">
                <label className="text-xs xl:text-sm 2xl:text-base font-mono font-medium text-slate-300 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hello Sridhar, I'd like to talk about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 xl:py-4.5 xl:text-base 2xl:py-5.5 2xl:text-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Success alert message with beautiful fade-in */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/25 text-green-300 flex items-center gap-3 text-sm font-mono"
                  >
                    <Check size={18} className="text-green-400 flex-shrink-0" />
                    <div>
                      <span className="font-semibold block text-white text-xs uppercase mb-0.5">Transmission Succeeded</span>
                      Your message was successfully routed directly to Konda Sridhar. Thank you!
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error message */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 flex items-center gap-3 text-sm font-mono animate-pulse"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0 block" />
                    <div>
                      <span className="font-semibold block text-white text-xs uppercase mb-0.5">Transmission Failed</span>
                      {errorMessage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button with animated rocket / paper plane */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 xl:py-5 xl:px-8 xl:text-base 2xl:py-6 2xl:px-10 2xl:text-lg rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 relative cursor-pointer overflow-hidden ${
                  isSubmitting 
                    ? 'bg-slate-800 text-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:scale-[1.01] hover:brightness-110'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 xl:w-5 xl:h-5 rounded-full border-2 border-slate-400 border-t-transparent animate-spin" />
                    <span>Routing with API gateway...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} className="xl:w-4.5 xl:h-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Developer Key Tip */}
              {!(import.meta as any).env.VITE_WEB3FORMS_KEY && (
                <div className="text-[10px] sm:text-xs text-slate-500 font-mono text-center mt-3 border border-white/5 bg-white/5 rounded-lg p-2.5">
                  💡 <span className="text-cyan-400 font-bold">Web3Forms Guide:</span> Add <code className="text-slate-300">VITE_WEB3FORMS_KEY="your-access-key"</code> in your local <code className="text-slate-300">.env</code> to receive real email delivery. Obtain a key instantly at <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="underline text-cyan-400 font-semibold hover:text-cyan-300">web3forms.com</a>.
                </div>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
