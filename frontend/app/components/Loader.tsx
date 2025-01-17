import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <motion.div
        className="w-16 h-16 border-4 border-t-orange-500 border-gray-700 rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: 'linear',
        }}
      ></motion.div>
      <p className="text-gray-400 text-lg ml-4">Analyzing...</p>
    </div>
  );
};

export default Loader;
