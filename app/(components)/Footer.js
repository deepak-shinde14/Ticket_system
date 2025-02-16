import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full mt-0 p-5 bg-gray-800 text-white text-center">
      <p className="text-lg">Deepak Kailas Shinde</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/deepak-shinde14/Ticket_system"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-shinde-8994431aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
