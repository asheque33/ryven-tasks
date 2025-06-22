import React from 'react';
import { Input } from '../../ui/input';
import { X } from 'lucide-react';
import { Search } from 'lucide-react';
const SearchSection = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <div className='relative'>
      <Search className='w-8 h-8 absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 ' />
      <Input
        placeholder='Search'
        className='pl-16 w-[372px] h-[56px] border-[1.5px] border-[#1118271A] rounded-[10px] placeholder:text-[20px] placeholder:text-[#11182766]'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm && (
        <button
          onClick={onClearSearch}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
        >
          <X className='w-5 h-5' />
        </button>
      )}
    </div>
  );
};

export default SearchSection;
