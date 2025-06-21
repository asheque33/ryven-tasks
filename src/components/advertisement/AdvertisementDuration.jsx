import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Calendar as CalendarComponent } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import CalendarSection from '../calendar/CalendarSection';

const AdvertisementDuration = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startCalendarOpen, setStartCalendarOpen] = useState(false);
  const [endCalendarOpen, setEndCalendarOpen] = useState(false);

  const handleStartDateSelect = (date) => {
    setStartDate(date);
    setStartCalendarOpen(false);
  };

  const handleEndDateSelect = (date) => {
    setEndDate(date);
    setEndCalendarOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return '';
    // Simple date formatting without external dependency
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='w-full bg-white p-6 mt-[30px] rounded-lg border border-gray-200'>
      {/* Title */}
      <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
        Advertisement Duration
      </h3>

      {/* Date Fields */}
      <div className='grid grid-cols-2 gap-6'>
        {/* Start Date */}
        <div className='space-y-2'>
          <label className='block text-base font-medium text-[#111827]'>
            Start Date
          </label>
          <div className='relative'>
            <Input
              type='text'
              placeholder='- - -'
              value={formatDate(startDate)}
              readOnly
              className='w-full h-[56px] pr-12 text-[#111827] placeholder:text-[20px] placeholder:text-[#11182766] border-[1.5px] border-[#1118271A] bg-[#F3F4F6] rounded-lg cursor-pointer'
              onClick={() => setStartCalendarOpen(true)}
            />
            <Popover
              open={startCalendarOpen}
              onOpenChange={setStartCalendarOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent'
                >
                  <Calendar className='h-6 w-6 text-[#111827]' />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className='w-full p-0 z-50'
                side={'left'}
                align={'start'}
              >
                <CalendarSection
                  mode='single'
                  selected={startDate}
                  onSelect={handleStartDateSelect}
                  className='rounded-md border'
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* End Date */}
        <div className='space-y-2'>
          <label className='block text-base font-medium text-[#111827]'>
            End Date
          </label>
          <div className='relative'>
            <Input
              type='text'
              placeholder='- - -'
              value={formatDate(endDate)}
              readOnly
              className='w-full h-[56px] pr-12 text-[#111827] placeholder:text-[20px] placeholder:text-[#11182766] bg-[#F3F4F6] border-[1.5px] border-[#1118271A] rounded-lg cursor-pointer'
              onClick={() => setEndCalendarOpen(true)}
            />
            <Popover open={endCalendarOpen} onOpenChange={setEndCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent'
                >
                  <Calendar className='h-6 w-6 text-[#111827]' />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className='w-auto  p-0 z-50'
                side={'left'}
                align={'start'}
              >
                {/* <CalendarComponent
                  mode='single'
                  selected={endDate}
                  onSelect={handleEndDateSelect}
                  className='rounded-md border'
                  disabled={(date) => startDate && date < startDate} // End date can't be before start date
                  initialFocus
                /> */}
                <CalendarSection
                  selected={endDate}
                  onSelect={handleEndDateSelect}
                  disabled={(date) => startDate && date < startDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementDuration;
