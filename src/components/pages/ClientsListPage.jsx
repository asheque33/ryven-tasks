import {
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageCircle,
  MoreVertical,
  Search,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import filter from '../../assets/icons/filter.svg';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import SearchSection from '../Shared/Search/SearchSection';
import ClientsList from '../sessions/ClientsList';

const ClientsListPage = ({ data, getBadgeColor }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchedData = data.filter((item) =>
    item.marketer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-3xl font-semibold'>
          History of Advertisement (All Companies)
        </h3>
        <div className='flex gap-5'>
          <Button
            size={'custom'}
            variant={'outline'}
            className='text-[#34CCEB] hover:text-[#34CCEB]  !py-[19px] !px-[30px] h-full rounded-[10px] mr-2.5'
            style={{
              borderRadius: '10px',
              border: '1.5px solid rgba(52, 204, 235, 0.30)',
              background: 'rgba(52, 204, 235, 0.10)',
            }}
          >
            <span className=' text-[18px] font-semibold'>Filter</span>

            <img
              src={filter}
              alt='whatsapp'
              className='text-[#34CCEB] hover:text-[#34CCEB]'
            />
          </Button>
          <SearchSection
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onClearSearch={handleClearSearch}
          />
        </div>
      </div>

      <ClientsList data={searchedData} getBadgeColor={getBadgeColor} />
    </div>
  );
};
export default ClientsListPage;
