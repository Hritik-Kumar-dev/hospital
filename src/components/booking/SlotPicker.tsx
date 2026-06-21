import React from 'react';
import { Clock } from 'lucide-react';

const MORNING_SLOTS = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'];
const EVENING_SLOTS = ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'];

interface SlotPickerProps {
  date: string;
  slot: string;
  bookedSlots: string[];
  onDateChange: (v: string) => void;
  onSlotChange: (v: string) => void;
  dateError?: string;
  slotError?: string;
}

const today = () => new Date().toISOString().split('T')[0];

const SlotPicker: React.FC<SlotPickerProps> = ({
  date, slot, bookedSlots, onDateChange, onSlotChange, dateError, slotError,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1F2A4A] mb-6">Select Date & Time Slot</h2>

      {/* Date */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#1F2A4A] mb-2">
          Preferred Date *
        </label>
        <input
          type="date"
          value={date}
          min={today()}
          onChange={(e) => { onDateChange(e.target.value); onSlotChange(''); }}
          className="input-field max-w-xs"
        />
        {dateError && <p className="text-red-500 text-xs mt-1">{dateError}</p>}
      </div>

      {/* Slots */}
      {date && (
        <>
          <SlotGroup
            label="Morning Slots (10:00 AM – 2:00 PM)"
            slots={MORNING_SLOTS}
            selected={slot}
            booked={bookedSlots}
            onSelect={onSlotChange}
          />
          <SlotGroup
            label="Evening Slots (5:00 PM – 8:00 PM)"
            slots={EVENING_SLOTS}
            selected={slot}
            booked={bookedSlots}
            onSelect={onSlotChange}
          />
          {slotError && <p className="text-red-500 text-xs mt-2">{slotError}</p>}
        </>
      )}
      {!date && (
        <div className="flex items-center gap-2 text-[#5C6378] text-sm bg-[#EFEFFB] rounded-xl px-5 py-4">
          <Clock size={18} className="text-[#5B4FCF]" />
          Please select a date to view available slots.
        </div>
      )}
    </div>
  );
};

const SlotGroup: React.FC<{
  label: string;
  slots: string[];
  selected: string;
  booked: string[];
  onSelect: (s: string) => void;
}> = ({ label, slots, selected, booked, onSelect }) => (
  <div className="mb-5">
    <p className="text-sm font-semibold text-[#5C6378] mb-3">{label}</p>
    <div className="flex flex-wrap gap-2">
      {slots.map((s) => {
        const isBooked = booked.includes(s);
        const isSelected = selected === s;
        return (
          <button
            key={s}
            type="button"
            disabled={isBooked}
            onClick={() => onSelect(s)}
            aria-pressed={isSelected}
            aria-label={`${s}${isBooked ? ' — already booked' : ''}`}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
              isBooked
                ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed line-through'
                : isSelected
                ? 'bg-[#5B4FCF] border-[#5B4FCF] text-white'
                : 'bg-white border-[#E4E1F5] text-[#1F2A4A] hover:border-[#5B4FCF] hover:text-[#5B4FCF]'
            }`}
          >
            {s}
            {isBooked && (
              <span className="ml-1 text-xs">(Booked)</span>
            )}
          </button>
        );
      })}
    </div>
  </div>
);

export default SlotPicker;
