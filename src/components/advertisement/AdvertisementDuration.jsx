import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AdvertisementDuration = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className='w-full h-[56px] pr-12 text-[#111827] placeholder:text-[20px] placeholder:text-[#11182766] border-[1.5px] border-[#1118271A] bg-[#F3F4F6] rounded-lg'
            />
            <Button
              variant='ghost'
              size='sm'
              className='absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent'
            >
              <Calendar className='h-6 w-6 text-[#111827]' />
            </Button>
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
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className='w-full h-[56px] pr-12 text-[#111827] placeholder:text-[20px] placeholder:text-[#11182766] bg-[#F3F4F6] border-[1.5px] border-[#1118271A] rounded-lg'
            />
            <Button
              variant='ghost'
              size='sm'
              className='absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent'
            >
              <Calendar className='h-6 w-6 text-[#111827]' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementDuration;
