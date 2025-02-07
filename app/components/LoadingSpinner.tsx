'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0f1a] z-50">
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-t-teal-500 border-r-blue-500 border-b-teal-500 border-l-blue-500 opacity-25" />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-t-teal-500 border-r-transparent border-b-transparent border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}
