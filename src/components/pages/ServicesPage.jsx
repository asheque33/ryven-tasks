import React from 'react';
import { Button } from '../ui/button';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Clock } from 'lucide-react';
import { History } from 'lucide-react';
import { services } from '@/constants/servicesData';
import verified from '../../assets/icons/verified.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import link from '../../assets/icons/link.png';
import stars from '../../assets/icons/stars.png';
const ServicesPage = ({ getBadgeColor }) => {
  return (
    <div>
      <div className='mb-8'>
        <div className='flex items-center justify-between mb-4'>
          <div>
            <h3 className='text-3xl font-semibold mb-[22px]'>
              Advertise Your Company
            </h3>
            <p
              style={{ color: 'rgba(17, 24, 39, 0.80)' }}
              className='text-[20px]'
            >
              Boost your company's visibility by showing it at the top of the
              search results. Track <br />
              performance with detailed analytics.
            </p>
          </div>
          <div className='flex gap-5 '>
            <img src={whatsapp} alt='whatsapp' />
            <img src={link} alt='link' />
          </div>
        </div>
      </div>

      <div className='space-y-[30px] '>
        {services.map((service) => (
          <Card key={service.id} className='h-[260px] p-[30px]'>
            <CardContent className=''>
              <div className='flex items-start justify-between'>
                <div className='flex items-start space-x-4'>
                  <div className='w-[200px] h-[200px] rounded-full  flex items-center justify-center text-white text-2xl'>
                    <img src={service.logo} alt='logo' />
                  </div>

                  <div className='flex-1'>
                    <div className='flex gap-2 mb-3'>
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

                    <h4 className='text-3xl font-semibold mb-3'>
                      {service.name}
                    </h4>

                    <div className='flex items-center gap-4 text-xl text-gray-600 mb-3'>
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
                      {/* {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-8 h-8 fill-yellow-400 text-yellow-400'
                        />
                      ))} */}
                      <img src={stars} alt='' />
                      <span className='ml-2 text-3xl font-medium'>
                        {service.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col items-start  justify-center my-auto text-right space-y-3 text-sm text-gray-600 text-[20px] leading-[30px]'>
                  <div className='flex items-center py-4 justify-end'>
                    <MapPin className='w-4 h-4 mr-2' />
                    <span>{service.address}</span>
                  </div>
                  <div className='flex items-center justify-end'>
                    <Mail className='w-4 h-4 mr-2' />
                    <span>{service.email}</span>
                  </div>
                  <div className='flex items-center justify-end'>
                    <Phone className='w-4 h-4 mr-2' />
                    <span>{service.phone}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
