import React from 'react';

const Header = () => {
  return (
    <header
      className="bg-black text-white p-4 shadow-lg border border-orange-500 rounded-lg" // Added rounded-lg class for border radius
      style={{
        boxShadow: '0 0 8px 2px rgba(255, 165, 0, 0.7)', // Thin neon glow effect
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">AI Sentiment Analysis</h1>
        <nav className="space-x-6">
          <a href="#input" className="text-gray-300 hover:text-white transition">
            
          </a>
          <a href="#result" className="text-gray-300 hover:text-white transition">
            
          </a>
          <a href="#feedback" className="text-gray-300 hover:text-white transition">
            
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
