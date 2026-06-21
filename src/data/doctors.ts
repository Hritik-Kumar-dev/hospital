import doctorPhoto from '../assets/doctor_photo.png';
import type { Doctor } from '../components/doctors/DoctorCard';

// Single doctor photo asset is used for both — replace with real images when available
export const doctors: Doctor[] = [
  {
    id: 'dr-anurag-kashyap',
    name: 'Dr. Anurag Kasera',
    designation: 'Chief Medical Officer',
    specialization: 'General Medicine & General Surgery',
    qualification: 'MBBS, MS (General Surgery)',
    experience: '12+ Years',
    timing: 'Mon–Sat: 10 AM–2 PM, 5–8 PM',
    image: doctorPhoto,
    achievements: [
      'Successfully performed 1000+ surgical procedures',
      'Recognized for excellence in emergency medical care',
      'Active member of Uttar Pradesh Medical Council',
      'Special training in minimally invasive surgery',
    ],
    expertise: [
      'General Surgery',
      'Laparoscopic Surgery',
      'Emergency Medicine',
      'Abdominal Surgery',
      'Wound Management',
    ],
  },
  {
    id: 'dr-pooja-kashyap',
    name: 'Dr. Pragya Kasera',
    designation: 'Senior Gynecologist',
    specialization: 'Gynecology & Obstetrics',
    qualification: 'MBBS, MD (Obstetrics & Gynecology)',
    experience: '10+ Years',
    timing: 'Mon–Sat: 10 AM–2 PM, 5–8 PM',
    image: doctorPhoto,
    achievements: [
      'Delivered 2000+ babies with excellent maternal outcomes',
      'Expert in high-risk pregnancy management',
      'Certified in laparoscopic gynecological procedures',
      "Pioneer in women's health awareness programs in Mirzapur",
    ],
    expertise: [
      'Normal & Cesarean Deliveries',
      'High-Risk Pregnancy',
      'Laparoscopic Gynecology',
      'Infertility Management',
      "Women's Preventive Health",
    ],
  },
];
