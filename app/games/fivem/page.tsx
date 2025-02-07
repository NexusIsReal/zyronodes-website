'use client';

import { motion } from 'framer-motion';
import { FaCar, FaServer, FaRocket, FaShieldAlt } from 'react-icons/fa';

export default function FiveMHosting() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl mb-6 inline-block"
              >
                <FaCar className="text-gradient" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                FiveM Server
                <span className="text-gradient block">Hosting</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Premium FiveM server hosting with automated setup, 
                resource management, and advanced DDoS protection.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-lg font-semibold text-white shadow-lg"
                >
                  View Plans
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-card rounded-lg text-lg font-semibold"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <div className="relative">
                <motion.img
                  src="/fivem-server.png"
                  alt="FiveM Server"
                  className="rounded-lg shadow-2xl"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute -z-10 inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur-xl opacity-30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCar />,
                title: "Custom Resources",
                description: "Easy installation of custom resources and scripts"
              },
              {
                icon: <FaServer />,
                title: "Dedicated Hardware",
                description: "High-performance servers for smooth gameplay"
              },
              {
                icon: <FaRocket />,
                title: "Quick Setup",
                description: "Get your server running in minutes"
              },
              {
                icon: <FaShieldAlt />,
                title: "DDoS Protection",
                description: "Enterprise-grade protection included"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="text-3xl mb-4 text-gradient">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                slots: "32",
                price: "$15",
                features: ["32 Player Slots", "2vCPU Cores", "4GB RAM", "Basic Support"]
              },
              {
                name: "Pro",
                slots: "64",
                price: "$25",
                features: ["64 Player Slots", "4vCPU Cores", "8GB RAM", "Priority Support"]
              },
              {
                name: "Enterprise",
                slots: "128",
                price: "$45",
                features: ["128 Player Slots", "8vCPU Cores", "16GB RAM", "24/7 Support"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6 text-gradient">
                  {plan.price}<span className="text-sm text-gray-400">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg font-semibold"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
