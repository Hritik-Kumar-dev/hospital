import React from 'react';
import { Heart, Shield, Users, Stethoscope } from 'lucide-react';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';
import hospitalPhoto from '../assets/hospital_photo.png';

const values = [
  { icon: <Heart size={24} />,       title: 'Patient-First Philosophy',  desc: 'Every decision we make is guided by what is best for the patient. Compassionate, individualized care is at the heart of everything we do.' },
  { icon: <Shield size={24} />,      title: 'Safety & Quality',          desc: 'We follow stringent hygiene and safety protocols to ensure a safe environment for patients, staff, and visitors at all times.' },
  { icon: <Users size={24} />,       title: 'Community Service',         desc: 'Rooted in Mirzapur, we are committed to improving healthcare access for families across Badli Katra and surrounding areas.' },
  { icon: <Stethoscope size={24} />, title: 'Medical Excellence',        desc: 'Our team continuously updates their skills and uses evidence-based treatments to deliver the best possible health outcomes.' },
];

const About: React.FC = () => {
  return (
    <main>
      {/* Hero banner */}
      <section className="bg-[#EFEFFB] py-14" aria-label="About Mrityunjay Hospital">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2A4A]">
              About <span className="text-[#5B4FCF]">Mrityunjay Hospital</span>
            </h1>
            <p className="mt-5 text-[#5C6378] text-lg leading-relaxed">
              Serving the people of Mirzapur with quality healthcare since our founding,
              Mrityunjay Hospital is a trusted name for compassionate and expert medical care.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white" aria-label="Hospital history and story">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={hospitalPhoto}
                alt="Mrityunjay Hospital — Badli Katra, Mirzapur"
                className="w-full object-cover max-h-[420px]"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <SectionHeading title="Our Story" centered={false} />
              <div className="text-[#5C6378] leading-relaxed text-base flex flex-col gap-4">
                <p>
                  Mrityunjay Hospital was founded with a singular mission: to bring
                  high-quality, affordable healthcare to the families of Mirzapur. Located in
                  Badli Katra, our hospital has grown from a small clinic into a full-fledged
                  multi-specialty facility serving thousands of patients every year.
                </p>
                <p>
                  Under the leadership of Dr. Anurag Kashyap and Dr. Pooja Kashyap, we have
                  built a team that combines deep expertise with genuine empathy. We believe
                  that good healthcare is not just about treating disease — it is about
                  caring for the whole person.
                </p>
                <p>
                  Our hospital is equipped with modern diagnostic and surgical facilities,
                  and we continuously invest in upgrading our infrastructure to stay at the
                  forefront of medical care in the region.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#EFEFFB]" aria-label="Mission and vision">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E4E1F5] p-8">
              <h2 className="text-2xl font-bold text-[#5B4FCF] mb-4">Our Mission</h2>
              <p className="text-[#5C6378] leading-relaxed">
                To provide accessible, compassionate, and high-quality medical care to every
                patient we serve — regardless of their background — using the latest medical
                knowledge and a patient-first approach.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#E4E1F5] p-8">
              <h2 className="text-2xl font-bold text-[#5B4FCF] mb-4">Our Vision</h2>
              <p className="text-[#5C6378] leading-relaxed">
                To become the most trusted healthcare institution in the Vindhya region,
                known for excellence in clinical outcomes, patient satisfaction, and community
                health improvement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white" aria-label="Our core values">
        <Container>
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every interaction at Mrityunjay Hospital"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#EFEFFB] rounded-2xl p-6 flex flex-col gap-3 card-hover"
              >
                <div className="w-12 h-12 bg-[#5B4FCF] rounded-full flex items-center justify-center text-white">
                  {v.icon}
                </div>
                <h3 className="font-bold text-[#1F2A4A] text-base">{v.title}</h3>
                <p className="text-[#5C6378] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default About;
