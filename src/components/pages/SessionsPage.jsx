import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { MoreHorizontal } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Filter } from 'lucide-react';
import filter from '../../assets/icons/filter.svg';
import { MoreVertical } from 'lucide-react';

const SessionsPage = ({ data, getBadgeColor }) => {
  const [showActions, setShowActions] = useState(null);

  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-3xl font-semibold'>
          History of Advertisement (All Companies)
        </h3>
        <div className='flex gap-8'>
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
          <div className='relative'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer' />
            <Input
              placeholder='Search'
              className='pl-10 w-[376px] h-[56px] border-[1.5px] border-[#1118271A] rounded-[10px]'
            />
          </div>
        </div>
      </div>

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
            {data.map((item, index) => (
              <tr key={item.id} className='border-b hover:bg-gray-50'>
                <td className='p-4 text-sm'>
                  {String(index + 1).padStart(2, '0')}
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
                        <div className='flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer text-sm'>
                          <MessageCircle className='w-4 h-4 mr-2' />
                          Start Chat
                        </div>
                        <div className='flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer text-sm'>
                          <Eye className='w-4 h-4 mr-2' />
                          View Chat
                        </div>
                        <div className='flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer text-sm text-red-600'>
                          <Trash2 className='w-4 h-4 mr-2' />
                          Delete Chat
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='flex items-center justify-between p-4'>
          <Button size={'custom'} variant='outline'>
            <ChevronLeft className='w-4 h-4 mr-2' />
            Previous
          </Button>
          <div className='flex gap-2'>
            {[1, 2, 3, 4, '...', 8].map((page, index) => (
              <Button
                key={index}
                variant={page === 1 ? 'default' : 'outline'}
                size={'pagination'}
                className={
                  page === 1
                    ? 'bg-[#34CCEB] hover:bg-[#34CCEB]'
                    : 'bg-[#34CCEB1A] border border-[#34CCEB4D text-[#34CCEB]'
                }
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            size={'custom'}
            className='bg-[#34CCEB] hover:bg-[#34CCEB] flex-shrink-0 !px-[30px]'
          >
            Next
            <ChevronRight className='w-4 h-4 ml-2' />
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default SessionsPage;
