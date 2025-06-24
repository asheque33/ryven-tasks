import logo3 from '../assets/persons/p-2.png';
import logo2 from '../assets/persons/p-3.png';
import logo1 from '../assets/persons/p-1.png';
import logo4 from '../assets/persons/p-4.png';
const data = [
  {
    id: 1,
    date: '01/10/2024',
    marketer: 'Wade Warren',
    avatar: logo1,
    time: '02:02 AM',
    duration: '1 Hour',
    status: 'Active',
  },
  {
    id: 2,
    date: '15/11/2024',
    marketer: 'Esther Howard',
    avatar: logo2,
    time: '05:51 AM',
    duration: '30 Minutes',
    status: 'Closed',
  },
  {
    id: 3,
    date: '15/11/2024',
    marketer: 'Cody Fisher',
    avatar: logo3,
    time: '04:02 AM',
    duration: '2 Hours',
    status: 'Active',
  },
  {
    id: 4,
    date: '10/03/2023',
    marketer: 'Darrell Steward',
    avatar: logo4,
    time: '06:41 PM',
    duration: '6 Hours',
    status: 'Closed',
  },
];
export const sessionsData = Array.from({ length: 80 }, (_, index) => {
  const item = data[index % data.length];
  return {
    ...item,
    id: index + 1,
  };
});
