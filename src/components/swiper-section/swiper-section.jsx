import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination} from 'swiper/modules'
import {useEffect, useState} from "react";
import Slide from "@/components/swiper-section/Slide";
import Aos from 'aos'
import {ImageUI} from "@/components";

const  SwiperSection = ({carousel, hoverChangeText,  container,isShadow}) => {
    const [paginationGrid, setPaginationGrid] = useState(0)
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
    const [resizeWidth, setResizeWidth] = useState(typeof window !== 'undefined' && window.innerWidth <= 640)
    const [isRefresh, setIsRefresh] = useState(false)


    const handlePaginationClick = (index) => {

        if (swiper !== null && resizeWidth) {
            swiper.slideTo(index, 500);
        }
    };

    const handlePaginationHover = (index) => {

        if (swiper !== null && !resizeWidth) {
            swiper.slideTo(index, 500);
        }
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex)
    };


    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        });

    }, []);

    useEffect(() => {
        setPaginationGrid(carousel?.length)
    }, [carousel]);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 640;
            setResizeWidth(isMobile)
            setIsRefresh(true)
        };
        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isRefresh) {
            window.location.reload()
        }
    }, [resizeWidth]);

    return (
        <div
            className={`${container ? "container" : "max-sm:container"} max-sm:container h-auto sm:h-[50vh] lg:h-screen  w-full relative  py-[11vw] sm:py-0`}>
            <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                onSnapIndexChange={(swiperCore) => handleSlideChange(swiperCore)}
                className={'h-full mySwiper'}
                breakpoints={{
                    0: {
                        spaceBetween: 30,
                        slidesPerView: 1,
                    },
                    640: {
                        spaceBetween: 0,
                        slidesPerView: 1,
                    },
                }}

                speed={500}
                effect={resizeWidth ? 'slide' : 'fade'}
                autoplay={{
                    delay: 2500
                }}
                pagination={resizeWidth && !hoverChangeText}
                modules={[Pagination, EffectFade]}
            >
                {
                    carousel.map((slide, ind) => (
                        <SwiperSlide key={ind} className={'w-full h-full relative'}>
                            <Slide
                                text={slide?.text}
                                title={slide?.title}
                                media={slide?.media}
                                mediaRes={slide?.mediaRes}
                                hoverChangeText={hoverChangeText}
                                video={slide?.video}
                                isShadow={isShadow}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div
                className={`static sm:absolute left-0 bottom-10 md:bottom-20 z-20 w-full ${hoverChangeText ? "" : "sm:block hidden"}`}>

                <div
                    className={`${container ? "container" : "container"} grid ${hoverChangeText ? "gap-2 sm:gap-0" : "gap-6 md:gap-10"}  sm:px-[5%]`}
                    style={{gridTemplateColumns: `repeat(${paginationGrid},1fr)`}}

                >

                    {carousel.map((item, index) => (
                        <div
                            key={index}
                            className={`${hoverChangeText ? 'col-span-full  sm:col-span-1' : ""} cursor-pointer space-y-2 lg:space-y-4 overflow-hidden`}
                            onMouseOver={() => handlePaginationHover(index)}
                            onClick={() => handlePaginationClick(index)}
                        >

                            {/*<div className={`${item.children ? '' :"hidden"} grid grid-cols-3 gap-6 lg:gap-10`}>*/}
                            {/*    <div className={'flex items-start gap-3'}>*/}
                            {/*        <div className={'relative w-14 h-14'}>*/}
                            {/*        <ImageUI alt={'grid'} src={'/LI9/lil9-section16-1-item1.png'}/>*/}
                            {/*        </div>*/}
                            {/*        <div className={'flex flex-col items-start'}>*/}
                            {/*            <h6 className={'text-[5px] text-white'}>*/}
                            {/*                Maps*/}
                            {/*            </h6>*/}
                            {/*            <p className={'text-white/60'}>*/}
                            {/*                Navigation*/}
                            {/*            </p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {
                                hoverChangeText
                                    ?
                                    <div
                                        className={'flex justify-items-start sm:justify-between  sm:flex-col flex-row gap-2 h-full '}>
                                        <div data-aos={'fade-up'}
                                             data-aos-duration="300"
                                        >

                                        <h6  className={`order-2 sm:order-1 text-sm md:text-lg lg:text-xl text-center duration-300 ${activeIndex === index ? 'text-black sm:text-white' : ' text-black/40 sm:text-white/40 '}`}>
                                            {item.title}
                                        </h6>
                                        </div>
                                        <div data-aos={'fade-right'}>
                                            <div

                                                className={`order-1 sm:order-2  w-[1px] h-full sm:w-full sm:h-0.5 duration-700  ${activeIndex === index ? 'bg-currentGold' : 'bg-white/40'}`}></div>
                                        </div>

                                    </div>
                                    :
                                    <>
                                        <div data-aos={'fade-right'}>

                                        <div
                                            className={`w-full h-0.5  ${activeIndex === index ? 'bg-currentGold' : 'bg-white/40'}`}></div>
                                        </div>
                                        <h6 className={` text-xs xl:text-sm xxl:text-base  ${activeIndex === index ? 'text-white' : 'text-white/40 '}`}>
                                            {item.title}
                                        </h6>
                                        <p className={`text-[10px] xl:text-xs xxl:text-sm ${activeIndex === index ? 'text-white' : 'text-white/40 '}`}>
                                            {item.text}
                                        </p>
                                    </>
                            }

                        </div>

                    ))}
                    <div
                        className={`${hoverChangeText ? '' : 'hidden'} order-first sm:order-last col-span-full text-start sm:text-center mb-3 sm:mb-0 mt-0 sm:mt-3 text-xs xxl:text-sm text-black sm:text-white`}>
                        {carousel[activeIndex]?.text}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperSection;