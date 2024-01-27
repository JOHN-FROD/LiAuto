import {ImageUI, SectionTitle} from "@/components";
import { GoStarFill } from "react-icons/go";

const RateSection = ({bg, bgRes, title, rate1, rate2, rate3, rate4, subtitle}) => {
  return (
      <div className="relative md:h-screen md:text-white">
        <div className="relative z-[1] h-[50vh] md:h-full">
          <ImageUI src={bg} alt={'Li9'} imgStyle={'object-cover max-md:hidden object-center z-[1]'} />
          <ImageUI src={bgRes} alt={'Li9'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
        </div>
        <div className="container relative md:absolute top-0 left-0 right-0 z-[5] h-full flex flex-col items-center justify-between md:pt-[5%] md:pb-[3%]">
          <SectionTitle title={title}  styleBox={'md:text-white pt-[34px] max-md:leading-6 sm:max-md:pt-14 pb-5 md:pb-10 md:text-center'} />
          <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-6 place-items-center">
            <div className="md:pt-[18px] md:pb-6 max-w-[230px] flex flex-col items-start md:items-center justify-center gap-2">
              <p className="md:leading-[1.5rem] max-md:order-2 text-xs md:text-center sm:max-md:text-[26px] leading-[18px] sm:leading-8">{rate1}</p>
              <div className="flex items-center justify-center gap-1 md:gap-3 text-[#DBAD76] text-sm md:text-2xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
            <div className="md:pt-[18px] md:pb-6 max-w-[230px] flex flex-col items-start md:items-center justify-center gap-2">
              <p className="md:leading-[1.5rem] max-md:order-2 text-xs md:text-center sm:max-md:text-[26px] leading-[18px] sm:leading-8">{rate1}</p>
              <div className="flex items-center justify-center gap-1 md:gap-3 text-[#DBAD76] text-sm md:text-2xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
            <div className="md:pt-[18px] md:pb-6 max-w-[230px] flex flex-col items-start md:items-center justify-center gap-2">
              <p className="md:leading-[1.5rem] max-md:order-2 text-xs md:text-center sm:max-md:text-[26px] leading-[18px] sm:leading-8">{rate1}</p>
              <div className="flex items-center justify-center gap-1 md:gap-3 text-[#DBAD76] text-sm md:text-2xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
            <div className="md:pt-[18px] md:pb-6 max-w-[230px] flex flex-col items-start md:items-center justify-center gap-2">
              <p className="md:leading-[1.5rem] max-md:order-2 text-xs md:text-center sm:max-md:text-[26px] leading-[18px] sm:leading-8">{rate1}</p>
              <div className="flex items-center justify-center gap-1 md:gap-3 text-[#DBAD76] text-sm md:text-2xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
          <SectionTitle subSmallTitle={subtitle} darkMode={true} subStyle={'text-black/40 leading-5 md:text-white max-md:text-xs pt-2 md:pt-4 max-md:text-start'} />
          </div>
        </div>
      </div>
  )
}

export default RateSection