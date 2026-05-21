import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Award, Calendar, ChevronRight } from 'lucide-react';
import { Education } from '../types';

export default function AboutSection() {
  const educations: Education[] = [
    {
      degree: 'Bachelor of Technology (CSE)',
      institution: 'Sree Chaitanya Institute of Technological Sciences',
      period: 'Dec 2021 - Jul 2025',
      grade: '68%',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Kakatiya Junior College, Huzurabad',
      period: 'Jun 2019 - Mar 2021',
      grade: '73%',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-18 xl:py-22 2xl:py-28 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative overflow-hidden">
      {/* Background ambient circular highlights for 3D depth */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[95%] 2xl:max-w-[1800px] mx-auto relative z-10">
        {/* Animated Headline */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal text-white relative inline-block pb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            About Me
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-cyan-400 rounded-full"
            />
          </motion.h2>
          <p className="text-muted-foreground mt-4 text-sm xl:text-base 2xl:text-lg tracking-wider uppercase font-mono">
            Background & Credentials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 2xl:gap-16 items-stretch">
          {/* Professional Summary - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 liquid-glass rounded-3xl p-8 sm:p-10 xl:p-14 2xl:p-18 flex flex-col justify-between shadow-2xl backdrop-blur-xl relative overflow-hidden group transition-all duration-500"
          >
            {/* Subtle light streak */}
            <div className="absolute -inset-x-20 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent blur-[1px]" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Award size={20} className="animate-pulse" />
                </span>
                <span className="font-mono text-xs xl:text-sm 2xl:text-base text-cyan-400 uppercase tracking-widest font-semibold">
                  Executive Brief
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl text-white font-normal mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Professional Summary
              </h3>
              
              <p className="text-gray-100 leading-relaxed text-sm sm:text-base xl:text-lg 2xl:text-xl mb-8">
                I am a focused computer science graduate highly skilled in writing functional test cases, 
                identifying and documenting software defects, and validating application behavior across 
                multiple layers. With a strong foundation in Java backend systems and responsive web applications, 
                I bring strong analytical thinking, adaptability, and collaborative problem-solving skills 
                to every project I build.
              </p>
            </div>

            <div className="space-y-4 border-t border-white/5 pt-6 mt-auto">
              {/* Location */}
              <div className="flex items-center gap-3 text-sm xl:text-base 2xl:text-lg text-gray-200">
                <MapPin size={18} className="text-cyan-400 flex-shrink-0" />
                <span>Karimnagar, Telangana, India</span>
              </div>
              
              {/* Passion Highlight */}
              <div className="flex items-center gap-3 text-sm xl:text-base 2xl:text-lg text-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 animate-ping" />
                <span>Passionate about innovation, software quality & performance</span>
              </div>
            </div>
          </motion.div>

          {/* Educations - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6 xl:gap-8 2xl:gap-10"
          >
            {educations.map((edu, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.01 }}
                className="liquid-glass rounded-2xl p-6 sm:p-8 xl:p-10 2xl:p-12 flex flex-col justify-between shadow-xl backdrop-blur-xl relative overflow-hidden group transition-all duration-300"
              >
                {/* Visual marker */}
                <span className={`absolute top-0 left-0 w-1.5 h-full ${index === 0 ? 'bg-cyan-500' : 'bg-indigo-500'}`} />

                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`p-2 rounded-xl ${index === 0 ? 'bg-cyan-500/10 text-cyan-400' : 'bg-indigo-500/10 text-indigo-400'}`}>
                      <GraduationCap size={20} />
                    </span>
                    <div>
                      <h4 className="text-white font-medium text-base sm:text-lg xl:text-xl 2xl:text-2xl">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm xl:text-base 2xl:text-lg">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5 text-xs sm:text-sm xl:text-base 2xl:text-lg font-mono text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-gray-300 xl:w-4.5 xl:h-4.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-cyan-400 font-semibold xl:text-lg 2xl:text-xl">{edu.grade}</span>
                    <span className="text-gray-300">Aggregate</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Micro Call Out badge */}
            <motion.div 
              whileHover={{ rotate: 0.5 }}
              className="liquid-glass border border-white/5 rounded-2xl p-5 xl:p-6.5 flex items-center justify-between text-xs xl:text-sm 2xl:text-base"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 xl:h-3 xl:w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-white">Available immediately for roles in India & remotely</span>
              </div>
              <ChevronRight size={14} className="text-muted-foreground xl:w-4.5 xl:h-4.5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
