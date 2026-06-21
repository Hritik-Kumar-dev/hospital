import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Cross } from 'lucide-react';
import Container from '../shared/Container';

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'About Us',   to: '/about' },
  { label: 'Services',   to: '/services' },
  { label: 'Doctors',    to: '/doctors' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery',    to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Mrityunjay Hospital home">
            <div className="w-10 h-10 bg-[#5B4FCF] rounded-full flex items-center justify-center">
              <Cross size={20} className="text-white" />
            </div>
            <div>
              <span className="block text-[#1F2A4A] font-extrabold text-lg leading-tight font-[Poppins]">
                Mrityunjay Hospital
              </span>
              <span className="block text-[#5C6378] text-xs">Your Health, Our Priority</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-[#5B4FCF] ${
                  location.pathname === link.to
                    ? 'text-[#5B4FCF] font-semibold'
                    : 'text-[#1F2A4A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/book-appointment"
              className="hidden sm:inline-flex items-center gap-2 bg-[#5B4FCF] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#4a3fb8] transition-colors"
              aria-label="Book Appointment"
            >
              <Calendar size={16} />
              Book Appointment
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#EFEFFB] text-[#1F2A4A] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen shadow-xl' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-[#EFEFFB] text-[#5B4FCF] font-semibold'
                  : 'text-[#1F2A4A] hover:bg-[#EFEFFB] hover:text-[#5B4FCF]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book-appointment"
            className="mt-2 flex items-center justify-center gap-2 bg-[#5B4FCF] text-white font-bold px-5 py-3 rounded-lg hover:bg-[#4a3fb8] transition-colors"
          >
            <Calendar size={16} />
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
