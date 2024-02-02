import React, { useEffect, useRef, useState } from 'react'
import { LuChevronDown } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { t } from 'i18next';

const ExtraSection = ({btnStyle, children, parentId }) => {
  const [openSection, setOpenSection] = useState(false)
  const [isFixed, setIsFixed] = useState(true)
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const parentElement = document.getElementById(parentId);
  
      if (parentElement) {
        const parentElementRect = parentElement.getBoundingClientRect();
        const isParentElementVisible = parentElementRect.bottom > 0;
  
        console.log('isParentElementVisible:', isParentElementVisible);
  
        if (!isParentElementVisible) {
          scrollPosition.current = window.scrollY;
          setIsFixed(false);
        } else if (window.scrollY < scrollPosition.current) {
          setIsFixed(true);
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parentId, scrollPosition.current]);
  
  return (
    <div>
      <div className='flex relative z-[5] items-center justify-center py-10'>
        <button onClick={() => setOpenSection(!openSection)} className={` ${btnStyle ? btnStyle : 'bg-[#1A1A1A] rounded-full p-[9px] pl-[30px] flex items-center justify-between gap-6 text-currentWhiteText leading-7'} duration-1000 delay-200 ${openSection ? 'opacity-0 cursor-default' : ''}`}>
          {t('Дополнительные функции сиденья')} 
          <div className='rounded-full w-10 lg:w-14 h-10 lg:h-14 bg-[#DB3F1C] flex items-center justify-center text-white text-3xl'>
            <LuChevronDown />
          </div>
        </button>
      </div>
      <button onClick={() => setOpenSection(!openSection)} className={` ${btnStyle ? btnStyle : 'bg-[#1A1A1A]/50 rounded-full p-[9px] pl-[30px] flex items-center justify-between gap-6 text-currentWhiteText leading-7'} duration-300 z-20 ${isFixed ? 'fixed' : 'absolute bottom-10'} top-16 right-16 block w-fit  ${openSection ? '' : 'opacity-0'}`}>
        {t('Закрыть')}
        <div className='rounded-full w-10 lg:w-14 h-10 lg:h-14 bg-[#DB3F1C] flex items-center justify-center text-white text-3xl'>
          <IoClose />
        </div>
      </button>
      <div className={`grid grid-rows-[0fr] transition-all duration-1000 ${openSection ? 'grid-rows-[1fr]' : ''}`}>
        <div className='overflow-hidden'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ExtraSection