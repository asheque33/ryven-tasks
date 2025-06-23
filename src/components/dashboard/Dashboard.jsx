import { historyData } from '@/data/historyData';
import { services } from '@/data/servicesData';
import { sessionsData } from '@/data/sessionData';
import { useLocation, useNavigate } from 'react-router-dom';
import AdvertisementPage from '../pages/AdvertisementPage';
import CalendarPage from '../pages/CalendarPage';
import ClientsListPage from '../pages/ClientsListPage';
import HistoryPage from '../pages/HistoryPage';
import ServicesPage from '../pages/ServicesPage';
import Header from './Header';
import SideBar from './SideBar';

const getBadgeColor = (badge) => {
  const colors = {
    Verified: 'bg-green-100 text-green-800',
    Approved: 'bg-blue-100 text-blue-800',
    Local: 'bg-yellow-100 text-yellow-800',
    Pending: 'bg-orange-100 text-orange-800',
    Urban: 'bg-green-100 text-green-800',
    National: 'bg-blue-100 text-blue-800',
    Active: 'bg-green-100 text-green-800',
    Inactive: 'bg-red-100 text-red-800',
    Closed: 'bg-red-100 text-red-800',
  };
  return colors[badge] || 'bg-gray-100 text-gray-800';
};
const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'services';

  const setCurrentPage = (page) => navigate(`/${page}`);
  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <ServicesPage services={services} getBadgeColor={getBadgeColor} />
        );
      case 'advertisement':
        return (
          <AdvertisementPage
            service={services[0]}
            getBadgeColor={getBadgeColor}
          />
        );
      case 'history':
        return <HistoryPage data={historyData} getBadgeColor={getBadgeColor} />;
      case 'calendar':
        return <CalendarPage />;
      case 'sessions':
        return (
          <ClientsListPage data={sessionsData} getBadgeColor={getBadgeColor} />
        );
      default:
        return (
          <ServicesPage services={services} getBadgeColor={getBadgeColor} />
        );
    }
  };
  return (
    <div className='flex min-h-screen w-full  bg-gray-50'>
      {/* Sidebar */}
      <SideBar currentPage={currentPage} onSetCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <Header />

        {/* Content */}
        <main className='flex-1 p-10 w-full'>{renderPage()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
