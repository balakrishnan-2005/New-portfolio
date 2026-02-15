import React from 'react';
import { Terminal, Heart } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg shadow-blue-500/10">
                <Terminal size={20} className="text-white" />
              </div>
              <span className="text-2xl font-black font-heading tracking-[0.15em] text-white">
                BALAKRISHNAN<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm mb-8">
              A premium Java Full Stack Developer dedicated to crafting exceptional digital experiences with modern technology.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Source Code</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} BALAKRISHNAN A. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by <span className="text-slate-300 font-medium tracking-wide">BALAKRISHNAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;