import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Container from '../shared/Container';
import SlotPicker from './SlotPicker';
import ConfirmationCard from './ConfirmationCard';
import { doctors } from '../../data/doctors';

type Step = 1 | 2 | 3 | 4;

export interface BookingState {
  doctorId: string;
  date: string;
  slot: string;
  name: string;
  phone: string;
  age: string;
  gender: string;
  reason: string;
  appointmentId?: string;
  paymentId?: string;
}

const INITIAL: BookingState = {
  doctorId: '',
  date: '',
  slot: '',
  name: '',
  phone: '',
  age: '',
  gender: '',
  reason: '',
};

const STEPS = [
  { id: 1, label: 'Select Doctor' },
  { id: 2, label: 'Date & Slot' },
  { id: 3, label: 'Your Details' },
  { id: 4, label: 'Confirmation' },
];

// Simulated booked slots for demo
const BOOKED_SLOTS: Record<string, string[]> = {
  '2026-06-20': ['10:00 AM', '11:00 AM'],
  '2026-06-21': ['05:00 PM'],
};

const AppointmentForm: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [booking, setBooking] = useState<BookingState>(INITIAL);
  const [errors, setErrors] = useState<Partial<BookingState>>({});
  const [paying, setPaying] = useState(false);

  const update = (field: keyof BookingState, value: string) => {
    setBooking((b) => ({ ...b, [field]: value }));
    setErrors((e) => ({ ...e, [field]: '' }));
  };

  // --- Step 1 validation ---
  const validateStep1 = () => {
    if (!booking.doctorId) { setErrors({ doctorId: 'Please select a doctor' }); return false; }
    return true;
  };

  // --- Step 2 validation ---
  const validateStep2 = () => {
    const errs: Partial<BookingState> = {};
    if (!booking.date) errs.date = 'Please select a date';
    if (!booking.slot) errs.slot = 'Please select a time slot';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // --- Step 3 validation ---
  const validateStep3 = () => {
    const errs: Partial<BookingState> = {};
    if (!booking.name.trim()) errs.name = 'Full name is required';
    if (!booking.phone.trim() || !/^\d{10}$/.test(booking.phone.trim()))
      errs.phone = 'Enter a valid 10-digit phone number';
    if (!booking.age || isNaN(Number(booking.age)) || Number(booking.age) <= 0)
      errs.age = 'Enter a valid age';
    if (!booking.gender) errs.gender = 'Please select gender';
    if (!booking.reason.trim()) errs.reason = 'Please enter reason for consultation';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) handlePayment();
  };

  // Simulate Razorpay payment (replace with real integration)
  const handlePayment = async () => {
    setPaying(true);
    // Simulate async payment
    await new Promise((r) => setTimeout(r, 1800));
    const appointmentId = `MH-${Date.now().toString().slice(-6)}`;
    const paymentId = `pay_${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
    setBooking((b) => ({ ...b, appointmentId, paymentId }));
    setPaying(false);
    setStep(4);
  };

  const bookedForDate = booking.date ? (BOOKED_SLOTS[booking.date] ?? []) : [];

  return (
    <section className="py-16 bg-[#EFEFFB] min-h-screen" aria-label="Book appointment">
      <Container narrow>
        {/* Step indicator */}
        <div className="flex items-center justify-center mb-10 gap-0">
          {STEPS.map((s, idx) => (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step > s.id
                      ? 'bg-green-500 text-white'
                      : step === s.id
                      ? 'bg-[#5B4FCF] text-white'
                      : 'bg-white border-2 border-[#E4E1F5] text-[#5C6378]'
                  }`}
                >
                  {step > s.id ? <CheckCircle size={18} /> : s.id}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${step === s.id ? 'text-[#5B4FCF]' : 'text-[#5C6378]'}`}>
                  {s.label}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className={`h-0.5 flex-1 mx-1 transition-colors ${step > s.id ? 'bg-green-400' : 'bg-[#E4E1F5]'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">

          {/* STEP 1: Select Doctor */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-[#1F2A4A] mb-6">Select Doctor</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {doctors.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => update('doctorId', d.id)}
                    className={`text-left p-5 rounded-2xl border-2 transition-all ${
                      booking.doctorId === d.id
                        ? 'border-[#5B4FCF] bg-[#EFEFFB]'
                        : 'border-[#E4E1F5] hover:border-[#5B4FCF]/40'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={d.image}
                        alt={d.name}
                        className="w-16 h-16 rounded-xl object-cover bg-[#EFEFFB]"
                      />
                      <div>
                        <p className="font-bold text-[#1F2A4A]">{d.name}</p>
                        <p className="text-[#5B4FCF] text-sm font-semibold">{d.specialization}</p>
                        <p className="text-[#5C6378] text-xs mt-0.5">{d.timing}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {errors.doctorId && (
                <p className="text-red-500 text-sm mt-3">{errors.doctorId}</p>
              )}
            </div>
          )}

          {/* STEP 2: Date & Slot */}
          {step === 2 && (
            <SlotPicker
              date={booking.date}
              slot={booking.slot}
              bookedSlots={bookedForDate}
              onDateChange={(v) => update('date', v)}
              onSlotChange={(v) => update('slot', v)}
              dateError={errors.date}
              slotError={errors.slot}
            />
          )}

          {/* STEP 3: Patient Details */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-[#1F2A4A] mb-6">Your Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name *" error={errors.name}>
                  <input
                    type="text"
                    value={booking.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="input-field"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Phone Number *" error={errors.phone}>
                  <input
                    type="tel"
                    value={booking.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="input-field"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Age *" error={errors.age}>
                  <input
                    type="number"
                    value={booking.age}
                    onChange={(e) => update('age', e.target.value)}
                    placeholder="Age in years"
                    min={1}
                    max={120}
                    className="input-field"
                  />
                </Field>
                <Field label="Gender *" error={errors.gender}>
                  <select
                    value={booking.gender}
                    onChange={(e) => update('gender', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Reason for Consultation *" error={errors.reason}>
                    <textarea
                      value={booking.reason}
                      onChange={(e) => update('reason', e.target.value)}
                      placeholder="Briefly describe your health concern"
                      rows={3}
                      className="input-field resize-none"
                    />
                  </Field>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 p-5 bg-[#EFEFFB] rounded-xl text-sm text-[#5C6378]">
                <p className="font-semibold text-[#1F2A4A] mb-2">Booking Summary</p>
                <p>Doctor: <strong className="text-[#1F2A4A]">{doctors.find(d => d.id === booking.doctorId)?.name}</strong></p>
                <p>Date: <strong className="text-[#1F2A4A]">{booking.date}</strong></p>
                <p>Slot: <strong className="text-[#1F2A4A]">{booking.slot}</strong></p>
                <p className="mt-2 text-[#5B4FCF] font-semibold">Booking Fee: ₹100</p>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation */}
          {step === 4 && <ConfirmationCard booking={booking} />}

          {/* Navigation */}
          {step < 4 && (
            <div className="flex justify-between mt-8 gap-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="px-6 py-3 rounded-xl border-2 border-[#E4E1F5] text-[#5C6378] font-semibold text-sm hover:border-[#5B4FCF] hover:text-[#5B4FCF] transition-colors"
                >
                  ← Back
                </button>
              ) : <div />}

              <button
                type="button"
                onClick={handleNext}
                disabled={paying}
                className="px-8 py-3 rounded-xl bg-[#5B4FCF] text-white font-bold text-sm hover:bg-[#4a3fb8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {paying ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Processing Payment…
                  </>
                ) : step === 3 ? (
                  'Pay ₹100 & Confirm →'
                ) : (
                  'Next →'
                )}
              </button>
            </div>
          )}
        </div>
      </Container>

      {/* Input field styles via global class */}
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
    </section>
  );
};

// Reusable field wrapper
const Field: React.FC<{ label: string; error?: string; children: React.ReactNode }> = ({
  label, error, children
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-[#1F2A4A]">{label}</label>
    {children}
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default AppointmentForm;
