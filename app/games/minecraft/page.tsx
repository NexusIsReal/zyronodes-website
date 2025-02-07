'use client';

import { motion } from 'framer-motion';
import GameDetails from '@/app/components/GameDetails';

export default function MinecraftHosting() {
  return (
    <GameDetails
      id="minecraft"
      name="Minecraft"
      image="https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg"
      description="High-performance Minecraft server hosting with instant setup, mod support, and 24/7 uptime guarantee."
      features={[
        "One-Click Mod Installation",
        "Automatic Backups",
        "DDoS Protection",
        "24/7 Technical Support",
        "99.9% Uptime Guarantee",
        "Custom Control Panel"
      ]}
      plans={{
        starter: {
          price: 4.99,
          specs: {
            cpu: "3.2 GHz (1 Core)",
            ram: "2GB DDR4",
            storage: "25GB NVMe SSD",
            players: "10 Players",
            features: [
              "Basic Plugin Support",
              "Daily Backups",
              "Basic DDoS Protection",
              "Vanilla Server",
              "Standard Support"
            ]
          }
        },
        premium: {
          price: 9.99,
          specs: {
            cpu: "4.2 GHz (2 Cores)",
            ram: "6GB DDR4",
            storage: "50GB NVMe SSD",
            players: "50 Players",
            features: [
              "Advanced Plugin Support",
              "12-Hour Backups",
              "Advanced DDoS Protection",
              "Modpack Support",
              "Priority Support",
              "Custom Domain",
              "Server Monitor"
            ]
          }
        },
        ultimate: {
          price: 19.99,
          specs: {
            cpu: "5.0 GHz (4 Cores)",
            ram: "16GB DDR4",
            storage: "100GB NVMe SSD",
            players: "Unlimited Players",
            features: [
              "Unlimited Plugin Support",
              "Real-time Backups",
              "Enterprise DDoS Protection",
              "All Modpacks Supported",
              "24/7 Priority Support",
              "Custom Domain & SSL",
              "Advanced Monitoring",
              "Multi-server Support",
              "Database Access"
            ]
          }
        }
      }}
    />
  );
}
