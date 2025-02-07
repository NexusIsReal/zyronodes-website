import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Background from "./components/Background";
import PageTransition from "./components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZyroNodes - Premium Game Server Hosting",
  description: "Experience lightning-fast game servers with 99.9% uptime and instant setup. Built for gamers, by gamers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Background />
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-grow">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
        
        {/* Background Gradient Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
        </div>
      </body>
    </html>
  );
}
