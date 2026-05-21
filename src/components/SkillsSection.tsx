import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Wrench, Shield, CheckCircle2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // For interactive slider or visualization
}

interface SkillGroup {
  category: string;
  type: string;
  icon: React.ReactNode;
  tags: Skill[];
}

export default function SkillsSection() {
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

  const skillGroups: SkillGroup[] = [
    {
      category: 'Frontend Development',
      type: 'Client Side & Animation',
      icon: <Code2 className="text-pink-500 w-6 h-6" />,
      tags: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vite', level: 80 },
        { name: 'Framer Motion', level: 82 },
      ],
    },
    {
      category: 'Backend & Databases',
      type: 'Server & Logic Systems',
      icon: <Database className="text-cyan-400 w-6 h-6" />,
      tags: [
        { name: 'Java (J2EE)', level: 87 },
        { name: 'Spring Boot', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'MySQL', level: 88 },
        { name: 'Firebase', level: 82 },
        { name: 'OpenRouter API', level: 85 },
        { name: 'Gemini API', level: 90 },
      ],
    },
    {
      category: 'Tools & Others',
      type: 'Ecosystem & Architecture',
      icon: <Wrench className="text-amber-500 w-6 h-6" />,
      tags: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 88 },
        { name: 'Vercel', level: 80 },
        { name: 'Render', level: 78 },
        { name: 'VS Code', level: 92 },
        { name: 'OOP', level: 86 },
        { name: 'Data Structures', level: 84 },
        { name: 'Debugging', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-14 sm:py-18 xl:py-22 2xl:py-28 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 relative overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-900/10 to-indigo-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[95%] 2xl:max-w-[1800px] mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-normal text-white relative inline-block pb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Technical Skills
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-purple-500 rounded-full"
            />
          </motion.h2>
          <p className="text-muted-foreground mt-4 text-sm xl:text-base 2xl:text-lg tracking-wider uppercase font-mono">
            Full-Stack Capabilities
          </p>
        </div>

        {/* 3D-effect Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: groupIndex * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredGroup(groupIndex)}
              onMouseLeave={() => setHoveredGroup(null)}
              whileHover={{ 
                y: -10, 
                rotateX: 1, 
                rotateY: -1,
                boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.15)' 
              }}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              className="liquid-glass rounded-3xl p-8 xl:p-12 2xl:p-16 shadow-xl backdrop-blur-xl relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
            >
              {/* Colored light bar header */}
              <div 
                className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r transition-all duration-500 ${
                  groupIndex === 0 ? 'from-pink-500 to-rose-400' :
                  groupIndex === 1 ? 'from-cyan-400 to-indigo-500' :
                  'from-amber-400 to-yellow-500'
                }`} 
              />

              <div className="mb-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-2xl ${
                    groupIndex === 0 ? 'bg-pink-500/10' :
                    groupIndex === 1 ? 'bg-cyan-500/10' :
                    'bg-amber-500/10'
                  }`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {group.category}
                    </h3>
                    <p className="text-xs xl:text-sm 2xl:text-base text-muted-foreground font-mono uppercase tracking-wider">
                      {group.type}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Interactive List */}
              <div className="flex flex-col gap-5 pt-2">
                {group.tags.map((skill, tagIndex) => (
                  <div key={tagIndex} className="space-y-1.5 group/skill">
                    <div className="flex justify-between items-center text-xs xl:text-base 2xl:text-lg">
                      <span className="text-gray-100 font-medium group-hover/skill:text-white transition-colors flex items-center gap-1.5">
                        <CheckCircle2 size={12} className={`xl:w-4.5 xl:h-4.5 ${
                          groupIndex === 0 ? 'text-pink-500' : 
                          groupIndex === 1 ? 'text-cyan-400' : 
                          'text-amber-500'
                        }`} />
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground font-mono xl:text-base 2xl:text-lg">{skill.level}%</span>
                    </div>
                    {/* Progress track */}
                    <div className="h-1 xl:h-1.5 2xl:h-2 bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          groupIndex === 0 ? 'from-pink-500 to-rose-400' :
                          groupIndex === 1 ? 'from-cyan-500 to-indigo-500' :
                          'from-amber-400 to-yellow-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Backside glass overlay effect on hover */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Shield size={24} className="text-white/5 rotate-12 pointer-events-none" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
