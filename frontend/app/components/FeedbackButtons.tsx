import React from 'react';
import { motion } from 'framer-motion';

const FeedbackButtons = ({ onFeedback }: { onFeedback: (feedback: 'like' | 'dislike') => void }) => {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      {/* Like Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onFeedback('like')}
        className="bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        👍 Like
      </motion.button>

      {/* Dislike Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onFeedback('dislike')}
        className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
      >
        👎 Dislike
      </motion.button>
    </div>
  );
};

export default FeedbackButtons;
