import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope, Bone, Scissors, Baby, Ambulance, HeartPulse,
} from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export const services = [
  {
    slug: 'general-medicine',
    icon: <Stethoscope size={28} />,
    title: 'General Medicine',
    description: 'Treatment of common illnesses and routine health care',
  },
  {
    slug: 'orthopedics',
    icon: <Bone size={28} />,
    title: 'Orthopedics',
    description: 'Bone and joint disorder specialist',
  },
  {
    slug: 'general-surgery',
    icon: <Scissors size={28} />,
    title: 'General Surgery',
    description: 'Surgery-related treatments and procedures',
  },
  {
    slug: 'gynecology',
    icon: <HeartPulse size={28} />,
    title: 'Gynecology',
    description: "Women's health care and maternal services",
  },
  {
    slug: 'child-care',
    icon: <Baby size={28} />,
    title: 'Child Care',
    description: 'Complete care for children of all ages',
  },
  {
    slug: 'emergency-services',
    icon: <Ambulance size={28} />,
    title: 'Emergency Services',
    description: '24×7 emergency facility, always available',
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white" aria-label="Our services">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="We provide the following services for your complete health and well-being"
          decorators
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services#${service.slug}`}
              className="no-underline"
              aria-label={service.title}
            >
              <div className="card-hover flex flex-col items-center text-center p-5 rounded-2xl border border-[#E4E1F5] bg-white gap-3 h-full cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-[#EFEFFB] flex items-center justify-center text-[#5B4FCF] shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2A4A] text-sm leading-snug">{service.title}</h3>
                  <p className="text-[#5C6378] text-xs mt-1 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
