import React from 'react'
import { ImageUI } from '..'

const OptionsCard = ({category, title, bg, bgRes, text}) => {
  return (
    <div className='rounded overflow-hidden cursor-pointer text-white relative flex flex-col items-center aspect-square w-full h-full'>
      <ImageUI src={bg} imgStyle={'object-cover max-md:hidden'} alt={'Image Li Auto'}/>
      <ImageUI src={bgRes} imgStyle={'object-cover md:hidden'} alt={'Image Li Auto'}/>
    <div className='relative w-full z-20 flex flex-col items-center text-center pt-8 px-5 h-full md:p-6  xl:p-[60px] xl:pb-[45px]'>
      {
        category &&
        <p className='text-sm pb-4'>{category}</p>
      }
      <h2 className='text-xl  lg:text-2xl xl:text-3xl'>{title}</h2>
      {
        text &&
        <p className='absolute bottom-0 overflow-hidden w-full px-5 pb-[18px] md:px-6 md:pb-[23px] lg:pb-8 xl:px-[60px] left-0 right-0 max-h-[15vh] text-xs text-[#ffffff80]'>{text}</p>
      }
    </div>
    </div>
  )
}

export default OptionsCard