import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import link2 from '../../assets/icons/link2.png';
import { Calendar } from '../ui/calendar';
import CalendarSection from '../calendar/CalendarSection';
import { useState } from 'react';
import check from '../../assets/icons/checkmark.png';
const durations = [
  { label: '30 min', value: '30 min' },
  { label: '1h', value: '1h' },
  { label: '2h', value: '2h' },
];
const CalendarPage = () => {
  const [selectedDuration, setSelectedDuration] = useState('1h');
  const [selectedTime, setSelectedTime] = useState('12:00');

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        {/* <div className='flex flex-col gap-4'> */}
        <div className='text-3xl font-semibold'>
          <span className=''>Remaining time:</span>
          <span className=' text-blue-600 ml-2'>2 Hours 30 Minutes</span>
        </div>
        {/* </div> */}
        <div className='text-3xl leading-none font-semibold'>
          <span>Total Duration:</span>
          <span className=' text-cyan-600 ml-2'>3 Hours</span>
        </div>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-8 mb-6'>
        <div
          className='bg-cyan-500 h-8 rounded-full'
          style={{ width: '33%' }}
        ></div>
      </div>
      <section className='flex items-center justify-between mb-4'>
        <div>
          <h2 className='text-[30px] font-semibold font-outfit'>Pick Dates</h2>
          <p className='text-[20px] text-[#111827CC]'>
            This feature ensures flexibility and convenience by providing a
            user-friendly calendar interface to streamline scheduling
          </p>
        </div>
        <Button className='bg-cyan-500 hover:bg-cyan-600 text-white   !py-[19px] !px-[30px] h-full rounded-[10px] mr-2.5'>
          <span className=' text-[18px] font-semibold'>
            Past Sessions History
          </span>

          <img src={link2} alt='' />
        </Button>
      </section>
      <section>
        <div className='mb-4 flex justify-between items-center'>
          <label className='block text-[32px] font-bold mb-2'>
            Select Duration *
          </label>
          <div className='flex gap-2.5'>
            {durations.map((duration) => (
              <Button
                key={duration.value}
                onClick={() => setSelectedDuration(duration.label)}
                size={'duration'}
                variant={
                  selectedDuration === duration.label ? 'default' : 'outline'
                }
                className={`py-[14px] px-[30px] ${
                  selectedDuration === duration.label
                    ? 'bg-[#34CCEB] hover:bg-[#34CCEB] text-white'
                    : 'text-[#205CD4] hover:text-[#205CD4] bg-[#34CCEB1A]'
                }`}
              >
                {duration.label}
                {selectedDuration === duration.label && (
                  <span className='ml-2'>
                    <img src={check} alt='' className='w-5 h-5 bg-inherit' />
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <div className='grid grid-cols-2 gap-6 '>
        <div className='w-full'>
          <CalendarSection />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className='text-center'>
              Tuesday, 31 August 2024
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-[17px]'>
              {['11:00', '12:00', '13:00', '14:00', '15:00'].map(
                (time, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedTime(time)}
                    className={`p-5 h-[70px] rounded-[10px] border-2 cursor-pointer transition-colors text-center text-[20px] font-medium leading-[30px] ${
                      selectedTime === time
                        ? 'bg-[#34CCEB] text-white border-[#00000033]'
                        : 'border-gray-200 hover:border-cyan-300'
                    }`}
                  >
                    {time}
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <section className='grid grid-cols-2 gap-6 mt-6'>
        <div className='flex items-center gap-6'>
          <label className='block text-[24px] font-medium mb-2'>
            Time zone
          </label>
          <Select defaultValue='berlin'>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='berlin'>
                Berlin, Germany (GMT +1:00)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='w-[80%] ml-auto'>
          <div className='flex  gap-4 '>
            <Button
              size={'custom'}
              variant='outline'
              className='flex-1 py-3.5 px-[30px] text-[#34CCEB] hover:text-[#34CCEB] bg-[#34CCEB1A] border-[#34CCEB4D]'
            >
              Cancel
            </Button>
            <Button
              size={'custom'}
              className='flex-1
           bg-cyan-500 hover:bg-cyan-600 py-3.5 px-[30px]'
            >
              Apply
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
