import React, {useMemo} from 'react';
import {ImageUI, VideoUI} from "@/components";

const Slide = ({media, title, text, hoverChangeText, video}) => {


    // const videoLink=useMemo(()=>{
    //   return   {
    //         autoplay: true,
    //       muted:true,
    //         controls: false,
    //         responsive: true,
    //         fluid: true,
    //         loop:true,
    //         sources: [{
    //         src: media,
    //         type: 'video/mp4'
    //     }]
    //     };
    // },[media])



    return (
        <>
            {
                hoverChangeText
                    ?
                    <>
                        <div
                                className={`w-full ${video ? "aspect-auto" : "aspect-square sm:aspect-auto"}   sm:h-full relative ${hoverChangeText ? "sm:mb-0 mb-[2vw]" : "sm:mb-0 mb-[11vw]"}  `}>
                            {
                                video
                                    ?
                                    <VideoUI media={media}/>
                                    :
                                    <ImageUI alt={'swiper image'} src={media} imgStyle={'object-cover object-center'}/>
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className={`w-full  ${video ? "aspect-auto" : "aspect-square sm:aspect-auto"} sm:h-full relative sm:mb-0 mb-[11vw] `}>
                            {
                                video
                                    ?
                                    <VideoUI media={media}/>
                                    :
                                    <ImageUI alt={'swiper image'} src={media} imgStyle={'object-cover object-center'}/>
                            }
                        </div>
                        <div className={'text-center sm:hidden block pb-12'}>
                            <h6 className={'text-xl xs:text-2xl font-bold mb-[2vw]'}>
                                {title}
                            </h6>
                            <p className={'text-base xs:text-xl text-darkText'}>{text}</p>
                        </div>
                    </>
            }
        </>
    );
};

export default Slide;