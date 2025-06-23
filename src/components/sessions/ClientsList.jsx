import {
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageCircle,
  MoreVertical,
  Search,
  Trash2,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { useEffect, useState } from 'react';
import NoDataFound from '../noItem/NoDataFound';
import { Upload } from 'lucide-react';
import { Edit } from 'lucide-react';

const ClientsList = ({ data, getBadgeColor, onDeleteClient }) => {
  const [showActions, setShowActions] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Reset page when data changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(1);
  }, [data.length]);

  // Pagination calculations
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  // Bulletproof simple logic
  const getVisiblePages = () => {
    if (totalPages <= 5) {
      return [1, 2, 3, 4, 5].slice(0, totalPages);
    }

    // Always show these patterns based on current page
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      '...',
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      '...',
      totalPages,
    ];
  };
  return (
    <Card className='py-0'>
      <table className='w-full'>
        <thead className='bg-[#34CCEB33]'>
          <tr>
            <th className='p-4 text-left text-sm font-medium text-gray-600'>
              SL
            </th>
            <th className='p-4 text-left text-sm font-medium text-gray-600'>
              Start Date
            </th>
            <th className='p-4 text-left text-sm font-medium text-gray-600'>
              Marketer Name
            </th>
            <th className='p-4 text-left text-sm font-medium text-gray-600'>
              Time
            </th>
            <th className='p-4 text-left text-sm font-medium text-gray-600'>
              Duration
            </th>
            <th className='p-4 text-left text-sm font-medium text-gray-600'>
              Status
            </th>
            <th className='p-4 text-left text-sm font-medium text-gray-600'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((item, index) => (
              <tr key={item.id} className='border-b hover:bg-gray-50'>
                <td className='p-4 text-sm'>
                  {String(startIndex + index + 1).padStart(2, '0')}
                </td>
                <td className='p-4'>{item.date}</td>
                <td className='p-4'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-[36px] h-[36px] rounded-full  flex items-center justify-center text-white text-[16px]'>
                      <img src={item.avatar} alt='logo' />
                    </div>
                    <span>{item.marketer}</span>
                  </div>
                </td>
                <td className='p-4'>{item.time}</td>
                <td className='p-4'>{item.duration}</td>
                <td className='p-4'>
                  <Badge
                    className={`${getBadgeColor(
                      item.status
                    )} border-0 rounded-[14.5px] py-[5px] px-[15px] flex items-center gap-2`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        item.status === 'Active'
                          ? 'bg-[#34CCEB]'
                          : 'bg-[#FF4C4C]'
                      }`}
                    ></span>
                    {item.status}
                  </Badge>
                </td>
                <td className='p-4'>
                  <div className='relative'>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() =>
                        setShowActions(showActions === item.id ? null : item.id)
                      }
                    >
                      <MoreVertical className='w-4 h-4' />
                    </Button>
                    {showActions === item.id && (
                      <div className='absolute right-0 top-8 bg-white border rounded-lg shadow-lg p-2 z-10 min-w-32'>
                        <div
                          onClick={() => setShowActions(null)}
                          className='flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer text-sm'
                        >
                          <Edit className='w-4 h-4 mr-2' />
                          Update
                        </div>

                        <div
                          onClick={() => {
                            onDeleteClient(item.id);
                            setShowActions(null);
                          }}
                          className='flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer text-sm text-red-600'
                        >
                          <Trash2 className='w-4 h-4 mr-2' />
                          Delete
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className='border-b hover:bg-gray-50'>
              <td colSpan='7' className='p-4 text-center text-sm text-gray-500'>
                <div className='min-h-[60dvh] flex items-center justify-center'>
                  <NoDataFound />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {data.length > itemsPerPage && (
        <div className='flex items-center justify-between p-4'>
          <Button
            variant='outline'
            size={'custom'}
            onClick={() =>
              setCurrentPage((prev) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return Math.max(1, prev - 1);
              })
            }
            disabled={currentPage === 1}
            className='border-[#34CCEB] text-[#34CCEB] flex-shrink-0'
          >
            <ChevronLeft className='w-5 h-5 mr-2' />
            Previous
          </Button>

          <div className='flex gap-2.5'>
            {getVisiblePages().map((page, index) =>
              page === '...' ? (
                <span
                  key={`ellipsis-${index}`}
                  className='px-3 py-2 text-gray-500'
                >
                  ...
                </span>
              ) : (
                <Button
                  key={`page-${page}`}
                  size={'pagination'}
                  variant={page === currentPage ? 'default' : 'outline'}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={
                    page === currentPage
                      ? 'bg-[#34CCEB] hover:bg-[#34CCEB] text-white'
                      : 'bg-[#34CCEB1A] hover:text-[#34CCEB] border border-[#34CCEB4D text-[#34CCEB]'
                  }
                >
                  {page}
                </Button>
              )
            )}
          </div>

          <Button
            size={'custom'}
            onClick={() =>
              setCurrentPage((prev) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return Math.min(totalPages, prev + 1);
              })
            }
            disabled={currentPage === totalPages}
            className='bg-[#34CCEB] hover:bg-[#34CCEB] flex-shrink-0 !px-[30px]'
          >
            Next
            <ChevronRight className='w-5 h-5 ml-2' />
          </Button>
        </div>
      )}

      {/* Entry count */}
      {data.length > 0 && (
        <div className='px-4 pb-3 text-sm text-gray-600'>
          Showing {startIndex + 1}-
          {Math.min(startIndex + itemsPerPage, data.length)} of {data.length}
        </div>
      )}
    </Card>
  );
};

export default ClientsList;
