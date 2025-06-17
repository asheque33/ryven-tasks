import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';

const AdsTypeSelect = () => {
  return (
    // <div className='relative w-full max-w-md mx-auto'>

    <div className='w-[313px]  bg-white '>
      <div className='space-y-2'>
        {/* Label */}
        <label className='block text-[20px] text-left'>Ads Type</label>

        {/* Select dropdown */}
        <Select>
          <SelectTrigger
            style={{ height: '56px' }}
            className='w-full  border-2 border-[#1118271A] rounded-[10px] bg-[#F3F4F6] text-lg font-medium text-gray-800'
          >
            <SelectValue placeholder='Local' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='active' className='text-lg py-3'>
              Active
            </SelectItem>
            <SelectItem value='inactive' className='text-lg py-3'>
              Inactive
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    // </div>
  );
};

export default AdsTypeSelect;
