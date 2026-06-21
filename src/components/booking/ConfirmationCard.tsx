import React, { useRef } from 'react';
import { QRCodeSVG as QRCode } from 'qrcode.react';
import { CheckCircle, Download, Printer, Share2, MapPin, Phone, Clock } from 'lucide-react';
import type { BookingState } from './AppointmentForm';
import { doctors } from '../../data/doctors';
import { Link } from 'react-router-dom';

interface ConfirmationCardProps {
  booking: BookingState;
}

const ConfirmationCard: React.FC<ConfirmationCardProps> = ({ booking }) => {
  const doctor = doctors.find((d) => d.id === booking.doctorId);
  const slipRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => window.print();

  const handleShare = async () => {
    const text = `Appointment Confirmed!\nID: ${booking.appointmentId}\nDoctor: ${doctor?.name}\nDate: ${booking.date}\nSlot: ${booking.slot}\nHospital: Mrityunjay Hospital, Badli Katra, Mirzapur`;
    if (navigator.share) {
      await navigator.share({ title: 'Appointment Slip', text });
    } else {
      await navigator.clipboard.writeText(text);
      alert('Appointment details copied to clipboard!');
    }
  };

  return (
    <div>
      {/* Success header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={36} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-[#1F2A4A]">Appointment Confirmed!</h2>
        <p className="text-[#5C6378] text-sm mt-1">
          Your booking is confirmed. Please save or print this slip.
        </p>
      </div>

      {/* Slip */}
      <div
        ref={slipRef}
        className="border-2 border-[#E4E1F5] rounded-2xl overflow-hidden print:shadow-none"
      >
        {/* Header band */}
        <div className="bg-[#5B4FCF] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <p className="font-extrabold text-lg">Mrityunjay Hospital</p>
            <p className="text-white/80 text-xs">Badli Katra, Mirzapur, Uttar Pradesh</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/70">Appointment ID</p>
            <p className="font-mono font-bold text-lg">{booking.appointmentId}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col md:flex-row gap-6">
          {/* Details */}
          <div className="flex-1 grid grid-cols-2 gap-4 text-sm">
            <Detail label="Patient Name"   value={booking.name} />
            <Detail label="Phone"          value={booking.phone} />
            <Detail label="Age / Gender"   value={`${booking.age} years / ${booking.gender}`} />
            <Detail label="Doctor"         value={doctor?.name ?? '—'} />
            <Detail label="Specialization" value={doctor?.specialization ?? '—'} />
            <Detail label="Date"           value={booking.date} />
            <Detail label="Time Slot"      value={booking.slot} />
            <Detail label="Payment Status" value="Paid ✓" valueClass="text-green-600 font-bold" />
            <div className="col-span-2">
              <Detail label="Reason" value={booking.reason} />
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-3 shrink-0">
            <QRCode
              value={`MH:${booking.appointmentId}:${booking.doctorId}:${booking.date}:${booking.slot}`}
              size={140}
              level="M"
              includeMargin
            />
            <p className="text-xs text-[#5C6378] text-center">
              Scan at front desk<br />for instant check-in
            </p>
          </div>
        </div>

        {/* Hospital info strip */}
        <div className="bg-[#EFEFFB] px-6 py-3 flex flex-wrap gap-4 text-xs text-[#5C6378]">
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-[#5B4FCF]" />
            Badli Katra, Mirzapur, UP
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={12} className="text-[#5B4FCF]" />
            88081 41820
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} className="text-[#5B4FCF]" />
            Mon–Sat: 10 AM–2 PM, 5–8 PM
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#E4E1F5] text-[#5C6378] font-semibold text-sm hover:border-[#5B4FCF] hover:text-[#5B4FCF] transition-colors"
        >
          <Printer size={16} /> Print
        </button>
        <button
          type="button"
          onClick={handleShare}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#E4E1F5] text-[#5C6378] font-semibold text-sm hover:border-[#5B4FCF] hover:text-[#5B4FCF] transition-colors"
        >
          <Share2 size={16} /> Share
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#5B4FCF] text-white font-bold text-sm hover:bg-[#4a3fb8] transition-colors"
        >
          <Download size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
};

const Detail: React.FC<{ label: string; value: string; valueClass?: string }> = ({
  label, value, valueClass = 'text-[#1F2A4A] font-semibold'
}) => (
  <div>
    <p className="text-[#5C6378] text-xs mb-0.5">{label}</p>
    <p className={valueClass}>{value}</p>
  </div>
);

export default ConfirmationCard;
