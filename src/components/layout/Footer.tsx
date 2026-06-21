import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageCircle, Shield, Cross } from 'lucide-react';
import Container from '../shared/Container';

const footerItems = [
  {
    icon: <MapPin size={24} />,
    title: 'Mrityunjay Hospital',
    sub: 'Badli Katra, Mirzapur,\nUttar Pradesh',
  },
  {
    icon: <Phone size={24} />,
    title: '88081 41820',
    sub: 'Call us to get in touch',
    href: 'tel:8808141820',
  },
  {
    icon: <Clock size={24} />,
    title: 'Working Hours',
    sub: 'Mon–Sat: 10:00 AM – 2:00 PM\n5:00 PM – 8:00 PM',
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'WhatsApp',
    sub: 'Chat with us for a quick reply',
    href: 'https://wa.me/918808141820',
  },
  {
    icon: <Shield size={24} />,
    title: 'Our Commitment',
    sub: 'Your health is our top priority',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D3299] text-white" role="contentinfo">
      {/* Main footer grid */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {footerItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                {item.icon}
              </div>
              {item.href ? (
                <a href={item.href} className="font-bold text-base hover:text-purple-200 transition-colors">
                  {item.title}
                </a>
              ) : (
                <p className="font-bold text-base">{item.title}</p>
              )}
              <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{item.sub}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between py-5 gap-3 text-sm text-white/60">
            {/* Logo row */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                <Cross size={14} className="text-white" />
              </div>
              <span className="text-white font-semibold">Mrityunjay Hospital</span>
            </Link>

            <p>© {new Date().getFullYear()} Mrityunjay Hospital. All rights reserved.</p>

            <nav className="flex gap-4">
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
