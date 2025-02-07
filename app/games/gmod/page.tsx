'use client';

import { motion } from 'framer-motion';
import GameDetails from '@/app/components/GameDetails';

export default function GModHosting() {
  return (
    <GameDetails
      id="gmod"
      name="Garry's Mod"
      image="https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg"
      description="Feature-rich Garry's Mod server hosting with extensive addon support, low latency, and powerful customization options."
      features={[
        "Workshop Content Support",
        "FastDL Support",
        "DDoS Protection",
        "24/7 Technical Support",
        "99.9% Uptime Guarantee",
        "Custom Control Panel"
      ]}
      plans={{
        starter: {
          price: 9.99,
          specs: {
            cpu: "3.8 GHz (2 Cores)",
            ram: "4GB DDR4",
            storage: "50GB NVMe SSD",
            players: "20 Players",
            features: [
              "Basic Addon Support",
              "Daily Backups",
              "Basic DDoS Protection",
              "Standard Support",
              "Workshop Integration"
            ]
          }
        },
        premium: {
          price: 19.99,
          specs: {
            cpu: "4.2 GHz (4 Cores)",
            ram: "8GB DDR4",
            storage: "100GB NVMe SSD",
            players: "50 Players",
            features: [
              "Advanced Addon Support",
              "12-Hour Backups",
              "Advanced DDoS Protection",
              "Priority Support",
              "FastDL",
              "Custom Domain",
              "Workshop Manager"
            ]
          }
        },
        ultimate: {
          price: 29.99,
          specs: {
            cpu: "4.5 GHz (6 Cores)",
            ram: "16GB DDR4",
            storage: "250GB NVMe SSD",
            players: "100 Players",
            features: [
              "Unlimited Addons",
              "6-Hour Backups",
              "Premium DDoS Protection",
              "24/7 Priority Support",
              "FastDL Premium",
              "Custom Domain",
              "Advanced Workshop Tools",
              "Performance Monitoring"
            ]
          }
        }
      }}
    />
  );
}
