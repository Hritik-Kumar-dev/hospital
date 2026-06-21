import React from 'react';
import { Stethoscope, Bone, Scissors, Baby, Ambulance, HeartPulse } from 'lucide-react';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import type { Service } from '../components/services/ServiceCard';

const serviceData: Service[] = [
  {
    slug: 'general-medicine',
    icon: <Stethoscope size={28} />,
    title: 'General Medicine',
    description: 'Treatment of common illnesses and routine health care',
    details:
      'Our general medicine department handles a wide range of acute and chronic conditions including fever, infections, diabetes, hypertension, and respiratory illnesses. Routine check-ups and preventive health screenings are also available.',
    includes: [
      'Outpatient consultation',
      'Diagnosis & prescription',
      'Routine health check-ups',
      'Chronic disease management',
      'Vaccination & preventive care',
    ],
    assignedDoctor: 'Dr. Anurag Kasera',
  },
  {
    slug: 'orthopedics',
    icon: <Bone size={28} />,
    title: 'Orthopedics',
    description: 'Bone and joint disorder specialist',
    details:
      'Our orthopedic department specializes in diagnosing and treating disorders of the musculoskeletal system including fractures, arthritis, sports injuries, and spine-related conditions.',
    includes: [
      'Fracture management & casting',
      'Joint replacement consultation',
      'Sports injury rehabilitation',
      'Spine and back pain treatment',
      'Bone deformity correction',
    ],
    assignedDoctor: 'Dr. Anurag Kasera',
  },
  {
    slug: 'general-surgery',
    icon: <Scissors size={28} />,
    title: 'General Surgery',
    description: 'Surgery-related treatments and procedures',
    details:
      'Our surgical unit is equipped with modern operation theatres and performed by experienced surgeons. We handle a wide array of elective and emergency surgical procedures.',
    includes: [
      'Appendectomy',
      'Hernia repair',
      'Gall bladder surgery',
      'Wound care & minor procedures',
      'Pre- and post-operative care',
    ],
    assignedDoctor: 'Dr. Anurag Kasera',
  },
  {
    slug: 'gynecology',
    icon: <HeartPulse size={28} />,
    title: 'Gynecology',
    description: "Women's health care and maternal services",
    details:
      "Our gynecology department provides comprehensive care for women at every stage of life — from adolescence through menopause. We offer obstetric care, family planning, and gynecological surgical procedures.",
    includes: [
      'Antenatal & postnatal care',
      'Normal & Cesarean deliveries',
      'High-risk pregnancy management',
      'Family planning counseling',
      'Laparoscopic gynecology',
    ],
    assignedDoctor: 'Dr. Pragya Kasera',
  },
  {
    slug: 'child-care',
    icon: <Baby size={28} />,
    title: 'Child Care',
    description: 'Complete care for children of all ages',
    details:
      'Our pediatric unit provides complete healthcare for newborns, infants, and children. We offer growth monitoring, vaccinations, management of childhood illnesses, and nutritional guidance.',
    includes: [
      'Newborn care & neonatal check-ups',
      'Immunization & vaccination',
      'Childhood illness management',
      'Growth & development monitoring',
      'Nutritional counseling for children',
    ],
    assignedDoctor: 'Dr. Pragya Kasera',
  },
  {
    slug: 'emergency-services',
    icon: <Ambulance size={28} />,
    title: 'Emergency Services',
    description: '24×7 emergency facility, always available',
    details:
      'Our emergency unit operates around the clock, ready to handle any medical crisis from trauma and accidents to acute cardiac events and obstetric emergencies. Our trained emergency team responds swiftly to stabilize patients.',
    includes: [
      '24×7 emergency room',
      'Trauma care',
      'Ambulance coordination',
      'Emergency surgical intervention',
      'Critical patient stabilization',
    ],
    assignedDoctor: 'Dr. Anurag Kasera',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#EFEFFB] py-14">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2A4A]">
              Our <span className="text-[#5B4FCF]">Medical Services</span>
            </h1>
            <p className="mt-4 text-[#5C6378] text-lg leading-relaxed">
              Comprehensive healthcare services under one roof for you and your entire family
            </p>
          </div>
        </Container>
      </section>

      {/* Services detail grid */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="What We Offer"
            subtitle="Each service is delivered by specialist doctors using modern equipment and evidence-based treatment protocols"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {serviceData.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ServicesPage;
