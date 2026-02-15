import React from 'react';
import { Terminal, Code, Cpu, ShieldCheck } from 'lucide-react';
import { STATS } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-6">
            Professional Summary
          </h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 glass-dark p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col justify-center">
            <h4 className="text-2xl font-bold text-white mb-6">Who am I?</h4>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a <span className="text-blue-400 font-semibold">Java Full Stack Developer (Fresher)</span> with hands-on experience in building web applications using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. 
              </p>
              <p>
                I am skilled in developing <span className="text-emerald-400 font-semibold">RESTful APIs</span> and implementing <span className="text-emerald-400 font-semibold">MVC architecture</span>. Experienced in performing CRUD operations and database integration, I am able to contribute to scalable applications in a collaborative team environment.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors group">
              <ShieldCheck className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h5 className="text-xl font-bold text-white mb-3">Soft Skills</h5>
              <div className="flex flex-wrap gap-2">
                {['Problem-solving', 'Team collaboration', 'Communication', 'Time management'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-lg border border-blue-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors group">
              <Cpu className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h5 className="text-xl font-bold text-white mb-3">Languages</h5>
              <div className="flex flex-wrap gap-2">
                {['English', 'Tamil'].map(lang => (
                  <span key={lang} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-lg border border-emerald-500/20">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;