import React from 'react';
import Container from '../components/shared/Container';
import AppointmentForm from '../components/booking/AppointmentForm';

const BookAppointment: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#5B4FCF] py-12">
        <Container>
          <div className="text-center text-white max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold">Book an Appointment</h1>
            <p className="mt-3 text-white/80 text-base">
              Schedule a consultation with our specialist doctors in just a few steps
            </p>
          </div>
        </Container>
      </section>

      <AppointmentForm />
    </main>
  );
};

export default BookAppointment;
