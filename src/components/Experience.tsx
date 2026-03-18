import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  period: string;
  location: string;
  type: 'education' | 'work';
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: 'Bachelor of Science in Information Technology',
    organization: 'Multimedia University',
    period: '2021 - Present',
    location: 'Nairobi, Kenya',
    type: 'education',
    description: 'Pursuing a comprehensive IT degree with focus on software development, data science, and modern web technologies.',
    highlights: [
      'Specialized in Full-Stack Development and Data Analytics',
      'Developed multiple projects bridging education and technology',
      'Active in tech communities and coding competitions',
      'GPA: 3.8/4.0 - Dean\'s List recognition',
    ],
  },
  {
    title: 'Software Development Training',
    organization: 'eMobilis Technology Training Institute',
    period: '2022 - 2023',
    location: 'Nairobi, Kenya',
    type: 'work',
    description: 'Intensive software development bootcamp focusing on modern web technologies, mobile development, and industry best practices.',
    highlights: [
      'Completed full-stack development curriculum (Django, React, Python)',
      'Built real-world applications with modern development workflows',
      'Collaborated on team projects using Agile methodologies',
      'Achieved top 10% performance in final assessments',
    ],
  },
  {
    title: 'IT Student & Research Assistant',
    organization: 'Multimedia University',
    period: '2023 - Present',
    location: 'Nairobi, Kenya',
    type: 'work',
    description: 'Supporting research initiatives in educational technology and data-driven learning systems.',
    highlights: [
      'Developing data analysis tools for academic research',
      'Contributing to educational accessibility projects',
      'Mentoring junior students in programming fundamentals',
      'Publishing findings on data-driven education solutions',
    ],
  },
];

function ExperienceCard({ experience, index, isVisible }: { experience: Experience; index: number; isVisible: boolean }) {
  const Icon = experience.type === 'education' ? GraduationCap : Code;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-500 hidden lg:block"></div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/50 z-10 hidden lg:block">
        <Icon size={24} className="text-white" />
      </div>

      {/* Content Card */}
      <div className={`lg:grid lg:grid-cols-2 gap-8 mb-12 ${isLeft ? '' : 'lg:grid-flow-dense'}`}>
        {/* Left/Right spacing */}
        <div className={isLeft ? 'lg:col-start-1' : 'lg:col-start-2'}></div>
        
        {/* Card Content */}
        <div className={`${isLeft ? 'lg:col-start-1 lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
          <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 lg:p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
            {/* Mobile Timeline Dot */}
            <div className="lg:hidden mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Icon size={24} className="text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all">
                {experience.title}
              </h3>
              <p className="text-xl text-purple-400 font-semibold mb-3">
                {experience.organization}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 mb-4 leading-relaxed">
              {experience.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(168 85 247) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Education and experience at Multimedia University and eMobilis Technology Training Institute.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
