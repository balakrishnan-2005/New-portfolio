import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Code2, Database, Terminal as TerminalIcon } from 'lucide-react';
import { SOCIAL_LINKS, CODE_SNIPPET } from '../constants.tsx';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ["Java Full Stack Developer", "Fresher", "Spring Boot Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 px-6 overflow-visible">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Hiring
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black font-heading text-white mb-8 leading-[0.9] tracking-tight">
            Design<br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 animate-gradient">Develop.</span>
          </h1>
          
          <div className="h-10 mb-10">
            <p className="text-xl md:text-2xl text-slate-400 font-medium">
              I'm <span className="text-blue-400 font-mono font-bold">{displayText}</span><span className="animate-pulse text-blue-400">_</span>
            </p>
          </div>

          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Crafting scalable, high-performance backends and intuitive frontends. 
            Currently architecting digital solutions with <span className="text-white font-medium">Java & Spring Boot</span>.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-14 relative z-20">
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95 overflow-hidden block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="flex items-center gap-2 relative z-10">
                Explore Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-10 py-5 bg-slate-800/50 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all border border-white/10 backdrop-blur-sm active:scale-95 block"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-slate-500 hover:text-white transition-all hover:scale-125 hover:-rotate-6"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Visual Element */}
        <div className="relative z-0 hidden lg:block perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-[120px] rounded-full animate-pulse"></div>
          
          <div className="relative glass-dark rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10 group transform-gpu transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
            <div className="flex items-center justify-between px-6 py-4 bg-slate-800/40 border-b border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase flex items-center gap-2">
                <TerminalIcon size={12} /> orders-service
              </div>
            </div>
            
            <div className="p-8 bg-[#0f172a]/80">
              <pre className="font-mono text-xs md:text-sm leading-relaxed tracking-tight overflow-hidden">
                <code className="text-slate-300">
                  {CODE_SNIPPET.split('\n').map((line, i) => (
                    <div key={i} className="flex gap-6 group/line">
                      <span className="text-slate-600 w-4 text-right select-none opacity-50 group-hover/line:opacity-100 transition-opacity">{i + 1}</span>
                      <span dangerouslySetInnerHTML={{ __html: highlightJava(line) }}></span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
          </div>

          <div className="absolute -top-10 -right-10 p-5 glass rounded-2xl shadow-2xl animate-bounce-slow border border-blue-500/20 group hover:border-blue-500/50 transition-colors">
            <Code2 className="text-blue-400" size={32} />
          </div>
          <div className="absolute -bottom-10 -left-6 p-5 glass rounded-2xl shadow-2xl animate-bounce-slow animation-delay-2000 border border-emerald-500/20 group hover:border-emerald-500/50 transition-colors">
            <Database className="text-emerald-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

function highlightJava(line: string) {
  return line
    .replace(/(@\w+)/g, '<span class="text-amber-400">$1</span>')
    .replace(/\b(public|private|class|interface|void|return|new|final|String|int|long|Long|ResponseEntity)\b/g, '<span class="text-blue-400">$1</span>')
    .replace(/"(.*?)"/g, '<span class="text-emerald-400">"$1"</span>')
    .replace(/(\.[\w]+)(?=\()/g, '<span class="text-indigo-300">$1</span>')
    .replace(/\b(OrderController|OrderService|Order|OrderRequest|HttpStatus)\b/g, '<span class="text-white font-semibold">$1</span>');
}

export default Hero;