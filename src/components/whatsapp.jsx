// ChatWidget.jsx
import React, { useState } from 'react';

const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919403125819?text=Hi%20there!%20I'm%20interested%20in%20your%20carpets."
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:shadow-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default ChatWidget;
