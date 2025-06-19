import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Clock } from 'lucide-react';
import { Star } from 'lucide-react';
import { Switch } from '../ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Calendar } from 'lucide-react';
import chart from '../../assets/chart.png';
import verified from '../../assets/icons/verified.png';
import link2 from '../../assets/icons/link2.png';
import location from '../../assets/icons/location.png';
import email from '../../assets/icons/email.png';
import phone from '../../assets/icons/phone.png';
import switchIcon from '../../assets/icons/switch.png';
import AdsTypeSelect from '../ui/adsTypeSelect';
import whatsapp from '../../assets/icons/whatsapp.png';
import PerformanceChart from '../chart/PerformanceChart';
import AdvertisementDuration from '../advertisement/AdvertisementDuration';

const AdvertisementPage = ({ service, getBadgeColor }) => {
  return (
    <div>
      <div className='flex items-start justify-between mb-[30px]'>
        <div>
          <h3 className='text-3xl font-semibold mb-[22px]'>
            Advertise Your Company
          </h3>
          <p
            style={{ color: 'rgba(17, 24, 39, 0.80)' }}
            className='text-[20px]'
          >
            Boost your company's visibility by showing it at the top of the
            search results. Track performance with detailed analytics.
          </p>
        </div>
        <Button
          size={'custom'}
          variant={'outline'}
          className=' text-[#34CCEB] hover:text-[#34CCEB] !py-[19px] !px-[30px] h-full rounded-[10px] mr-2.5'
        >
          <span className=' text-[18px] font-semibold'>Schedule A Meeting</span>

          <img
            src={whatsapp}
            alt='whatsapp'
            className='text-[#34CCEB] hover:text-[#34CCEB]'
          />
        </Button>
      </div>

      <div>
        <Card className='h-[339px] p-[30px] rounded-[20px]'>
          <CardContent className=''>
            <div className='flex items-start justify-between'>
              <div className='flex items-center space-x-4'>
                <div className='w-[200px] h-[200px] rounded-[200px]  flex items-center justify-center text-white text-2xl'>
                  <img src={service.logo} alt='logo' />
                </div>

                <div className='flex-1'>
                  <div className='flex gap-2 mb-4'>
                    {service.badges.map((badge, index) => (
                      <Badge
                        key={index}
                        className={`${getBadgeColor(
                          badge
                        )} border-0 leading-8 px-3`}
                      >
                        {badge.toLowerCase() === 'verified' && (
                          <img src={verified} alt='verified' />
                        )}{' '}
                        <span className='text-base'>{badge}</span>
                      </Badge>
                    ))}
                  </div>

                  <h4 className='text-3xl font-outfit font-semibold mb-4 '>
                    {service.name}
                  </h4>

                  <div className='flex items-center gap-4 text-xl text-gray-600 mb-4'>
                    <span>Reviews {service.reviews.toLocaleString()}</span>
                    <span>•</span>
                    <span>{service.excellence}</span>
                    <span>•</span>
                    <div className='flex items-center'>
                      <Clock className='w-4 h-4 mr-1' />
                      <span>Opening Hours: {service.hours}</span>
                    </div>
                  </div>

                  <div className='flex items-center space-x-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-8 h-8 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                    <span className='ml-2 text-3xl font-medium'>
                      {service.rating}
                    </span>
                  </div>
                  <Button className='bg-cyan-500 hover:bg-cyan-600 text-white   !py-[19px] !px-[30px] h-full rounded-[10px]  mt-[30px]'>
                    <span className=' text-[18px] font-semibold'>
                      Upgrade Advertisement
                    </span>

                    <img src={link2} alt='' />
                  </Button>
                </div>
              </div>

              <div className='flex flex-col items-start  justify-center my-auto text-right  text-sm text-gray-600 text-[20px] leading-[30px] space-y-3.5'>
                <div className='flex items-center justify-end'>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#34CCEB4D] border border-[#34CCEB] mr-2'>
                    <img src={location} alt='' className='w-4 h-4' />
                  </div>
                  <span className='text-[20px]'>{service.address}</span>
                </div>
                <div className='flex items-center justify-end'>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#34CCEB4D] border border-[#34CCEB] mr-2'>
                    <img src={email} alt='' className='w-4 h-4' />
                  </div>
                  <span className='text-[20px]'>{service.email}</span>
                </div>
                <div className='flex items-center justify-end'>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#34CCEB4D] border border-[#34CCEB] mr-2'>
                    <img src={phone} alt='phone' className='w-4 h-4' />
                  </div>
                  <span className='text-[20px]'>{service.phone}</span>
                </div>
                <div className='flex items-center justify-end'>
                  <div className='mr-5'>
                    <img
                      src={switchIcon}
                      alt='phone'
                      className='w-[60px] h-[32px]'
                    />
                  </div>
                  <span className='text-[20px] font-medium '>
                    Turn On Advertisement
                  </span>
                </div>
                <div>
                  <AdsTypeSelect />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <AdvertisementDuration />
      {/* performance-section */}
      {/* <div className='mt-6 w-full'>
        <Card className=' border-none shadow-none bg-transparent'>
          <CardContent className='w-full px-0 border-none shadow-none'>
            <div className='relative w-full'>
              <img src={chart} alt='chart' className='w-full' />
              <div className='absolute top-6 right-6 flex gap-8 text-sm'>
                <div className='text-center'>
                  <div className='flex items-center gap-2'>
                    <div className='w-[9px] h-[9px] rounded-full bg-[#1DBF73]'></div>
                    <span className='text-xs font-medium'>Impression</span>
                  </div>
                  <div className='text-[22px] font-semibold mt-0.5'>45,200</div>
                </div>
                <div className='text-center'>
                  <div className='flex items-center gap-2'>
                    <div className='w-[9px] h-[9px] rounded-full bg-[#4592FF]'></div>
                    <span className='text-xs font-medium'>Clicks</span>
                  </div>
                  <div className='text-[22px] font-semibold mt-0.5'>5,200</div>
                </div>
                <div className='text-center'>
                  <div className='flex items-center gap-2'>
                    <div className='w-[9px] h-[9px] rounded-full bg-[#6F00FF]'></div>
                    <span className='text-xs font-medium'>
                      Click through rate
                    </span>
                  </div>
                  <div className='text-[22px] font-semibold mt-0.5'>8%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}
      <PerformanceChart />
    </div>
  );
};

export default AdvertisementPage;
