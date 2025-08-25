'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Users, BookOpen, Code, Zap } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Techevince 10.0 - Overall Best Project",
            description: "Received Overall Best and Audience Best Project in Software Domain for ChainBazaar.",
            date: "2024",
            category: "Competition",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <Medal className="w-8 h-8" />,
            title: "13th Inter-IIT Bronze Medal",
            description: "Won bronze medal in product development problem statement creating an AI builder for Dream 11.",
            date: "2024",
            category: "Inter-IIT",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Meta Hacker Cup 2024",
            description: "Qualified to 2nd round and secured a rank of 998 out of 22.5K participants.",
            date: "2024",
            category: "Competitive Programming",
            color: "from-blue-500 to-purple-500"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Kriti 2024 - Business Quiz Gold",
            description: "Awarded Gold Medal for Business Quiz in Inter Hostel Tech Competition.",
            date: "2024",
            category: "Quiz Competition",
            color: "from-yellow-400 to-yellow-600"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Kriti 2024 - StartUp Sprint Silver",
            description: "Awarded Silver Medal for developing a startup idea in Inter Hostel Tech Competition.",
            date: "2024",
            category: "Startup",
            color: "from-gray-400 to-gray-600"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "ICPC-de-Tryst 2024, IIT Delhi",
            description: "Secured team rank of 55 among 1000+ registrations | Ranked 3rd in IITG.",
            date: "2024",
            category: "Competitive Programming",
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "International Coding League 2024",
            description: "Secured team rank of 77 among 500+ teams | Ranked 8th in IITG.",
            date: "2024",
            category: "Competitive Programming",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "JEE Advanced 2022 - AIR 561",
            description: "Secured All India Rank 561 out of 2,50,000 shortlisted candidates.",
            date: "2022",
            category: "Academic",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Medal className="w-8 h-8" />,
            title: "JEE Mains 2022 - AIR 762",
            description: "Secured All India Rank 762 out of 10,00,000+ candidates.",
            date: "2022",
            category: "Academic",
            color: "from-blue-400 to-blue-600"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "KVPY - AIR 1295",
            description: "Secured All India Rank 1295 out of 50,000+ candidates in Kishore Vaigyanik Protsahan Yojana.",
            date: "2022",
            category: "Scholarship",
            color: "from-pink-500 to-rose-500"
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
      number: "3",
      label: "Hackathon Wins",
      description: "Winner in various national hackathons",
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
    { platform: "LeetCode", rating: "1722", rank: "Knight", problems: "300+" },
    { platform: "Codeforces", rating: "1662", rank: "Expert", contests: "50+" },
    { platform: "CodeChef", rating: "2013", rank: "5 Star", problems: "100+" },
    { platform: "AtCoder", rating: "1015", rank: "Green", contests: "15+" }
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
