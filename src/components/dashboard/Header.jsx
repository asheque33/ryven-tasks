import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { ChevronDown } from 'lucide-react';
import avatar from '../../assets/avatar.png';
import link2 from '../../assets/icons/link2.png';
import bell from '../../assets/icons/bell.svg';
const Header = () => {
  return (
    <header className='h-[96px] w-full bg-white border-b border-gray-200 px-10 py-5'>
      <div className='flex justify-between'>
        <h2 className='text-[32px] font-bold text-gray-900'>Services</h2>

        <div className='flex items-center  space-x-4'>
          <Button
            size='md'
            className='bg-cyan-500 hover:bg-cyan-600 text-white   !py-[19px] !px-[30px] h-full rounded-[10px] mr-2.5'
          >
            <span className=' text-[18px] font-semibold'>Visit Website</span>

            <img src={link2} alt='' />
          </Button>

          <div className='relative bg-[#34CCEB1A] border border-[#34CCEB1A] rounded-[28px]'>
            {/* <Bell className='w-6 h-6 text-gray-600' /> */}
            <img src={bell} alt='bell' className='w-[56px] h-[56px]' />
            <span className='absolute -top-1 right-0 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center'>
              3
            </span>
          </div>

          <div className='flex items-center space-x-2'>
            <img
              src={avatar}
              alt='avatar-profile'
              className='w-[56px] h-[56px] bg-cover'
            />
            <ChevronDown className='w-8 h-8 text-gray-600 flex-shrink-0' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
