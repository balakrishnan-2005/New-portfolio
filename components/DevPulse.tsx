
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, GitBranch, Star, GitFork, History } from 'lucide-react';
import { TERMINAL_COMMANDS, GITHUB_REPOS } from '../constants';

const DevPulse: React.FC = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>(['Type "help" to see available commands.']);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.toLowerCase().trim();
    if (!cmd) return;

    let response = '';
    if (cmd === 'clear') {
      setTerminalLines([]);
      setInputValue('');
      return;
    }

    response = TERMINAL_COMMANDS[cmd as keyof typeof TERMINAL_COMMANDS] || `Command not found: ${cmd}. Type "help" for a list of commands.`;
    
    setTerminalLines(prev => [...prev, `> ${inputValue}`, response]);
    setInputValue('');
  };

  return (
    <section id="pulse" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Real-time Activity</h2>
          <h3 className="text-5xl font-black font-heading text-white mb-6">Developer Pulse</h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* GitHub Activity Simulation */}
          <div className="lg:col-span-3 space-y-8">
            <div className="glass-dark p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <History size={20} className="text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Coding Consistency</h4>
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Last 12 Months</div>
              </div>

              {/* Simulated Activity Grid */}
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                {Array.from({ length: 156 }).map((_, i) => {
                  const intensity = Math.floor(Math.random() * 5);
                  const colors = ['bg-slate-800/50', 'bg-emerald-900/30', 'bg-emerald-700/50', 'bg-emerald-500/80', 'bg-emerald-400'];
                  return (
                    <div 
                      key={i} 
                      className={`w-3 h-3 rounded-[2px] ${colors[intensity]} transition-all hover:scale-150 hover:shadow-[0_0_10px_rgba(52,211,153,0.5)] cursor-help`}
                      title={`${intensity * 2 + 1} contributions`}
                    ></div>
                  );
                })}
              </div>
              
              <div className="mt-6 flex items-center justify-end gap-2 text-[10px] font-mono text-slate-500">
                <span>Less</span>
                <div className="flex gap-1">
                  {['bg-slate-800/50', 'bg-emerald-900/30', 'bg-emerald-700/50', 'bg-emerald-500/80', 'bg-emerald-400'].map(c => (
                    <div key={c} className={`w-2.5 h-2.5 rounded-[1px] ${c}`}></div>
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {GITHUB_REPOS.map(repo => (
                <div key={repo.name} className="glass-dark p-6 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group interactive-card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <GitBranch size={16} className="text-blue-500" />
                      </div>
                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{repo.name}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs mb-6 line-clamp-2">{repo.description}</p>
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }}></div>
                      {repo.lang}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} /> {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Terminal */}
          <div className="lg:col-span-2">
            <div className="glass-dark h-full rounded-[2.5rem] border border-white/5 flex flex-col shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-800/20 backdrop-blur-md">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                  <TerminalIcon size={12} /> balakrishnan@bash
                </div>
              </div>

              <div 
                ref={scrollRef}
                className="flex-1 p-6 font-mono text-xs md:text-sm overflow-y-auto space-y-2 bg-slate-900/40"
              >
                {terminalLines.map((line, i) => (
                  <div key={i} className={`${line.startsWith('>') ? 'text-blue-400' : 'text-slate-300'} break-words`}>
                    {line}
                  </div>
                ))}
                
                <form onSubmit={handleCommand} className="flex gap-2 items-center mt-2">
                  <span className="text-emerald-500 font-bold">$</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                    autoFocus
                    spellCheck="false"
                  />
                </form>
              </div>

              <div className="p-4 bg-slate-800/40 border-t border-white/5">
                <p className="text-[10px] text-slate-500 italic text-center">
                  Try commands like 'help', 'skills', or 'repos'
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DevPulse;
