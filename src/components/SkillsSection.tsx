import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    name: "ML/DS Skills",
    skills: [
      { name: "Data Cleaning", level: 85 },
      { name: "Exploratory Data Analysis", level: 85 },
      { name: "Model Training", level: 80 },
      { name: "Data Visualization", level: 85 },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    name: "Libraries & Tools",
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
  };

  return (
    <section
      id="skills"
      className="py-20 bg-black min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-red-500">Technical</span> Skills
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical expertise spans across various domains of AI/ML,
            programming languages, and frameworks. Here's a comprehensive
            overview of my skill set.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 transition-all duration-300"></div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-800 pb-2">
                    {category.name}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{skill.name}</span>
                          <Badge
                            variant="outline"
                            className="bg-red-500/10 text-red-400 border-red-500/30"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2 bg-gray-800"
                        />
                      </div>
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
              <Badge
                key={index}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border-none transition-colors duration-300 hover:text-white cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
