import {ImageUI} from "@/components";
import { FaAngleDown } from "react-icons/fa6";
import ButtonUI from "../buttonUI/button-UI";
import lang from "@/slice/lang";
const IndexBanner = ({ logoImage, logo_ru, logo_uz , carHeader , button , bgRes , bg, btnText, href}) => {

    return (
        <div className={'relative flex items-start justify-center h-full pt-[20%]  md:pt-[15%] lg:pt-[10%] '}>
                <ImageUI src={bg} alt={'mega'} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                <ImageUI src={bgRes} alt={'mega'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
            <div className={'relative z-[5] flex flex-col justify-center items-center gap-y-6'}>
                <div className={`relative ${carHeader ? ' w-[400px] lg:w-[500px] h-[90px]' : ' w-[200px] h-[60px]'}`}>

                    {
                        logoImage ?
                            <ImageUI src={logoImage} alt={'mega'} imgStyle={'object-contain'}/>:
                        lang === 'ru' ?
                            <>
                                logo_ru &&
                            <ImageUI src={logo_ru} alt={'mega'} imgStyle={'object-contain'}/>:
                            </>
                            :
                            <>
                                logo_uz &&
                            <ImageUI src={logo_uz} alt={'mega'} imgStyle={'object-contain'}/>
                            </>
                    }
                </div>
                {
                    button &&
                    <ButtonUI href={href} btnText={btnText} />
                }


            </div>
            {/* <div className={'absolute bottom-3 left-[50%] translate-x-[-50%] z-[5]'}>
                <FaAngleDown  className={'text-3xl text-white animate-bounce'}/>
            </div> */}

        </div>
    )
};

export default IndexBanner;