'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaServer, FaHeadset, FaBook, FaShieldAlt, FaGamepad, FaRocket } from 'react-icons/fa';
import { SiSpeedtest } from 'react-icons/si';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const menuItems = [
    { 
      name: 'Games', 
      href: '#',
      icon: <FaGamepad className="text-xl group-hover:text-teal-400 transition-colors duration-200" />,
      submenu: [
        { name: 'View All Games', href: '/games' },
        { name: 'Minecraft', href: '/games/minecraft' },
        { name: 'FiveM', href: '/games/fivem' },
        { name: 'Rust', href: '#', badge: 'Soon' }
      ]
    },
    {
      name: 'Support',
      href: '#',
      icon: <FaHeadset className="text-xl group-hover:text-blue-400 transition-colors duration-200" />,
      submenu: [
        { name: 'Help Center', href: '/contact' },
        { name: 'Server Status', href: '#' },
        { name: 'Knowledge Base', href: '#' },
        { name: 'Discord Community', href: '#' }
      ]
    },
    {
      name: 'Company',
      href: '#',
      icon: <FaRocket className="text-xl group-hover:text-purple-400 transition-colors duration-200" />,
      submenu: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Privacy Policy', href: '/legal/privacy' }
      ]
    },
    {
      name: 'Security',
      href: '#',
      icon: <FaShieldAlt className="text-xl group-hover:text-teal-400 transition-colors duration-200" />,
      highlight: true,
      submenu: [
        { name: 'DDoS Protection', href: '#' },
        { name: 'Backup System', href: '#' },
        { name: 'SSL Certificates', href: '#' },
        { name: 'Security Features', href: '#' }
      ]
    }
  ];

  const iconAnimation = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0a0f1a]/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-8 h-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg transform rotate-45"></div>
              <SiSpeedtest className="absolute inset-0 w-full h-full text-white p-1.5 transform -rotate-45" />
            </motion.div>
            <span className="text-2xl font-bold text-gradient">ZyroNodes</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setHoveredIcon(item.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-2 ${
                    item.highlight ? 'text-teal-500 hover:text-teal-400' : ''
                  }`}
                >
                  <motion.div
                    variants={iconAnimation}
                    initial="initial"
                    animate={hoveredIcon === item.name ? "hover" : "initial"}
                    className="mr-2"
                  >
                    {item.icon}
                  </motion.div>
                  {item.name}
                  {item.submenu && (
                    <motion.svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ rotate: hoveredIcon === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  )}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2 mt-2 glass-card rounded-xl border border-white/10 shadow-xl">
                      {item.submenu.map((subitem, index) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                        >
                          {index === 0 && (
                            <div className="flex items-center gap-2">
                              <FaServer className="text-lg text-teal-500" />
                              {subitem.name}
                            </div>
                          )}
                          {index !== 0 && subitem.name}
                          {subitem.badge && (
                            <span className="px-2 py-1 text-xs font-medium bg-teal-500/20 text-teal-500 rounded-full">
                              {subitem.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <div
                    className={`flex items-center py-2 text-gray-300 hover:text-white transition-colors duration-200 ${
                      item.highlight ? 'text-teal-500 hover:text-teal-400' : ''
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="mr-2"
                    >
                      {item.icon}
                    </motion.div>
                    {item.name}
                  </div>
                  {item.submenu && (
                    <div className="pl-6 space-y-2 mt-2">
                      {item.submenu.map((subitem, index) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="flex items-center justify-between py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {index === 0 && (
                            <div className="flex items-center gap-2">
                              <FaServer className="text-lg text-teal-500" />
                              {subitem.name}
                            </div>
                          )}
                          {index !== 0 && subitem.name}
                          {subitem.badge && (
                            <span className="px-2 py-1 text-xs font-medium bg-teal-500/20 text-teal-500 rounded-full">
                              {subitem.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
