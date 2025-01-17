/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputBox from './components/InputBox';
import SentimentCard from './components/SentimentCard';
import Loader from './components/Loader';

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sentiment, setSentiment] = useState<string | null>(null);

  // Handle login/logout toggle
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setSentiment(null); // Reset state when toggling login
  };

  // Handle sentiment analysis
  const handleAnalyze = (text: string) => {
    setLoading(true);
    setTimeout(() => {
      // Simulated sentiment result
      const result = text.includes('happy')
        ? 'positive'
        : text.includes('sad')
        ? 'negative'
        : 'neutral';
      setSentiment(result);
      setLoading(false);
    }, 2000); // Simulated API delay
  };

  // Handle user feedback
  const handleFeedback = (feedback: 'like' | 'dislike') => {
    console.log(`User feedback: ${feedback}`);
    // Here, you can send the feedback to the backend
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {/* Login Section */}
        {!isLoggedIn && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Welcome to Sentiment Analyzer
            </h2>
            <p className="text-gray-400 mb-6">
              Please select start to access the sentiment analysis feature.
            </p>
            <button
              onClick={handleLoginToggle}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
            >
              Let's Start
            </button>
          </div>
        )}

        {/* Sentiment Analysis Section */}
        {isLoggedIn && (
          <div className="w-full max-w-lg">
            {loading && <Loader />}
            {!loading && sentiment === null && <InputBox onAnalyze={handleAnalyze} />}
            {!loading && sentiment !== null && (
              <SentimentCard sentiment={sentiment} onFeedback={handleFeedback} />
            )}
            <button
              onClick={handleLoginToggle}
              className="mt-6 text-orange-400 hover:text-orange-500 underline transition duration-300"
            >
              Back to main page
            </button>
          </div>
        )}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
