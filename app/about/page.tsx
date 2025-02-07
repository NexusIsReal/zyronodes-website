'use client';

import { motion } from 'framer-motion';
import { FaServer, FaUsers, FaGlobe, FaClock } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">ZyroNodes</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Empowering gamers with high-performance server hosting solutions since 2023
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaServer />, value: "1000+", label: "Servers Hosted" },
              { icon: <FaUsers />, value: "5000+", label: "Happy Customers" },
              { icon: <FaGlobe />, value: "10", label: "Global Locations" },
              { icon: <FaClock />, value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="text-3xl mb-4 text-gradient">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400">
                Founded in 2023, ZyroNodes was born from a simple idea: to provide gamers with the best possible server hosting experience. Our team of passionate gamers and tech enthusiasts came together to create a platform that we ourselves would love to use.
              </p>
              <p className="text-gray-400">
                Today, we serve thousands of customers worldwide, hosting game servers for popular titles like Minecraft, FiveM, and many more. Our commitment to performance, reliability, and customer satisfaction remains as strong as ever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "/team/alex.jpg"
              },
              {
                name: "Sarah Chen",
                role: "Technical Director",
                image: "/team/sarah.jpg"
              },
              {
                name: "Mike Williams",
                role: "Customer Success Lead",
                image: "/team/mike.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-teal-500 to-blue-500">
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <FaUsers className="text-4xl text-gray-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
