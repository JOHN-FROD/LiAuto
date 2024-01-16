import React from 'react';
import {ImageUI, SectionTitle, VideoUI} from "@/components";

const TitleBanner = ({banner, video}) => {
    return (
        <div className={'w-full h-screen sm:h-[40vh] lg:h-screen relative'}>
            <div className={'w-full h-full relative z-[5]  bg-black'}>
                {
                    video ?
                        <VideoUI media={banner.video}/>
                        :
                        <>
                            <ImageUI src={banner?.bg} alt={banner.title}
                                     imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                            <ImageUI src={banner?.bgRes} alt={banner.title}
                                     imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                        </>
                }
            </div>
            <div className="container top-[60px] lg:top-[140px] left-1/2 -translate-x-1/2 absolute z-[10] ">
                <SectionTitle
                    darkMode={'true'}
                    subSmallTitle={banner.subTitle}
                    title={banner.title}/>
            </div>
        </div>
    );
};

export default TitleBanner;