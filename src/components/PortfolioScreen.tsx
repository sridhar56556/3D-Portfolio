import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  Terminal, 
  ArrowUpRight, 
  Sparkles, 
  Code, 
  Database, 
  Wrench,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Phone,
  ArrowRight,
  Download,
  ExternalLink
} from 'lucide-react';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

export default function PortfolioScreen() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse Move Interaction for 3D Parallax effect on Hero Avatar
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX - window.innerWidth / 2) / 35,
      y: (clientY - window.innerHeight / 2) / 35,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-transparent text-white selection:bg-cyan-500 selection:text-black font-sans relative"
    >
      {/* Background visual atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#030a13]/30 backdrop-blur-[1px]" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-cyan-900/10 via-indigo-950/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gradient-to-t from-purple-950/10 via-slate-950/10 to-transparent blur-[150px]" />
      </div>

      {/* GLASSMORPHIC FLOATING HEADER */}
      <div className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto bg-[#0b1b2d]/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full py-3 xl:py-5 px-4 sm:px-6 xl:px-12 w-full max-w-[95%] 2xl:max-w-[1800px] flex items-center justify-between transition-all duration-500 hover:bg-[#0b1b2d]/60 hover:border-white/20"
        >
          <div 
            onClick={() => scrollToSection('home')}
            className="text-2xl xl:text-3xl font-bold tracking-tight text-white cursor-pointer select-none flex items-center gap-2 group"
          >
            <div className="relative">
              <span className="text-cyan-400 bg-cyan-500/10 px-2.5 py-1 xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-3 rounded-full border border-cyan-500/20 font-mono text-sm xl:text-lg 2xl:text-xl relative z-10 transition-colors group-hover:bg-cyan-500/20">KS</span>
              <span className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Regular Navbar Links */}
          <nav className="hidden lg:flex items-center space-x-1.5 bg-white/5 p-1.5 rounded-full border border-white/5">
            {['home', 'about', 'skills', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`capitalize px-4 py-1.5 xl:px-7 xl:py-3 2xl:px-9 2xl:py-3.5 rounded-full text-sm xl:text-lg 2xl:text-xl font-semibold transition-all duration-300 relative cursor-pointer border-none ${
                  activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5 bg-transparent'
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicator" 
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/30 rounded-full w-full h-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </nav>

          {/* Header CTAs */}
          <div className="flex items-center gap-3 xl:gap-4">
            <a
              href="https://drive.google.com/file/d/1y8EZGv9UULvCOE5fJBrMN3ABhgQKkUZx/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 xl:px-7 xl:py-3.5 2xl:px-9 2xl:py-4 rounded-full text-xs xl:text-base 2xl:text-lg font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-white cursor-pointer transition-all hover:scale-105 bg-transparent no-underline"
            >
              <FileText className="text-cyan-400 w-3.5 h-3.5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
              <span>Resume</span>
            </a>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 py-2 px-4 xl:py-3.5 xl:px-7 2xl:py-4 2xl:px-9 rounded-full text-xs xl:text-base 2xl:text-lg font-semibold bg-cyan-500 text-black hover:bg-cyan-400 cursor-pointer transition-all hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer border-none bg-transparent transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.header>
      </div>

      {/* MOBILE FULLSCREEN SIDE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#040c16] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-white/5 mb-8">
                <span className="text-xl font-bold font-mono text-cyan-400">KS.</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer border-none bg-transparent"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col space-y-5 text-lg font-medium">
                {['home', 'about', 'skills', 'projects', 'contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => scrollToSection(tab)}
                    className={`text-left capitalize py-2 transition-all border-none bg-transparent cursor-pointer ${
                      activeTab === tab ? 'text-cyan-400 pl-3 border-l-2 border-cyan-400' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://drive.google.com/file/d/1y8EZGv9UULvCOE5fJBrMN3ABhgQKkUZx/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer text-white no-underline"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </a>
              
              <div className="flex gap-4 justify-center py-2 text-slate-400">
                <a href="https://github.com/sridhar56556" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/kondasridhar" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={18} /></a>
                <a href="mailto:sridharkonda553@gmail.com" className="hover:text-white"><Mail size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PORTFOLIO HERO HERO SECTION (HOME) */}
      <section 
        id="home" 
        className="min-h-[80vh] xl:min-h-screen flex items-center pt-20 pb-12 xl:pt-28 xl:pb-16 justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative overflow-hidden"
      >
        <div className="max-w-[95%] 2xl:max-w-[1800px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 2xl:gap-28 items-center relative z-10">
          
          {/* Details - Left Side (7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="h-2 w-2 xl:h-3 xl:w-3 rounded-full bg-cyan-400 animate-pulse animate-duration-1000" />
              <span className="text-cyan-400 hover:underline uppercase tracking-widest text-xs xl:text-base 2xl:text-lg font-mono font-bold">
                Hello, I'm
              </span>
            </div>

            {/* Video-backed animated name */}
            <div className="relative overflow-hidden inline-block max-w-full mb-6 rounded-3xl border border-white/10 group mt-2 self-start shadow-2xl">
              <video 
                autoPlay loop muted playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 blur-[1px] group-hover:blur-none"
                src="https://cdn.pixabay.com/video/2022/10/25/136453-764956342_large.mp4" 
              />
              <div className="absolute inset-0 bg-[#0b1b2d]/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20" />
              <div className="relative z-10 px-5 py-3 sm:px-8 sm:py-5 xl:px-14 xl:py-8 2xl:px-18 2xl:py-10 backdrop-blur-sm">
                <h1 
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.5rem] tracking-tight text-white font-normal leading-none break-words"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Konda Sridhar
                </h1>
              </div>
            </div>

            {/* Subtitle Roles */}
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-mono text-cyan-300 font-semibold uppercase tracking-widest mb-6 xl:mb-8 leading-relaxed">
              Backend Developer <span className="text-white/30 mx-2">/</span> Full Stack Developer
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl leading-relaxed max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mb-8 xl:mb-10 relative z-10">
              A Computer Science graduate with hands-on experience building Java backend systems, 
              MySQL databases, and responsive web applications. Passionate about innovation and delivering 
              quality digital solutions that bridge rigorous backend processes with interactive, modern visual environments.
            </p>
          </motion.div>

            {/* Interactive Parallax 3D Avatar Frame - Right Side (5 columns) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="lg:col-span-5 flex flex-col justify-center items-center"
            >
            {/* Multi-layered orbital glowing structure */}
            <div 
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 xl:w-[380px] xl:h-[380px] 2xl:w-[440px] 2xl:h-[440px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
              style={{
                transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Outer Pulsing Glow Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-600 to-pink-500 blur-2xl opacity-40 animate-pulse pointer-events-none animate-duration-1500" />

              {/* Orbital Ring 1 */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 border border-dashed border-cyan-400/20 rounded-full pointer-events-none"
              />

              {/* Orbital Ring 2 */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 border border-dotted border-pink-500/15 rounded-full pointer-events-none"
              />

              {/* Main Avatar Frame */}
              <div className="absolute inset-7 xl:inset-10 border border-white/20 rounded-full flex items-center justify-center overflow-hidden shadow-2xl bg-[#071322] z-10">
                
                {/* Image completely filling the circle */}
                <img 
                  src="https://res.cloudinary.com/dgaqfgszr/image/upload/v1779265230/linkdin_pic_cfbnyp.jpg" 
                  alt="Konda Sridhar"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Lower Highlight Frame Gradient */}
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-cyan-400/20 to-transparent pointer-events-none" />
              </div>

              {/* Mini Interactive badge tag */}
              <div 
                className="absolute -bottom-2 right-4 xl:right-12 bg-slate-900 border border-white/10 p-2.5 xl:p-4 2xl:p-5 rounded-2xl flex items-center gap-2 xl:gap-3 shadow-2xl z-20"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-green-500 relative">
                  <span className="animate-ping absolute inset-0 rounded-full bg-green-500 opacity-75 animate-duration-1000" />
                </div>
                <span className="text-[10px] xl:text-sm 2xl:text-base font-mono text-white tracking-wide">Ready for Hire</span>
              </div>
            </div>

            {/* CTAs Button Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-4 mt-8 xl:mt-12 z-50 w-full mb-8 relative pointer-events-auto">
              <a
                href="https://drive.google.com/file/d/1y8EZGv9UULvCOE5fJBrMN3ABhgQKkUZx/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1A2634] hover:bg-[#253648] px-3 py-3 xl:px-6 xl:py-5 xl:rounded-2xl rounded-lg text-white text-xs sm:text-sm xl:text-lg 2xl:text-xl font-semibold flex items-center border border-white/20 transition-all cursor-pointer no-underline justify-center shadow-lg hover:shadow-cyan-500/20 active:scale-95 min-w-0"
              >
                <span>View Resume</span>
              </a>

              <a
                href="https://github.com/sridhar56556"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1A2634] hover:bg-[#253648] px-3 py-3 xl:px-6 xl:py-5 xl:rounded-2xl rounded-lg text-white text-xs sm:text-sm xl:text-lg 2xl:text-xl font-semibold flex items-center border border-white/20 transition-all cursor-pointer no-underline justify-center shadow-lg hover:shadow-cyan-500/20 active:scale-95 min-w-0"
              >
                <span>GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/kondasridhar"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1A2634] hover:bg-[#253648] px-3 py-3 xl:px-6 xl:py-5 xl:rounded-2xl rounded-lg text-white text-xs sm:text-sm xl:text-lg 2xl:text-xl font-semibold flex items-center border border-white/20 transition-all cursor-pointer no-underline justify-center shadow-lg hover:shadow-cyan-500/20 active:scale-95 min-w-0"
              >
                <span>LinkedIn</span>
              </a>
              
              <a
                href="mailto:sridharkonda553@gmail.com"
                className="bg-[#1A2634] hover:bg-[#253648] px-3 py-3 xl:px-6 xl:py-5 xl:rounded-2xl rounded-lg text-white text-xs sm:text-sm xl:text-lg 2xl:text-xl font-semibold flex items-center border border-white/20 transition-all cursor-pointer no-underline justify-center shadow-lg hover:shadow-cyan-500/20 active:scale-95 min-w-0"
              >
                <span>Email</span>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* DETAILED SUMMARY & EDUCATION (ABOUT ME) */}
      <AboutSection />

      {/* TECHNICAL SKILLS PILE */}
      <SkillsSection />

      {/* HIGH INTERACTIVE PORTFOLIO PROJECTS */}
      <ProjectsSection />

      {/* CONNECT & CHANNELS */}
      <ContactSection />

      {/* DIGITAL RESUME PREVIEW MODAL */}
      <AnimatePresence>
        {resumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-8 sm:p-12 max-h-[85vh] text-left"
            >
              {/* Actions Bar */}
              <div className="flex justify-between items-center pb-6 border-b border-slate-200 mb-8 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="p-1 px-3 bg-indigo-100 text-indigo-700 rounded text-[11px] font-mono font-bold tracking-widest uppercase">
                    Validated resume
                  </span>
                  <span className="text-muted-foreground text-xs font-mono">• TS/React/Java Stack</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer transition-all border-none"
                  >
                    <Download size={13} />
                    <span>Print Document</span>
                  </button>
                  <a
                    href="https://drive.google.com/file/d/1y8EZGv9UULvCOE5fJBrMN3ABhgQKkUZx/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-slate-150 text-slate-700 hover:bg-slate-200 cursor-pointer transition-all border border-slate-200 no-underline"
                  >
                    <ExternalLink size={13} className="text-slate-500" />
                    <span>Get PDF</span>
                  </a>
                  <button
                    onClick={() => setResumeOpen(false)}
                    className="p-2 rounded-xl text-slate-500 hover:text-black hover:bg-slate-100 transition-all border-none bg-transparent cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Printable Document Frame */}
              <div className="overflow-y-auto flex-1 pr-2 space-y-8 font-serif leading-relaxed text-sm sm:text-base">
                
                {/* Header info */}
                <div className="space-y-2 border-b-2 border-slate-900 pb-6 text-slate-800">
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-sans">Konda Sridhar</h1>
                  <h2 className="text-lg font-mono text-indigo-700 font-semibold uppercase tracking-wider">Backend Developer / Full Stack Software Graduate</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 font-mono text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Mail size={12} className="text-slate-500" />
                      <span>sridharkonda553@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone size={12} className="text-slate-500" />
                      <span>+91 9347389152</span>
                    </div>
                    <div>
                      <span>Location: Telangana, India</span>
                    </div>
                  </div>
                </div>

                {/* Professional Statement */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-sans uppercase tracking-wide border-b border-slate-300 pb-1 mb-3">Professional Summary</h3>
                  <p className="text-slate-700 leading-relaxed font-sans text-sm">
                    Highly analytical and driven Computer Science and Engineering graduate specializing in Java backend development 
                    and responsive client interfaces. Proven competence in creating robust, scalable logical code paths, building relational databases 
                    via MySQL/SQL queries, and testing enterprise operations for missing edges and runtime leaks. Open to entry positions anywhere globally.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-sans uppercase tracking-wide border-b border-slate-300 pb-1 mb-3">Education Section</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start font-sans text-sm">
                        <span className="font-bold text-slate-900">Bachelor of Technology (Computer Science & Engineering)</span>
                        <span className="text-slate-600 font-mono">2021 – 2025</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-600 italic">
                        <span>Sree Chaitanya Institute of Technological Sciences, Karimnagar</span>
                        <span className="font-mono font-semibold">Aggregate Score: 68%</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-start font-sans text-sm">
                        <span className="font-bold text-slate-900">Intermediate (MPC Branch)</span>
                        <span className="text-slate-600 font-mono">2019 – 2021</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-600 italic">
                        <span>Kakatiya Junior College, Huzurabad</span>
                        <span className="font-mono font-semibold">Aggregate Score: 73%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects in detail text */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-sans uppercase tracking-wide border-b border-slate-300 pb-1 mb-4">Selected Key Applications</h3>
                  
                  <div className="space-y-4 font-sans text-sm">
                    <div>
                      <div className="flex justify-between text-slate-900 font-semibold">
                        <span>1. Voice AI Agent (Project Genesis)</span>
                        <span className="text-xs font-mono text-indigo-700">React, Gemini AI API, Firebase</span>
                      </div>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        Features a high-speed, voice-activated user dashboard. Employs Gemini API for natural conversation pipelines, 
                        and integrates the Web Speech API on the client side for live listening functionality. Includes instantaneous redirections.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-900 font-semibold">
                        <span>2. AI Support Assistant</span>
                        <span className="text-xs font-mono text-indigo-700">Spring Boot, React, MySQL, OpenRouter</span>
                      </div>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        A custom responsive assistant that coordinates client inputs, uses OpenRouter NLP models for dialog responses, 
                        and applies CoreNLP engines for immediate user emotional metrics. Persists analytics reports in MySQL storage.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-900 font-semibold">
                        <span>3. Secure Banking System (NeoBank)</span>
                        <span className="text-xs font-mono text-indigo-700">Java, JDBC, SQL, Express, EmailJS</span>
                      </div>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        A full banking portal for managing deposits and transactional flows. Provides automatic OTP codes via EmailJS, 
                        uses secure backend middleware, and stores transaction history tables cleanly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Competencies */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-sans uppercase tracking-wide border-b border-slate-300 pb-1 mb-3">Core Technical Skills</h3>
                  <div className="grid grid-cols-3 gap-4 font-sans text-xs text-slate-700">
                    <div>
                      <span className="font-bold block text-slate-900 mb-1">Languages & Systems</span>
                      <span>Java, Spring Boot, JDBC, SQL, JavaScript, HTML5, CSS3, ES6+</span>
                    </div>
                    <div>
                      <span className="font-bold block text-slate-900 mb-1">Web Tools & State</span>
                      <span>React, Tailwind CSS, Vite, Framer Motion, Node.js, Express</span>
                    </div>
                    <div>
                      <span className="font-bold block text-slate-900 mb-1">Ecosystems</span>
                      <span>Git, Version Management, Debugging, API Clients, MySQL Databases</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Close footer */}
              <div className="flex gap-4 border-t border-slate-200 mt-6 pt-6 flex-shrink-0 justify-end">
                <button
                  onClick={() => setResumeOpen(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border-none cursor-pointer"
                >
                  Close Document
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FLOATING INTERACTIVE MOCK TERMINAL DIALOG */}
      <AnimatePresence>
        {terminalOpen && (
          <div className="fixed bottom-6 right-6 z-50 w-full max-w-md hidden sm:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-[#0b1320] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs flex flex-col"
            >
              <div className="bg-slate-950 px-4 py-2.5 flex items-center justify-between border-b border-white/5 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-[10px] text-slate-400 ml-2">Console Shell</span>
                </div>
                <button
                  onClick={() => setTerminalOpen(false)}
                  className="p-1 rounded hover:bg-white/5 text-slate-400 hover:text-white border-none bg-transparent cursor-pointer"
                >
                  <X size={12} />
                </button>
              </div>

              <div className="p-4 space-y-3 max-h-60 overflow-y-auto min-h-[160px] text-slate-300">
                <p className="text-green-400">{"$ guest@konda.io: whoami"}</p>
                <p className="text-slate-300 pl-2">{"Welcome guest! You are looking at Konda Sridhar's workspace."}</p>
                
                <p className="text-green-400">{"$ guest@konda.io: fetch --credentials"}</p>
                <p className="text-yellow-400 pl-2">{"[STATUS] sridharkonda553@gmail.com. Online in Telangana."}</p>
                <p className="text-yellow-400 pl-2">{"[INFO] B.Tech CSE Grad with 68% and active hands-on Java focus."}</p>
                
                <p className="text-green-400">{"$ guest@konda.io: status"}</p>
                <motion.p 
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-cyan-400 pl-2 font-semibold"
                >
                  {"● SERVER STATUS: ACTIVE (Port 3000 online)"}
                </motion.p>
              </div>

              <div className="p-3 border-t border-white/5 bg-slate-950 flex items-center justify-between text-[10px] text-slate-500 px-4">
                <span>System: Linux x86_64</span>
                <span>Type ESC to quit</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DIGITAL FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 bg-slate-950/45 text-center text-xs text-muted-foreground relative z-10 font-mono">
        <p className="mb-2">© {new Date().getFullYear()} Konda Sridhar. All rights reserved.</p>
        <p className="text-slate-600">Built using React v19, Tailwind CSS, TypeScript, and Framer Motion.</p>
      </footer>
    </div>
  );
}
