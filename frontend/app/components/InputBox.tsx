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
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-white text-xl font-semibold mb-4 text-center">
        Enter Your Text for Sentiment Analysis
      </h2>
      <textarea
        className="w-full h-32 p-4 bg-gray-700 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Type something here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
      >
        Analyze
      </motion.button>
    </div>
  );
};

export default InputBox;
