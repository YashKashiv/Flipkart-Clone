import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
  const slides = [
    {
      image: 'https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/8074e7b2f6d2bfea.jpg?q=20',
      title: 'Dell 27" Monitor',
      description: 'Just ₹8,099 | 1x Power Connector | 75 Hz',
    },
    {
      image: 'https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/96394e0900c8983c.jpg?q=20',
      title: 'Malaysia Airlines Offers',
      description: 'Hurry! Sale is Live',
    },
    {
      image: 'https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg?q=20',
      title: 'Dell UltraSharp Monitor',
      description: '₹18,999 | 99% sRGB | 4K UHD Display',
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})`, height: '300px' }}
            >
              <div className="absolute inset-0"></div>
              <div className="container mx-auto px-4 py-12 text-center relative z-10">
                <button className="mt-64 px-6 py-3 bg-white text-purple-600 rounded-lg shadow-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;