import React from 'react';
import {
    CardL9,
    ConfigurationsSection,
    IndexBanner,
    ListCar,
    PositionCard,
    SectionTitle,
    SwiperSection
} from "@/components";
import Video from "../components/video/video";


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
                    <div className={'w-full h-full absolute top-0 left-0 bg-black z-1'}>
                        <Video style={'w-full h-screen'} />
                    </div>
                <div className="container relative z-[5] section">
                    <SectionTitle darkMode={'true'} subSmallTitle={'Redefining the Full-Size Flagship SUV'} title={'Your Home on Wheels with More Space and Luxury'} />
                </div>
            </section>
            <div className={'relative'}>
                {/*<SwiperSection/>*/}


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