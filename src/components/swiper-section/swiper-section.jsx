import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

const SwiperSection = () => {
    return (
        <div className={'h-screen w-full '}>
            <Swiper
                className={'h-full'}
                spaceBetween={50}
                slidesPerView={3}
            >
                <SwiperSlide className={'text-5xl'}>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSection;