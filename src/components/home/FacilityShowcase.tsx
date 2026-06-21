import React from 'react';
import { Link } from 'react-router-dom';
import hospitalPhoto from '../../assets/hospital_photo.png';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

const highlights = [
  'Fully equipped operating theatres',
  'Modern diagnostic laboratory',
  'Dedicated maternity & neonatal ward',
  'Spacious, hygienic patient rooms',
  '24×7 pharmacy and emergency ward',
  'Comfortable waiting areas & reception',
];

const FacilityShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white" aria-label="Our facilities">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={hospitalPhoto}
              alt="Mrityunjay Hospital exterior — modern healthcare facility in Mirzapur"
              className="w-full h-full object-cover max-h-[420px]"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <SectionHeading
              title="World-Class Facilities"
              subtitle="We have invested in modern equipment and infrastructure to provide you the best possible care."
              centered={false}
            />

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-[#5C6378]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#5B4FCF]/10 text-[#5B4FCF] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <Link
              to="/gallery"
              className="mt-8 inline-flex items-center gap-2 bg-[#5B4FCF] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#4a3fb8] transition-colors text-sm"
            >
              View Gallery →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FacilityShowcase;
