import {ImageUI, IndexBanner, SectionTitle, SwiperSection,  VideoUI} from "@/components";
import {BsCaretRightFill} from "react-icons/bs";
import {useTranslation} from "react-i18next";

const liMega = ( ) => {

    const {t}= useTranslation()

    const indexBanner={
        bg:`${process.env.NEXT_PUBLIC_IMAGE}/limega/header-1920.jpg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE}/limega/header-768.jpg`,
        logoImage:`${process.env.NEXT_PUBLIC_IMAGE}/limega/header-logo.png`,
    }
    const section2 = {
        title : t('mega.section2.title'),
        subTitle: t('mega.section2.subTitle'),
        videoHref: t('mega.section2.videoHref'),
        video: 'https://p.ampmake.com/lilibrary/hd/015560690536076/5e38db37-7ae5-4129-bdbe-4bbfa66bf6d0.mp4'
    }
    const section3 = {
        title: t('mega.section3.title'),
        subTitle: t('mega.section3.subTitle'),
        lists : [
            {
              title: t('mega.section3.link1.title'),
              text: t('mega.section3.link1.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/2-section-1-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/2-section-1-720.jpg`
            },
            {
              title:  t('mega.section3.link2.title'),
              text:  t('mega.section3.link2.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/2-section-2-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/2-section-2-720.jpg`
            },
            {
              title:  t('mega.section3.link3.title'),
              text:  t('mega.section3.link3.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/2-section-3-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/2-section-3-720.jpg`
            },
            {
              title:  t('mega.section3.link4.title'),
              text:  t('mega.section3.link4.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/2-section-4-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/2-section-4-720.jpg`
            }
        ],
    }
    const section4 = {
        title:  t('mega.section4.title'),
        subTitle: t('mega.section4.subTitle'),
        lists: [
            {
              title: t('mega.section4.link1.title'),
              subTitle: "0.215*"
            },
            {
                title: t('mega.section4.link2.title'),
              subTitle: "15.9 kWh/100 km*"
            },
        ],
        media: 'https://p.ampmake.com/lilibrary/hd/609571501592522/adce2d87-4613-4575-b0ff-0380e16ca9df.mp4',
        subTitle2: t('mega.section4.subTitle2'),
        subTitle3:  t('mega.section4.subTitle3'),
        subTitle4:  t('mega.section4.subTitle4')
    }
    const section5 = {
        title:  t('mega.section5.title'),
        subTitle: t('mega.section5.subTitle'),
        lists: [
            {
              title: t('mega.section5.link1.title'),
              text: t('mega.section5.link1.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/4-section-1-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/4-section-1-720.jpg`
            },
            {
              title: t('mega.section5.link2.title'),
              text: t('mega.section5.link2.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/4-section-2-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/4-section-2-720.jpg`
            },
            {
              title: t('mega.section5.link3.title'),
              text: t('mega.section5.link3.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/4-section-3-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/4-section-3-720.jpg`
            }
        ],
    }
    const section6 = {
        title:  t('mega.section6.title'),
        subTitle: t('mega.section6.subTitle'),
        lists: [
            {
              title: t('mega.section6.link1.title'),
              text: t('mega.section6.link1.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/5-section-1-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/5-section-1-720.jpg`
            },
            {
              title: t('mega.section6.link2.title'),
              text: t('mega.section6.link2.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/5-section-2-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/5-section-2-720.jpg`
            },
        ],
        subTitle2: t('mega.section6.subTitle2')

    }
    const section7 = {
        title:  t('mega.section7.title'),
        subTitle: t('mega.section7.subTitle'),
        lists: [
            {
              title: t('mega.section7.link1.title'),
              text: t('mega.section7.link1.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/6-section-1-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/6-section-1-720.jpg`
            },
            {
              title: t('mega.section7.link2.title'),
              text: t('mega.section7.link2.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/6-section-2-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/6-section-2-720.jpg`
            },
        ],
    }
    const section8 = {
        title:  t('mega.section8.title'),
        subTitle: t('mega.section8.subTitle'),
        lists: [
            {
              title: t('mega.section8.link1.title'),
              text: t('mega.section8.link1.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/7-section-1-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/7-section-1-720.jpg`
            },
            {
              title: t('mega.section8.link2.title'),
              text: t('mega.section8.link2.text'),
              media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/7-section-2-1920.jpg`,
              mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/7-section-2-720.jpg`
            },
            {
                title: t('mega.section8.link3.title'),
               text: t('mega.section8.link3.text'),
                media: `${process.env.NEXT_PUBLIC_IMAGE}/limega/7-section-2-1920.jpg`,
                mediaRes : `${process.env.NEXT_PUBLIC_IMAGE}/limega/7-section-2-720.jpg`
            },

        ],
    }
    const section9 = {
        title:  t('mega.section9.title'),
        subTitle: t('mega.section9.subTitle'),
        lists: [
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-1r.jpg`,
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-2r.jpg`,
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-3r.jpg`,
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-4r.jpg`,
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-5r.jpg`,
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-6r.jpg`,
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-7r.jpg`,
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-8r.jpg`,
            `${process.env.NEXT_PUBLIC_IMAGE}/limega/8-section-9r.jpg`,
        ],
    }

    return (

        <div className="relative bg-black">
            <section className={
                'w-full h-screen'
            }>
                <IndexBanner bgRes={indexBanner.bgRes} bg={indexBanner.bg} logoImage={indexBanner.logoImage} carHeader={true}/>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  container-content'}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={section2.title}
                                          subSmallTitle={section2.subTitle}/>
                            <button className={'flex gap-x-2 text-white  items-center  mt-5'}>
                                <span className="">
                                {section2.videoHref}
                                </span>
                                <span>
                                    <BsCaretRightFill/>
                                </span>
                            </button>
                        </div>
                        <div className={'col-span-5 '}>
                            <VideoUI media={section2.video} style={'w-full aspect-video '}/>

                        </div>

                    </div>

                </div>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  container-content'}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={section3.title}
                                          subSmallTitle={section3.subTitle}/>
                        </div>
                        <div className={'col-span-5 '}>
                            <SwiperSection hoverChangeText={true} carousel={section3.lists} isShadow={true}/>

                        </div>

                    </div>

                </div>
            </section>
            <section className={'relative section-car  border-t border-white/50 md:border-0 '}>
                <div className={'container container-content '}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div
                            className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 section-item-children-space'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'}
                                          title={section4.title}
                                          subSmallTitle={section4.subTitle}/>

                            <div className={'flex  divide-x'}>
                                <div className={'flex flex-col  justify-between gap-2 pl-0  px-[5%]'}>
                                    <p className={'text-lg md:text-lg text-currentWhiteText'}>
                                       {section4.lists[0].title}
                                    </p>
                                    <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                                       {section4.lists[0].subTitle}
                                    </p>
                                </div>
                                <div className={'flex flex-col  items-end text-left px-[5%]'}>
                                    <div className={'flex flex-col justify-between gap-2'}>
                                        <p className={'text-lg md:text-lg text-currentWhiteText'}>
                                          {section4.lists[1].title}                                        </p>
                                        <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                                          {section4.lists[1].subTitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-span-5 '}>
                            <VideoUI media={section4.media} style={'w-full aspect-video '}/>
                            <div className={'space-y-1 text-darkText text-xs mt-2'}>
                                <p >
                                   {section4.subTitle2}
                                </p>
                                <p>
                                   {section4.subTitle3}
                                </p>
                                <p>
                                   {section4.subTitle4}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  container-content'}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={section5.title}
                                          subSmallTitle={section5.subTitle}/>
                        </div>
                        <div className={'col-span-5 '}>
                            <SwiperSection hoverChangeText={true} carousel={section5.lists} isShadow={true}/>

                        </div>

                    </div>

                </div>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  container-content'}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={section6.title}
                                          subSmallTitle={section6.subTitle}/>
                        </div>
                        <div className={'col-span-5 '}>
                            <SwiperSection hoverChangeText={true} carousel={section6.lists} isShadow={true}/>

                        </div>
                        <div className="col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3">
                          <p className="text-white/50 text-sm ">{section6.subTitle2}</p>
                        </div>

                    </div>

                </div>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  container-content'}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={section7.title}
                                          subSmallTitle={section7.subTitle}/>
                        </div>
                        <div className={'col-span-5 '}>
                            <SwiperSection hoverChangeText={true} carousel={section7.lists} isShadow={true}/>

                        </div>

                    </div>

                </div>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  container-content'}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={section8.title}
                                          subSmallTitle={section8.subTitle}/>
                        </div>
                        <div className={'col-span-5 '}>
                            <SwiperSection hoverChangeText={true} carousel={section8.lists} isShadow={true}/>

                        </div>

                    </div>

                </div>
            </section>
            <section className={'section-car  border-t border-white/50 md:border-0'}>
                <div className={'container container-content '}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={section9.title}
                                          subSmallTitle={section9.subTitle} subTitleTop={false}/>

                        </div>
                        <div className={'col-span-5  md:overflow-x-hidden overflow-x-scroll'}>
                            <div
                                className=" grid grid-cols-3 gap-2 w-[300%] md:w-full">
                                    {
                                        section9.lists.map(item => (
                                            <div className={'rounded-lg aspect-video overflow-hidden relative'}>
                                                <ImageUI src={item}/>
                                            </div>
                                        ))
                                    }

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default liMega;