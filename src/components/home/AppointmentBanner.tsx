import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Shield, Zap, Clock } from 'lucide-react';
import Container from '../shared/Container';

const features = [
  { icon: <Shield size={20} />,   title: 'Secure Payment',        sub: '100% Safe' },
  { icon: <Zap size={20} />,      title: 'Instant Confirmation',  sub: 'Get confirmed right away' },
  { icon: <Clock size={20} />,    title: 'Convenient',            sub: 'Anytime, anywhere' },
];

const AppointmentBanner: React.FC = () => {
  return (
    <section className="bg-[#5B4FCF] py-8" aria-label="Book online appointment">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left text */}
          <div className="flex items-center gap-4 text-white shrink-0">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Calendar size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Book Online Appointment</h2>
              <p className="text-white/80 text-sm mt-0.5">
                Choose your convenient time slot and pay the booking fee easily
              </p>
            </div>
          </div>

          {/* Middle features */}
          <div className="flex   justify-center gap-4 md:gap-7">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3 text-white">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{f.title}</p>
                  <p className="text-white/70 text-xs">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/book-appointment"
            className="shrink-0 bg-white text-[#5B4FCF] font-bold px-7 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
            aria-label="Book your appointment"
          >
            Book Appointment
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default AppointmentBanner;
