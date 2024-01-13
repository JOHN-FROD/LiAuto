import React from 'react';
import {ImageUI} from "@/components";

const CardL9 = ({title}) => {
    return (
        <div className={'relative rounded-lg overflow-hidden w-full  h-40 lg:h-[320px]'}>
            <ImageUI src={'/mega.jpg'} imgStyle={'object-cover object-center'} />
            <div className={'relative z-10 flex items-end h-full p-[4.2vw] md:p-[1.2vw] font-medium bg-black/20'}>
                <h6 className={'text-white text-[3.2vw] md:text-[1.2vw]'}>
                    {title}
                </h6>
            </div>
        </div>
    );
};

export default CardL9;