import React from 'react';
import { motion } from 'framer-motion';

const FeedbackButtons = ({ onFeedback, disabled }: { onFeedback: (feedback: 'like' | 'dislike') => void; disabled: boolean }) => {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      {/* Like Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onFeedback('like')}
        disabled={disabled} // Disable the button if the sentiment is corrected
        className={`bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md border-2 border-orange-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{
          boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
        }}
      >
        👍 Like
      </motion.button>

      {/* Dislike Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onFeedback('dislike')}
        disabled={disabled} // Disable the button if the sentiment is corrected
        className={`bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md border-2 border-orange-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{
          boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
        }}
      >
        👎 Dislike
      </motion.button>
    </div>
  );
};

export default FeedbackButtons;
