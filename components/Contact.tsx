import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-white mb-8 leading-tight">
              Ready to <br />
              <span className="text-blue-500">Collaborate?</span>
            </h3>
            
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              I'm open to full-time roles and internships. Feel free to reach out via email or phone!
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-blue-600 transition-colors">
                  <Mail className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase mb-1">Email Me</div>
                  <div className="text-lg font-bold text-white">ttf.balakrishnan448@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                  <Phone className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase mb-1">Call Me</div>
                  <div className="text-lg font-bold text-white">+91 9597962593</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-orange-600 transition-colors">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase mb-1">Location</div>
                  <div className="text-lg font-bold text-white">Trichy, Tamil Nadu</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass flex items-center justify-center rounded-xl hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thank you for reaching out, I'll respond soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-2">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Subject of interest"
                    className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-2">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Enter your message here..."
                    className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white placeholder:text-slate-600 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formState === 'loading'}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  {formState === 'loading' ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;