import React from 'react';
import whatsapp from '../../assets/icons/whatsapp.png';
import { Button } from '../ui/button';
import { Filter } from 'lucide-react';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import filter from '../../assets/icons/filter.png';
const HistoryPage = ({ data, getBadgeColor }) => {
  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-3xl font-semibold'>
          History of Advertisement (All Companies)
        </h3>
        <div className='flex gap-8'>
          <img src={filter} alt='' />
          <div className='relative'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <Input
              placeholder='Search'
              className='pl-10 w-[376px] h-[56px] border-[1.5px] border-[#1118271A] rounded-[10px]'
            />
          </div>

          <img src={whatsapp} alt='whatsapp' />
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
                Company Name
              </th>
              <th className='p-4 text-left text-sm font-medium text-gray-600'>
                Ad Status
              </th>
              <th className='p-4 text-left text-sm font-medium text-gray-600'>
                Impressions
              </th>
              <th className='p-4 text-left text-sm font-medium text-gray-600'>
                Click
              </th>
              <th className='p-4 text-left text-sm font-medium text-gray-600'>
                CTR
              </th>
              <th className='p-4 text-left text-sm font-medium text-gray-600'>
                Profile Visit
              </th>
              <th className='p-4 text-left text-sm font-medium text-gray-600'>
                Start Date
              </th>
              <th className='p-4 text-left text-sm font-medium text-gray-600'>
                End Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className='border-b hover:bg-gray-50'>
                <td className='p-4 text-sm'>
                  {String(index + 1).padStart(2, '0')}
                </td>
                <td className='p-4'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-[36px] h-[36px] rounded-full  flex items-center justify-center text-white text-[16px]'>
                      <img src={item.logo} alt='logo' />
                    </div>
                    <span>{item.company}</span>
                  </div>
                </td>
                <td className=''>
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
                    <span
                      className={`text-[16px] ${
                        item.status === 'Active'
                          ? 'text-[#34CCEB]'
                          : 'text-[#FF4C4C]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </Badge>
                </td>
                <td className='p-4'>{item.impressions}</td>
                <td className='p-4'>{item.clicks}</td>
                <td className='p-4'>{item.ctr}</td>
                <td className='p-4'>{item.visits}</td>
                <td className='p-4'>{item.startDate}</td>
                <td className='p-4'>{item.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='flex items-center justify-between p-4'>
          <Button variant='outline'>
            <ChevronLeft className='w-4 h-4 mr-2' />
            Previous
          </Button>
          <div className='flex gap-2'>
            {[1, 2, 3, 4, '...', 8].map((page, index) => (
              <Button
                key={index}
                variant={page === 1 ? 'default' : 'outline'}
                size='sm'
                className={page === 1 ? 'bg-cyan-500 hover:bg-cyan-600' : ''}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button className='bg-cyan-500 hover:bg-cyan-600'>
            Next
            <ChevronRight className='w-4 h-4 ml-2' />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HistoryPage;
