import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatButtons: React.FC = () => {
  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-center"
      role="complementary"
      aria-label="Quick contact buttons"
    >
      {/* Call button */}
      <a
        href="tel:8808141820"
        aria-label="Call Mrityunjay Hospital"
        className="pulse-purple w-14 h-14 rounded-full bg-[#5B4FCF] text-white flex items-center justify-center shadow-lg hover:bg-[#4a3fb8] transition-colors"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/918808141820"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Mrityunjay Hospital"
        className="pulse-green w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#1ebe57] transition-colors"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default FloatButtons;
