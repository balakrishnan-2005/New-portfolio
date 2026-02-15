import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';
import { Project } from '../types.ts';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | Project['category']>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="text-left">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-6">
              Featured Work
            </h3>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>

          <div className="flex gap-2">
            {['All', 'Full Stack', 'Backend', 'Frontend'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/30' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div 
              key={project.id}
              className="group relative glass-dark rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-72 overflow-hidden cursor-pointer">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-3">
                    <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
                
                <p className="text-slate-400 line-clamp-2 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-medium rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-md">
          <div className="relative glass-dark max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-y-auto border border-white/10 shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
            >
              <ArrowUpRight className="rotate-45" size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="h-full">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 block">
                  Project Case Study
                </span>
                <h4 className="text-3xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h4>
                <div className="space-y-6 text-slate-400 leading-relaxed">
                  <p>{selectedProject.description}</p>
                  <div className="pt-6 border-t border-white/10">
                    <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Tech Stack Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(t => (
                        <span key={t} className="px-3 py-1 bg-blue-600/10 text-blue-400 text-xs rounded-md border border-blue-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-4">
                  <a href="#" className="flex-1 px-6 py-3 bg-blue-600 text-white text-center font-bold rounded-xl hover:bg-blue-700 transition-colors">
                    Live Demo
                  </a>
                  <a href="#" className="flex-1 px-6 py-3 bg-slate-800 text-white text-center font-bold rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;