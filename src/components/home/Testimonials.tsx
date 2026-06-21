import React from 'react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

const testimonials = [
  {
    name: 'Ramesh Kumar',
    location: 'Mirzapur',
    rating: 5,
    text: 'The doctors at Mrityunjay Hospital treated my father with exceptional care. The staff is very attentive and the facilities are modern. Highly recommended!',
  },
  {
    name: 'Sunita Devi',
    location: 'Vindhyachal',
    rating: 5,
    text: 'Dr. Anurag Kashyap is an excellent physician. He took time to explain every detail of the treatment and we felt very reassured throughout the entire process.',
  },
  {
    name: 'Vikram Singh',
    location: 'Mirzapur',
    rating: 5,
    text: 'The online booking system is very convenient. We could book an appointment quickly and the confirmation came immediately. Great experience overall.',
  },
  {
    name: 'Priya Gupta',
    location: 'Chunar',
    rating: 5,
    text: 'Dr. Pooja Kashyap handled my delivery with great expertise and care. The maternity ward is clean, well-equipped, and the nursing staff is very supportive.',
  },
];

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-lg" aria-hidden="true">★</span>
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-[#EFEFFB]" aria-label="Patient testimonials">
      <Container>
        <SectionHeading
          title="What Our Patients Say"
          subtitle="The experiences of our patients reflect our commitment to quality healthcare"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-2xl border border-[#E4E1F5] p-6 flex flex-col gap-4 card-hover"
            >
              <Stars count={t.rating} />
              <p className="text-[#5C6378] text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div>
                <p className="font-bold text-[#1F2A4A] text-sm">{t.name}</p>
                <p className="text-[#5C6378] text-xs">{t.location}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
