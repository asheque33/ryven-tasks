import { X, ChevronDown, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';

const FilterHistoryModal = ({ onClose, filters, onFiltersChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [isDateOpen, setIsDateOpen] = useState(false);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
  };

  const getDateRangeDisplay = () => {
    const { startDate, endDate } = localFilters;
    if (startDate && endDate)
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    if (startDate) return `From ${formatDate(startDate)}`;
    if (endDate) return `Until ${formatDate(endDate)}`;
    return 'Select Date Range';
  };

  const updateFilter = (key, value) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onFiltersChange(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = { startDate: '', endDate: '', status: 'all' };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
    onClose();
  };

  return (
    <div className='absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-[800px] p-6'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-xl font-semibold text-gray-900'>Filter By</h3>
        <button onClick={onClose} className='text-gray-400 hover:text-gray-600'>
          <X className='w-5 h-5' />
        </button>
      </div>

      <section className='flex justify-between items-center gap-6 mb-6'>
        {/* Date Range */}
        <div className='w-full relative'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Date Range
          </label>

          <Button
            variant={'outline'}
            className='w-full h-[56px] justify-between'
            onClick={() => setIsDateOpen(!isDateOpen)}
          >
            <span className='text-sm text-gray-600'>
              {getDateRangeDisplay()}
            </span>
            <Calendar className='w-5 h-5' />
          </Button>

          {isDateOpen && (
            <div className='absolute top-14 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-96 p-4'>
              <div className='flex justify-between items-center mb-4'>
                <h4 className='text-sm font-medium text-gray-700'>
                  Select Date Range
                </h4>
                <button
                  onClick={() => setIsDateOpen(false)}
                  className='text-red-400 hover:text-red-600'
                >
                  <X className='w-4 h-4' />
                </button>
              </div>

              <div className='grid grid-cols-2 gap-2 mb-4'>
                <div>
                  <label className='block text-xs text-gray-500 mb-1'>
                    From Date
                  </label>
                  <input
                    type='date'
                    value={localFilters.startDate}
                    onChange={(e) => updateFilter('startDate', e.target.value)}
                    className='w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none'
                  />
                </div>
                <div>
                  <label className='block text-xs text-gray-500 mb-1'>
                    To Date
                  </label>
                  <input
                    type='date'
                    value={localFilters.endDate}
                    onChange={(e) => updateFilter('endDate', e.target.value)}
                    min={localFilters.startDate}
                    className='w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none'
                  />
                </div>
              </div>

              <div className='flex gap-2'>
                <button
                  onClick={() =>
                    updateFilter('startDate', '') || updateFilter('endDate', '')
                  }
                  className='text-xs text-gray-500 hover:text-red-500'
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsDateOpen(false)}
                  className='text-xs text-blue-500 hover:text-blue-700 ml-auto'
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Status */}
        <div className='w-full'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Status
          </label>
          <div className='relative'>
            <select
              value={localFilters.status}
              onChange={(e) => updateFilter('status', e.target.value)}
              className='w-full h-[56px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white'
            >
              <option value='all'>All Status</option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
            </select>
            <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' />
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className='flex gap-6'>
        <Button onClick={handleReset} variant='outline' className='flex-1'>
          Reset
        </Button>
        <Button
          onClick={handleApply}
          className='flex-1 bg-[#34CCEB] hover:bg-[#2BB8D6]'
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterHistoryModal;
