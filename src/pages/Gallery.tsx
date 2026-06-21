import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';
import hospitalPhoto from '../assets/hospital_photo.png';
import doctorPhoto from '../assets/doctor_photo.png';

// Using available assets — replace with real gallery images
const galleryImages = [
  { src: hospitalPhoto, alt: 'Mrityunjay Hospital exterior view',            category: 'Exterior' },
  { src: hospitalPhoto, alt: 'Hospital main entrance and signboard',          category: 'Exterior' },
  { src: doctorPhoto,   alt: 'Dr. Anurag Kashyap in consultation',           category: 'Doctors' },
  { src: doctorPhoto,   alt: 'Dr. Pooja Kashyap with patient',               category: 'Doctors' },
  { src: hospitalPhoto, alt: 'Modern reception area',                         category: 'Interior' },
  { src: hospitalPhoto, alt: 'Comfortable patient waiting room',              category: 'Interior' },
  { src: hospitalPhoto, alt: 'Well-equipped operation theatre',               category: 'OT & Equipment' },
  { src: hospitalPhoto, alt: 'Diagnostic laboratory',                         category: 'OT & Equipment' },
  { src: hospitalPhoto, alt: 'Maternity ward',                                category: 'Interior' },
  { src: hospitalPhoto, alt: 'Patient room — clean and hygienic',             category: 'Interior' },
  { src: hospitalPhoto, alt: 'Emergency care unit',                           category: 'Interior' },
  { src: doctorPhoto,   alt: 'Medical staff during rounds',                   category: 'Doctors' },
];

const categories = ['All', ...Array.from(new Set(galleryImages.map((g) => g.category)))];

const Gallery: React.FC = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#EFEFFB] py-14">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2A4A]">
              Hospital <span className="text-[#5B4FCF]">Gallery</span>
            </h1>
            <p className="mt-4 text-[#5C6378] text-lg leading-relaxed">
              A glimpse into our modern facilities, caring staff, and welcoming environment
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading title="Our Facilities in Pictures" />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-colors ${
                  active === cat
                    ? 'bg-[#5B4FCF] border-[#5B4FCF] text-white'
                    : 'border-[#E4E1F5] text-[#5C6378] hover:border-[#5B4FCF] hover:text-[#5B4FCF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className="relative group overflow-hidden rounded-2xl aspect-square bg-[#EFEFFB] card-hover"
                onClick={() => setLightbox(galleryImages.indexOf(img))}
                aria-label={`View: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#5B4FCF]/0 group-hover:bg-[#5B4FCF]/30 transition-colors flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="absolute bottom-2 left-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
                  {img.category}
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={36} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-white/80 text-sm text-center px-4">
            {galleryImages[lightbox].alt}
          </p>
        </div>
      )}
    </main>
  );
};

export default Gallery;
