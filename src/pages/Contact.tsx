import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to API
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#EFEFFB] py-14">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2A4A]">
              Contact <span className="text-[#5B4FCF]">Us</span>
            </h1>
            <p className="mt-4 text-[#5C6378] text-lg leading-relaxed">
              We're here to help. Reach us by phone, WhatsApp, or visit us in person.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact info + form */}
      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Info cards */}
            <div className="lg:w-80 flex flex-col gap-5 shrink-0">
              {[
                {
                  icon: <MapPin size={22} />,
                  title: 'Address',
                  lines: ['Mrityunjay Hospital', 'Badli Katra, Mirzapur', 'Uttar Pradesh, India'],
                },
                {
                  icon: <Phone size={22} />,
                  title: 'Phone',
                  lines: ['88081 41820'],
                  href: 'tel:8808141820',
                },
                {
                  icon: <Clock size={22} />,
                  title: 'Working Hours',
                  lines: ['Mon – Sat', '10:00 AM – 2:00 PM', '5:00 PM – 8:00 PM'],
                },
                {
                  icon: <MessageCircle size={22} />,
                  title: 'WhatsApp',
                  lines: ['Chat for quick responses'],
                  href: 'https://wa.me/918808141820',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-[#EFEFFB] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#5B4FCF] rounded-full flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#1F2A4A] text-sm">{item.title}</p>
                    {item.lines.map((l) =>
                      item.href ? (
                        <a
                          key={l}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="block text-[#5C6378] text-sm hover:text-[#5B4FCF] transition-colors"
                        >
                          {l}
                        </a>
                      ) : (
                        <p key={l} className="text-[#5C6378] text-sm">{l}</p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Quick call/WA buttons */}
              <a
                href="tel:8808141820"
                className="flex items-center justify-center gap-2 bg-[#5B4FCF] text-white font-bold py-3.5 rounded-xl hover:bg-[#4a3fb8] transition-colors text-sm"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href="https://wa.me/918808141820"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#1ebe57] transition-colors text-sm"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>

            {/* Right column: Map + Form */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Google Map embed */}
              <div className="rounded-2xl overflow-hidden border border-[#E4E1F5] h-64">
                <iframe
                  title="Mrityunjay Hospital location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57947.69!2d82.57!3d25.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fef5f6a7a7a7b%3A0x1234!2sMirzapur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Contact Form */}
              <div className="bg-[#EFEFFB] rounded-2xl p-6">
                <SectionHeading title="Send Us a Message" centered={false} className="mb-6" />
                {submitted ? (
                  <div className="text-center py-6">
                    <p className="text-2xl font-bold text-[#5B4FCF]">✓ Message Sent!</p>
                    <p className="text-[#5C6378] text-sm mt-2">
                      We'll get back to you within a few hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2A4A] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="input-field"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2A4A] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="10-digit number"
                        className="input-field"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1F2A4A] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="How can we help you?"
                        rows={4}
                        className="input-field resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-[#5B4FCF] text-white font-bold py-3.5 rounded-xl hover:bg-[#4a3fb8] transition-colors text-sm"
                    >
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        .input-field {
          width: 100%;
          border: 2px solid #E4E1F5;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 14px;
          color: #1F2A4A;
          outline: none;
          transition: border-color 0.2s;
          background: white;
          font-family: 'Inter', sans-serif;
        }
        .input-field:focus {
          border-color: #5B4FCF;
          box-shadow: 0 0 0 3px rgba(91,79,207,0.1);
        }
        .input-field::placeholder { color: #9CA3AF; }
      `}</style>
    </main>
  );
};

export default Contact;
