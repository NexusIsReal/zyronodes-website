'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaServer, FaShieldAlt, FaBolt, FaClock, FaRocket, FaCheck } from 'react-icons/fa';

interface PlanSpecs {
  cpu: string;
  ram: string;
  storage: string;
  players: string;
  features: string[];
}

interface GameDetailsProps {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  plans: {
    starter: {
      price: number;
      specs: PlanSpecs;
    };
    premium: {
      price: number;
      specs: PlanSpecs;
    };
    ultimate: {
      price: number;
      specs: PlanSpecs;
    };
  };
}

const GameDetails = ({ id, name, image, description, features, plans }: GameDetailsProps) => {
  return (
    <div className="container mx-auto px-4 py-8 pt-[90px] relative">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8 z-10">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">{name} Server Hosting</h1>
            <p className="text-xl text-gray-300 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 rounded-xl hover:border-teal-500 hover:border transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              {index % 5 === 0 && <FaServer className="text-2xl text-teal-500" />}
              {index % 5 === 1 && <FaShieldAlt className="text-2xl text-teal-500" />}
              {index % 5 === 2 && <FaBolt className="text-2xl text-teal-500" />}
              {index % 5 === 3 && <FaClock className="text-2xl text-teal-500" />}
              {index % 5 === 4 && <FaRocket className="text-2xl text-teal-500" />}
              <p className="text-lg">{feature}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
        {/* Starter Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 rounded-xl hover:border-teal-500 hover:border transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-4">${plans.starter.price}<span className="text-lg font-normal">/mo</span></p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <FaServer className="text-teal-500" />
                <p>CPU: {plans.starter.specs.cpu}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBolt className="text-teal-500" />
                <p>RAM: {plans.starter.specs.ram}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRocket className="text-teal-500" />
                <p>Storage: {plans.starter.specs.storage}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-teal-500" />
                <p>Players: {plans.starter.specs.players}</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              {plans.starter.specs.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <FaCheck className="text-teal-500" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <Link 
            href={`/order?game=${id}&plan=starter`}
            className="block text-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 font-semibold"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 rounded-xl border-2 border-teal-500 flex flex-col justify-between transform hover:scale-105 transition-all duration-300"
        >
          <div>
            <div className="absolute top-0 right-0 bg-teal-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-bold mb-4">Premium</h3>
            <p className="text-3xl font-bold mb-4">${plans.premium.price}<span className="text-lg font-normal">/mo</span></p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <FaServer className="text-teal-500" />
                <p>CPU: {plans.premium.specs.cpu}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBolt className="text-teal-500" />
                <p>RAM: {plans.premium.specs.ram}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRocket className="text-teal-500" />
                <p>Storage: {plans.premium.specs.storage}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-teal-500" />
                <p>Players: {plans.premium.specs.players}</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              {plans.premium.specs.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <FaCheck className="text-teal-500" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <Link 
            href={`/order?game=${id}&plan=premium`}
            className="block text-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 font-semibold"
          >
            Get Premium
          </Link>
        </motion.div>

        {/* Ultimate Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 rounded-xl hover:border-teal-500 hover:border transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Ultimate</h3>
            <p className="text-3xl font-bold mb-4">${plans.ultimate.price}<span className="text-lg font-normal">/mo</span></p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <FaServer className="text-teal-500" />
                <p>CPU: {plans.ultimate.specs.cpu}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBolt className="text-teal-500" />
                <p>RAM: {plans.ultimate.specs.ram}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRocket className="text-teal-500" />
                <p>Storage: {plans.ultimate.specs.storage}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-teal-500" />
                <p>Players: {plans.ultimate.specs.players}</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              {plans.ultimate.specs.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <FaCheck className="text-teal-500" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <Link 
            href={`/order?game=${id}&plan=ultimate`}
            className="block text-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 font-semibold"
          >
            Get Ultimate
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GameDetails;
