import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Container - Matrix Code Effect */}
      <div className="absolute inset-0 z-0">
        {/* Matrix/Code Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-slow-scroll"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550645612-83f5d594b671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRyaXglMjBjb2RlJTIwYmluYXJ5JTIwcHJvZ3JhbW1pbmclMjBkYXJrfGVufDF8fHx8MTc3Mzg2MzM1OHww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
        
        {/* Pitch Black Overlay */}
        <div className="absolute inset-0 bg-black/85"></div>
        
        {/* Electric Blue Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-500/5"></div>
        
        {/* Additional Blue Glow for Code Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-500/10"></div>
        
        {/* Vignette Effect - Deep Black Edges */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-slate-400 text-lg mb-4">Hello, I'm</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Mavin Gogo
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6 font-bold">
            Full-Stack Developer & Data Scientist
          </h2>
          <p className="text-slate-300 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            IT student at Multimedia University, passionate about bridging the gap between 
            raw data and educational accessibility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-10 py-7 rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 text-lg"
          >
            Hire Me
            <ArrowRight className="ml-2" size={22} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('projects')}
            className="bg-cyan-50 border-2 border-cyan-100 text-slate-900 hover:bg-cyan-100 hover:border-cyan-200 px-10 py-7 rounded-lg transition-all duration-300 hover:scale-105 text-lg font-semibold"
          >
            View Projects
            <Code2 className="ml-2" size={22} />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}