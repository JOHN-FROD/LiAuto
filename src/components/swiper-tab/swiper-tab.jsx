import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from "..";
import { Navigation, Thumbs,FreeMode } from 'swiper/modules';
import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos'
import styles from './swiper-tab.module.css'

const SwiperTab = ({ title, lists }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    Aos.init({
        duration: 500,
        once: true
    });

}, []);
  return (
    <div className='py-10 md:py-20 lg:py-32  bg-[#f5f5f5]'>
      <div className="container section-item-space container-content">
        <SectionTitle title={title} />
        <div className="w-full" data-aos='fade-up'>
          <Swiper
            loop={false}
            spaceBetween={0}
            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}          
            modules={[FreeMode,  Thumbs]}
            className="mySwiperSlides w-full h-full rounded-2xl overflow-hidden "
          >
            {
              lists?.map(slide => (
               <SwiperSlide className='w-full text-white pb-5 rounded-b-xl bg-white md:bg-gradient-to-b from-black to-[#353535] rounded-t-2xl md:rounded-2xl  md:p-10 overflow-hidden min-h-screen '>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div>
                  <div className='bg-gradient-to-b from-black to-[#2f2317] md:bg-none p-5 w-full flex flex-col items-center lg:items-start lg:w-fit'>
                    <p className={`text-xl bg-gradient-to-r bg-clip-text text-transparent ${slide.isGradient ? 'from-[#cfa574]   to-[#fdf7f1] ' : 'from-[#919191] to-white'}`} >{slide.name}</p>
                    <h2 className={` text-[55px] bg-gradient-to-r bg-clip-text text-transparent  ${slide.isGradient ? 'from-[#cfa574]   to-[#fdf7f1] ' : 'from-[#919191] to-white'}  `}>{slide.title}</h2>
                  </div>
                  <p className='text-darkText lg:w-[90%] xl:w-[80%] text-sm p-2 text-justify md:text-white md:text-base'>{slide.text}</p>
                </div>
                <div className='p-2 xs:p-5 bg-white  md:bg-transparent md:text-currentWhiteText  text-darkText grid grid-cols-2 gap-x-1 gap-y-4 md:p-0'>
                  {
                    slide.options.map(item => (
                      <div key={item.title} className='md:space-y-1'>
                        <p className='text-sm leading-4 lg:text-base'>{item.title}</p>
                        <p className='text-black md:text-white text-lg lg:text-xl'>{item.text}</p>
                      </div>
                    ))
                  }
                </div>
                </div>
               </SwiperSlide>
  
              ))
            }
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={false}
            breakpoints={{
              320: {
                slidesPerView: 2.1,
              },
              768: {
                slidesPerView: 3.4,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={10}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]} 
            className={`mySwiperTab w-full border-b  ${styles.mySwiperTab}`}
          >
              {
                lists?.map(name => (
                  <SwiperSlide className={`md:text-xl cursor-pointer text-[#999] flex flex-col items-center hover:text-black  `}>
                    <span className='w-fit text-center'>
                      {name.allName}
                    </span>
                  </SwiperSlide>
                ))
              }
          </Swiper>
  
        </div>
      </div>
    </div>
  );
};

export default SwiperTab;
