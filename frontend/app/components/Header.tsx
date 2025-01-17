import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Sentiment Analysis</h1>
        <nav className="space-x-4">
          <a href="#input" className="text-gray-300 hover:text-white">
            Input
          </a>
          <a href="#result" className="text-gray-300 hover:text-white">
            Result
          </a>
          <a href="#feedback" className="text-gray-300 hover:text-white">
            Feedback
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
