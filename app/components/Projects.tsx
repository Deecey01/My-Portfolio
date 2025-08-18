'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Code Review Assistant",
      description: "A machine learning model that automatically reviews code for potential bugs, security vulnerabilities, and style issues. Built using transformer architecture and trained on large codebases.",
      image: "/project-1.jpg",
      technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "React"],
      githubUrl: "https://github.com/yourusername/ai-code-review",
      liveUrl: "https://ai-code-review.demo.com",
      stars: 156,
      forks: 23,
      featured: true
    },
    {
      title: "Distributed Task Scheduler",
      description: "A scalable distributed system for scheduling and executing tasks across multiple nodes. Implements consensus algorithms and fault tolerance mechanisms.",
      image: "/project-2.jpg",
      technologies: ["Go", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/distributed-scheduler",
      liveUrl: "",
      stars: 89,
      forks: 12,
      featured: true
    },
    {
      title: "Smart Campus Navigation App",
      description: "Mobile application for IIT Guwahati campus navigation using indoor positioning and AR technology. Helps students and visitors navigate the large campus efficiently.",
      image: "/project-3.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "AR.js", "Socket.io"],
      githubUrl: "https://github.com/yourusername/campus-nav",
      liveUrl: "https://campusnav.app",
      stars: 67,
      forks: 8,
      featured: false
    },
    {
      title: "Real-time Collaborative IDE",
      description: "Web-based IDE with real-time collaboration features, supporting multiple programming languages with syntax highlighting and auto-completion.",
      image: "/project-4.jpg",
      technologies: ["TypeScript", "WebRTC", "Express.js", "Monaco Editor", "WebSockets"],
      githubUrl: "https://github.com/yourusername/collab-ide",
      liveUrl: "https://collabide.dev",
      stars: 134,
      forks: 19,
      featured: false
    },
    {
      title: "Blockchain-based Voting System",
      description: "Secure and transparent voting system using blockchain technology. Ensures vote immutability and provides real-time result tracking.",
      image: "/project-5.jpg",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      githubUrl: "https://github.com/yourusername/blockchain-voting",
      liveUrl: "",
      stars: 92,
      forks: 15,
      featured: false
    },
    {
      title: "ML-Based Stock Predictor",
      description: "Machine learning model for stock price prediction using deep learning techniques. Incorporates technical indicators and sentiment analysis.",
      image: "/project-6.jpg",
      technologies: ["Python", "TensorFlow", "Pandas", "Streamlit", "yfinance"],
      githubUrl: "https://github.com/yourusername/stock-predictor",
      liveUrl: "https://stock-predictor.streamlit.app",
      stars: 45,
      forks: 7,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    <Star size={16} />
                    <span>Featured Project</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats & Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star size={16} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={16} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Other Notable Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Deecey01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
