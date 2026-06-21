import React from 'react';
import Hero from '../components/home/Hero';
import AppointmentBanner from '../components/home/AppointmentBanner';
import ServicesGrid from '../components/home/ServicesGrid';
import StatsStrip from '../components/home/StatsStrip';
import FacilityShowcase from '../components/home/FacilityShowcase';
import Testimonials from '../components/home/Testimonials';
import DoctorCard from '../components/doctors/DoctorCard';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';
import { doctors } from '../data/doctors';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <AppointmentBanner />
      <ServicesGrid />
      <StatsStrip />

      {/* Doctors preview */}
      <section className="py-16 bg-[#EFEFFB]" aria-label="Our doctors">
        <Container>
          <SectionHeading
            title="Meet Our Doctors"
            subtitle="Highly qualified specialists dedicated to your well-being"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {doctors.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>
        </Container>
      </section>

      <FacilityShowcase />
      <Testimonials />
    </main>
  );
};

export default Home;
