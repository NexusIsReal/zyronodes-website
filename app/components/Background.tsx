'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);
  const controls = useAnimation();

  const createDots = useCallback(() => {
    const newDots = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setDots(newDots);
  }, []);

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const newX = e.clientX;
        const newY = e.clientY;
        
        // Only update if the mouse has moved more than 5 pixels
        if (Math.abs(newX - lastX) > 5 || Math.abs(newY - lastY) > 5) {
          setMousePosition({ x: newX, y: newY });
          lastX = newX;
          lastY = newY;
        }
      });
    };

    createDots();
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    const handleResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(createDots);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [createDots]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[-1]"
      initial={false}
    >
      <div className="animated-gradient" />
      <div className="noise-overlay" />
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.5
        }}
      />
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="glow-dot"
          initial={false}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 4 + dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop"
          }}
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
        />
      ))}
      <div className="cyber-grid" />
    </motion.div>
  );
};

export default Background;
