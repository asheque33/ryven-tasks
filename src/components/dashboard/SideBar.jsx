import { navigationItems } from '@/constants/navItem';
import { ChevronRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo.png';

const SideBar = ({ currentPage, onSetCurrentPage }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(true);
  return (
    <div className='w-full max-w-[346px] bg-[#111827] text-white'>
      <div className='p-6 border-b border-slate-700'>
        <div className='py-4 px-2'>
          <img src={logo} alt='logo' />
        </div>
      </div>

      <nav className='py-4 px-2 space-y-2'>
        {navigationItems.map((item, index) => (
          <div key={index}>
            <div
              style={{ color: 'rgba(255, 255, 255, 0.60)' }}
              className={`flex items-center justify-between p-3  cursor-pointer transition-colors border-b rounded-b-xl border-slate-600 h-14 text-[18px] font-medium ${
                item.active ? 'bg-slate-700 text-white' : 'hover:bg-slate-700'
              }`}
            >
              <div className='flex items-center space-x-3'>
                <item.icon className='w-5 h-5' />
                <span className='text-sm'>{item.title}</span>
              </div>
              {item.items && (
                <button onClick={() => setIsServicesOpen(!isServicesOpen)}>
                  {isServicesOpen ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                </button>
              )}
            </div>

            {item.items && isServicesOpen && (
              <div className='ml-6 mt-2 space-y-1 '>
                {item.items.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    style={{ color: 'rgba(255, 255, 255, 0.60)' }}
                    className={`p-2 text-sm cursor-pointer transition-colors border-b rounded-md border-slate-600 h-10 text-[14px] font-medium ${
                      currentPage === subItem.id
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-slate-700'
                    }`}
                    onClick={() => onSetCurrentPage(subItem.id)}
                  >
                    {subItem.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
