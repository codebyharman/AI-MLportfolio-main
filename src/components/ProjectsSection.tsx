import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
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

  return (
    <section id="projects" className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            <span className="relative inline-block">
              Education & Experience
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 glow-red-500"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My educational background and professional experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {/* Education */}
          <Card className="bg-gray-900/50 border border-red-900/30 mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-red-500">B.Tech in Computer Science (Core)</h4>
                <p className="text-gray-300">Guru Gobind Singh Indraprastha University (GTBIT), Delhi</p>
                <p className="text-gray-400">Expected Graduation: 2026</p>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-gray-900/50 border border-red-900/30 mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Experience</h3>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-red-500">Student Intern - Technophilia</h4>
                <p className="text-gray-400">Jul 2024 - Aug 2024</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>Trained in Python Programming</li>
                  <li>Gained exposure to numpy, pandas, matplotlib</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-gray-900/50 border border-red-900/30">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Certifications</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2">
                  GOOGLE Data Analytics
                </Badge>
                <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2">
                  Foundations of Data Science
                </Badge>
                <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2">
                  The Power of Statistics
                </Badge>
                <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-2">
                  Data Structures and Algorithm
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
