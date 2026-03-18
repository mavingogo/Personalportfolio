import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mavingogo', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mavin-gogo', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/254746781552', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:mavingogo@gmail.com', label: 'Email' },
  ];

  const quickLinks = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Mavin Gogo
              </span>
            </h3>
            <p className="text-slate-400 text-sm">
              Full-Stack Developer & Data Scientist passionate about bridging 
              the gap between raw data and educational accessibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-slate-400 hover:text-purple-400 text-sm transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-medium mb-3">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/50 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Mavin Gogo. All rights reserved. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}