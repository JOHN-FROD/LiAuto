import React from 'react';
import {ImageUI} from "@/components";

const CardL9 = ({title,bg,bgRes}) => {
    return (
        <div className={'relative rounded-lg overflow-hidden w-full  h-40 lg:h-[320px]'}>
            <ImageUI src={bg} alt={title} imgStyle={'object-cover max-md:hidden object-center z-[1]'} />
            <ImageUI src={bgRes} alt={title} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
            <div className={'relative z-10 flex items-end h-full p-[2vw] sm:p-[1.2vw] font-medium bg-black/20'}>
                <h6 className={'text-white text-[2vw]  sm:text-[1.2vw]'}>
                    {title}
                </h6>
            </div>
        </div>
    );
};

export default CardL9;