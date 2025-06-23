// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import { Button } from '../ui/button';

// const FilterClientModal = ({ isOpen, onClose, onApplyDateFilter }) => {
//   const [selectedDate, setSelectedDate] = useState('');

//   const handleApply = () => {
//     // Convert string date to Date object if date is selected
//     const dateToApply = selectedDate ? new Date(selectedDate) : null;
//     onApplyDateFilter({ date: dateToApply });
//     onClose(false);
//   };

//   const handleClear = () => {
//     setSelectedDate('');
//     onApplyDateFilter({ date: null });
//     onClose(false);
//   };

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
//       <div className='bg-white rounded-lg p-6 w-[400px] max-w-90vw shadow-xl'>
//         {/* Header */}
//         <div className='flex items-center justify-between mb-6'>
//           <h2 className='text-xl font-semibold text-gray-900'>
//             Filter Options
//           </h2>
//           <button
//             onClick={() => onClose(false)}
//             className='p-1 hover:bg-gray-100 rounded-full'
//           >
//             <X size={20} className='text-gray-500' />
//           </button>
//         </div>

//         {/* Date Filter */}
//         <div className='space-y-4 mb-6'>
//           <label className='text-sm font-medium text-gray-700'>
//             Filter by Date
//           </label>
//           <input
//             type='date'
//             value={selectedDate}
//             onChange={handleDateChange}
//             className='w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:border-[#34CCEB] focus:ring-1 focus:ring-[#34CCEB] outline-none'
//             placeholder='Select a date'
//           />
//         </div>

//         {/* Action Buttons */}
//         <div className='flex gap-3'>
//           <Button onClick={handleClear} variant='outline' className='flex-1'>
//             Clear
//           </Button>
//           <Button
//             onClick={handleApply}
//             className='flex-1 bg-[#34CCEB] hover:bg-[#34CCEB]/90'
//           >
//             Apply Filter
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterClientModal;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const FilterClientModal = ({ isOpen, onClose, onApplyDateFilter }) => {
  const [currentMonth, setCurrentMonth] = useState(10); // October = 10 (0-indexed)
  const [currentYear, setCurrentYear] = useState(2024);
  const [selectedDate, setSelectedDate] = useState(31);
  const [hoveredDate, setHoveredDate] = useState(null);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const getDateStyle = (day) => {
    if (!day) return '';

    if (day === selectedDate) {
      return 'bg-cyan-500 text-white';
    } else if (day === 28) {
      return 'relative text-cyan-500 after:content-[""] after:absolute after:bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:bg-cyan-500 after:rounded-full';
    } else if ([29, 30].includes(day)) {
      return 'bg-cyan-100 text-cyan-600';
    } else if (hoveredDate === day) {
      return 'bg-gray-100';
    }

    return 'hover:bg-gray-100';
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 w-[500px] max-w-90vw shadow-xl'>
        {/* Header */}
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-semibold text-gray-900'>
            Select a date & time
          </h2>
          <button
            onClick={() => onClose(false)}
            className='p-1 hover:bg-gray-100 rounded-full'
          >
            <X size={24} className='text-gray-500' />
          </button>
        </div>

        {/* Month Navigation */}
        <div className='flex items-center justify-center mb-6 gap-4'>
          <button
            onClick={() => navigateMonth('prev')}
            className='p-3 rounded-full bg-cyan-100 hover:bg-cyan-200 transition-colors'
          >
            <ChevronLeft size={20} className='text-cyan-600' />
          </button>

          <h3 className='text-lg font-medium text-gray-900 min-w-[120px] text-center'>
            {months[currentMonth]} {currentYear}
          </h3>

          <button
            onClick={() => navigateMonth('next')}
            className='p-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors'
          >
            <ChevronRight size={20} className='text-white' />
          </button>
        </div>

        {/* Days of Week */}
        <div className='grid grid-cols-7 gap-1 mb-2'>
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className='text-center text-gray-500 font-medium py-2'
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className='grid grid-cols-7 gap-1 mb-6'>
          {generateCalendarDays().map((day, index) => (
            <div key={index} className='aspect-square'>
              {day && (
                <button
                  className={`w-full h-full rounded-full flex items-center justify-center text-sm font-medium transition-colors ${getDateStyle(
                    day
                  )}`}
                  onClick={() => setSelectedDate(day)}
                  onMouseEnter={() => setHoveredDate(day)}
                  onMouseLeave={() => setHoveredDate(null)}
                >
                  {day}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4'>
          <button
            onClick={() => {
              // Clear filter
              onApplyDateFilter({ date: null });
              onClose(false);
            }}
            className='flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors'
          >
            Clear
          </button>
          <button
            onClick={() => {
              // Create Date object from selected date, month, and year
              const selectedDateObj = new Date(
                currentYear,
                currentMonth,
                selectedDate
              );
              onApplyDateFilter({ date: selectedDateObj });
              onClose(false);
            }}
            className='flex-1 px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors'
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterClientModal;
