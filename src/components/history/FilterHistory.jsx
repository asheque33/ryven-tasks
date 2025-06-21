import filter from '../../assets/icons/filter.svg';
import { Button } from '../ui/button';

const FilterHistory = () => {
  return (
    <Button
      size={'custom'}
      variant={'outline'}
      className='text-[#34CCEB] hover:text-[#34CCEB] !py-[14px] !px-[30px] h-full rounded-[10px] ml-2.5'
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
  );
};

export default FilterHistory;
