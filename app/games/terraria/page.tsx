'use client';

import { motion } from 'framer-motion';
import GameDetails from '@/app/components/GameDetails';

export default function TerrariaHosting() {
  return (
    <GameDetails
      id="terraria"
      name="Terraria"
      image="https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg"
      description="Reliable Terraria server hosting with mod support, automatic backups, and easy-to-use control panel for the ultimate adventure."
      features={[
        "TModLoader Support",
        "Automatic Updates",
        "DDoS Protection",
        "24/7 Technical Support",
        "99.9% Uptime Guarantee",
        "Custom Control Panel"
      ]}
      plans={{
        starter: {
          price: 4.99,
          specs: {
            cpu: "3.5 GHz (1 Core)",
            ram: "2GB DDR4",
            storage: "25GB NVMe SSD",
            players: "8 Players",
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
          price: 9.99,
          specs: {
            cpu: "4.0 GHz (2 Cores)",
            ram: "4GB DDR4",
            storage: "50GB NVMe SSD",
            players: "16 Players",
            features: [
              "Advanced Mod Support",
              "12-Hour Backups",
              "Advanced DDoS Protection",
              "Priority Support",
              "Custom Domain",
              "Server Console"
            ]
          }
        },
        ultimate: {
          price: 19.99,
          specs: {
            cpu: "4.2 GHz (4 Cores)",
            ram: "8GB DDR4",
            storage: "100GB NVMe SSD",
            players: "32 Players",
            features: [
              "Full Mod Access",
              "6-Hour Backups",
              "Premium DDoS Protection",
              "24/7 Priority Support",
              "Custom Domain",
              "Advanced Console",
              "Performance Monitoring"
            ]
          }
        }
      }}
    />
  );
}
