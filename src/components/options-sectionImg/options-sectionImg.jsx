import React from 'react'
import { ImageUI, LargeSectionTitle } from '..'

const OptionsSectionImg = ({title, subTitle, bg, bgRes, list, subTitle2}) => {
  return (
    <div className='pt-20 pb-6 md:pt-[70px] md:pb-0 lg:pt-[90px] space-y-5 md:space-y-8 '>
      <LargeSectionTitle title={title} subTitle={subTitle}/>
      <div className='container container-content'>
        <div className='relative'>
          <div className='w-full relative aspect-square md:h-[90vh]  rounded-lg md:rounded overflow-hidden'>
            <ImageUI src={bg} imgStyle={'object-cover max-md:hidden'}/>
            <ImageUI src={bgRes} imgStyle={'object-cover md:hidden'}/>
          </div>
          <div className='md:absolute bottom-10 left-0 right-0 w-full mt-5'>
            <div className='container lg:px-[4vw] flex max-md:flex-col gap-4 md:gap-5 lg:gap-7 md:text-white'>
              {
                list && list.map((card, idx, arr) => (
                  <>
                  <div className='space-y-1'>
                    <h3 className='font-medium sm:text-lg md:text-sm lg:text-lg'>{card.title}</h3>
                    <p className='text-sm md:text-[9px] md:leading-[1.2] lg:text-sm text-darkText md:text-[#ffffff80] lg:font-medium'>{card.text}</p>
                  </div>
                  {
                    idx == arr.length - 1 ? 
                    ''
                    : 
                    <div className='w-[1px] max-md:hidden  flex flex-col items-center justify-center'>
                      <span className='h-8 w-full bg-white'></span>
                    </div>
                  }
                  </>
                ))
              }
            </div>
          </div>
        </div>
        {
          subTitle2 &&
          <div className='lg:pl-[4vw] text-darkText/70 font-medium text-xs mt-5 '>
            {subTitle2}
          </div>
        }
      </div>
    </div>
  )
}

export default OptionsSectionImg