import React from 'react';
import {SwiperSection} from "@/components";

const paginationTexts = [
    {
        title: "The First Flawless Halo Light",
        text: "The brand-new Halo Ring Headlight is more than 2 meters long, without any breakpoints in the middle. The Halo light represents a ring of happiness surrounding a home.",
        image: '/2-pc.jpg'
    },
    {
        title: "Elegant Silhouette",
        text: "Thanks to a clean design, Li L9 stands out with a refined side profile featuring flush door handles with anti-freeze protection.",
        image: '/mega.jpg'
    },
    {
        title: "The First Flawless Halo Light",
        text: "The brand-new Halo Ring Headlight is more than 2 meters long, without any breakpoints in the middle. The Halo light represents a ring of happiness surrounding a home.",
        image: '/2-pc.jpg'
    },
    {
        title: "Elegant Silhouette",
        text: "Thanks to a clean design, Li L9 stands out with a refined side profile featuring flush door handles with anti-freeze protection.",
        image: '/mega.jpg'
    }
];

const LiL9 = () => {
    return (
        <div>
            <SwiperSection carousel={paginationTexts} hoverChangeText={true}/>

        </div>
    );
};

export default LiL9;