import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FeedbackButtons from './FeedbackButtons';

const SentimentCard = ({ sentiment, onFeedback }: { sentiment: string; onFeedback: (feedback: 'like' | 'dislike') => void }) => {
  const [isDisliked, setIsDisliked] = useState(false);
  const [correctSentiment, setCorrectSentiment] = useState<string | null>(null);
  const [isSentimentCorrected, setIsSentimentCorrected] = useState(false); // To track if sentiment was corrected

  const sentimentColors: Record<string, string> = {
    positive: 'bg-green-500',
    negative: 'bg-red-500',
    neutral: 'bg-gray-500',
  };

  const handleDislike = () => {
    setIsDisliked(true);
  };

  const handleCorrectSentiment = (newSentiment: string) => {
    const correctedSentiment = newSentiment; // Store the corrected sentiment in a constant
    console.log('Corrected Sentiment:', correctedSentiment);  // Logging the corrected sentiment

    setCorrectSentiment(newSentiment);
    setIsSentimentCorrected(true);  // Mark sentiment as corrected
    setIsDisliked(false); // Reset dislike state after correction
  };

  return (
    <>
      {!isDisliked ? (
        <motion.div
          className={`p-8 rounded-lg shadow-xl text-center max-w-lg mx-auto mt-12 border-2 border-orange-500 ${sentimentColors[sentiment] || 'bg-gray-500'}`}
          style={{
            boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-3xl font-bold mb-4">Sentiment Detected</h2>
          <p className="text-lg text-white mb-6">
            The sentiment of the text is <span className="font-semibold">{sentiment}</span>.
          </p>
          <FeedbackButtons 
            onFeedback={(feedback) => {
              onFeedback(feedback);
              if (feedback === 'dislike') handleDislike();
            }} 
            disabled={isSentimentCorrected} // Disable buttons if sentiment is corrected
          />
        </motion.div>
      ) : (
        <motion.div
          className="p-8 rounded-lg shadow-xl text-center max-w-lg mx-auto mt-12 border-2 border-orange-500 bg-gray-700"
          style={{
            boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-3xl font-bold mb-4">Oops! The sentiment might be incorrect.</h2>
          <p className="text-lg text-white mb-6">
            The analysis was: <span className="font-semibold">{sentiment}</span>. Is this correct?
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCorrectSentiment('positive')}
              className="bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md border-2 border-orange-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              style={{
                boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
              }}
            >
              Positive
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCorrectSentiment('negative')}
              className="bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md border-2 border-orange-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              style={{
                boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
              }}
            >
              Negative
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCorrectSentiment('neutral')}
              className="bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md border-2 border-orange-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              style={{
                boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
              }}
            >
              Neutral
            </motion.button>
          </div>
        </motion.div>
      )}

      {correctSentiment && (
        <motion.div
          className={`p-8 rounded-lg shadow-xl text-center max-w-lg mx-auto mt-12 border-2 border-orange-500 ${sentimentColors[correctSentiment] || 'bg-gray-500'}`}
          style={{
            boxShadow: '0 0 10px 3px rgba(255, 165, 0, 0.7)', // Neon glow effect
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-3xl font-bold mb-4">Corrected Sentiment</h2>
          <p className="text-lg text-white mb-6">
            The sentiment corrected with <span className="font-semibold">{correctSentiment}</span>.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default SentimentCard;
