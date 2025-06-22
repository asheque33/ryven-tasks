// HistoryPage.jsx - Minimized Production Version

import { Button } from '../ui/button';
import HistoryLists from '../history/HistoryLists';
import whatsapp from '../../assets/icons/whatsapp.png';
import FilterHistory from '../history/FilterHistory';
import SearchHistory from '../history/SearchHistory';
import { useMemo, useState } from 'react';

const HistoryPage = ({ data, getBadgeColor }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    status: 'all',
  });

  // Parse DD/MM/YYYY to Date object
  const parseDate = (dateString) => {
    if (!dateString) return null;
    if (dateString.includes('/')) {
      const [day, month, year] = dateString.split('/');
      return new Date(
        `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      );
    }
    return new Date(dateString);
  };

  const filteredData = useMemo(() => {
    let result = data;

    // Search
    if (searchTerm.trim()) {
      result = result.filter((item) =>
        item.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status
    if (filters.status !== 'all') {
      result = result.filter(
        (item) => item.status.toLowerCase() === filters.status.toLowerCase()
      );
    }

    // Date range
    if (filters.startDate || filters.endDate) {
      const filterStart = filters.startDate
        ? new Date(filters.startDate)
        : null;
      const filterEnd = filters.endDate ? new Date(filters.endDate) : null;

      result = result.filter((item) => {
        const itemStart = parseDate(item.startDate);
        const itemEnd = parseDate(item.endDate);

        if (!itemStart || !itemEnd) return false;

        if (filterStart && filterEnd) {
          return itemStart >= filterStart && itemEnd <= filterEnd;
        } else if (filterStart) {
          return itemStart >= filterStart;
        } else if (filterEnd) {
          return itemEnd <= filterEnd;
        }
        return true;
      });
    }

    return result;
  }, [data, searchTerm, filters]);

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-[30px] leading-none font-outfit font-semibold'>
          History of Advertisement(All Companies)
        </h3>
        <div className='flex gap-5'>
          <FilterHistory filters={filters} onFiltersChange={setFilters} />
          <SearchHistory
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onClearSearch={() => setSearchTerm('')}
          />
          <Button
            size={'custom'}
            variant={'outline'}
            className=' text-[#34CCEB] hover:text-[#34CCEB] border-[1.5px] border-[#34CCEB] !py-[14px] !px-[30px] h-full rounded-[10px] ml-2.5'
          >
            <span className=' text-[18px] font-semibold'>
              Schedule A Meeting
            </span>
            <img
              src={whatsapp}
              alt='whatsapp'
              className='text-[#34CCEB] hover:text-[#34CCEB]'
            />
          </Button>
        </div>
      </div>

      <HistoryLists data={filteredData} getBadgeColor={getBadgeColor} />
    </div>
  );
};

export default HistoryPage;
