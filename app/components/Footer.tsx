'use client';

import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaGithub, FaEnvelope, FaGamepad, FaServer, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: 'Games',
      links: [
        { name: 'Minecraft', href: '/games/minecraft' },
        { name: 'FiveM', href: '/games/fivem' },
        { name: 'Rust', href: '#' },
        { name: 'View All Games', href: '/#games' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Privacy Policy', href: '/legal/privacy' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/contact' },
        { name: 'Server Status', href: '#' },
        { name: 'Knowledge Base', href: '#' },
        { name: 'Discord Community', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaDiscord />, href: '#', label: 'Discord' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaEnvelope />, href: 'mailto:support@zyronodes.com', label: 'Email' },
  ];

  return (
    <footer className="mt-auto bg-[#0a0f1a]/50 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold text-gradient">
                ZyroNodes
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                Premium game server hosting with unmatched performance and 24/7 support.
              </p>
            </motion.div>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FaGamepad className="text-teal-500" />
                <span>Multiple Game Support</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FaServer className="text-teal-500" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FaShieldAlt className="text-teal-500" />
                <span>DDoS Protection</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-sm text-center"
          >
            &copy; {new Date().getFullYear()} ZyroNodes. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
