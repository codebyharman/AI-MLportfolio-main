import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon, GraduationCapIcon, BriefcaseIcon, AwardIcon } from "lucide-react";

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.4)",
      transition: { duration: 0.3 } 
    },
  };

  return (
    <section id="projects" className="py-20 bg-transparent min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="mb-16 text-center"
        >
          <div className="inline-block">
            <motion.h2 
              className="text-5xl font-bold mb-4 text-white relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative inline-block">
                Education & Experience
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.span>
              </span>
            </motion.h2>
          </div>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            My educational background and professional experience
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Education */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <Card className="bg-gray-800/50 border border-indigo-900/30 shadow-lg hover:shadow-indigo-900/10 transform transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-indigo-500/20 p-3 flex-shrink-0 mt-1">
                    <GraduationCapIcon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">Education</h3>
                      <motion.div 
                        animate={{ x: activeCard === 0 ? [0, 5, 0] : 0 }}
                        transition={{ duration: 1, repeat: activeCard === 0 ? Infinity : 0 }}
                      >
                        <ChevronRightIcon className="h-5 w-5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </div>
                    <div className="mb-6 relative group">
                      <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <div className="pl-4">
                        <h4 className="text-xl font-semibold text-indigo-400">B.Tech in Computer Science (Core)</h4>
                        <p className="text-gray-300">Guru Gobind Singh Indraprastha University (GTBIT), Delhi</p>
                        <p className="text-gray-400">Expected Graduation: 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <Card className="bg-gray-800/50 border border-indigo-900/30 shadow-lg hover:shadow-indigo-900/10 transform transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-indigo-500/20 p-3 flex-shrink-0 mt-1">
                    <BriefcaseIcon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">Experience</h3>
                      <motion.div 
                        animate={{ x: activeCard === 1 ? [0, 5, 0] : 0 }}
                        transition={{ duration: 1, repeat: activeCard === 1 ? Infinity : 0 }}
                      >
                        <ChevronRightIcon className="h-5 w-5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </div>
                    <div className="mb-6 relative">
                      <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <div className="pl-4">
                        <h4 className="text-xl font-semibold text-indigo-400">Student Intern - Technophilia</h4>
                        <p className="text-gray-400">Jul 2024 - Aug 2024</p>
                        <ul className="list-none text-gray-300 mt-2 space-y-1">
                          <li className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></span>
                            Trained in Python Programming
                          </li>
                          <li className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></span>
                            Gained exposure to numpy, pandas, matplotlib
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <Card className="bg-gray-800/50 border border-indigo-900/30 shadow-lg hover:shadow-indigo-900/10 transform transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-indigo-500/20 p-3 flex-shrink-0 mt-1">
                    <AwardIcon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">Certifications</h3>
                      <motion.div 
                        animate={{ x: activeCard === 2 ? [0, 5, 0] : 0 }}
                        transition={{ duration: 1, repeat: activeCard === 2 ? Infinity : 0 }}
                      >
                        <ChevronRightIcon className="h-5 w-5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {[
                        "GOOGLE Data Analytics",
                        "Foundations of Data Science",
                        "The Power of Statistics",
                        "Data Structures and Algorithm"
                      ].map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-2 hover:bg-indigo-500/30 transition-all cursor-pointer">
                            {cert}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
