import React from 'react';
import {
    CardL9,
    ConfigurationsSection,
    IndexBanner,
    ListCar,
    PositionCard,
    SectionTitle,
    SwiperSection,
    VideoUI
} from "@/components";


const swiperVideo = [
    {
        title: "The First Flawless Halo Light",
        text: "The brand-new Halo Ring Headlight is more than 2 meters long, without any breakpoints in the middle. The Halo light represents a ring of happiness surrounding a home.",
        media: 'https://v.ampmake.com/lilibrary/hd/848870315733014/a1eec196-ad3d-47ec-9ad5-1aaff0039acf.mp4'
    },
    {
        title: "Elegant Silhouette",
        text: "Thanks to a clean design, Li L9 stands out with a refined side profile featuring flush door handles with anti-freeze protection.",
        media: 'https://v.ampmake.com/lilibrary/hd/849678059335234/e0c2a37b-a8e4-4bc3-bb5c-a85b44f64b5a.mp4'
    },
    {
        title: "The First Flawless Halo Light",
        text: "The brand-new Halo Ring Headlight is more than 2 meters long, without any breakpoints in the middle. The Halo light represents a ring of happiness surrounding a home.",
        media: 'https://v.ampmake.com/lilibrary/hd/848870315733014/a1eec196-ad3d-47ec-9ad5-1aaff0039acf.mp4'
    },
    {
        title: "Elegant Silhouette",
        text: "Thanks to a clean design, Li L9 stands out with a refined side profile featuring flush door handles with anti-freeze protection.",
        media: 'https://v.ampmake.com/lilibrary/hd/849678059335234/e0c2a37b-a8e4-4bc3-bb5c-a85b44f64b5a.mp4'
    }
];

const swiperImage = [
    {
        title: "The First Flawless Halo Light",
        text: "The brand-new Halo Ring Headlight is more than 2 meters long, without any breakpoints in the middle. The Halo light represents a ring of happiness surrounding a home.",
        media: '/2-pc.jpg'
    },
    {
        title: "Elegant Silhouette",
        text: "Thanks to a clean design, Li L9 stands out with a refined side profile featuring flush door handles with anti-freeze protection.",
        media: '/mega.jpg'
    },
    {
        title: "The First Flawless Halo Light",
        text: "The brand-new Halo Ring Headlight is more than 2 meters long, without any breakpoints in the middle. The Halo light represents a ring of happiness surrounding a home.",
        media: '/2-pc.jpg'
    },
    {
        title: "Elegant Silhouette",
        text: "Thanks to a clean design, Li L9 stands out with a refined side profile featuring flush door handles with anti-freeze protection.",
        media: '/mega.jpg'
    }
];


const list = [




    {
        name: ' Length',
        number: '5080',
        type:'mm'
    },
    {
        name: ' Width',
        number: '1995',
        type:'mm'
    },
    {
        name: 'Height',
        number: '1800',
        type:'mm'
    },
    {
        name: 'Wheelbase',
        number: '3005',
        type:'mm'
    },
]
const LiL9 = () => {
    return (
        <div>
            <section className={
                'w-full h-screen'
            }>
                <IndexBanner bgRes={'/mega.jpg'} bg={'/mega-1920.jpg'} logoImage={'/mega-eng.png'} carHeader={true}/>
            </section>
            <section className={
                'w-full h-screen'
            }>
                <ListCar list={list} listCenter={true}
                         title={'Redefining Mid-to-Large Luxury SUVs'}
                         bgRes={'/mega.jpg'} bg={'/mega-1920.jpg'} logoImage={'/mega-eng.png'} carHeader={true}/>
            </section>
            <section className={
                'w-full h-screen'
            }>
                <ListCar list={list}
                         title={'Uses Power in Urban Scenarios / Generates Power in Long Distance Scenarios / Supplies Power in Outdoor Scenarios'}
                         bgRes={'/mega.jpg'} bg={'/mega-1920.jpg'} logoImage={'/mega-eng.png'} carHeader={true}/>
            </section>
            <section className={'w-full h-screen relative'}>
                    <div className={'w-full h-full relative z-[5]  bg-black'}>
                        <Video media={'https://v.ampmake.com/lilibrary/hd/848870315733014/a1eec196-ad3d-47ec-9ad5-1aaff0039acf.mp4'}/>
                    </div>
                <div className="container top-5 left-1/2 -translate-x-1/2 absolute z-[10] section">
                    <SectionTitle darkMode={'true'} subSmallTitle={'Redefining the Full-Size Flagship SUV'} title={'Your Home on Wheels with More Space and Luxury'} />
                </div>
            </section>
            <div className={'relative'}>
                <SwiperSection carousel={swiperImage}  hoverChangeText={true} container={true}/>
                <SwiperSection carousel={swiperImage}  hoverChangeText={false}/>

                <SwiperSection carousel={swiperVideo} video={true} hoverChangeText={true} container={true}/>
            </div>
            <section className={'section'}>
                <div className="container section-item-space">
                    <SectionTitle title={'Over 100 Features Included, No Need to Choose.'} />
                    <div className="grid grid-cols-6 lg:grid-cols-8 gap-2">
                        <div className="col-span-6 ">
                            <CardL9 title={'Automatic headlights'}/>
                        </div>
                        <div className="col-span-2 ">
                            <CardL9 title={'Three-zone climate control'}/>
                        </div>

                        <div className="col-span-4 ">
                            <CardL9
                                title={'Nappa leather steering wheel comes standard with heating and 4-way electric control'}/>
                        </div>
                        <div className="col-span-6 lg:col-span-2 ">
                            <CardL9 title={'Three-zone climate control'}/>
                        </div>
                        <div className="col-span-4 lg:col-span-2 ">
                            <CardL9 title={'Three-zone climate control'}/>
                        </div>

                        <div className="col-span-2 lg:col-span-2 ">
                            <CardL9 title={'Three-zone climate control'}/>
                        </div>
                        <div className="col-span-6 ">
                            <CardL9 title={'Automatic headlights'}/>
                        </div>

                        <div className="col-span-4 ">
                            <CardL9
                                title={'Nappa leather steering wheel comes standard with heating and 4-way electric control'}/>
                        </div>
                        <div className="col-span-2 ">
                            <CardL9 title={'Three-zone climate control'}/>
                        </div>
                        <div className="col-span-6 md:col-span-2 ">
                            <CardL9 title={'Three-zone climate control'}/>
                        </div>
                        <div className="col-span-2 md:col-span-6 ">
                            <CardL9 title={'Automatic headlights'}/>
                        </div>
                        <div className="col-span-4 md:col-span-2 ">
                            <CardL9 title={'Three-zone climate control'}/>
                        </div>

                    </div>
                </div>
            </section>
            <section className={'section relative bg-dark'}>
                <div className="container container-content section-item-space">
                    <SectionTitle styleBox={'text-center'} title={'Select the ideal Li L9 model for your family'}
                                  darkMode={true}
                    />
                    <div className="flex flex-wrap md:flex-nowrap gap-7  justify-center">
                        {/*px-[5%]*/}
                        <PositionCard gold={true}/>
                        <PositionCard/>
                        <PositionCard gold={true}/>

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