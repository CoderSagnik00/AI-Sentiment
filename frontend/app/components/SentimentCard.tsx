import React from 'react';
import { motion } from 'framer-motion';
import FeedbackButtons from './FeedbackButtons';

const SentimentCard = ({ sentiment, onFeedback }: { sentiment: string; onFeedback: (feedback: 'like' | 'dislike') => void }) => {
  const sentimentColors: Record<string, string> = {
    positive: 'bg-green-500',
    negative: 'bg-red-500',
    neutral: 'bg-gray-500',
  };

  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg text-center ${sentimentColors[sentiment] || 'bg-gray-500'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-2xl font-bold mb-4">Sentiment Detected</h2>
      <p className="text-lg text-white mb-6">
        The sentiment of the text is <span className="font-semibold">{sentiment}</span>.
      </p>
      <FeedbackButtons onFeedback={onFeedback} />
    </motion.div>
  );
};

export default SentimentCard;
