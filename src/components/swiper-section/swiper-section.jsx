import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination} from 'swiper/modules'
import {useEffect, useState} from "react";
import Slide from "@/components/swiper-section/Slide";


const SwiperSection = ({carousel, hoverChangeText}) => {

    const [paginationGrid, setPaginationGrid] = useState(0)
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
    const [resizeWidth, setResizeWidth] = useState(typeof window !== 'undefined' && window.innerWidth <= 640)
    const [isRefresh, setIsRefresh] = useState(false)
    const handlePaginationClick = (index) => {

        if (swiper !== null) {
            swiper.slideTo(index, 500);
        }
    };


    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex)
    };


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

    console.log(carousel)

    return (
        <div className={'max-sm:container h-auto sm:h-[50vh] lg:h-screen w-full relative'}>
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
                loop={true}
                pagination={resizeWidth}
                modules={[Pagination, EffectFade]}
            >
                {
                    carousel.map((slide, ind) => (
                        <SwiperSlide key={ind} className={'w-full h-full relative'}>
                            <Slide text={slide.text} title={slide.title} image={slide.image} hoverChangeText={hoverChangeText}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="absolute left-0 bottom-20 z-10 w-full sm:block hidden">
                <div
                    className={`container grid ${hoverChangeText ? "" : "gap-10"}   ${paginationGrid === 2 ? "px-10 lg:px-20" : "px-0"}`}
                    style={{gridTemplateColumns: `repeat(${paginationGrid},1fr)`}}

                >

                    {carousel.map((item, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer space-y-2 lg:space-y-4 `}
                            onMouseOver={() => handlePaginationClick(index)}
                        >
                            {
                                hoverChangeText
                                    ?
                                    <>
                                        <h6 className={` text-xs xl:text-sm xxl:text-base text-center ${activeIndex === index ? 'text-white' : 'text-white/40 '}`}>
                                            {item.title}
                                        </h6>
                                        <div
                                            className={`w-full h-0.5  ${activeIndex === index ? 'bg-currentRed' : 'bg-white/40'}`}></div>
                                        {/*<p className={`text-[10px] xl:text-xs xxl:text-sm ${activeIndex === index ? 'text-white' : 'text-white/40 '}`}>*/}
                                        {/*    {item.text}*/}
                                        {/*</p>*/}
                                    </>
                                    :
                                    <>
                                        <div
                                            className={`w-full h-0.5  ${activeIndex === index ? 'bg-currentGold' : 'bg-white/40'}`}></div>
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
                    <div className={`col-span-full text-center mt-3 text-[10px] xl:text-xs xxl:text-sm text-white`}>
                        {carousel[activeIndex]?.text}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperSection;