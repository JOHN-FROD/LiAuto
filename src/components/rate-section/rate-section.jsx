import {ImageUI, SectionTitle} from "@/components";
import { GoStarFill } from "react-icons/go";

const RateSection = ({bg, bgRes, title, rate1, rate2, rate3, rate4, subtitle}) => {
  return (
    <section>
      <div className="relative h-full pt-[20%] text-white md:pt-[15%] lg:pt-[10%] ">
        <ImageUI src={bg} alt={'Li9'} imgStyle={'object-cover max-md:hidden object-center z-[1]'} />
        <ImageUI src={bgRes} alt={'Li9'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
        <div className="container flex flex-col items-center justify-between">
          <SectionTitle title={title} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-6">
            <div className="text-center pt-[18px] pb-6">
              <p className="leading-[1.5rem]">{rate1}</p>
              <div className="flex items-center text-[#DBAD76] text-xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
              <div className="text-center pt-[18px] pb-6">
              <p className="leading-[1.5rem]">{rate2}</p>
              <div className="flex items-center text-[#DBAD76] text-xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
            <div className="text-center pt-[18px] pb-6">
              <p className="leading-[1.5rem]">{rate3}</p>
              <div className="flex items-center text-[#DBAD76] text-xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
            <div className="text-center pt-[18px] pb-6">
              <p className="leading-[1.5rem]">{rate4}</p>
              <div className="flex items-center text-[#DBAD76] text-xl">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
            </div>
          </div>
        </div>
        <SectionTitle subSmallTitle={subtitle} />
      </div>
    </section>
  )
}

export default RateSection