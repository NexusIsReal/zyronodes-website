'use client';

import { motion } from 'framer-motion';
import GameDetails from '@/app/components/GameDetails';

export default function ValheimHosting() {
  return (
    <GameDetails
      id="valheim"
      name="Valheim"
      image="https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg"
      description="Professional Valheim server hosting with mod support, world backups, and powerful hardware for your Viking adventures."
      features={[
        "Mod Support",
        "World Backups",
        "DDoS Protection",
        "24/7 Technical Support",
        "99.9% Uptime Guarantee",
        "Custom Control Panel"
      ]}
      plans={{
        starter: {
          price: 12.99,
          specs: {
            cpu: "4.0 GHz (2 Cores)",
            ram: "6GB DDR4",
            storage: "50GB NVMe SSD",
            players: "10 Players",
            features: [
              "Basic Mod Support",
              "Daily Backups",
              "Basic DDoS Protection",
              "Standard Support",
              "World Management"
            ]
          }
        },
        premium: {
          price: 24.99,
          specs: {
            cpu: "4.2 GHz (4 Cores)",
            ram: "12GB DDR4",
            storage: "100GB NVMe SSD",
            players: "20 Players",
            features: [
              "Advanced Mod Support",
              "12-Hour Backups",
              "Advanced DDoS Protection",
              "Priority Support",
              "Custom Domain",
              "Server Console",
              "World Manager"
            ]
          }
        },
        ultimate: {
          price: 39.99,
          specs: {
            cpu: "4.5 GHz (6 Cores)",
            ram: "24GB DDR4",
            storage: "250GB NVMe SSD",
            players: "50 Players",
            features: [
              "Full Mod Access",
              "6-Hour Backups",
              "Premium DDoS Protection",
              "24/7 Priority Support",
              "Custom Domain",
              "Advanced Console",
              "World Manager Pro",
              "Performance Monitoring"
            ]
          }
        }
      }}
    />
  );
}
