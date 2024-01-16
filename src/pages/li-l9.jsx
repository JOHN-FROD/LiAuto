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
import {useTranslation} from "react-i18next";


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
        media: '/2-pc.jpg',
        mediaRes: '/2-pc.jpg'
    },
    {
        title: "Elegant Silhouette",
        text: "Thanks to a clean design, Li L9 stands out with a refined side profile featuring flush door handles with anti-freeze protection.",
        media: '/mega.jpg',
        mediaRes: '/mega.jpg'
    },
    {
        title: "The First Flawless Halo Light",
        text: "The brand-new Halo Ring Headlight is more than 2 meters long, without any breakpoints in the middle. The Halo light represents a ring of happiness surrounding a home.",
        media: '/2-pc.jpg',
        mediaRes: '/2-pc.jpg',
    },
    {
        title: "Elegant Silhouette",
        text: "Thanks to a clean design, Li L9 stands out with a refined side profile featuring flush door handles with anti-freeze protection.",
        media: '/mega.jpg',
        mediaRes: '/mega.jpg',
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
    const {t}=useTranslation()
    const indexBanner={
        bg:"/Li9/lil9-header-min.jpg",
        bgRes:'/Li9/lil9-header-res-min.jpg',
        logoImage:'/Li9/lil9-header-logo.png',
    }

    const section2={
        bg:"/Li9/lil9-section1-min.jpg",
        bgRes:"/Li9/lil9-section1-res-min.jpg",
        title:t("li9.section2.title"),
        list:[
            {
                name: t('li9.section2.list1.name'),
                number: '5,218',
                type:t('li9.section2.list1.type')
            },
            {
                name: t('li9.section2.list2.name'),
                number: '1,998',
                type:t('li9.section2.list2.type')
            },
            {
                name: t('li9.section2.list3.name'),
                number: '1,800',
                type:t('li9.section2.list3.type')
            },
            {
                name: t('li9.section2.list4.name'),
                number: '3,105',
                type:t('li9.section2.list4.type')
            },
        ]
    }
    const section3={
        bg:"/Li9/lil9-section2-min.jpg",
        bgRes:"/Li9/lil9-section2-res-min.jpg",
        title:t("li9.section2.title"),
        list:[
            {
                name: t('li9.section3.list1.name'),
                number: '1,323',
                type:t('li9.section3.list1.type')
            },
            {
                name: t('li9.section3.list2.name'),
                number: '1,108',
                type:t('li9.section3.list2.type')
            },
            {
                name: t('li9.section3.list3.name'),
                number: '5.3',
                type:t('li9.section3.list3.type')
            },
            {
                name: t('li9.section3.list4.name'),
                number: '3.5',
                type:t('li9.section3.list4.type')
            },
        ]
    }

    const section4={
        title:t('li9.section4.title'),
        subTitle:t('li9.section4.subTitle'),
        video:"http://vod.ampmake.com/mda-nfhu7dkhx8qjqj4z/vodmp4fd/mda-nfhu7dkhx8qjqj4z.mp4",
    }

    const section5=[
        {
            title: t('li9.section5.list1.title'),
            text: t('li9.section5.list1.text'),
            media: '/Li9/lil9-section4-1-min.jpg',
            mediaRes: '/Li9/lil9-section4-1-res-min.jpg',
            video:false
        },
        {
            title: t('li9.section5.list2.title'),
            text: t('li9.section5.list2.text'),
            media: '/Li9/lil9-section4-2-min.jpg',
            mediaRes: '/Li9/lil9-section4-2-res-min.jpg',
            video:false

        },
    ]


    const section6={
        title:t('li9.section6.title'),
        subTitle:t('li9.section6.subTitle'),
        video:"http://vod.ampmake.com/mda-nfjijhq94uyxwypv/vodmp4fd/mda-nfjijhq94uyxwypv.mp4",
    }

    const section7=[
        {
            title: t('li9.section7.list1.title'),
            text: t('li9.section7.list1.text'),
            media: 'http://vod.ampmake.com/mda-nhpfz08u8dpqv6hf/vodmp4fd/mda-nhpfz08u8dpqv6hf.mp4',
            video:true
        },
        {
            title: t('li9.section7.list2.title'),
            text: t('li9.section7.list2.text'),
            media: 'http://vod.ampmake.com/mda-nfixyiqg582cs5m1/vodmp4fd/mda-nfixyiqg582cs5m1.mp4',
            video:true
        },
        {
            title: t('li9.section7.list3.title'),
            text: t('li9.section7.list3.text'),
            media: '/Li9/lil9-section6-3-min.jpg',
            mediaRes: '/Li9/lil9-section6-3-res-min.jpg',
            video:false
        },
        {
            title: t('li9.section7.list4.title'),
            text: t('li9.section7.list4.text'),
            media: '/Li9/lil9-section6-4-min.jpg',
            mediaRes: '/Li9/lil9-section6-4-res-min.jpg',
            video:false
        },
    ]
    const section8=[
        {
            title: t('li9.section8.list1.title'),
            text: t('li9.section8.list1.text'),
            media: 'http://vod.ampmake.com/mda-nfiy2nbw4qm1gitj/vodmp4fd/mda-nfiy2nbw4qm1gitj.mp4',
            video:true
        },
        {
            title: t('li9.section8.list2.title'),
            text: t('li9.section8.list2.text'),
            media: '/Li9/lil9-section7-2.jpg',
            mediaRes: '/Li9/lil9-section7-2-res.jpg',
            video:false
        },
        {
            title: t('li9.section8.list3.title'),
            text: t('li9.section8.list3.text'),
            media: 'http://vod.ampmake.com/mda-nfhy8c4k74ii1hn5/vodmp4fd/mda-nfhy8c4k74ii1hn5.mp4',
            video:true
        },
    ]
    const section9=[
        {
            title: t('li9.section9.list1.title'),
            text: t('li9.section9.list1.text'),
            media: 'http://vod.ampmake.com/mda-nfhw7agxath99v2r/vodmp4fd/mda-nfhw7agxath99v2r.mp4',
            video:true
        },
        {
            title: t('li9.section9.list2.title'),
            text: t('li9.section9.list2.text'),
            media: 'http://vod.ampmake.com/mda-nfiy0zuhi3hzhcf1/vodmp4fd/mda-nfiy0zuhi3hzhcf1.mp4',
            video:true
        },
    ]

    const section10=[
        {
            title: t('li9.section10.list1.title'),
            text: t('li9.section10.list1.text'),
            media: '/Li9/lil9-section9-1.jpg',
            mediaRes: '/Li9/lil9-section9-1-res.jpg',
            video:false
        },
        {
            title: t('li9.section10.list2.title'),
            text: t('li9.section10.list2.text'),
            media: '/Li9/lil9-section9-2.jpg',
            mediaRes: '/Li9/lil9-section9-2-res.jpg',
            video:false
        },
        {
            title: t('li9.section10.list3.title'),
            text: t('li9.section10.list3.text'),
            media: '/Li9/lil9-section9-3.jpg',
            mediaRes: '/Li9/lil9-section9-3-res.jpg',
            video:false
        },
        {
            title: t('li9.section10.list4.title'),
            text: t('li9.section10.list4.text'),
            media: '/Li9/lil9-section9-4.jpg',
            mediaRes: '/Li9/lil9-section9-4-res.jpg',
            video:false
        },

    ]
    const section11=[
        {
            title: t('li9.section11.list1.title'),
            text: t('li9.section11.list1.text'),
            media: '/Li9/lil9-section10-1.jpg',
            mediaRes: '/Li9/lil9-section10-1-res.jpg',
            video:false
        },
        {
            title: t('li9.section11.list2.title'),
            text: t('li9.section11.list2.text'),
            media: 'http://vod.ampmake.com/mda-nfhqgmk75uhkjzxd/vodmp4fd/mda-nfhqgmk75uhkjzxd.mp4',
            video:true
        },
        {
            title: t('li9.section11.list3.title'),
            text: t('li9.section11.list3.text'),
            media: '/Li9/lil9-section10-3.jpg',
            mediaRes: '/Li9/lil9-section10-3-res.jpg',
            video:false
        }
    ]

    const section12={
        title:t('li9.section12.title'),
        subTitle:t('li9.section12.subTitle'),
        video:"http://v.ampmake.com/lilibrary/hd/850326828184466/a403d33c-91af-4af7-a769-7577b2eb0cbb.mp4",
    }

    const section13=[
        {
            title: t('li9.section13.list1.title'),
            text: t('li9.section13.list1.text'),
            media: 'http://vod.ampmake.com/mda-nirfa4iysqvi9n7z/vodmp4fd/mda-nirfa4iysqvi9n7z.mp4',
            video:true
        },
        {
            title: t('li9.section13.list2.title'),
            text: t('li9.section13.list2.text'),
            media: 'http://vod.ampmake.com/mda-nfiiacac5ebkf7gz/vodmp4fd/mda-nfiiacac5ebkf7gz.mp4',
            video:true
        },
        {
            title: t('li9.section13.list3.title'),
            text: t('li9.section13.list3.text'),
            media: '/Li9/lil9-section12-3-min.jpg',
            mediaRes: '/Li9/lil9-section12-3-res-min.jpg',
            video:false
        }
    ]

    const section12={
        title:t('li9.section12.title'),
        subTitle:t('li9.section12.subTitle'),
        image:"",
    }

    return (
        <div>
            <section className={'w-full h-screen relative'}>
                <IndexBanner bgRes={indexBanner.bgRes} bg={indexBanner.bg} logoImage={indexBanner.logoImage}
                             carHeader={true}/>
            </section>
            {/*section2*/}
            <section className={'w-full h-screen'}>
                <ListCar
                    list={section2.list}
                    title={section2.title}
                    bgRes={section2.bgRes} bg={section2.bg}
                />
            </section>
            {/*section3*/}
            <section className={'w-full h-screen'}>
                <ListCar
                    list={section3.list}
                    title={section3.title}
                    bgRes={section3.bgRes}
                    listCenter={true}
                    bg={section3.bg}
                />
            </section>
            {/*section4*/}
            <section className={'w-full h-auto relative'}>
                <div className={'w-full h-full relative z-[5]  bg-black'}>
                    <VideoUI media={section4.video}/>
                </div>
                <div className="container top-5 left-1/2 -translate-x-1/2 absolute z-[10] section">
                    <SectionTitle
                        darkMode={'true'}
                        subSmallTitle={section4.subTitle}
                        title={section4.title}/>
                </div>
            </section>
            {/*section5*/}
            <section className={'relative'}>
                <SwiperSection carousel={section5} isShadow={true}/>
            </section>
            {/*section6*/}
            <section className={'w-full h-auto relative'}>
                <div className={'w-full h-full relative z-[5]  bg-black'}>
                    <VideoUI media={section6.video}/>
                </div>
                <div className="container top-5 left-1/2 -translate-x-1/2 absolute z-[10] section">
                    <SectionTitle
                        darkMode={'true'}
                        subSmallTitle={section6.subTitle}
                        title={section6.title}/>
                </div>
            </section>
            {/*section7*/}
            <section className={'relative'}>
                <SwiperSection carousel={section7} isShadow={true}/>
            </section>
            {/*section8*/}
            <section className={'relative'}>
                <SwiperSection carousel={section8} isShadow={true}/>
            </section>
            {/*section9*/}
            <section className={'relative'}>
                <SwiperSection carousel={section9} isShadow={true}/>
            </section>
            {/*section10*/}
            <section className={'relative'}>
                <SwiperSection carousel={section10} isShadow={true}/>
            </section>
            {/*section11*/}
            <section className={'relative'}>
                <SwiperSection carousel={section11} isShadow={true}/>
            </section>
            {/*section12*/}
            <section className={'w-full h-auto relative'}>
                <div className={'w-full h-full relative z-[5]  bg-black'}>
                    <VideoUI media={section12.video}/>
                </div>
                <div className="container top-5 left-1/2 -translate-x-1/2 absolute z-[10] section">
                    <SectionTitle
                        darkMode={'true'}
                        subSmallTitle={section12.subTitle}
                        title={section12.title}/>
                </div>
            </section>
            {/*section13*/}
            <section className={'relative'}>
                <SwiperSection carousel={section13} isShadow={true}/>
            </section>
            {/*section14*/}
            <section className={'relative'}>

            </section>



            <section className={'section'}>
                <div className="container section-item-space">
                    <SectionTitle title={'Over 100 Features Included, No Need to Choose.'}/>
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