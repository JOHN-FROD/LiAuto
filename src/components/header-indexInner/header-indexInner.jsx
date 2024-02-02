import React, { useEffect } from 'react'
import { ImageUI } from '..'
import Aos from 'aos';

const HeaderIndexInner = ({bg, bgRes, styleJustify, namePage, title, subTitle}) => {
  useEffect(() => {
    Aos.init({
        once: true
    });

}, []);
  return (
    <div className={`w-full h-[128vh] flex flex-col justify-start py-[20vh] ${styleJustify ? styleJustify : 'md:justify-center'}`}>
      <div className='w-full h-full absolute top-0 left-0 right-0 max-md:hidden z-10 '>
        <ImageUI src={bg} imgStyle={'object-cover object-top'}/>
      </div>
      <div className='w-full h-full absolute top-0 left-0 right-0 md:hidden z-10'>
        <ImageUI src={bgRes} imgStyle={'object-cover object-center'}/>
      </div>
      <div className='container flex flex-col items-center py-10 relative z-20 text-white text-center gap-3 lg:gap-4'>
        {
          namePage && 
          <h3 className= 'sm:text-lg md:text-xl lg:text-2xl' data-aos='fade-up'>{namePage}</h3>
        }
        {
          title && 
          <h2 className='text-medium text-2xl sm:text-3xl lg:text-4xl xl:text-7xl max-w-[1200px] xl:leading-[1.3]' data-aos='fade-up' data-aos-delay='100'>{title}</h2>
        }
        {
          subTitle && 
          <p className='md:text-lg lg:text-xl lg:mt-5' data-aos='fade-up' data-aos-delay='150'>{subTitle}</p>
        }
      </div>
    </div>
  )
}

export default HeaderIndexInner