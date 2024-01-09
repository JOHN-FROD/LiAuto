import React from 'react';
import {ImageUI} from "@/components";

const Slide = ({image,title,text}) => {
    return (
        <>
            <div className={'w-full aspect-square sm:aspect-auto sm:h-full relative mb-[11vw] '}>
            <ImageUI alt={'swiper image'} src={image} imgStyle={'object-cover object-center'}/>
            </div>
            <div className={'text-center sm:hidden block pb-12'}>
            <h6 className={'text-xl xs:text-2xl font-bold mb-[2vw]'}>
                {title}
            </h6>
            <p className={'text-base xs:text-xl text-darkText'}>{text}</p>
            </div>
        </>
    );
};

export default Slide;