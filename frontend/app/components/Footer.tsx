import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-black text-gray-400 text-sm py-6 border border-orange-500 rounded-lg" // Added rounded-lg class for border radius
      style={{
        boxShadow: '0 0 10px 2px rgba(255, 165, 0, 0.8)', // Neon orange glow
      }}
    >
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2025 AI Sentiment Analysis. All rights reserved.</p>
        <p>
          Made by{' '}
          <span className="text-white-400">EclipsEch0s</span>.{' '}
          <a
            href="mailto:sagnikroycode@gmail.com"
            className="text-orange-400 hover:text-orange-500 underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
