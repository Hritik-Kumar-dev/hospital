import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, GraduationCap } from 'lucide-react';

export interface Doctor {
  id: string;
  name: string;
  designation: string;
  specialization: string;
  qualification: string;
  experience: string;
  timing: string;
  image: string;
  achievements: string[];
  expertise: string[];
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <article className="card-hover bg-white rounded-2xl border border-[#E4E1F5] overflow-hidden flex flex-col">
      {/* Photo */}
      <div className="bg-[#EFEFFB] flex justify-center pt-8 pb-0 px-6">
        <img
          src={doctor.image}
          alt={`${doctor.name} — ${doctor.specialization}`}
          className="h-56 object-contain object-bottom"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-bold text-[#1F2A4A]">{doctor.name}</h3>
          <p className="text-[#5B4FCF] font-semibold text-sm">{doctor.designation}</p>
          <p className="text-[#5C6378] text-sm mt-0.5">{doctor.specialization}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-[#5C6378]">
            <GraduationCap size={15} className="text-[#5B4FCF] shrink-0" />
            <span>{doctor.qualification}</span>
          </div>
          <div className="flex items-center gap-2 text-[#5C6378]">
            <Award size={15} className="text-[#5B4FCF] shrink-0" />
            <span>{doctor.experience} experience</span>
          </div>
          <div className="flex items-center gap-2 text-[#5C6378]">
            <Clock size={15} className="text-[#5B4FCF] shrink-0" />
            <span>{doctor.timing}</span>
          </div>
        </div>

        <Link
          to={`/doctors/${doctor.id}`}
          className="mt-auto pt-3 text-center bg-[#EFEFFB] text-[#5B4FCF] font-bold text-sm rounded-lg py-2.5 hover:bg-[#5B4FCF] hover:text-white transition-colors"
        >
          View Profile
        </Link>
      </div>
    </article>
  );
};

export default DoctorCard;
