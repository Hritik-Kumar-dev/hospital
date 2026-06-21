import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';
import DoctorCard from '../components/doctors/DoctorCard';
import DoctorProfile from '../components/doctors/DoctorProfile';
import { doctors } from '../data/doctors';

// If an :id param is present show the profile, otherwise list all doctors
const DoctorsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (id) {
    const doctor = doctors.find((d) => d.id === id);
    if (!doctor) {
      return (
        <main className="py-24 text-center">
          <p className="text-[#5C6378] text-lg">Doctor not found.</p>
        </main>
      );
    }
    return (
      <main>
        <div className="bg-[#EFEFFB] py-10">
          <Container>
            <h1 className="text-3xl font-extrabold text-[#1F2A4A]">Doctor Profile</h1>
          </Container>
        </div>
        <DoctorProfile doctor={doctor} />
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#EFEFFB] py-14">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2A4A]">
              Our <span className="text-[#5B4FCF]">Specialist Doctors</span>
            </h1>
            <p className="mt-4 text-[#5C6378] text-lg leading-relaxed">
              Experienced, caring physicians committed to your health and recovery
            </p>
          </div>
        </Container>
      </section>

      {/* Doctor cards */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Meet the Team"
            subtitle="Highly qualified specialists ready to care for you and your family"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {doctors.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default DoctorsPage;
