import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-4">
      <div className="container mx-auto text-center">
        <p>© 2025 AI Sentiment Analysis. All rights reserved.</p>
        <p>
          Made with ❤️ by your hackathon team.{' EclipsEch0s '}
          <a
            href="mailto:sagnikroycode@gmail.com"
            className="text-orange-400 hover:text-orange-500"
          >
            Contact us
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
