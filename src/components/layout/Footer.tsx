import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t backdrop-blur-xl bg-black/40 border-white/10 text-white/70 py-4 px-6 md:px-8 text-xs z-50 relative shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 Crop Disease Detection. All rights reserved.</p>
        <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center font-medium">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <button className="hover:text-white transition-colors">Cookie Policy</button>
          <button className="hover:text-white transition-colors">Security</button>
          <button className="hover:text-white transition-colors">Accessibility</button>
        </div>
      </div>
    </footer>
  );
};
