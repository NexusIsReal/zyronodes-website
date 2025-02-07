'use client';

import { motion } from 'framer-motion';
import { FaCube, FaServer, FaMemory, FaShieldAlt } from 'react-icons/fa';

export default function MinecraftHosting() {
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
                <FaCube className="text-gradient" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Minecraft Server
                <span className="text-gradient block">Hosting</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                High-performance Minecraft server hosting with instant setup, 
                mod support, and 24/7 uptime guarantee.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-lg font-semibold text-white shadow-lg"
              >
                View Plans
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <div className="relative">
                <motion.img
                  src="/minecraft-server.png"
                  alt="Minecraft Server"
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCube />,
                title: "One-Click Modpacks",
                description: "Install popular modpacks with a single click"
              },
              {
                icon: <FaServer />,
                title: "NVMe Storage",
                description: "Lightning-fast storage for better performance"
              },
              {
                icon: <FaMemory />,
                title: "Dedicated RAM",
                description: "Allocated memory for smooth gameplay"
              },
              {
                icon: <FaShieldAlt />,
                title: "DDoS Protection",
                description: "24/7 protection against attacks"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="text-3xl mb-4 text-gradient">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                ram: "2GB",
                price: "$5",
                features: ["2GB RAM", "10 Player Slots", "Basic Support", "Modpack Support"]
              },
              {
                name: "Premium",
                ram: "4GB",
                price: "$10",
                features: ["4GB RAM", "20 Player Slots", "24/7 Support", "Custom Domain"]
              },
              {
                name: "Ultimate",
                ram: "8GB",
                price: "$20",
                features: ["8GB RAM", "Unlimited Players", "Priority Support", "Daily Backups"]
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
                <div className="text-4xl font-bold mb-6 text-gradient">{plan.price}<span className="text-sm text-gray-400">/mo</span></div>
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
