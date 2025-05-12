import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src="/logo.png" alt="HS Logo" className="h-10 mr-2" />
            <span className="text-xl font-bold text-red-500">
              <span className="text-white">Harmandeep</span> Singh
            </span>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {["Home", "Projects", "Skills", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-950 md:hidden"
          >
            Menu
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-20">
          <HeroSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-4 text-red-500">Projects</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore my portfolio of AI/ML projects showcasing expertise in
                machine learning, deep learning, computer vision, and natural
                language processing.
              </p>
            </motion.div>
            <ProjectsSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-4 text-red-500">Skills</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Technical competencies and expertise developed through academic
                research, professional experience, and personal projects.
              </p>
            </motion.div>
            <SkillsSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-4 text-red-500">Contact</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Interested in collaborating or have questions about my work?
                Feel free to reach out through any of the channels below.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-900/50 p-8 rounded-lg border border-red-900/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                  <p className="text-gray-400 mb-6">
                    I'm currently looking for new opportunities in AI/ML
                    development. My inbox is always open for interesting
                    discussions and potential collaborations.
                  </p>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center text-gray-300">
                      <Mail className="mr-2 h-4 w-4 text-red-500" /> 
                      <span>harman1807d@gmail.com</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone className="mr-2 h-4 w-4 text-red-500" /> 
                      <span>+91-7678115855</span>
                    </div>
                    <div className="flex space-x-4 mt-2">
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-950"
                        onClick={() =>
                          window.open("mailto:harman1807d@gmail.com")
                        }
                      >
                        <Mail className="mr-2 h-4 w-4" /> Email Me
                      </Button>
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-950"
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/codebyharman/",
                          )
                        }
                      >
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </Button>
                    </div>
                    <div className="flex space-x-4 mt-2">
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-950"
                        onClick={() =>
                          window.open("https://github.com/codebyharman")
                        }
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-950"
                        onClick={() =>
                          window.open("https://x.com/codebyharman")
                        }
                      >
                        <Twitter className="mr-2 h-4 w-4" /> X
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-900/50 p-8 rounded-lg border border-red-900/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-bold mb-4">View My Work</h3>
                  <p className="text-gray-400 mb-6">
                    Check out my code repositories, research papers, and other
                    professional profiles. Feel free to explore and connect.
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-950"
                      onClick={() =>
                        window.open("https://github.com/codebyharman")
                      }
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-950"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1Nu1D0hJf2Rfp14N2I21_TFsRnpOlYLyS/view?usp=sharing"
                        )
                      }
                    >
                      Download CV
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-red-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Harmandeep Singh. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/codebyharman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/codebyharman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/codebyharman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:harman1807d@gmail.com"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <Separator className="my-6 bg-red-900/30" />
          <div className="text-center text-sm text-gray-600">
            <p>
              Designed and built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
