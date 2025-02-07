'use client';

import { motion } from 'framer-motion';
import { FaServer, FaRocket, FaShieldAlt, FaDiscord, FaGamepad, FaCube, FaCar, FaHammer } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="hero-gradient absolute inset-0"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-500/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">Premium</span> Game
                <br />
                Server Hosting
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-400 mb-8 md:mb-12"
              >
                Experience lightning-fast game servers with 99.9% uptime and instant setup.
                Built for gamers, by gamers.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 md:justify-start"
              >
                <Link
                  href="/games"
                  className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-center text-lg group flex items-center justify-center"
                >
                  Get Started
                  <HiCursorClick className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-center text-lg flex items-center justify-center"
                >
                  Learn More
                  <FaRocket className="ml-2 text-xl" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-teal-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-blue-500/20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-64 h-64 relative"
                  >
                    <FaGamepad className="w-full h-full text-gradient opacity-90" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose <span className="text-gradient">ZyroNodes</span>?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "High Performance",
                description: "Experience lightning-fast speeds with our optimized server infrastructure"
              },
              {
                icon: <FaServer />,
                title: "99.9% Uptime",
                description: "We guarantee your server will be online when you need it most"
              },
              {
                icon: <FaShieldAlt />,
                title: "DDoS Protection",
                description: "Advanced protection to keep your server safe from attacks"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-xl glow group"
              >
                <div className="text-4xl mb-6 text-gradient group-hover:scale-110 transform transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Popular Games
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Minecraft Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 glow"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://cdn.freebiesupply.com/logos/large/2x/minecraft-1-logo-svg-vector.svg"
                  alt="Minecraft Server Hosting"
                  fill
                  className="object-contain transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Minecraft</h3>
              <p className="text-gray-400 mb-6">
                Host your Minecraft server with advanced features, mods support, and instant setup.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/games/minecraft"
                  className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
                <Link 
                  href="/games"
                  className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* FiveM Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 glow"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://img.utdstc.com/icon/bcb/fc5/bcbfc5ae3d074d8734b9f51e64f7e95d4325485e0c51661dcf3167e45d768a8d:200"
                  alt="FiveM Server Hosting"
                  fill
                  className="object-contain transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">FiveM</h3>
              <p className="text-gray-400 mb-6">
                Create your own GTA V roleplay server with our optimized FiveM hosting solutions.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/games/fivem"
                  className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
                <Link 
                  href="/games"
                  className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Rust Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6 glow relative"
            >
              <div className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://www.playrust.nl/wp-content/uploads/2017/02/Rust-Logo.jpg"
                  alt="Rust Server Hosting"
                  fill
                  className="object-contain transform hover:scale-110 transition-transform duration-500 filter grayscale"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rust</h3>
              <p className="text-gray-400 mb-6">
                High-performance Rust server hosting with DDoS protection and modding support.
              </p>
              <div className="flex gap-4">
                <button
                  disabled
                  className="flex-1 bg-gray-600 cursor-not-allowed text-gray-400 font-semibold py-2 px-4 rounded-lg"
                >
                  Learn More
                </button>
                <Link
                  href="/games"
                  className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-gray-300 font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-center"
                >
                  View All Games
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "10Gbps", label: "Network" },
              { value: "5000+", label: "Customers" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-12 rounded-2xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
              Ready to <span className="text-gradient">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 relative">
              Join thousands of satisfied customers and experience the best in game server hosting.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-lg font-semibold text-white shadow-lg relative"
            >
              Create Your Server
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
