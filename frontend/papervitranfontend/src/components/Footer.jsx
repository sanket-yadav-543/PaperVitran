import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-[#CBD5E1] py-6 border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-[#4FD1C5] font-medium">Papervitran</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
