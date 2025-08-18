'use client';

import { motion } from 'framer-motion';
import { BookOpen, Target, Heart, Code } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Pursuing B.Tech in Computer Science at IIT Guwahati with a focus on algorithms and system design."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Goals",
      description: "Aspiring to work on cutting-edge AI research and build scalable software systems that make a difference."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Passion",
      description: "Deep interest in machine learning, distributed systems, and full-stack development."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Beyond Code",
      description: "Sketching enthusiast, table tennis player."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Passionate About Technology & Innovation
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m a final-year Computer Science student at the prestigious Indian Institute 
                of Technology, Guwahati. My journey in technology began with curiosity about 
                how software systems work and has evolved into a deep passion for building 
                solutions that can scale and make a meaningful impact.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently, I&apos;m exploring the fascinating world of artificial intelligence 
                and machine learning, with particular interest in natural language processing 
                and computer vision. I believe that the intersection of AI and software 
                engineering holds immense potential for solving real-world problems.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me capturing moments through photography, 
                strategizing over a chess board, or diving into the latest sci-fi novel. 
                I believe that diverse interests fuel creativity in problem-solving.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Leadership', 'Research', 'Innovation'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
            <blockquote className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200 italic">
              &quot;The best way to predict the future is to create it. I&apos;m passionate about 
              using technology to build solutions that can make a positive impact on society.&quot;
            </blockquote>
            <div className="mt-4 flex items-center justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
