
import React, { useEffect, useState } from 'react';
import { CV_DATA } from './constants';
import { Section } from './components/Section';
import { AIChatAssistant } from './components/AIChatAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-red-600' : 'text-white'}`}>JM.</span>
          <div className={`hidden md:flex space-x-8 text-sm font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>
            <a href="#about" className="hover:text-red-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-red-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-red-600 transition-colors">Education</a>
            <a href="#skills" className="hover:text-red-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
          <a href="#contact" className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${scrolled ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-black hover:bg-red-50'}`}>
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-black/40 opacity-50 pattern-grid"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 pt-20">
          <div className="flex-1 text-center md:text-left text-white space-y-6">
            <div className="inline-block px-4 py-1.5 bg-red-400/20 border border-red-400/30 rounded-full text-red-100 text-sm font-medium tracking-wide">
              Operations Management | emlyon student
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Joel <span className="text-red-500">Mathew</span>
            </h1>
            <p className="text-lg md:text-xl text-red-100/90 max-w-2xl leading-relaxed">
              Transforming operations through data-driven decisions and strategic planning. 
              Specializing in $30M+ turnaround management and process optimization.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href="#experience" className="px-8 py-3.5 bg-white text-black font-bold rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                View Experience
              </a>
              <a href="#contact" className="px-8 py-3.5 bg-red-700/50 border border-red-400/30 text-white font-bold rounded-lg backdrop-blur-sm hover:bg-red-700/70 transition-all">
                Get in Touch
              </a>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-6 pt-8 text-red-100/70">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>{CV_DATA.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>{CV_DATA.email}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/joel/800/800" 
                alt="Joel Mathew" 
                className="relative rounded-2xl object-cover w-full h-full shadow-2xl border-4 border-white/20 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Summary Section */}
      <Section id="about" title="Professional Summary">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-xl text-slate-600 leading-relaxed italic">
              "{CV_DATA.summary}"
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="text-4xl font-bold text-red-600 mb-1">45+</div>
                <div className="text-slate-500 font-medium text-sm">Months of Global Ops Experience</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-4xl font-bold text-slate-800 mb-1">$30M</div>
                <div className="text-slate-500 font-medium text-sm">Managed Project Scope</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-950 rounded-3xl p-8 text-white relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
             <h3 className="text-xl font-bold mb-6 flex items-center">
               <span className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3 text-sm">01</span>
               Key Objectives
             </h3>
             <ul className="space-y-4 text-slate-300">
               <li className="flex items-start">
                 <svg className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                 Leveraging Lean Six Sigma for operational excellence
               </li>
               <li className="flex items-start">
                 <svg className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                 Optimizing supply chain through data analytics
               </li>
               <li className="flex items-start">
                 <svg className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                 Managing large-scale international projects
               </li>
             </ul>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience" className="bg-slate-50">
        <div className="space-y-12">
          {CV_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:border-red-300 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-red-600 transition-colors">{exp.role}</h3>
                  <div className="flex items-center text-slate-500 mt-1 font-medium">
                    <span className="text-red-600 mr-2">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
                    {exp.period} ({exp.duration})
                  </span>
                </div>
              </div>
              <p className="text-slate-500 mb-6 font-medium italic">{exp.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-4 shrink-0"></div>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education & Skills Grid */}
      <Section id="education" title="Education & Skills">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-bold text-slate-800 flex items-center mb-6">
              <svg className="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
              Education Background
            </h3>
            {CV_DATA.education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-slate-100 pb-8 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-600 border-4 border-white"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">{edu.school}</h4>
                    <p className="text-red-600 font-semibold">{edu.degree}</p>
                    <p className="text-sm text-slate-500 mt-1">{edu.specialization} • {edu.location}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-400">{edu.period}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-200">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Column */}
          <div id="skills" className="space-y-10">
            {CV_DATA.skillCategories.map((cat, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white shadow-sm border border-slate-200 rounded-lg text-sm text-slate-700 font-medium hover:border-red-400 hover:text-red-600 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Languages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-800 font-medium">English</span>
                  <span className="text-red-600 font-bold">C2 Fluent</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="w-full bg-red-600 h-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-800 font-medium">French</span>
                  <span className="text-red-600 font-bold">B2 Beginner</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="w-1/3 bg-red-400 h-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recognition & Interests */}
      <Section id="recognition" title="Awards & Interests" dark>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center text-red-500">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"/></svg>
              Achievements
            </h3>
            <div className="space-y-6">
              {CV_DATA.awards.map((award, i) => (
                <div key={i} className="flex items-center space-x-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  </div>
                  <p className="text-slate-300 font-medium">{award}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center text-red-500">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              Extracurricular
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {CV_DATA.interests.map((interest, i) => (
                <div key={i} className="p-5 border border-white/10 rounded-2xl flex items-center hover:border-red-500/50 transition-all">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-slate-400">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-800 leading-tight">
              Ready to optimize your <span className="text-red-600">Operations</span>?
            </h3>
            <p className="text-slate-600 text-lg">
              I am currently seeking an Operations Management internship. 
              Let's discuss how my experience in project planning and turnaround management can add value to your organization.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Me</div>
                  <div className="text-slate-800 font-medium">{CV_DATA.email}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Call Me</div>
                  <div className="text-slate-800 font-medium">{CV_DATA.phone}</div>
                </div>
              </div>
            </div>
          </div>
          <form className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Subject</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Internship Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <footer className="py-12 bg-black text-slate-500 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-white">Joel Mathew.</div>
          <div className="text-sm">© {new Date().getFullYear()} All Rights Reserved. Designed for Professional Excellence.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-red-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-red-500 transition-colors">Resume PDF</a>
          </div>
        </div>
      </footer>

      {/* Floating Career AI Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
