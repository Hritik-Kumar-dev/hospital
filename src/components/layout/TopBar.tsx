import React from 'react';
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react';
import Container from '../shared/Container';

const TopBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-2">
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Left info — hidden on very small screens */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[#5C6378]">
            <a
              href="tel:8808141820"
              className="flex items-center gap-1.5 hover:text-[#5B4FCF] transition-colors"
              aria-label="Call us"
            >
              <Phone size={14} className="text-[#5B4FCF]" />
              <span>88081 41820</span>
            </a>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#5B4FCF]" />
              <span>Mon – Sat: 10:00 AM – 2:00 PM | 5:00 PM – 8:00 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#5B4FCF]" />
              <span>Badli Katra, Mirzapur</span>
            </div>
          </div>

          {/* Mobile compact info */}
          <div className="flex md:hidden items-center gap-3 text-xs text-[#5C6378]">
            <a href="tel:8808141820" className="flex items-center gap-1 hover:text-[#5B4FCF]">
              <Phone size={12} className="text-[#5B4FCF]" />
              <span>88081 41820</span>
            </a>
          </div>

          {/* WhatsApp CTA — always visible */}
          <a
            href="https://wa.me/918808141820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-[#1ebe57] transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
