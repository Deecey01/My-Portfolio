'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Software Engineering",
    "Distributed Systems",
    "Machine Learning",
    "Compiler Design",
    "Virtual and Augmented Reality Systems"
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
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
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Institution Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap size={40} className="text-white" />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-grow space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    Computer Science & Engineering
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} />
                    <span className="font-medium">Indian Institute of Technology, Guwahati</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>2022 - 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Guwahati, Assam</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      CGPA: <span className="font-semibold">8.32/10</span>
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    Final Year
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Pursuing a comprehensive computer science education at one of India&apos;s premier 
                  technical institutions. Actively engaged in research projects focusing on 
                  machine learning and software systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Relevant Coursework
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
                    {course}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Academic Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { number: "8.32", label: "CGPA", suffix: "/10" },
              { number: "4", label: "Years", suffix: "" },
              { number: "50+", label: "Courses", suffix: "" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.number}
                  <span className="text-lg text-gray-500">{stat.suffix}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
