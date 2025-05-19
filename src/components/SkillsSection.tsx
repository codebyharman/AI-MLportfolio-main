import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2Icon, BrainCircuitIcon, LibraryIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: React.FC<{ className?: string }>;
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    name: "ML/DS Skills",
    icon: BrainCircuitIcon,
    skills: [
      { name: "Data Cleaning", level: 85 },
      { name: "Exploratory Data Analysis", level: 85 },
      { name: "Model Training", level: 80 },
      { name: "Data Visualization", level: 85 },
    ],
  },
  {
    name: "Programming Languages",
    icon: Code2Icon,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    name: "Libraries & Tools",
    icon: LibraryIcon,
    skills: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "TensorFlow", level: 70 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
    ],
  },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories = defaultCategories,
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.4)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-900/30 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-indigo-400">Technical</span> Skills
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            My technical expertise spans across various domains of AI/ML,
            programming languages, and frameworks. Here's a comprehensive
            overview of my skill set.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="bg-gray-800/70 border-gray-700 overflow-hidden relative group shadow-lg hover:shadow-indigo-900/10 transform transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 transition-all duration-300 rounded-xl"></div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-indigo-500/20 p-2 mr-3">
                      <category.icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-2 flex-grow">
                      {category.name}
                    </h3>
                    <motion.div
                      animate={{ 
                        rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ 
                        repeat: hoveredCard === index ? Infinity : 0, 
                        duration: 2 
                      }}
                      className="text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {hoveredCard === index ? 'Hover skills →' : ''}
                    </motion.div>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="space-y-2"
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center">
                          <motion.span 
                            className="text-gray-300"
                            animate={{ 
                              color: hoveredSkill === skill.name ? '#a5b4fc' : '#d1d5db'
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill.name}
                          </motion.span>
                          <Badge
                            variant="outline"
                            className="bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress
                            value={hoveredSkill === skill.name ? 100 : skill.level}
                            className="h-2 bg-gray-700"
                          />
                          <motion.div 
                            className="absolute top-0 left-0 w-full h-full flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: hoveredSkill === skill.name ? 1 : 0,
                              x: hoveredSkill === skill.name ? [0, 5, 0] : 0 
                            }}
                            transition={{ 
                              opacity: { duration: 0.2 },
                              x: { repeat: Infinity, duration: 1 }
                            }}
                          >
                            <div 
                              className="h-4 w-1 bg-white rounded-full z-10 shadow-glow" 
                              style={{ 
                                marginLeft: `${skill.level}%`,
                                boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.7)'
                              }}
                            ></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Jupyter Notebook",
              "Google Colab",
              "Git",
              "GitHub",
              "Analytical Thinking",
              "Communication",
              "Teamwork",
              "Regression",
              "Classification",
              "Neural Networks (beginner)",
              "Model Evaluation",
              "Continuous Learning",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    className="px-4 py-2 bg-gray-800 hover:bg-indigo-500/20 text-gray-300 border border-indigo-500/20 transition-all duration-300 hover:text-indigo-200 cursor-pointer group"
                  >
                    <span className="relative">
                      {skill}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"
                      ></motion.span>
                    </span>
                  </Badge>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
