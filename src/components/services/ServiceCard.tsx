import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface Service {
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  includes: string[];
  assignedDoctor?: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article
      id={service.slug}
      className="scroll-mt-24 bg-white rounded-2xl border border-[#E4E1F5] p-7 flex flex-col gap-4 card-hover"
    >
      <div className="w-14 h-14 rounded-full bg-[#EFEFFB] flex items-center justify-center text-[#5B4FCF]">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-[#1F2A4A]">{service.title}</h3>
      <p className="text-[#5C6378] text-sm leading-relaxed">{service.details}</p>

      {service.includes.length > 0 && (
        <ul className="flex flex-col gap-1.5">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#5C6378]">
              <span className="text-[#5B4FCF] font-bold mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {service.assignedDoctor && (
        <p className="text-xs text-[#5C6378]">
          <span className="font-semibold text-[#1F2A4A]">Consulting Doctor: </span>
          {service.assignedDoctor}
        </p>
      )}

      <Link
        to={`/book-appointment?service=${service.slug}`}
        className="mt-auto flex items-center gap-1.5 text-[#5B4FCF] font-bold text-sm hover:gap-2.5 transition-all"
      >
        Book Appointment for this service <ArrowRight size={15} />
      </Link>
    </article>
  );
};

export default ServiceCard;
