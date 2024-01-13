import {ImageUI} from "@/components";
import {FaAngleRight} from "react-icons/fa";
const IndexCard = ({contentPositionEnd , bottomText , about}) => {
    // contentPosition ---- start or end


    return (
        <div className={`relative flex flex-col ${contentPositionEnd === 'justify-end' ? 'justify-end' : contentPositionEnd}  p-5 py-10 items-center h-full   `}>
            <ImageUI src={'/mega-1920.jpg'} alt={'mega'} imgStyle={'object-cover hidden  md:block object-center z-[1]'}/>
            <ImageUI src={'/mega.jpg'} alt={'mega'} imgStyle={'object-cover block md:hidden object-center  z-[1]'}/>
            <div className={'relative   z-[5]'}>
                <div className={'text-white flex flex-col justify-center items-center   gap-y-2 md:gap-y-4 text-center'}>
                    <h3 className={'text-xl md:text-2xl lg:text-3xl font-bold'}>
                        Li Auto Pilot Assistance
                    </h3>
                    <p className={`text-sm md:text-base ${about ? 'text-darkText' : ''}  lg:text-xl `}>
                        All-scenario Pilot Assistance with a Lifetime Free Subscription.

                    </p>
                    <button
                        className={'text-white  duration-200 flex items-center gap-x-1.5 text-sm md:text-base'}>
                    <span>
                        Leare more
                    </span>
                        <FaAngleRight/>
                    </button>
                </div>

            </div>
            {
                bottomText &&
            <div className={'relative z-[5] text-center'}>
                <p className={'text-base text-darkText'}>
                    {bottomText}
                </p>
            </div>
            }

        </div>
    )
};

export default IndexCard;