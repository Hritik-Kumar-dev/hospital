import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Stethoscope, Building2, Heart } from 'lucide-react';
import hospitalPhoto from '../../assets/hospital_photo.png';
import doctorPhoto from '../../assets/doctor_photo.png';

const trustPoints = [
  { icon: <Stethoscope size={22} />, label: 'Experienced Doctors' },
  { icon: <Building2 size={22} />,   label: 'Modern Facilities' },
  { icon: <Heart size={22} />,       label: 'Personalized Care' },
];

const Hero: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[560px] md:min-h-[640px]"
      aria-label="Mrityunjay Hospital — hero section"
    >
      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row min-h-[560px] md:min-h-[640px]">
        {/* LEFT — lavender panel */}
        <div className="bg-[#EFEFFB] flex-1 flex items-center px-6 sm:px-10 lg:px-16 py-14 md:py-0">
          <div className="max-w-xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-[#1F2A4A]">
              Skilled Healthcare,{' '}
              <span className="text-[#5B4FCF]">Dedicated to You</span>
            </h1>
            <p className="mt-5 text-[#5C6378] text-lg leading-relaxed max-w-lg">
              Welcome to Mrityunjay Hospital. With experienced doctors and modern
              facilities, your health and your family's health is our top priority.
            </p>

            {/* Trust icons */}
            <div className="mt-8 flex  gap-3">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#5B4FCF]/10 flex items-center justify-center text-[#5B4FCF]">
                    {tp.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#1F2A4A]">{tp.label}</span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-8 flex  gap-4">
              <Link
                to="/book-appointment"
                className="flex items-center gap-2 bg-[#5B4FCF] text-white font-bold px-4 py-1.5 rounded-lg hover:bg-[#4a3fb8] transition-colors text-sm"
                aria-label="Book an appointment"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
              <a
                href="tel:8808141820"
                className="flex items-center gap-2 bg-white text-[#5B4FCF] font-bold px-4 py-1.5 rounded-lg border-2 border-[#5B4FCF] hover:bg-[#EFEFFB] transition-colors text-sm"
                aria-label="Call 88081 41820"
              >
                <Phone size={18} />
                Call 9876543211
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — hospital photo + doctor overlay */}
        <div className="relative flex-1 min-h-[300px] md:min-h-0 overflow-hidden">
          {/* Hospital background */}
          <img
            src={hospitalPhoto}
            alt="Mrityunjay Hospital building exterior"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute " />

          {/* Doctor portrait anchored at bottom */}
          <div className="absolute -bottom-1 right-0 md:right-4 lg:right-4 flex items-end justify-end h-full pointer-events-none">
            <img
              src={doctorPhoto}
              alt="Dr. Anurag Kasera — Mrityunjay Hospital"
              className="h-[80%] max-h-[520px] object-contain object-bottom drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
