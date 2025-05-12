import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title = "AI Image Generation",
  description = "A deep learning model that generates realistic images from text descriptions using GANs and transformer architecture.",
  image = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  technologies = ["PyTorch", "TensorFlow", "GANs"],
  demoUrl = "#",
  repoUrl = "#",
  onClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-black border-gray-800 hover:border-red-500 transition-all duration-300 flex flex-col">
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
        </div>

        <CardContent className="flex flex-col flex-grow p-5 bg-black">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-red-900/20 text-red-400 border-red-500/50"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

          <div className="flex gap-2 mt-auto">
            {demoUrl && (
              <Button
                size="sm"
                variant="outline"
                className="bg-red-900/20 text-red-400 border-red-500/50 hover:bg-red-800/30 hover:text-red-300"
                onClick={() => window.open(demoUrl, "_blank")}
              >
                <Play className="h-4 w-4 mr-1" /> Demo
              </Button>
            )}
            {repoUrl && (
              <Button
                size="sm"
                variant="outline"
                className="bg-gray-900/50 text-gray-400 border-gray-700 hover:bg-gray-800/50 hover:text-gray-300"
                onClick={() => window.open(repoUrl, "_blank")}
              >
                <Github className="h-4 w-4 mr-1" /> Code
              </Button>
            )}
            {onClick && (
              <Button
                size="sm"
                variant="outline"
                className="bg-gray-900/50 text-gray-400 border-gray-700 hover:bg-gray-800/50 hover:text-gray-300 ml-auto"
                onClick={onClick}
              >
                <ExternalLink className="h-4 w-4 mr-1" /> Details
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
