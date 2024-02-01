import { useState } from "react"
import { ImageUI } from ".."
import { RiCloseFill } from "react-icons/ri";
import { t } from "i18next";

const MoreCard = ({title, subTitle, titleCategory, subTitle2, bg , bgRes, isTextBack, isTitleBlack}) => {
  const [onClick, setOnClick] = useState(false)

  console.log(onClick);
  const onClickCard = () => {
    setOnClick(prevstate => !prevstate)
  }
  return (
    <div onClick={onClickCard} className="rounded overflow-hidden cursor-pointer text-white relative font-medium flex flex-col items-center aspect-square w-full h-full">
      <div className={`absolute top-0 left-0 h-full w-full duration-200 md:hidden z-[9] ${onClick ? 'blur-xl ' : ' blur-0'}`}>
        <ImageUI src={bgRes} imgStyle={'object-cover'}/>
      </div>
      <div className={`absolute top-0 left-0 h-full duration-200 w-full z-[9] max-md:hidden  ${onClick ? 'blur-xl ' : ' blur-0'}`}>
        <ImageUI src={bg} imgStyle={'object-cover'}/>
      </div>
      <div className="pt-8 px-5 pb-6 md:p-6 xl:p-[60px] absolute top-0 w-full left-0 z-10 flex flex-col items-center">
        {
          titleCategory && <p className={`mb-1 text-sm text-center duration-200 md:text-base lg:text-lg xl:text-xl ${onClick ? 'opacity-0' : ' opacity-100 '}`}>{titleCategory}</p>
        }
        <div className={`${isTextBack ? 'hidden' : ''}`}>
          <h3 className={`text-2xl text-center md:text-3xl lg:text-4xl ${isTitleBlack ? 'text-black' : 'text-white'}  xl:text-5xl ${onClick ? 'opacity-0' : ' opacity-100 '}`}>{title}</h3>
        </div>
      </div>
      <div className={`top-0 left-0 right-0 ${isTextBack ? 'h-1/2 bg-[#FAFAFA] text-black w-full absolute z-10 flex flex-col justify-center ' : 'hidden'}`}>
          <h3 className={`text-2xl text-center md:text-3xl lg:text-4xl  xl:text-5xl ${onClick ? 'opacity-0' : ' opacity-100 '}`}>{title}</h3>
        </div>
      <div className={`absolute bottom-5 z-[11] rounded-[100px] flex items-center duration-200 overflow-hidden ${onClick ? 'md:p-1' : 'md:p-2'} cursor-pointer md:bg-white bg-transparent`}>
        <p className={`hidden md:block text-sm  duration-200   ${onClick ? ' text-white  w-0 ' : 'text-black md:px-2 w-[90px] '}`}>{t('fortress.moreCardHref')}</p>
        <div className={`border-2 border-white rounded-full md:delay-75 duration-200 md:bg-black md:text-white md:border-black  p-1 ${onClick ? '-rotate-180 ' : '-rotate-45'}`}>
          <RiCloseFill className={`duration-200 ${onClick ? 'md:text-2xl' : ''}`} />          
        </div>
      </div>
      <div className={` absolute top-0 left-0 z-10 duration-50  w-full h-full  ${onClick ? 'bg-black/50 blur-2xl  ' : ' blur-0'}`}></div>
      <div className="px-5 pt-6 flex flex-col justify-center md:px-[19.54%] w-full overflow-y-scroll h-full moreCard absolute top-0 left-0 z-20">
        <h3 className={`text-sm  md:text-2xl lg:text-3xl xl:text-4xl ${onClick ? 'opacity-100' : ' opacity-0 '}`}>{title}</h3>
        <p className={`duration-200 text-sm ${isTitleBlack ? 'text-[#ffffff80] font-normal' : ''}  mt-5 ${onClick ? 'opacity-100' : ' opacity-0 '}`}>{subTitle}</p>
        {
          subTitle2 &&
        <p className={`duration-200 ${isTitleBlack ? 'text-[#ffffff80] font-normal' : ''} text-sm pt-5 mt-5 ${onClick ? 'opacity-100' : ' opacity-0 '}`}>{subTitle2}</p>
        }
      </div>
    </div>
  )
}

export default MoreCard