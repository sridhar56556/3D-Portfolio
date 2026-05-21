import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Database, 
  Search, 
  Sparkles, 
  Cpu, 
  Smartphone, 
  Play, 
  X, 
  CheckCircle,
  HelpCircle,
  MessageSquare,
  Volume2
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'ai' | 'java' | 'react'>('all');
  const [search, setSearch] = useState('');

  // Tic-Tac-Toe state for interactive demo
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStatus, setGameStatus] = useState('Your turn (X)');

  // Voice AI Agent demo states
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [voiceQuery, setVoiceQuery] = useState('');

  const projects: Project[] = [
    {
      title: 'Voice AI Agent (Project Genesis)',
      codename: 'Project Genesis',
      description: 'A premium, high-speed voice-activated AI assistant featuring a futuristic neon-glowing interface. It leverages the Gemini API for natural language processing and integrates the Web Speech API for seamless voice interaction, with instant redirection to Google Search.',
      tags: ['React', 'Vite', 'Firebase', 'Gemini API', 'Tailwind CSS', 'Framer Motion', 'Web Speech API'],
      demoUrl: 'https://ai-voice-support-bot.web.app/assistant',
      codeUrl: 'https://github.com/sridhar56556/Voice-Chat-Ai-Agent'
    },
    {
      title: 'AI Support Assistant',
      codename: 'AI Support',
      description: 'A premium full-stack AI assistant featuring a glassmorphic interface and action-first logic. Built with Spring Boot and React, it integrates OpenRouter for intelligent responses and Stanford CoreNLP for sentiment analysis, with persistent MySQL storage.',
      tags: ['React', 'Spring Boot', 'MySQL', 'OpenRouter', 'CoreNLP', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: 'https://ai-chart-bot-2y0b.onrender.com/',
      codeUrl: 'https://github.com/sridhar56556/Ai-chart_bot'
    },
    {
      title: 'Secure Banking System (NeoBank)',
      codename: 'NeoBank',
      description: 'A sophisticated modern banking platform featuring real-time transaction processing, secure OTP authentication via EmailJS, and an instant loan approval system. Built with a focus on premium UI/UX and robust security protocols.',
      tags: ['React', 'Java', 'JDBC', 'MySQL', 'SQL', 'Node.js', 'Express', 'Tailwind CSS', 'EmailJS'],
      demoUrl: 'https://secure-banking-system-nyv5.onrender.com/',
      codeUrl: 'https://github.com/sridhar56556/Secure-banking-system'
    },
    {
      title: 'Online Ticket Booking System',
      codename: 'TicketBooking',
      description: 'Developed a responsive web application for booking tickets across bus, train, flight, and ship using React, Java, and MySQL. Created an interactive dashboard displaying bookings, travel history, and total cost with an intuitive real-time fare breakdown.',
      tags: ['React', 'Java', 'JDBC', 'MySQL', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://travel-hub-cb772.web.app/',
      codeUrl: 'https://github.com/sridhar56556/ticket-booking-system'
    },
    {
      title: 'Online Banking',
      codename: 'WebBanking',
      description: 'A comprehensive online banking platform designed to enable users to manage accounts, perform secure transactions, and seamlessly view transaction history with a focus on robust security.',
      tags: ['React', 'Java', 'JDBC', 'MySQL', 'SQL', 'Web Technologies'],
      codeUrl: 'https://github.com/sridhar56556/Online-Banking'
    },
    {
      title: 'Encrypted Deduplication System',
      codename: 'Encrypted Deduplication',
      description: 'Designed a Java-based system to eliminate redundant data storage using advanced encryption and duplicate checking algorithms. Built with MySQL metadata management and secure file handling protocols.',
      tags: ['Java', 'JDBC', 'MySQL', 'Servlets', 'JSP', 'Cryptography'],
      codeUrl: 'https://github.com/sridhar56556'
    },
    {
      title: 'TicTacBattle',
      codename: 'TicTacToe',
      description: 'A modernized version of the classic Tic-Tac-Toe game featuring advanced win-detection logic, improved UI responsiveness, and a competitive scoring system for local multiplayer.',
      tags: ['JavaScript', 'React', 'Framer Motion', 'Tailwind CSS'],
      codeUrl: 'https://github.com/sridhar56556/TicTacToe-Game'
    }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                            p.description.toLowerCase().includes(search.toLowerCase()) ||
                            p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

      if (!matchesSearch) return false;
      if (filter === 'all') return true;
      if (filter === 'ai') return p.tags.some(t => t.toLowerCase().includes('gemini') || t.toLowerCase().includes('openrouter') || t.toLowerCase().includes('speech'));
      if (filter === 'java') return p.tags.some(t => t.toLowerCase() === 'java' || t.toLowerCase() === 'spring boot');
      if (filter === 'react') return p.tags.some(t => t.toLowerCase() === 'react');
      return true;
    });
  }, [filter, search]);

  // Handle Playable Tic-Tac-Toe logic inside modal
  const handleCellClick = (index: number) => {
    if (board[index] || calculateWinner(board) || !isXNext) return;
    
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
    setGameStatus('Opponent (AI) thinking...');

    // Simulate simple AI move generator
    setTimeout(() => {
      const winner = calculateWinner(newBoard);
      if (winner) {
        setGameStatus('You win! 🎉');
        return;
      }
      if (newBoard.every(cell => cell !== null)) {
        setGameStatus("It's a draw! 🤝");
        return;
      }

      // Find an empty cell
      const emptyCells = newBoard.map((c, i) => c === null ? i : null).filter(val => val !== null) as number[];
      if (emptyCells.length > 0) {
        const aiChoice = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        newBoard[aiChoice] = 'O';
        setBoard(newBoard);
        
        const finalWinner = calculateWinner(newBoard);
        if (finalWinner) {
          setGameStatus('AI wins! 🤖');
        } else if (newBoard.every(cell => cell !== null)) {
          setGameStatus("It's a draw!");
        } else {
          setGameStatus('Your turn (X)');
          setIsXNext(true);
        }
      }
    }, 600);
  };

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetTicTacGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus('Your turn (X)');
  };

  // Simulate Voice Assistant Query
  const simulateVoiceQuery = (query: string) => {
    setIsSpeaking(true);
    setVoiceQuery(query);
    setAiResponse('Processing with Gemini Pro...');

    setTimeout(() => {
      if (query.includes('hello')) {
        setAiResponse('Greetings! I am Genesis. Konda Sridhar designed me using the Google Gemini API. How can I help you explore his portfolio today?');
      } else if (query.includes('skills')) {
        setAiResponse('Sridhar excels in Java (Spring Boot), React, and Database design. He specializes in full-stack clean code standards.');
      } else {
        setAiResponse('Sure! I am Genesis, an active voice listener. Let me check Sridhar’s projects matching that query or open a simulated search portal.');
      }
      setIsSpeaking(false);
    }, 1200);
  };

  return (
    <section id="projects" className="py-14 sm:py-18 xl:py-22 2xl:py-28 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative">
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-indigo-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[95%] 2xl:max-w-[1800px] mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal text-white relative inline-block pb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            My Projects
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full"
            />
          </motion.h2>
          <p className="text-muted-foreground mt-4 text-sm xl:text-base 2xl:text-lg tracking-wider uppercase font-mono">
            Interactive Showcase
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Dynamic Category Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 liquid-glass p-1.5 xl:p-2.5 2xl:p-3 rounded-full backdrop-blur-xl">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & NLP' },
              { id: 'java', label: 'Java & Spring' },
              { id: 'react', label: 'React / Frontend' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-5 py-2 xl:px-7 xl:py-3.5 2xl:px-9 2xl:py-4 rounded-full text-xs xl:text-sm 2xl:text-base font-medium tracking-wide transition-all ${
                  filter === btn.id 
                    ? 'bg-cyan-500 text-[#050e18] shadow-md shadow-cyan-500/20' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 xl:w-96">
            <Search className="absolute left-3 xl:left-4 top-1/2 -translate-y-1/2 w-4 h-4 xl:w-5 xl:h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools or languages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 xl:py-3.5 xl:pl-12 xl:pr-6 2xl:py-4 2xl:pl-14 2xl:pr-8 text-xs xl:text-sm 2xl:text-base text-white placeholder-muted-foreground focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono backdrop-blur-md"
            />
          </div>
        </div>

        {/* Dynamic Project Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="liquid-glass hover:bg-white/5 rounded-3xl p-6 sm:p-8 xl:p-10 2xl:p-12 flex flex-col justify-between shadow-xl backdrop-blur-xl relative overflow-hidden group transition-all duration-300"
              >
                {/* Visual Glow Gradient Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium group-hover:text-cyan-400 transition-colors" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-100 text-sm xl:text-base 2xl:text-lg leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Skill Badge Pile */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 xl:px-3.5 xl:py-1.5 xl:text-sm 2xl:px-4 2xl:py-2 rounded-md text-[10px] sm:text-xs font-mono font-medium bg-cyan-950/45 text-cyan-400 border border-cyan-900/40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs xl:text-sm 2xl:text-base text-white/70 hover:text-cyan-400 font-mono flex items-center gap-1.5 group/btn border-none bg-transparent cursor-pointer transition-colors"
                    >
                      <Cpu size={14} className="xl:w-4.5 xl:h-4.5 group-hover/btn:rotate-45 transition-transform" />
                      <span>{project.demoUrl ? "Sandbox View" : "Launch Sandbox"}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.codeUrl && (
                        <a 
                          href={project.codeUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-white/5 hover:bg-white/10 px-3.5 py-1.5 xl:px-5 xl:py-2.5 xl:text-sm 2xl:px-7 2xl:py-3.5 rounded-lg text-white font-medium text-xs xl:text-sm 2xl:text-base flex items-center gap-1.5 cursor-pointer no-underline transition-all hover:scale-[1.02] active:scale-95"
                        >
                          <Github size={13} className="xl:w-4 xl:h-4" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-cyan-500/5 hover:bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400/50 px-3.5 py-1.5 xl:px-5 xl:py-2.5 xl:text-sm 2xl:px-7 2xl:py-3.5 rounded-lg text-cyan-400 font-medium text-xs xl:text-sm 2xl:text-base flex items-center gap-1.5 cursor-pointer no-underline transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                        >
                          <ExternalLink size={13} className="xl:w-4 xl:h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/5 border border-white/5 rounded-3xl"
          >
            <HelpCircle className="mx-auto w-12 h-12 text-muted-foreground mb-4 animate-bounce" />
            <p className="text-white text-lg">No projects match your current lookup.</p>
            <p className="text-muted-foreground text-sm mt-1">Try broad terms like "Spring", "Java", or "AI".</p>
          </motion.div>
        )}
      </div>

      {/* PORTAL MODAL DIALOG - INTERACTIVE 3D PLAYGROUND SIMULATOR */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className={`relative w-full ${selectedProject.demoUrl ? 'max-w-4xl' : 'max-w-2xl'} bg-[#071322]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300`}
            >
              {/* Modal Top Light Bar */}
              <div className="h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500" />
              
              {/* Modal Header */}
              <div className="flex justify-between items-start p-6 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1 px-2.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-mono font-semibold uppercase tracking-widest animate-pulse">
                      {selectedProject.demoUrl ? 'Live Application Web View' : 'Live Sandbox'}
                    </span>
                    <span className="text-gray-500 text-xs font-mono">
                      {selectedProject.demoUrl ? '• Interactive Client View' : '• Port 3000 Ingress'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    resetTicTacGame();
                    setVoiceQuery('');
                    setAiResponse('');
                  }}
                  className="p-2 rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 transition-all border-none bg-transparent cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body with Simulator Canvas */}
              <div className="p-6 overflow-y-auto max-h-[75vh] flex-1">
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* PROJECT-SPECIFIC INTERACTIVE SIMULATOR WRAPPERS */}
                
                {selectedProject.demoUrl ? (
                  /* FULL BROWSER IFRAME SIMULATOR FOR LIVE DEMOS */
                  <div className="flex flex-col bg-slate-950/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-[480px] relative">
                    {/* Browser Address Bar UI */}
                    <div className="flex items-center justify-between px-4 py-2 bg-[#0d1e33] border-b border-white/10 select-none">
                      <div className="flex items-center gap-1.5 flex-none">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      
                      <div className="flex-1 max-w-md mx-auto bg-black/40 border border-white/10 rounded-lg px-3 py-1 flex items-center justify-between text-[11px] font-mono text-cyan-400/90 tracking-wide mx-4">
                        <span className="flex items-center gap-1 truncate select-all">
                          <span className="text-gray-500">https://</span>
                          {selectedProject.demoUrl.replace('https://', '')}
                        </span>
                        <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-sans">
                          <span>✓</span> SSL Secure
                        </span>
                      </div>
                      
                      <a 
                        href={selectedProject.demoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs text-cyan-400 hover:text-white flex items-center gap-1 font-mono transition-colors hover:underline no-underline"
                        title="Open in new window"
                      >
                        <ExternalLink size={12} />
                        <span className="text-[10px] uppercase hidden sm:inline">New Tab</span>
                      </a>
                    </div>
                    
                    {/* Embedding the live project directly! */}
                    <div className="flex-1 w-full h-full bg-[#050e18]">
                      <iframe 
                        src={selectedProject.demoUrl} 
                        title={selectedProject.title}
                        className="w-full h-full border-none rounded-b-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ) : selectedProject.title.includes('TicTacBattle') ? (
                  /* SIMULATOR PLAYABLE TIC TAC BATTLE */
                  <div className="liquid-glass hover:bg-white/5 border border-pink-500/20 rounded-2xl p-6 shadow-inner">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                      <span className="text-xs font-mono text-pink-500 flex items-center gap-1.5 font-bold uppercase">
                        <Smartphone size={13} />
                        Interactive Game Sandbox
                      </span>
                      <button 
                        onClick={resetTicTacGame}
                        className="text-xs text-pink-400 hover:text-white underline border-none bg-transparent cursor-pointer font-mono"
                      >
                        Reset Game
                      </button>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="mb-4 text-xs font-mono text-center text-slate-300">
                        {gameStatus}
                      </div>

                      {/* 3x3 Grid */}
                      <div className="grid grid-cols-3 gap-2 w-48 h-48 mb-4">
                        {board.map((cell, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleCellClick(idx)}
                            className="bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-2xl font-bold text-white transition-all border border-white/5 cursor-pointer h-full w-full"
                          >
                            {cell === 'X' ? (
                              <span className="text-cyan-400 font-bold animate-bounce">X</span>
                            ) : cell === 'O' ? (
                              <span className="text-pink-500 font-bold">O</span>
                            ) : (
                              ''
                            )}
                          </button>
                        ))}
                      </div>
                      <p className="text-[10px] text-muted-foreground/80 font-mono">You play as X, Simple Opponent script is O.</p>
                    </div>
                  </div>
                ) : (
                  /* GENERIC SYSTEM ARCHITECTURE SIMULATOR */
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                      <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-bold uppercase">
                        <Code size={13} />
                        Runtime Server Log
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">OK / 200 GET</span>
                    </div>
                    
                    <div className="font-mono text-xs text-slate-300 space-y-2 max-h-56 overflow-y-auto bg-black/50 p-4 rounded-xl leading-relaxed">
                      <p className="text-green-500">{"[SYSTEM] Initializing Tomcat Server context..."}</p>
                      <p className="text-green-500">{"[DATABASE] Connecting to MySQL jdbc:mysql://127.0.0.1:3306..."}</p>
                      <p className="text-cyan-400">{"[INFO] Loading credentials metadata securely."}</p>
                      <p className="text-indigo-400">{"[API] Loaded REST Endpoints securely:"}</p>
                      <p className="pl-4">{" -> GET /api/v1/booking/history"}</p>
                      <p className="pl-4">{" -> POST /api/v1/auth/otp-validate"}</p>
                      <p className="text-amber-500">{"[WARNING] OpenRouter / CoreNLP sentiment client initialized lazily"}</p>
                      <p className="text-cyan-400">{"[SYSTEM] Running correctly on background port 3000..."}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center p-6 border-t border-white/5 bg-[#050e18]/40">
                <span className="text-xs text-muted-foreground font-mono">Designed by Sridhar</span>
                <div className="flex gap-3">
                  {selectedProject.codeUrl && (
                    <a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer no-underline"
                    >
                      <Github size={13} />
                      <span>View Repository</span>
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      resetTicTacGame();
                      setVoiceQuery('');
                      setAiResponse('');
                    }}
                    className="px-5 py-2 rounded-full text-xs font-medium bg-cyan-500 text-[#050e18] hover:bg-cyan-400 transition-all border-none cursor-pointer"
                  >
                    Close Sandbox
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
