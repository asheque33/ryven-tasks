import React from 'react';
import { Calendar } from '../ui/calendar';

const CalendarSection = ({
  mode,
  selected,
  onSelect,
  disabled = false,
  className,
}) => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div className='custom-calendar h-full'>
      <Calendar
        mode={mode || 'single'}
        selected={selected || date}
        onSelect={onSelect || setDate}
        disabled={disabled}
        className={`w-full h-full bg-[#F3F4F6] rounded-md border shadow-sm ${className}`}
      />
    </div>
  );
};

export default CalendarSection;
