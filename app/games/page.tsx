'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const games = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg',
    link: '/games/minecraft'
  },
  {
    id: 'fivem',
    name: 'FiveM',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
    link: '/games/fivem'
  },
  {
    id: 'rust',
    name: 'Rust',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg',
    link: '/games/rust'
  },
  {
    id: 'ark',
    name: 'ARK: Survival Evolved',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg',
    link: '/games/ark'
  },
  {
    id: 'valheim',
    name: 'Valheim',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg',
    link: '/games/valheim'
  },
  {
    id: 'csgo',
    name: 'CS:GO',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg',
    link: '/games/csgo'
  },
  {
    id: 'gmod',
    name: 'Garry\'s Mod',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg',
    link: '/games/gmod'
  },
  {
    id: 'terraria',
    name: 'Terraria',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg',
    link: '/games/terraria'
  },
  {
    id: 'satisfactory',
    name: 'Satisfactory',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg',
    link: '/games/satisfactory'
  },
  {
    id: 'sevendays',
    name: '7 Days to Die',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg',
    link: '/games/7days'
  },
  {
    id: 'conan',
    name: 'Conan Exiles',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/440900/header.jpg',
    link: '/games/conan'
  },
  {
    id: 'unturned',
    name: 'Unturned',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/304930/header.jpg',
    link: '/games/unturned'
  }
];

export default function Games() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Game Server Hosting
          </h1>
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a game..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <Link href={game.link}>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-white/5">
                  <Image
                    src={game.image}
                    alt={`${game.name} Server Hosting`}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                    {game.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
