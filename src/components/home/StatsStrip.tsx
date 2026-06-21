import React from 'react';
import Container from '../shared/Container';

const stats = [
  { value: '5000+',  label: 'Happy Patients' },
  { value: '2',      label: 'Specialist Doctors' },
  { value: '10+',    label: 'Years of Service' },
  { value: '24/7',   label: 'Emergency Care' },
];

const StatsStrip: React.FC = () => {
  return (
    <section className="bg-[#EFEFFB] py-10" aria-label="Hospital statistics">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-4xl font-extrabold text-[#5B4FCF]">{s.value}</span>
              <span className="text-[#5C6378] text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsStrip;
