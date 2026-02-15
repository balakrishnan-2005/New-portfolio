import React, { useState } from 'react';
import { SKILLS } from '../constants.tsx';
import { Skill } from '../types.ts';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | Skill['category']>('All');

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  const categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];

  return (
    <section id="skills" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Core Competencies</h2>
          <h3 className="text-5xl md:text-6xl font-black font-heading text-white mb-8">
            Technical Arsenal
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/40 translate-y-[-2px]' 
                : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="group relative glass-dark p-8 rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-3 interactive-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 transition-all duration-500 rounded-[2rem]"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-14 h-14 bg-slate-800/50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                    <span className="text-2xl font-black text-white">{skill.name[0]}</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{skill.category}</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">{skill.name}</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter mb-1">
                    <span className="text-slate-500">Proficiency</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5 p-[2px]">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full group-hover:from-blue-500 group-hover:to-emerald-400 transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;