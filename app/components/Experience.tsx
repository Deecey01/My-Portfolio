'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
const experiences = [
    {
        title: "Product Engineering Intern",
        company: "Sprinklr",
        location: "Gurgaon, India",
        duration: "May 2025 - July 2025",
        type: "Internship",
        description: "Developed a comprehensive MS Teams standup bot using Azure Bot Framework to streamline team communication and project management across multiple teams. Integrated advanced features including LLM-powered summarization and automated reporting to significantly reduce administrative overhead.",
        achievements: [
            "Built MS Teams standup bot serving multiple teams with 15+ role-based commands",
            "Integrated Jira REST API for seamless ticket tracking and project management",
            "Implemented LLM for summarization and dynamic Confluence template generation",
            "Reduced admin overhead by 70% through automation and intelligent workflows",
            "Deployed on company Kubernetes cluster with dedicated CNAME for production use"
        ],
        technologies: ["Azure Bot Framework", "MongoDB", "Jira REST API", "LLM", "Docker", "Kubernetes", "Helm"],
        website: "https://sprinklr.com"
    },
    {
        title: "Web Development Head",
        company: "Coding Club, IIT Guwahati",
        location: "Guwahati, Assam",
        duration: "June 2024 - May 2025",
        type: "Position of Responsibility",
        description: "Leading the web development vertical of the Coding Club at IIT Guwahati. Responsible for organizing and conducting web development courses, heading club projects, and managing a team of developers for competitive programming and project development initiatives.",
        achievements: [
            "Organized and led comprehensive web development courses for 100+ students",
            "Managed a team of 15 developers for an InterIIT competition project",
            "Achieved Bronze medal in InterIIT competition through effective team leadership",
            "Developed and maintained multiple club projects and web applications",
            "Mentored junior students in full-stack development and modern web technologies"
        ],
        technologies: ["Next.js", "React", "MongoDB", "Node.js", "Express", "Socket.io", "JavaScript", "TypeScript"],
        website: "https://github.com/Coding-Club-IITG"
    },
    {
        title: "Head of Web Operations",
        company: "Prayatna, IIT Guwahati",
        location: "Guwahati, Assam",
        duration: "June 2024 - May 2025",
        type: "Position of Responsibility",
        description: "Leading web operations for Prayatna, the biggest social fest in North East India. Responsible for managing the entire web infrastructure, coordinating with multiple teams, and ensuring seamless digital experience for thousands of participants.",
        achievements: [
            "Led a team of 5 people to independently handle web operations for major social fest",
            "Managed web infrastructure for thousands of participants and visitors",
            "Coordinated with multiple teams to ensure seamless digital experience"
        ],
        technologies: ["HTML", "CSS"],
        website: "https://prayatna2025.vercel.app"
    }
];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Position of Responsibility':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Teaching':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
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
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey through internships, research, and teaching experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title + experience.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                            {experience.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                          <span>{experience.company}</span>
                          {experience.website && (
                            <a 
                              href={experience.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 hover:text-blue-700 dark:hover:text-blue-300"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for larger screens */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Looking for New Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I&apos;m actively seeking full-time software engineering roles and research positions. 
              Let&apos;s connect and discuss how I can contribute to your team!
            </p>
            <a
              href="mailto:your.email@iitg.ac.in"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
