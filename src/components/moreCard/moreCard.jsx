import { useState } from "react"
import { ImageUI } from ".."
import { RiCloseFill } from "react-icons/ri";

const MoreCard = ({title, subTitle, titleCategory}) => {
  const [onClick, setOnClick] = useState(false)

  console.log(onClick);
  const onClickCard = () => {
    setOnClick(prevstate => !prevstate)
  }
  return (
    <div onClick={onClickCard} className="rounded overflow-hidden text-white relative font-medium flex flex-col items-center aspect-square w-full h-full">
      <div className="absolute top-0 left-0 h-full w-full md:hidden z-[9]">
        <ImageUI src={'/fortress/4-section-1-720.jpg'} imgStyle={'object-cover'}/>
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-[9] max-md:hidden ">
        <ImageUI src={'/fortress/4-section-1-1920.jpg'} imgStyle={'object-cover'}/>
      </div>
      <div className="pt-8 px-5 pb-6 md:p-6 xl:p-[60px] absolute top-0 w-full left-0 z-10 flex flex-col items-center">
        {
          titleCategory && <p className="mb-1 text-sm text-center md:text-base lg:text-lg xl:text-xl">{titleCategory}</p>
        }
        <h3 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl">{title}</h3>
      </div>
      <div className={`absolute bottom-5 z-10 rounded-[100px] flex items-center duration-200 overflow-hidden ${onClick ? 'md:p-1' : 'md:p-2'} cursor-pointer md:bg-white bg-transparent`}>
        <p className={`hidden md:block text-sm  duration-200   ${onClick ? 'absolute text-white -right-5  ' : 'text-black md:px-2'}`}>More</p>
        <div className={`border-2 border-white rounded-full duration-200 md:bg-black md:text-white md:border-black  p-1 ${onClick ? '-rotate-180 md:text-2xl' : '-rotate-45'}`}>
          <RiCloseFill className="" />          
        </div>
      </div>




      <div className="px-5 pt-6 ">

      </div>
    </div>
  )
}

export default MoreCard