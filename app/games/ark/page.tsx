'use client';

import { motion } from 'framer-motion';
import GameDetails from '@/app/components/GameDetails';

export default function ArkHosting() {
  return (
    <GameDetails
      id="ark"
      name="ARK: Survival Evolved"
      image="https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg"
      description="High-performance ARK server hosting with mod support, automated backups, and powerful hardware for your dinosaur survival adventure."
      features={[
        "Mod Support",
        "Automated Backups",
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
            storage: "100GB NVMe SSD",
            players: "35 Players",
            features: [
              "Basic Mod Support",
              "Daily Backups",
              "Basic DDoS Protection",
              "Standard Support",
              "Auto-Updates"
            ]
          }
        },
        premium: {
          price: 29.99,
          specs: {
            cpu: "4.5 GHz (4 Cores)",
            ram: "16GB DDR4",
            storage: "250GB NVMe SSD",
            players: "70 Players",
            features: [
              "Advanced Mod Support",
              "12-Hour Backups",
              "Advanced DDoS Protection",
              "Priority Support",
              "Custom Domain",
              "Server Console",
              "Cross-ARK Support"
            ]
          }
        },
        ultimate: {
          price: 49.99,
          specs: {
            cpu: "5.0 GHz (8 Cores)",
            ram: "32GB DDR4",
            storage: "500GB NVMe SSD",
            players: "120 Players",
            features: [
              "Full Mod Access",
              "6-Hour Backups",
              "Premium DDoS Protection",
              "24/7 Priority Support",
              "Custom Domain",
              "Advanced Console",
              "Cross-ARK Clustering",
              "Performance Monitoring"
            ]
          }
        }
      }}
    />
  );
}
