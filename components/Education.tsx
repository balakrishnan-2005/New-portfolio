
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { EDUCATION } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900/30 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Academic Journey</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-6">
            Education & Certifications
          </h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-px"></div>

          {EDUCATION.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-blue-600 rounded-full -translate-x-4 md:-translate-x-4 flex items-center justify-center border-4 border-slate-900 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <GraduationCap size={16} className="text-white" />
              </div>

              {/* Card */}
              <div className="ml-10 md:ml-0 md:w-1/2">
                <div className={`glass-dark p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all ${
                  index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}>
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase mb-3">
                    <Calendar size={14} />
                    {item.period}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                  <div className="text-slate-300 font-semibold mb-4">{item.institution}</div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.grade && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg">
                      <Award size={14} />
                      {item.grade}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
