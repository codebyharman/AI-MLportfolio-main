import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Phone, Twitter, Menu, X } from "lucide-react";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "contact"];
      let currentSection = sections[0];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = ["Home", "Projects", "Skills", "Contact"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-indigo-900/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <motion.img 
              src="/logo.png" 
              alt="HS Logo" 
              className="h-10 mr-2"
              whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-xl font-bold">
              <motion.span 
                className="text-white"
                whileHover={{ color: "#a5b4fc" }}
                transition={{ duration: 0.2 }}
              >
                Harmandeep
              </motion.span>{" "}
              <motion.span 
                className="text-indigo-400"
                whileHover={{ color: "#818cf8" }}
                transition={{ duration: 0.2 }}
              >
                Singh
              </motion.span>
            </span>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-gray-300 hover:text-indigo-400 transition-colors ${
                  activeSection === item.toLowerCase() ? "text-indigo-400" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </motion.div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-900/95 border-b border-indigo-900/30"
            >
              <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`text-gray-300 hover:text-indigo-400 transition-colors px-4 py-2 ${
                      activeSection === item.toLowerCase() ? "text-indigo-400 bg-indigo-500/10 rounded-md" : ""
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              <motion.h2 
                className="text-4xl font-bold mb-4 text-indigo-400"
                whileHover={{ scale: 1.02, color: "#818cf8" }}
                transition={{ duration: 0.2 }}
              >
                Projects
              </motion.h2>
              <motion.p 
                className="text-gray-400 max-w-2xl mx-auto"
                whileHover={{ color: "#a5b4fc" }}
              >
                Explore my portfolio of AI/ML projects showcasing expertise in
                machine learning, deep learning, computer vision, and natural
                language processing.
              </motion.p>
            </motion.div>
            <ProjectsSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <motion.h2 
                className="text-4xl font-bold mb-4 text-indigo-400"
                whileHover={{ scale: 1.02, color: "#818cf8" }}
                transition={{ duration: 0.2 }}
              >
                Skills
              </motion.h2>
              <motion.p 
                className="text-gray-400 max-w-2xl mx-auto"
                whileHover={{ color: "#a5b4fc" }}
              >
                Technical competencies and expertise developed through academic
                research, professional experience, and personal projects.
              </motion.p>
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
              <motion.h2 
                className="text-4xl font-bold mb-4 text-indigo-400"
                whileHover={{ scale: 1.02, color: "#818cf8" }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.h2>
              <motion.p 
                className="text-gray-400 max-w-2xl mx-auto"
                whileHover={{ color: "#a5b4fc" }}
              >
                Interested in collaborating or have questions about my work?
                Feel free to reach out through any of the channels below.
              </motion.p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-800/50 p-8 rounded-lg border border-indigo-900/30 shadow-lg hover:shadow-indigo-900/10"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">Get In Touch</h3>
                  <p className="text-gray-400 mb-6">
                    I'm currently looking for new opportunities in AI/ML
                    development. My inbox is always open for interesting
                    discussions and potential collaborations.
                  </p>
                  <div className="flex flex-col space-y-4">
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5, color: "#a5b4fc" }}
                    >
                      <Mail className="mr-2 h-4 w-4 text-indigo-400" /> 
                      <span>harman1807d@gmail.com</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5, color: "#a5b4fc" }}
                    >
                      <Phone className="mr-2 h-4 w-4 text-indigo-400" /> 
                      <span>+91-7678115855</span>
                    </motion.div>
                    <div className="flex space-x-4 mt-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="outline"
                          className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 group"
                          onClick={() =>
                            window.open("mailto:harman1807d@gmail.com")
                          }
                        >
                          <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> Email Me
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="outline"
                          className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 group"
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/in/codebyharman/",
                            )
                          }
                        >
                          <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> LinkedIn
                        </Button>
                      </motion.div>
                    </div>
                    <div className="flex space-x-4 mt-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="outline"
                          className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 group"
                          onClick={() =>
                            window.open("https://github.com/codebyharman")
                          }
                        >
                          <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> GitHub
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="outline"
                          className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 group"
                          onClick={() =>
                            window.open("https://x.com/codebyharman")
                          }
                        >
                          <Twitter className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> X
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-800/50 p-8 rounded-lg border border-indigo-900/30 shadow-lg hover:shadow-indigo-900/10"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">View My Work</h3>
                  <p className="text-gray-400 mb-6">
                    Check out my code repositories, research papers, and other
                    professional profiles. Feel free to explore and connect.
                  </p>
                  <div className="flex space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 group"
                        onClick={() =>
                          window.open("https://github.com/codebyharman")
                        }
                      >
                        <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> GitHub
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 group"
                        onClick={() =>
                          window.open(
                            "https://drive.google.com/file/d/1Nu1D0hJf2Rfp14N2I21_TFsRnpOlYLyS/view?usp=sharing"
                          )
                        }
                      >
                        Download CV
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-indigo-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Harmandeep Singh. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/codebyharman" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/codebyharman/" },
                { icon: Twitter, href: "https://x.com/codebyharman" },
                { icon: Mail, href: "mailto:harman1807d@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-indigo-500/10"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          <Separator className="my-6 bg-indigo-900/30" />
          <motion.div 
            className="text-center text-sm text-gray-600"
            whileHover={{ color: "#a5b4fc" }}
          >
            <p>
              Designed and built with React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
          
          {/* Back to Top Button */}
          <motion.div
            className="fixed bottom-8 right-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: window.scrollY > 300 ? 1 : 0,
              y: window.scrollY > 300 ? 0 : 100
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full bg-indigo-500/80 text-white shadow-lg backdrop-blur-sm hover:bg-indigo-600"
              whileHover={{ y: -5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
