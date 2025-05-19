import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ExternalLinkIcon,
  SendIcon,
  FileTextIcon
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  resumeUrl?: string;
}

const HeroSection = ({
  name = "Harmandeep Singh",
  title = "Aspiring Data Scientist",
  description = "Passionate about applying AI/ML to solve real-world problems. Experienced with data preprocessing, model training, and visualization.",
  resumeUrl = "https://drive.google.com/file/d/1Nu1D0hJf2Rfp14N2I21_TFsRnpOlYLyS/view?usp=sharing",
}: HeroSectionProps) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <motion.section 
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-900 to-black py-12 px-4 md:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500/10 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              top: `${i * 30}%`,
              left: `${i * 30}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left side content */}
          <motion.div
            className="w-full md:w-3/5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {name}
              </motion.h1>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-400 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {title}
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 text-lg max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {description}
              </motion.p>
              
              <motion.div 
                className="pt-4 flex flex-col sm:flex-row gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-6 rounded-md text-lg group flex items-center"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="mr-2">View Projects</span>
                  <ArrowDownIcon className="group-hover:animate-bounce" />
                </Button>
                
                <div className="flex space-x-5">
                  <Button
                    variant="outline"
                    className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 rounded-md text-lg group flex items-center"
                    onClick={() => window.open(resumeUrl, "_blank")}
                  >
                    <FileTextIcon className="mr-2 group-hover:scale-110 transition-transform" />
                    <span>Download CV</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 rounded-md text-lg group flex items-center"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <SendIcon className="mr-2 group-hover:scale-110 transition-transform" />
                    <span>Contact Me</span>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Scroll indicator replaced with text direction */}
            <motion.div
              className="mt-10 flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div 
                className="w-20 h-[1px] bg-indigo-500/50"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              <span className="text-gray-400 text-sm uppercase tracking-widest">Scroll to projects</span>
            </motion.div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center md:justify-end mt-4 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div className="relative">
              {/* Background blur/glow */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl transform scale-110"
                animate={{
                  scale: isImageHovered ? 1.2 : 1.1,
                  opacity: isImageHovered ? 0.8 : 0.5,
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Circular frame with effect */}
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute inset-0 border-2 border-indigo-500/30 rounded-full"
                  animate={{
                    borderWidth: isImageHovered ? "4px" : "2px",
                    borderColor: isImageHovered ? "rgba(99, 102, 241, 0.5)" : "rgba(99, 102, 241, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <img
                    src="/photo.jpg"
                    alt="Harmandeep Singh"
                    className="h-full w-full object-cover rounded-full transition-all duration-500 filter saturate-[1.1]"
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 rounded-full"
                  >
                    <div className="flex space-x-4">
                      {[
                        { icon: GithubIcon, href: "https://github.com/codebyharman" },
                        { icon: LinkedinIcon, href: "https://www.linkedin.com/in/codebyharman/" },
                        { icon: TwitterIcon, href: "https://x.com/codebyharman" }
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-indigo-300 transition-colors"
                          whileHover={{ scale: 1.2, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-5 -right-5 w-20 h-20 border border-indigo-500/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-3 -left-3 w-16 h-16 border border-purple-500/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
