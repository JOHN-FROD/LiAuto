import {ImageUI} from "@/components";
import {FaAngleDown} from "react-icons/fa6";

const HeaderBannerAbout = ({bg , bgRes ,title , subTitle }) => {
    return (
        <div className={'relative flex items-start justify-center h-full pt-[20%]  md:pt-[15%] lg:pt-[10%] '}>

            <ImageUI src={bg} alt={'mega'} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
            <ImageUI src={bgRes} alt={'mega'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
            <div className={'relative z-[5] flex flex-col justify-center items-center gap-y-6'}>
                <div className="container lg:px-[5%] text-white text-center section-item-space">
                    <h2 className={'text-3xl md:text-4xl lg:text-5xl xl:text-7xl'}>
                        {title
                        }
                    </h2>
                    <p className={'text-xl md:text-2xl lg:text-3xl'}>
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeaderBannerAbout;