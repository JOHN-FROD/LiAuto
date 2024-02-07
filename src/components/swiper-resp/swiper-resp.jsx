import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination} from 'swiper/modules'
import {useEffect, useState} from "react";
import Aos from 'aos'
import { ImageUI, VideoUI } from '..';
// video prop

const SwiperResp = ({carousel, orderTopText, slidesPerView, }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0)
  const [resizeWidth, setResizeWidth] = useState(typeof window !== 'undefined' && window.innerWidth <= 640)
  const [isRefresh, setIsRefresh] = useState(false)

  const handlePaginationClick = (index) => {

    if (swiper !== null && resizeWidth) {
        swiper.slideTo(index, 500);
    }
  };

  const handlePaginationHover = (index) => {

      if (swiper !== null && !resizeWidth) {
          swiper.slideTo(index, 500);
      }
  };

  const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex)
  };


  useEffect(() => {
      Aos.init({
          duration: 500,
          once: true
      });

  }, []);

  useEffect(() => {
    const handleResize = () => {
        const isMobile = window.innerWidth <= 640;
        setResizeWidth(isMobile)
        setIsRefresh(true)
    };
    window.addEventListener('resize', handleResize);


    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
      if (isRefresh) {
          window.location.reload()
      }
  }, [resizeWidth]);




  return (
    <div className='relative md:hidden'>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        onSnapIndexChange={(swiperCore) => handleSlideChange(swiperCore)}
        className={'h-full mySwiper'}
        centeredSlides
        spaceBetween={10}
        slidesPerView={slidesPerView}
        speed={500}
        // effect={resizeWidth ? 'slide' : 'fade'}
        autoplay={{
            delay: 2500
        }}
        // modules={[EffectFade]}
        >
            {
                carousel.map((slide, ind) => (
                    <SwiperSlide key={ind} >
                      <div className={`w-full h-full relative flex flex-col pt-5`}>

                        <div className={` ${orderTopText ? 'order-2 rounded-b-lg rounded-t-none overflow-hidden' : "rounded-xl overflow-hidden"} w-full aspect-[4/2]  h-full relative sm:mb-0 py-[5vw] rounded-xl`}>
                         
                        <ImageUI alt={slide?.title} src={slide?.mediaRes}
                                                 imgStyle={'object-cover object-center block md:hidden'}/>
                          
                            {/* {
                                video
                                    ?
                                    <VideoUI media={slide?.media}/>
                                    :
                                    <>
                                        <ImageUI alt={slide?.title} src={slide?.media}
                                                 imgStyle={'object-cover object-center md:block hidden'}/>
                                        <ImageUI alt={slide?.title} src={slide?.mediaRes}
                                                 imgStyle={'object-cover object-center block md:hidden'}/>
                                    </>
                            } */}
                        </div>
                        <div className={` ${orderTopText ? 'order-1 text-start pt-5 pb-10 px-5 bg-white' : 'pb-12 pt-6 text-center'}`}>
                            <h3 className={`${orderTopText ? "text-base" : "text-xs"}  font-medium text-[#191919] mb-[2vw]`}>
                                {slide?.title}
                            </h3>
                            <p className={`${orderTopText ? "text-sm" : " text-xs"} text-darkText`}>{slide?.text}</p>
                        </div>
                      </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
  )
}

export default SwiperResp