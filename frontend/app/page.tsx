/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputBox from './components/InputBox';
import SentimentCard from './components/SentimentCard';
import Loader from './components/Loader';

import axios from 'axios'

const Page = () => {
  const [isStart, setIsStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sentiment, setSentiment] = useState<string | null>(null);

  // Toggle between main page and sentiment analysis
  const handleToggle = () => {
    setIsStart((prev) => !prev);
    setSentiment(null); // Reset sentiment when navigating back to the main page
  };

  // Handle sentiment analysis (simulated)
  const handleAnalyze = async (text: string) => {
      setLoading(true);
      const resp = await fetch("http://localhost:5000/api/predict", {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({comments:text})
      }).then(async (response) => {
        const data = await response.json();
        setLoading(false);
        return data;
      })
      const result = resp['response'] === 1
        ? 'positive'
        : resp['response'] === 0
        ? 'negative'
        : 'neutral';
      setSentiment(result);
      console.log(resp);
      
  };

  // Handle user feedback
  const handleFeedback = (feedback: 'like' | 'dislike') => {
    console.log(`User feedback: ${feedback}`);
    // Placeholder for backend API call to record feedback
  };

  // Go back to the input box directly without showing sentiment analysis
  const handleBackToInputBox = () => {
    setSentiment(null); // Reset sentiment
    setLoading(false);  // Ensure loading is cleared
    setIsStart(true);   // Show input box
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {/* Welcome Section */}
        {!isStart && (
          <div
            className="bg-black p-8 rounded-lg shadow-lg max-w-md text-center border border-orange-500"
            style={{
              boxShadow: '0 0 8px 2px rgba(255, 165, 0, 0.7)', // Thinner neon glow effect
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Welcome to Sentiment Analyzer
            </h2>
            <p className="text-gray-400 mb-6">
              Click "Let's Start" to analyze the sentiment of your text.
            </p>
            <button
              onClick={handleToggle}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Let's Start
            </button>
          </div>
        )}

        {/* Sentiment Analysis Section */}
        {isStart && (
          <div className="w-full max-w-lg">
            {/* Loader */}
            {loading && <Loader />}

            {/* Input Box */}
            {!loading && sentiment === null && <InputBox onAnalyze={handleAnalyze} />}

            {/* Sentiment Card */}
            {!loading && sentiment !== null && (
              <SentimentCard sentiment={sentiment} onFeedback={handleFeedback} />
            )}

            {/* Back to Main Page & Back to Input Box */}
            <div className="flex flex-col items-center mt-6 space-y-4">
              {/* Back to Main Page */}
              <button
                onClick={handleToggle}
                className="text-orange-400 hover:text-orange-500 underline transition duration-300"
              >
                Back to Main Page
              </button>

              {/* Back to Input Box */}
              <button
                onClick={handleBackToInputBox}
                className="text-orange-400 hover:text-orange-500 underline transition duration-300"
              >
                Back to Input Box
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
