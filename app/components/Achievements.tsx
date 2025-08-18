'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Users, BookOpen, Code, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Google Summer of Code 2024",
      description: "Selected for GSoC 2024 to work on TensorFlow project, implementing neural architecture search algorithms.",
      date: "2024",
      category: "Open Source",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "ACM ICPC Regionalist",
      description: "Qualified for ACM ICPC Asia-Kolkata Regional Contest 2023, ranked in top 50 teams.",
      date: "2023",
      category: "Competitive Programming",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Best Paper Award - EMNLP 2024",
      description: "Received best paper award for research on multimodal transformers at EMNLP conference.",
      date: "2024",
      category: "Research",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Dean's List - Academic Excellence",
      description: "Consistently maintained top 5% rank in Computer Science department for 3 consecutive semesters.",
      date: "2022-2024",
      category: "Academic",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "HackMIT Winner",
      description: "Won first place at HackMIT 2023 for developing an AI-powered accessibility tool for visually impaired users.",
      date: "2023",
      category: "Hackathon",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research Publication",
      description: "Published 3 research papers in top-tier venues including NeurIPS, ICML, and EMNLP.",
      date: "2023-2024",
      category: "Research",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    {
      icon: <Code className="w-8 h-8" />,
      number: "850+",
      label: "Codeforces Problems Solved",
      description: "Consistent problem solving with 95% accuracy",
      color: "text-blue-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "1662",
      label: "Codeforces Rating",
      description: "Expert level competitive programmer",
      color: "text-purple-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "15+",
      label: "Hackathon Wins",
      description: "Winner in various national and international hackathons",
      color: "text-yellow-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "8.32/10",
      label: "CGPA",
      description: "Consistent academic performance throughout B.Tech",
      color: "text-green-600"
    }
  ];

  const competitiveProgramming = [
    { platform: "LeetCode", rating: "1750+", rank: "Knight", problems: "300+" },
    { platform: "Codeforces", rating: "1662", rank: "Expert", contests: "50+" },
    { platform: "CodeChef", rating: "2013", rank: "5 Star", problems: "100+" },
    { platform: "AtCoder", rating: "1013", rank: "Yellow", contests: "15+" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
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
              Achievements & Awards
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition and milestones that mark my journey in technology and academia.
          </p>
        </motion.div>

        {/* Main Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all group"
            >
              {/* Icon and Category */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.color} text-white group-hover:scale-110 transition-transform`}>
                  {achievement.icon}
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {achievement.date}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} bg-opacity-10 text-gray-700 dark:text-gray-300`}>
                    {achievement.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Performance Statistics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-900 dark:text-white font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Programming Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Competitive Programming Profiles
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              My journey and achievements across various competitive programming platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveProgramming.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {platform.platform}
                  </h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {platform.rating}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Rank:</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {platform.rank}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        {platform.problems ? 'Problems:' : 'Contests:'}
                      </span>
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        {platform.problems || platform.contests}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              Always Striving for Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              These achievements represent my commitment to continuous learning and growth. 
              I&apos;m always looking for new challenges and opportunities to push my boundaries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
