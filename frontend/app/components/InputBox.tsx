import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InputBox = ({ onAnalyze }: { onAnalyze: (text: string) => void }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onAnalyze(input.trim());
      setInput('');
    }
  };

  return (
    <div
      className="bg-black p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-12 border-2 border-orange-500"
      style={{
        boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
      }}
    >
      <h2 className="text-white text-2xl font-semibold mb-6 text-center">
        Enter Your Text for Sentiment Analysis
      </h2>
      <textarea
        className="w-full h-40 p-4 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Type something here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition"
      >
        Analyze
      </motion.button>
    </div>
  );
};

export default InputBox;
