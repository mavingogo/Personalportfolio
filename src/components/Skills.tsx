import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Code, Database, Braces, Globe, Server, BarChart } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React & TypeScript', level: 95, icon: Code },
      { name: 'Next.js', level: 90, icon: Globe },
      { name: 'Tailwind CSS', level: 95, icon: Braces },
      { name: 'HTML/CSS/JavaScript', level: 95, icon: Code },
    ],
  },
  {
    title: 'Backend (Django/Python)',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Python', level: 95, icon: Server },
      { name: 'Django & Django REST', level: 92, icon: Server },
      { name: 'Flask', level: 85, icon: Server },
      { name: 'PostgreSQL & MySQL', level: 88, icon: Database },
    ],
  },
  {
    title: 'Data Science',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Machine Learning', level: 88, icon: BarChart },
      { name: 'Pandas & NumPy', level: 90, icon: BarChart },
      { name: 'Data Visualization', level: 85, icon: BarChart },
      { name: 'SQL & Data Analysis', level: 90, icon: Database },
    ],
  },
];

function SkillCard({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) {
  const [width, setWidth] = useState(0);
  const Icon = skill.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="text-purple-400" size={20} />
        </div>
        <h4 className="text-white font-medium flex-1">{skill.name}</h4>
        <span className="text-purple-400 font-semibold text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </motion.div>
  );
}

function SkillCategorySection({ category, isVisible, categoryIndex }: { category: SkillCategory; isVisible: boolean; categoryIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
      className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-6 lg:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}></div>
        <h3 className="text-2xl font-bold">
          <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
            {category.title}
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {category.skills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            isVisible={isVisible}
            delay={categoryIndex * 4 + index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
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
      id="skills"
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
              Technical Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">
            A comprehensive overview of my skills across frontend development, 
            backend systems, and data science.
          </p>
        </motion.div>

        {/* Bento Grid - Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Frontend takes full width on mobile, half on desktop */}
          <div className="lg:col-span-2">
            <SkillCategorySection
              category={skillCategories[0]}
              isVisible={isVisible}
              categoryIndex={0}
            />
          </div>
          
          {/* Backend and Data Science side by side on desktop */}
          <SkillCategorySection
            category={skillCategories[1]}
            isVisible={isVisible}
            categoryIndex={1}
          />
          <SkillCategorySection
            category={skillCategories[2]}
            isVisible={isVisible}
            categoryIndex={2}
          />
        </div>
      </div>
    </section>
  );
}
