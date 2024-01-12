import React, {useMemo} from 'react';
import {ImageUI, VideoUI} from "@/components";

const Slide = ({media,mediaRes, title, text, hoverChangeText, video}) => {


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
                                    <>
                                        <ImageUI alt={title} src={media} imgStyle={'object-cover object-center md:block hidden'}/>
                                        <ImageUI alt={title} src={mediaRes} imgStyle={'object-cover object-center block md:hidden'}/>
                                    </>
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
                                    <>
                                        <ImageUI alt={title} src={media} imgStyle={'object-cover object-center md:block hidden'}/>
                                        <ImageUI alt={title} src={mediaRes} imgStyle={'object-cover object-center block md:hidden'}/>
                                    </>
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