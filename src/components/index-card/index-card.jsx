import {ImageUI} from "@/components";
import {FaAngleRight} from "react-icons/fa";
const IndexCard = ({contentPositionEnd , bottomText , about, title, subtitle, bg, bgRes, btnText, isAboutGrid}) => {
    // contentPosition ---- start or end


    return (
        <div className={`relative flex flex-col ${contentPositionEnd === 'justify-end' ? 'justify-end' : contentPositionEnd}  p-5 py-10 items-center h-full ${about && 'rounded overflow-hidden'}  `}>
            <ImageUI src={bg} alt={'mega'} imgStyle={'object-cover hidden  md:block object-center z-[1]'}/>
            <ImageUI src={bgRes} alt={'mega'} imgStyle={'object-cover block md:hidden object-center  z-[1]'}/>
            <div className={'relative   z-[5]'}>
                <div className={`text-white flex flex-col justify-center items-center   ${isAboutGrid ? 'gap-y-2' : 'gap-y-2 md:gap-y-4'} text-center`}>
                    <h3 className={` ${isAboutGrid ? ' lg:text-lg' : 'text-xl md:text-2xl lg:text-3xl '} ${about ? "font-medium" : "font-bold "} `}>
                        {title}
                    </h3>
                    <p className={` ${about ? 'text-[#ffffffb3] text-sm' : 'text-sm md:text-base lg:text-xl'}   `}>
                        {subtitle}
                    </p>
                    {
                        btnText &&

                    <button
                        className={`text-white  duration-200 flex items-center gap-x-1.5 ${about ? "text-xs " : "text-sm md:text-base"} `}>
                    <span>
                        {btnText}
                    </span>
                        <FaAngleRight/>
                    </button>
                    }
                </div>

            </div>
            {
                bottomText &&
            <div className={'relative z-[5] text-center'}>
                <p className={`text-base ${about ? "text-[#ffffff80]" : " text-darkText"}`}>
                    {bottomText}
                </p>
            </div>
            }

        </div>
    )
};

export default IndexCard;