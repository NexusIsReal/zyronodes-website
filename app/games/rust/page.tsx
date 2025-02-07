'use client';

import { motion } from 'framer-motion';
import GameDetails from '@/app/components/GameDetails';

export default function RustHosting() {
  return (
    <GameDetails
      id="rust"
      name="Rust"
      image="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg"
      description="Premium Rust server hosting with advanced anti-cheat, moderation tools, and high-performance hardware for the best gaming experience."
      features={[
        "Anti-Cheat Protection",
        "Automatic Updates",
        "DDoS Protection",
        "24/7 Technical Support",
        "99.9% Uptime Guarantee",
        "Custom Control Panel"
      ]}
      plans={{
        starter: {
          price: 14.99,
          specs: {
            cpu: "4.2 GHz (2 Cores)",
            ram: "8GB DDR4",
            storage: "50GB NVMe SSD",
            players: "50 Players",
            features: [
              "Basic Plugin Support",
              "Daily Backups",
              "Basic DDoS Protection",
              "Standard Support",
              "Basic Moderation Tools"
            ]
          }
        },
        premium: {
          price: 24.99,
          specs: {
            cpu: "4.5 GHz (4 Cores)",
            ram: "16GB DDR4",
            storage: "100GB NVMe SSD",
            players: "100 Players",
            features: [
              "Advanced Plugin Support",
              "12-Hour Backups",
              "Advanced DDoS Protection",
              "Priority Support",
              "Advanced Moderation Tools",
              "Custom Domain"
            ]
          }
        },
        ultimate: {
          price: 39.99,
          specs: {
            cpu: "5.0 GHz (6 Cores)",
            ram: "32GB DDR4",
            storage: "250GB NVMe SSD",
            players: "200 Players",
            features: [
              "Full Plugin Access",
              "6-Hour Backups",
              "Premium DDoS Protection",
              "24/7 Priority Support",
              "Full Admin Tools",
              "Custom Domain",
              "Performance Monitoring"
            ]
          }
        }
      }}
    />
  );
}
