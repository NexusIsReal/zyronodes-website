'use client';

import { motion } from 'framer-motion';
import { FaDiscord, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
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
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We're here to help! Get in touch with our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaDiscord />,
                title: "Discord Support",
                description: "Join our community",
                action: "Join Discord",
                link: "#"
              },
              {
                icon: <FaEnvelope />,
                title: "Email Support",
                description: "Get help via email",
                action: "Send Email",
                link: "mailto:support@zyronodes.com"
              },
              {
                icon: <FaClock />,
                title: "24/7 Support",
                description: "Always here to help",
                action: "View Hours",
                link: "#"
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="text-3xl mb-4 text-gradient">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <a
                  href={method.link}
                  className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="glass-card p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-[#1a1f2e] border border-gray-700 focus:border-teal-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg bg-[#1a1f2e] border border-gray-700 focus:border-teal-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-[#1a1f2e] border border-gray-700 focus:border-teal-500 focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg bg-[#1a1f2e] border border-gray-700 focus:border-teal-500 focus:outline-none h-32"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
