import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
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
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500/5 blur-3xl" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=20')] opacity-5 bg-center" />
      </div>

      {/* Particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-red-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2 + Math.random() * 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [null, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}

      <div className="container mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-red-500 mx-auto">
                <img
                  src="/photo.jpg"
                  alt="Harmandeep Singh"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Animated text intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-red-500 font-mono text-xl mb-2">Hello, I'm</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              {name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">
              {title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-400 text-lg md:text-xl mb-8">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md text-lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects <ArrowDownIcon className="ml-2" />
            </Button>

            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500/10 px-8 py-6 rounded-md text-lg"
              onClick={() => window.open(resumeUrl, "_blank")}
            >
              Download Resume <DownloadIcon className="ml-2" />
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <a
              href="https://github.com/codebyharman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/codebyharman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://x.com/codebyharman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <TwitterIcon size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDownIcon className="text-red-500" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
