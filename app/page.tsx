'use client';

import React, { useState, useEffect } from 'react';
import { Home, Briefcase, FolderOpen, Code, User, Mail, Linkedin, Github, Download, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    if (typeof window === 'undefined') return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const sections = ['home', 'experience', 'leadership', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Personal information with updated contact
  const personalInfo = {
    name: "Ramani Thungapati",
    tagline: "Full Stack Developer | AI Enthusiast | Problem Solver",
    detailedTagline: "A passionate Computer Science graduate with a data science certification from California State University, Chico. I specialize in full-stack development, machine learning, and data analytics — building scalable applications, intelligent systems, and data-driven solutions that create real-world impact.",
    experience: [
      {
        title: "ML Engineer",
        company: "IpserLab | Fort Worth, Texas",
        years: "May 2025 - Present",
        description: "• Built an AI-powered travel planner using GPT models, reducing manual planning time by over 90% and enhancing overall user experience.\n• Integrated a Retrieval-Augmented Generation (RAG) pipeline and AI chat assistant for personalized travel recommendations using NLP and live data.\n• Developed a Model Context Protocol (MCP) handling 50K+ API calls, improving context precision by 35% and cutting response time by 40%.",
      },
      {
        title: "ML Research Assistant",
        company: "Chico State University | Chico, California",
        years: "October 2024 - Present",
        description: "• Designed ML-based sensor systems to detect poaching threats to wild animals using motion, infrasound, and acoustic data, processing over 10K+ real-world samples.\n• Trained and optimized deep learning models (YOLOv8, Vision Transformers) for deployment in wildlife reserves, enabling sub-second inference and edge-based response.\n• Improved real-time threat detection accuracy by 23% and reduced false alarms by 31% through algorithm refinement and multi-modal data fusion techniques.",
      },
      {
        title: "ML & Data Science Intern",
        company: "Tech Mahindra | Hyderabad, India",
        years: "June 2024 - August 2024",
        description: "• Created a Parkinson's classification pipeline in TensorFlow, reaching 88% accuracy with interpretable, probability-based outputs.\n• Cleaned and preprocessed over 10K medical records using SQL and NoSQL, improving model input quality by reducing data noise by 40%.\n• Via Python and R, we utilized sklearn, seaborn, ggplot, NumPy, Pandas, and Matplotlib to analyze data trends.",
      },
      {
        title: "Data Analyst Intern",
        company: "Rubaroo | Hyderabad, India",
        years: "September 2020 - January 2021",
        description: "• Cleaned and processed 1.5K+ survey responses using Python, resolving missing data for accurate analysis.\n• Created interactive visualizations in Tableau and Matplotlib, enabling stakeholders to interpret results and align program strategy with findings.",
      },
    ],
    leadership: [
      {
        title: "International Student Ambassador",
        company: "California State University, Chico | Chico, California",
        years: "August 2025 - Present",
        description: "• Mentored and supported new and continuing international students to foster belonging and cultural connection.\n• Planned and organized inclusive events celebrating global diversity and promoting cross-cultural engagement within the campus community.",
      },
      {
        title: "Student Connection Coordinator",
        company: "California State University, Chico | Chico, California",
        years: "August 2024 - Present",
        description: "• Cleaned and analyzed data from 100+ student events using Excel and Python (Pandas) to identify top-performing activities, enabling targeted outreach that boosted attendance by 25% in subsequent events.\n• Matched 20+ students each semester with opportunities by aligning individual interests with curated resources, mentorship programs, and community initiatives",
      },
      {
        title: "Commissioner of Sustainability Affairs",
        company: "California State University, Chico | Chico, California",
        years: "Sep 2023 - July 2024",
        description: "• As an elected student representative- Commissioner of Sustainability Affairs, I chaired the Sustainability Affairs Council to advocate for environmental priorities.\n• Led development and implementation of campus-wide eco-initiatives and policy recommendations in partnership with students, administrators, and external stakeholders.",
      },
    ],
    skills: [
      {
        category: "Programming Languages",
        items: ["Python", "JavaScript", "SQL", "HTML", "CSS", "R", "C++"],
      },
      {
        category: "Frameworks & Libraries",
        items: ["React.js", "Node.js", "Flask", "Express", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "LangChain"],
      },
      {
        category: "Tools & Platforms",
        items: ["Git", "GitHub", "Docker", "Firebase", "FastAPI", "MongoDB", "PostgreSQL", "Jupyter Notebook", "Google Cloud", "REST APIs"],
      },
      {
        category: "Data Analytics & Visualization",
        items: ["Tableau", "Power BI", "Data Cleaning", "Exploratory Data Analysis (EDA)", "Regression Analysis"],
      },
      {
        category: "Machine Learning & AI",
        items: ["Supervised & Unsupervised Learning", "Model Evaluation", "Feature Engineering", "Retrieval-Augmented Generation (RAG)", "NLP", "LLM Integration (GPT-4)", "Model Context Protocol (MCP)"],
      },
    ],
    projects: [
      {
        name: "PillMatch - AI-Powered Pill Identifier",
        years: "June 2025",
        description: "• Fabricated and built a React-based web application that uses image recognition to identify pills from imprint codes and visuals with 93% accuracy.\n• Integrated OCR libraries and API's to extract imprint data and fetch real-time drug info. Explored LLM-based prompt pipelines to generate structured pill metadata.",
        link: null, // No link for PillMatch
      },
      {
        name: "NATSU AI - AI companion for senior citizens",
        years: "March 2025",
        description: "• Pioneered an AI-powered medical assistant with Python and OpenAI APIs, enabling 93 %+ response accuracy.\n• Orchestrated a secure health vault and smart reminder system using Firebase, PostgreSQL, and Twilio, supporting HIPAA-compliant uploads, test parsing, and alerts for 10K+ users.",
        link: "https://devpost.com/software/natsu-ai-bqav6p",
      },
      {
        name: "AERO (Automated Execution & Response Orchestrator)",
        years: "February 2025",
        description: "• Architectured AERO, a high-performance AI assistant integrating LLMs, vision processing, and automation, executes 100+ system-level operations with 95% precision in intent recognition.\n• Implemented multi-modal interaction layers (voice, text, vision), leveraging NLP-driven command parsing and adaptive UI automation, enhancing user efficiency by 50%",
        link: "https://github.com/chicogac/NATSU_AI",
      },
      {
        name: "FitQuest – Web and Mobile Application",
        years: "January 2024",
        description: "• Developed cross-platform fitness app using Flutter and Dart, featuring secure user authentication, interactive workout modules, and a personalized meal planner.\n• Integrated Firebase Authentication and Cloud Storage to support real-time progress tracking and seamless multi-device data sync across simulated user environments.",
        link: null, // No link for FitQuest
      },
    ],
    contact: {
      email: "sthungapati@csuchico.edu", // Updated email
      linkedin: "https://www.linkedin.com/in/ramani-t/",
      github: "https://github.com/sthungapati",
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Circle-Based Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          {/* Large floating circles */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-float-slow blur-sm"></div>
          <div className="absolute top-1/4 right-20 w-16 h-16 bg-gradient-to-r from-blue-400/25 to-cyan-300/25 rounded-full animate-float-medium blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-300/15 to-blue-400/15 rounded-full animate-float-fast blur-sm"></div>
          <div className="absolute top-1/2 right-1/3 w-18 h-18 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full animate-float-slow blur-sm"></div>
          <div className="absolute bottom-1/4 right-1/5 w-14 h-14 bg-gradient-to-r from-blue-300/30 to-cyan-400/30 rounded-full animate-float-medium blur-sm"></div>
          
          {/* Medium circles */}
          <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-cyan-400/25 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/2 right-1/4 w-10 h-10 bg-blue-400/30 rounded-full animate-pulse-medium"></div>
          <div className="absolute top-2/3 left-1/5 w-8 h-8 bg-cyan-300/35 rounded-full animate-pulse-fast"></div>
          <div className="absolute top-1/5 right-1/2 w-14 h-14 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/5 left-1/2 w-11 h-11 bg-cyan-500/25 rounded-full animate-pulse-medium"></div>
          
          {/* Small floating circles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-400/40 rounded-full animate-float-random"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
          
          {/* Orbiting circles */}
          <div className="absolute top-1/4 left-1/2 w-32 h-32">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400/50 rounded-full animate-orbit"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400/60 rounded-full animate-orbit-reverse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Vertical Navigation with animations */}
      <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'experience', icon: Briefcase, label: 'Experience' },
              { id: 'leadership', icon: User, label: 'Leadership' },
              { id: 'projects', icon: FolderOpen, label: 'Projects' },
              { id: 'skills', icon: Code, label: 'Skills' },
              { id: 'contact', icon: Mail, label: 'Contact' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex flex-col items-center p-3 rounded-xl transition-all duration-500 transform hover:scale-110 ${
                    activeSection === item.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs mt-1 font-medium">{item.label}</span>
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-gray-700 transform -translate-y-1 group-hover:translate-y-0">
                    {item.label}
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Enhanced Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xl text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Hi, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <span className="text-white">Ramani</span>
                  <br />
                  <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Thungapati</span>
                </h1>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {personalInfo.detailedTagline}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center justify-center gap-2">
                    Let's Connect
                    <ExternalLink size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
                <a
                  href="/Ramani_Resume1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download size={18} className="transition-transform duration-300 group-hover:scale-110" />
                    Resume
                  </span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Github size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Clean Profile Image - Removed decorative elements */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <div className="relative group">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20 transition-all duration-500 group-hover:shadow-cyan-500/40 group-hover:scale-105">
                  <img
                    src="/images/ramani-profile.jpg"
                    alt="Ramani Thungapati"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="space-y-8">
              {personalInfo.experience.map((job, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{job.title}</h3>
                    <span className="text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">{job.years}</span>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">{job.company}</p>
                  <ul className="space-y-2 text-gray-300">
                    {job.description.split('\n• ').map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="text-cyan-400 mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                        <span className="transition-colors duration-300 group-hover:text-white">{item.replace('• ', '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Leadership Section */}
        <section id="leadership" className="py-20 px-6 bg-gray-800/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Leadership</span> & Service
            </h2>
            <div className="space-y-8">
              {personalInfo.leadership.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
                    <span className="text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">{item.years}</span>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">{item.company}</p>
                  <ul className="space-y-2 text-gray-300">
                    {item.description.split('\n• ').map((descItem, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="text-cyan-400 mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                        <span className="transition-colors duration-300 group-hover:text-white">{descItem.replace('• ', '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section with updated links */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalInfo.projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{project.name}</h3>
                    <span className="text-cyan-400 text-sm bg-cyan-400/10 px-2 py-1 rounded-full">{project.years}</span>
                  </div>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    {project.description.split('\n• ').map((item, i) => (
                      <li key={i} className="flex items-start text-sm group">
                        <span className="text-cyan-400 mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                        <span className="transition-colors duration-300 group-hover:text-white">{item.replace('• ', '')}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-all duration-300 group-hover:translate-x-2"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span> & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalInfo.skills.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-default transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section - Removed phone, updated email */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Let's Connect</span>
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              I'm actively seeking full-time opportunities in Software Engineering and Data Analytics. 
              If you have a role that aligns with my background—or just want to connect—feel free to reach out. 
              I'd love to chat!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="group flex items-center justify-center gap-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 text-white p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                <Mail className="text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110" size={24} />
                <span className="group-hover:text-cyan-300 transition-colors duration-300">Email Me</span>
              </a>
              
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 text-white p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
                style={{ animationDelay: '0.5s' }}
              >
                <Linkedin className="text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110" size={24} />
                <span className="group-hover:text-cyan-300 transition-colors duration-300">LinkedIn</span>
              </a>
              
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 text-white p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                <Github className="text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110" size={24} />
                <span className="group-hover:text-cyan-300 transition-colors duration-300">GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Simplified Footer */}
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
            {/* Removed the "Built with React & Tailwind CSS" text */}
          </div>
        </footer>
      </div>

      {/* Enhanced Custom CSS for diverse animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(120deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translate(0px, 0px); opacity: 0.3; }
          25% { transform: translate(10px, -10px); opacity: 0.7; }
          50% { transform: translate(-5px, -20px); opacity: 1; }
          75% { transform: translate(-10px, -5px); opacity: 0.5; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes slide-horizontal {
          0%, 100% { transform: translateX(-100px); opacity: 0; }
          50% { transform: translateX(0px); opacity: 1; }
        }
        
        @keyframes slide-vertical {
          0%, 100% { transform: translateY(-50px); opacity: 0; }
          50% { transform: translateY(0px); opacity: 1; }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        @keyframes orbit-reverse {
          from {
            transform: rotate(360deg) translateX(40px) rotate(-360deg);
          }
          to {
            transform: rotate(0deg) translateX(40px) rotate(0deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        
        .animate-float-random {
          animation: float-random 5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 10s linear infinite;
        }
        
        .animate-rotate-reverse {
          animation: rotate-reverse 8s linear infinite;
        }
        
        .animate-slide-horizontal {
          animation: slide-horizontal 5s ease-in-out infinite;
        }
        
        .animate-slide-vertical {
          animation: slide-vertical 4s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 6s linear infinite;
        }
        
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #06b6d4;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #0891b2;
        }
      `}</style>
    </div>
  );
};

export default App;
