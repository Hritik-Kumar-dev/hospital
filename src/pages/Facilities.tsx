import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, FlaskConical, Baby, BedDouble,
  Ambulance, Users, Microscope, Zap,
} from 'lucide-react';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';
import hospitalPhoto from '../assets/hospital_photo.png';

const facilities = [
  { icon: <Building2 size={28} />,    title: 'Modern Operation Theatres',   desc: 'Fully equipped, sterile OT suites for elective and emergency surgical procedures.' },
  { icon: <FlaskConical size={28} />, title: 'Diagnostic Laboratory',        desc: 'In-house pathology lab for blood, urine, and other routine investigations.' },
  { icon: <Baby size={28} />,         title: 'Maternity & Neonatal Ward',    desc: 'Dedicated ward for expectant mothers and newborns with 24/7 nursing support.' },
  { icon: <BedDouble size={28} />,    title: 'In-Patient Rooms',             desc: 'Spacious, hygienic rooms with attendant facilities for comfortable recovery.' },
  { icon: <Ambulance size={28} />,    title: 'Emergency & ICU',              desc: '24×7 emergency ward with critical care support and ambulance on standby.' },
  { icon: <Users size={28} />,        title: 'Reception & OPD',              desc: 'Efficient registration, comfortable waiting area, and streamlined OPD flow.' },
  { icon: <Microscope size={28} />,   title: 'Radiology & Imaging',          desc: 'X-ray and ultrasound imaging services for accurate diagnosis.' },
  { icon: <Zap size={28} />,         title: 'Pharmacy',                     desc: '24×7 in-hospital pharmacy stocked with essential medicines and supplies.' },
];

const Facilities: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#EFEFFB] py-14">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2A4A]">
              Our <span className="text-[#5B4FCF]">Facilities</span>
            </h1>
            <p className="mt-4 text-[#5C6378] text-lg leading-relaxed">
              Modern infrastructure designed to support your recovery and comfort
            </p>
          </div>
        </Container>
      </section>

      {/* Facility cards */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="What We Have"
            subtitle="State-of-the-art facilities equipped to handle everything from routine check-ups to complex surgeries"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="bg-[#EFEFFB] rounded-2xl p-6 flex flex-col gap-3 card-hover">
                <div className="w-12 h-12 bg-[#5B4FCF] rounded-full flex items-center justify-center text-white">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#1F2A4A] text-base">{f.title}</h3>
                <p className="text-[#5C6378] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Photo showcase */}
      <section className="py-16 bg-[#EFEFFB]">
        <Container>
          <SectionHeading title="A Look Inside" subtitle="Our clean, modern, and welcoming hospital environment" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={hospitalPhoto}
                alt="Mrityunjay Hospital — main building"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={hospitalPhoto}
                alt="Mrityunjay Hospital — interior facilities"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-[#5B4FCF] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#4a3fb8] transition-colors text-sm"
            >
              View Full Gallery →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Facilities;
