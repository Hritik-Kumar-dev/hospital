import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import type { Doctor } from './DoctorCard';
import Container from '../shared/Container';

interface DoctorProfileProps {
  doctor: Doctor;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctor }) => {
  return (
    <section className="py-16 bg-white" aria-label={`Profile of ${doctor.name}`}>
      <Container narrow>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Photo card */}
          <div className="w-full md:w-72 bg-[#EFEFFB] rounded-3xl flex flex-col items-center p-6 gap-4 shrink-0">
            <img
              src={doctor.image}
              alt={`${doctor.name}, ${doctor.designation}`}
              className="h-64 object-contain"
            />
            <div className="text-center">
              <h1 className="text-xl font-bold text-[#1F2A4A]">{doctor.name}</h1>
              <p className="text-[#5B4FCF] font-semibold text-sm mt-0.5">{doctor.designation}</p>
              <p className="text-[#5C6378] text-sm mt-0.5">{doctor.specialization}</p>
            </div>
            <Link
              to="/book-appointment"
              className="w-full text-center bg-[#5B4FCF] text-white font-bold py-3 rounded-xl hover:bg-[#4a3fb8] transition-colors text-sm"
            >
              <Calendar size={15} className="inline mr-1" />
              Book Appointment
            </Link>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <GraduationCap size={18} />, label: 'Qualification', value: doctor.qualification },
                { icon: <Award size={18} />,         label: 'Experience',    value: doctor.experience },
                { icon: <Clock size={18} />,         label: 'Timings',       value: doctor.timing },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-[#EFEFFB] rounded-xl p-4">
                  <div className="text-[#5B4FCF] mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-xs text-[#5C6378] font-medium">{item.label}</p>
                    <p className="text-[#1F2A4A] font-bold text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            {doctor.achievements.length > 0 && (
              <div>
                <h2 className="text-[#1F2A4A] font-bold text-lg mb-3">Achievements</h2>
                <ul className="flex flex-col gap-2">
                  {doctor.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-[#5C6378]">
                      <Award size={15} className="text-[#5B4FCF] shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Areas of Expertise */}
            {doctor.expertise.length > 0 && (
              <div>
                <h2 className="text-[#1F2A4A] font-bold text-lg mb-3">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((e) => (
                    <span
                      key={e}
                      className="flex items-center gap-1.5 bg-[#EFEFFB] text-[#5B4FCF] text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle size={12} />
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DoctorProfile;
