import { Button } from '../ui/button';
import { Filter } from 'lucide-react';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import HistoryLists from '../history/HistoryLists';
import whatsapp from '../../assets/icons/whatsapp.png';
import FilterHistory from '../history/FilterHistory';
import SearchHistory from '../history/SearchHistory';
import { useMemo } from 'react';
import { useState } from 'react';
const HistoryPage = ({ data, getBadgeColor }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    return data.filter((item) =>
      item.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-[30px] leading-none font-outfit font-semibold'>
          History of Advertisement(All Companies)
        </h3>
        <div className='flex gap-5'>
          <FilterHistory />
          <SearchHistory
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onClearSearch={clearSearch}
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
