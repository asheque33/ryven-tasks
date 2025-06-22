import logo1 from '../assets/design.png';
import logo2 from '../assets/energy.png';
import logo3 from '../assets/smart-it.png';

const data = [
  {
    id: 1,
    company: 'Dutch Design Studio',
    logo: logo1,
    status: 'Inactive',
    impressions: '15,230',
    clicks: '15,230',
    ctr: '8.1%',
    visits: '15,230',
    startDate: '01/10/2024',
    endDate: '01/10/2025',
  },
  {
    id: 2,
    company: 'Green Energy Solutions',
    logo: logo2,
    status: 'Active',
    impressions: '20,490',
    clicks: '20,490',
    ctr: '9%',
    visits: '20,490',
    startDate: '15/11/2024',
    endDate: '15/11/2025',
  },
  {
    id: 3,
    company: 'Smart IT Services',
    logo: logo3,
    status: 'Active',
    impressions: '30,457',
    clicks: '30,457',
    ctr: '5%',
    visits: '30,457',
    startDate: '15/11/2024',
    endDate: '01/08/2025',
  },
];
export const historyData = Array.from({ length: 300 }, (_, index) => {
  const item = data[index % data.length];
  return {
    ...item,
    id: index + 1,
  };
});
