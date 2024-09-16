import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={2}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/right.webp" alt='Una mesa con dos sillas y en la mesa
          una flor en una maseta' 
          loading='lazy'/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/img/left.webp" 
          alt='Cafe con cosas de color blanco'
          loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/center.webp" 
          alt='Un cafe con un dibijo de rosa'
          loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/right2.webp" 
          alt='Un restaurante con la iluminación del sol'
          loading='lazy'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/right.webp" 
          alt='Una mesa con dos sillas y en la mesa
          una flor en una maseta'
          loading='lazy'/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
