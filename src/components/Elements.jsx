import React from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Elements = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination,Autoplay],
    loop: true,
    speed:'1000',
    autoplay:{
      delay:'2000'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  return (
    <div className='w-full h-fit pt-5 bg-zinc-900 relative text-white pl-[50px] flex lg:flex-row flex-col'>
      <div className='flex flex-col pr-[10px]'>
        <h1 className='text-[50px] sm:text-[65px] font-bold tracking-wide'>ELEMENTS</h1>
        <h2 className='text-[25px] font-bold mt-[50px]'>Event Timetable</h2>
        <p className='text-white/[0.6] text-[18px]'>Comes with the practical Timetable element ideal for displaying neat overviews of your classes.</p>
        <h2 className='text-[25px] font-bold mt-[50px]'>BMI Calculator</h2>
        <p className='text-white/[0.6] text-[18px]'>Stronger lets you place a handy body mass index calculator element anywhere on your site pages.</p>

        <h3 className='text-[14px] font-bold mt-[30px]'>VIEW MORE</h3>
        <div className='h-[5px] w-[5px] border-yellow-200 border'>&nbsp;</div>
      </div>
      <div class="swiper flex w-full lg:max-w-[50%]" data-swiper-autoplay="2000">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src={require('../assets/slider-1.png')} alt='slider-1'/>
          </div>
          <div class="swiper-slide">
          <img src={require('../assets/slider-2.png')} alt='slider-2'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elements