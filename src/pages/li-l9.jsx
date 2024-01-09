import React from 'react';
import {ConfigurationsSection, PositionCard, SectionTitle, SwiperSection} from "@/components";

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
            <div className={'relative'}>
                <SwiperSection carousel={paginationTexts} hoverChangeText={true}/>

            </div>
            <section className={'section relative bg-dark py-32'}>
                <div className="container container-content section-item-space">
                    <SectionTitle styleBox={'text-center'} title={'Select the ideal Li L9 model for your family'} darkMode={true}
                    />
                    <div className="flex flex-wrap md:flex-nowrap gap-7 px-[5%] justify-center">
                        <PositionCard  gold={true}/>
                        <PositionCard />
                    </div>
                </div>
            </section>
            <section className={'section relative'}>
                <div className="container container-content section-item-space">
                    <SectionTitle styleBox={'text-center'} title={'Technical Specifications'}
                    />
                    <ConfigurationsSection/>

                </div>
            </section>
        </div>
    );
};

export default LiL9;