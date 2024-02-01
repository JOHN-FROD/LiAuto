import { t } from "i18next"
import { useState } from "react"
import { BsChevronRight } from "react-icons/bs";
import { ImageUI } from "..";

const LiCarsOptions = ({listName, listOptions}) => {
  const [tab, setTab] = useState(0)
  return (
    <div className="flex flex-col items-center">
      <div className="flex pt-4 md:pt-6 lg:pt-8">
        {
          listName?.map(item => (
            <div className={`border-b-[0.5px] text-sm py-1 px-4 text-[#191919] cursor-pointer  ${tab === item.id ? "border-b-2 border-[#057568] text-black" : ""} `} key={item.id} onClick={() => setTab(item.id)}>{item.name}</div>
          ))
        }
      </div>
      <div className="lg:px-[10vw] pt-6 md:pt-9 lg:pt-12 flex flex-wrap justify-center gap-2 w-full">
        {
          listOptions[tab].models.map(card => (
            <div className="max-w-[48.5%] flex flex-col items-center text-center md:max-w-[32%]">
              <h2 className=" mb-1.5 md:text-lg lg:text-2xl xl:text-[32px]">{card.title}</h2>
              <a href={card.href} className="text-[#5a7cab] text-sm flex items-center gap-1 w-full justify-center border-b pb-4">
                <span>{t('fortress.liCarsHref')}</span>
                <BsChevronRight className="text-xs mt-1"/>
              </a>
              <div className="py-8 space-y-8 flex flex-col items-center w-full">
                {
                  card?.options1.map(item => (
                    <div className="flex flex-col items-center">
                      <h3 className=" text-xl mb-1 md:text-sm lg:text-lg xl:text-xl">{item.title}</h3>
                      <p className="text-darkText text-xs text-center lg:text-sm">{item.text}</p>
                    </div>
                  ))
                }
                {
                  card?.options2.map(item => (
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 relative md:w-14 md:h-14">
                        <ImageUI imgStyle={'object-contain'} src={item.img}/>
                      </div>
                      <p className="text-darkText text-xs text-center lg:text-sm">{item.text}</p>
                    </div>
                  ))
                }
                {
                  card?.options3.map(item => (
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 relative md:w-14 md:h-14">
                        <ImageUI imgStyle={'object-contain'} src={item.icon}/>
                      </div>
                      <p className="text-xl xl:text-2xl ">{item.title}</p>
                      <p className="text-lg pb-1 border-b px-5 ">{item.title2}</p>
                      <p className="text-darkText text-xs text-center lg:text-sm mt-2">{item.text}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LiCarsOptions