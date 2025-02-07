import GameDetails from '@/app/components/GameDetails';

export default function CSGOHosting() {
  return (
    <GameDetails
      id="csgo"
      name="CS:GO"
      image="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg"
      description="Professional CS:GO server hosting with anti-cheat protection, custom plugins, and low-latency infrastructure for competitive gaming."
      features={[
        "Anti-Cheat Integration",
        "Custom Plugins",
        "DDoS Protection",
        "Tournament Support",
        "GOTV Support",
        "24/7 Support",
        "Auto-Updates",
        "Backup System",
        "Custom Configs",
        "Admin Tools",
        "Statistics Tracking",
        "Low Latency Network"
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
