import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'EduForAll',
    description: 'An educational accessibility platform bridging the gap between raw data and learning resources. Features include personalized learning paths, data-driven course recommendations, and interactive dashboards for educators.',
    tags: ['Django', 'React', 'PostgreSQL', 'ML', 'Data Analytics'],
    githubUrl: 'https://github.com/mavingogo/EduForAll-Project-',
    liveUrl: 'https://eduforall-demo.com',
    featured: true,
  },
  {
    title: 'Student Performance Analytics',
    description: 'Machine learning system that analyzes student performance data to predict outcomes and provide actionable insights. Built with Python, scikit-learn, and interactive visualizations.',
    tags: ['Python', 'ML', 'Pandas', 'Data Viz', 'Flask'],
    githubUrl: 'https://github.com/mavingogo',
    liveUrl: 'https://student-analytics-demo.com',
  },
  {
    title: 'Full-Stack E-Learning Portal',
    description: 'Comprehensive learning management system with video streaming, quiz generation, progress tracking, and real-time collaboration features. RESTful API backend with Django.',
    tags: ['Django REST', 'React', 'WebSocket', 'PostgreSQL'],
    githubUrl: 'https://github.com/mavingogo/EduForAll-Project-',
    liveUrl: 'https://elearning-demo.com',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing educational datasets. Features dynamic charts, filters, and export capabilities using D3.js and Recharts.',
    tags: ['React', 'D3.js', 'Python', 'SQL', 'Recharts'],
    githubUrl: 'https://github.com/mavingogo',
    liveUrl: 'https://dashboard-demo.com',
  },
];

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`group bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 lg:p-8 hover:border-purple-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${
        project.featured ? 'lg:col-span-2 bg-gradient-to-br from-slate-900/70 to-slate-900/50' : ''
      }`}
    >
      {project.featured && (
        <div className="mb-3">
          <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0">
            Featured Project
          </Badge>
        </div>
      )}

      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className={`font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300 ${
          project.featured ? 'text-3xl' : 'text-2xl'
        }`}>
          {project.title}
        </h3>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
            aria-label="View Code"
          >
            <Github size={24} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
            aria-label="Live Demo"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>

      {/* Project Description */}
      <p className={`text-slate-400 mb-6 leading-relaxed ${project.featured ? 'text-lg' : ''}`}>
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <Badge
            key={tagIndex}
            variant="outline"
            className="border-purple-500/30 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Action Links */}
      <div className="mt-6 pt-6 border-t border-slate-800/50 flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-slate-300 hover:text-purple-400 transition-colors group/link"
        >
          <Github size={16} />
          <span className="group-hover/link:underline">View Code</span>
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-slate-300 hover:text-indigo-400 transition-colors group/link"
        >
          <ExternalLink size={16} />
          <span className="group-hover/link:underline">Live Demo</span>
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">
            A showcase of my work in web development, data science, and educational technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
