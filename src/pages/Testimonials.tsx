import React from 'react';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';

const allTestimonials = [
  { name: 'Ramesh Kumar',   location: 'Mirzapur',    rating: 5, text: 'The doctors at Mrityunjay Hospital treated my father with exceptional care. The staff is very attentive and the facilities are modern. Highly recommended!' },
  { name: 'Sunita Devi',    location: 'Vindhyachal', rating: 5, text: 'Dr. Anurag Kashyap is an excellent physician. He took time to explain every detail of the treatment and we felt very reassured throughout the entire process.' },
  { name: 'Vikram Singh',   location: 'Mirzapur',    rating: 5, text: 'The online booking system is very convenient. We could book an appointment quickly and the confirmation came immediately. Great experience overall.' },
  { name: 'Priya Gupta',    location: 'Chunar',      rating: 5, text: 'Dr. Pooja Kashyap handled my delivery with great expertise and care. The maternity ward is clean, well-equipped, and the nursing staff is very supportive.' },
  { name: 'Arvind Tiwari',  location: 'Ahraura',     rating: 5, text: 'I came in with an emergency and the team responded instantly. The emergency ward is always ready. I owe my recovery to the dedicated staff here.' },
  { name: 'Meera Yadav',    location: 'Mirzapur',    rating: 5, text: 'Very clean hospital. The registration was smooth, waiting time was minimal, and the consultation was thorough. I will always recommend this hospital.' },
  { name: 'Sunil Patel',    location: 'Lalganj',     rating: 4, text: 'Good service and experienced doctors. The hospital is well-maintained and the treatment for my knee problem has shown great improvement.' },
  { name: 'Kavita Singh',   location: 'Mirzapur',    rating: 5, text: "Had my surgery here and the entire experience was excellent — from pre-op counseling to post-op care. Dr. Kashyap's team is truly professional." },
];

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-lg ${i < count ? 'text-yellow-400' : 'text-gray-200'}`} aria-hidden="true">★</span>
    ))}
  </div>
);

const TestimonialsPage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#EFEFFB] py-14">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2A4A]">
              Patient <span className="text-[#5B4FCF]">Testimonials</span>
            </h1>
            <p className="mt-4 text-[#5C6378] text-lg leading-relaxed">
              Real stories from real patients — the trust they place in us drives us forward
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-[#5B4FCF] py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '5000+', label: 'Patients Treated' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '98%',   label: 'Patient Satisfaction' },
              { value: '10+',   label: 'Years of Trust' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold">{s.value}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="What Our Patients Say"
            subtitle="We are humbled by the kind words of our patients and their families"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allTestimonials.map((t) => (
              <article
                key={t.name}
                className="bg-white rounded-2xl border border-[#E4E1F5] p-6 flex flex-col gap-4 card-hover"
              >
                <Stars count={t.rating} />
                <p className="text-[#5C6378] text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="border-t border-[#E4E1F5] pt-3">
                  <p className="font-bold text-[#1F2A4A] text-sm">{t.name}</p>
                  <p className="text-[#5C6378] text-xs">{t.location}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default TestimonialsPage;
