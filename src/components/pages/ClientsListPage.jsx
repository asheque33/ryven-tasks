import {
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageCircle,
  MoreVertical,
  Search,
  Trash2,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import SearchSection from '../Shared/Search/SearchSection';
import ClientsList from '../sessions/ClientsList';
import FilterClients from '../sessions/FilterClients';
import { sessionsData } from '@/data/sessionData';

const ClientsListPage = ({ getBadgeColor }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState(null);
  const [data, setData] = useState(sessionsData);

  const getFilteredData = () => {
    if (!data) return [];

    let result = data;

    // Search filter
    if (searchTerm && searchTerm.trim()) {
      result = result.filter(
        (item) =>
          item.marketer &&
          item.marketer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date filter
    if (dateFilter) {
      const day = dateFilter.getDate();
      const month = dateFilter.getMonth() + 1;
      const year = dateFilter.getFullYear();

      // Create target date string exactly like data format
      const targetDate = `${day.toString().padStart(2, '0')}/${month
        .toString()
        .padStart(2, '0')}/${year}`;

      result = result.filter((item) => item.date === targetDate);
    }

    return result;
  };

  const filteredData = getFilteredData();
  const handleDeleteClient = (clientId) => {
    const remainingData = filteredData.filter((item) => item.id !== clientId);
    setData(remainingData);
  };
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleApplyDateFilter = (filter) => {
    setDateFilter(filter.date);
  };

  const formatDateForDisplay = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day.toString().padStart(2, '0')}/${month
      .toString()
      .padStart(2, '0')}/${year}`;
  };

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-3xl font-semibold'>
          History of Advertisement (All Companies)
        </h3>
        <div className='flex gap-5'>
          <FilterClients onApplyDateFilter={handleApplyDateFilter} />
          <SearchSection
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onClearSearch={handleClearSearch}
          />
        </div>
      </div>

      {/* Active Filter Display */}
      {dateFilter && (
        <div className='flex items-center gap-2 mb-4'>
          <Badge variant='secondary' className='gap-1 pr-1'>
            <span>Date: {formatDateForDisplay(dateFilter)}</span>
            <Button
              variant='ghost'
              size='sm'
              className='h-auto p-0.5 hover:bg-transparent'
              onClick={() => setDateFilter(null)}
            >
              <X size={12} />
            </Button>
          </Badge>
        </div>
      )}

      {/* Results Summary */}
      {dateFilter && (
        <div className='mb-4'>
          <p className='text-sm text-gray-600'>
            Showing {filteredData.length} of {data.length} results
            {dateFilter &&
              ` (filtered by date: ${formatDateForDisplay(dateFilter)})`}
          </p>
        </div>
      )}

      <ClientsList
        data={filteredData}
        getBadgeColor={getBadgeColor}
        onDeleteClient={handleDeleteClient}
      />
    </div>
  );
};

export default ClientsListPage;
