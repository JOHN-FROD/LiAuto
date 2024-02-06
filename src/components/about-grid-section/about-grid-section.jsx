import React from 'react'
import { ImageUI } from '..'
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination} from 'swiper/modules'
import {useEffect, useState} from "react";
import Slide from "@/components/swiper-section/Slide";
import Aos from 'aos'

const AboutGridSection = ({carousel, row1card1, row1title1, row1subtitle1, row1card2, row1card3, row1subtitle2, row1title2, row2card1, row2title1, row2subtitle1, row2card2, row3card1, row3card2, row3title1, row3subtitle1, row3card3 }) => {
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



  useEffect(() => {
  carousel?.map(item => console.log(item))
  } , [])

  return (
    <>
      <div className='max-md:hidden grid grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <div className='relative rounded-xl overflow-hidden w-full h-[160px]'>
              <ImageUI src={row1card1} />
            </div>
            <div className='h-[160px] w-full p-3 bg-[#E6F1F0] rounded-xl flex flex-col items-center justify-center gap-5'>
              <h3 className='text-sm text-[#666666] text-center'>{row1title1}</h3>
              <p className='text-xs text-[#999999]'>{row1subtitle1}</p>
            </div>
          </div>
          <div className='relative rounded-xl overflow-hidden w-full h-[330px]'>
            <ImageUI src={row1card2} />
          </div>
          <div className='flex gap-5'>
            <div className='h-[160px] w-full p-3 bg-[#E6F1F0] rounded-xl flex flex-col items-center justify-center gap-5'>
              <h3 className='text-sm text-[#666666] text-center'>{row1title2}</h3>
              <p className='text-xs text-[#999999]'>{row1subtitle2}</p>
            </div>
            <div className='relative rounded-xl w-full overflow-hidden'>
              <ImageUI src={row1card3} />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='relative rounded-xl overflow-hidden w-full min-h-[250px]'>
            <ImageUI src={row2card1} />
          </div>
          <div className='min-h-[160px] w-full p-3 bg-[#E6F1F0] rounded-xl flex flex-col items-center justify-center gap-5'>
            <h3 className='text-sm text-[#666666] text-center'>{row2title1}</h3>
            <p className='text-xs text-[#999999]'>{row2subtitle1}</p>
          </div>
          <div className='relative rounded-xl overflow-hidden w-full h-full'>
            <ImageUI src={row2card2} />
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 max-lg:col-span-2'>
          <div className='relative rounded-xl overflow-hidden w-full min-h-[330px]'>
            <ImageUI src={row3card1} />
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
              <div className='relative rounded-xl overflow-hidden h-[160px] w-full'>
                <ImageUI src={row3card2} />
              </div>
              <div className='h-[160px] w-full p-3 bg-[#E6F1F0] rounded-xl flex flex-col items-center justify-center gap-5'>
                <h3 className='text-sm text-[#666666] text-center'>{row3title1}</h3>
                <p className='text-xs text-[#999999]'>{row3subtitle1}</p>
              </div>
            </div>
            <div className='relative rounded-xl overflow-hidden w-full min-h-[160px]'>
              <ImageUI src={row3card3} />
            </div>
          </div>
        </div>
      </div>
      <div className='relative md:hidden container'>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        onSnapIndexChange={(swiperCore) => handleSlideChange(swiperCore)}
        className={'h-full mySwiper'}
        breakpoints={{
            0: {
                spaceBetween: 30,
                slidesPerView: 1,
            },
            640: {
                spaceBetween: 0,
                slidesPerView: 1,
            },
        }}

        speed={500}
        effect={resizeWidth ? 'slide' : 'fade'}
        autoplay={{
            delay: 2500
        }}
        modules={[Pagination, EffectFade]}
        >
            {
                carousel.map((slide, ind) => (
                    <SwiperSlide key={ind} className={'w-full h-full relative'}>
                        <Slide
                            text={slide?.text}
                            title={slide?.title}
                            media={slide?.media}
                            mediaRes={slide?.mediaRes}
                            video={slide?.video}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <div className=''>

        </div>
      </div>
    </>
  )
}

export default AboutGridSection