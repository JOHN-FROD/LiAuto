import React from 'react';
import {HeaderBannerAbout, IndexCard, ListCar, SectionTitle, Video} from "@/components";
import {BsCaretRightFill} from "react-icons/bs";

const aboutBanner = {
    bg:'/about.jpg',
    title: 'Create a Mobile Home, Create Happiness.',
    subTitle:' We are committed to providing you and your family with smart EVs that are safer, more comfortable and more convenient.'
}

const section2 = {
    title:'Hello! We Are Li Auto.',
    subTitle: 'Li Auto is aiming for an all-electric lineup including one super-flagship "Mega" model, five REEV models, and five high-voltage BEV models by 2025 to offer families a diverse range of choice in the CNY 200,000 price bracket.',

  list :[
        {
            name:  'Flagship 6-Seat Family SUV' ,
            number:' Li L9' ,
        },
        {
            name: 'Luxury 6-Seat Family SUV',
            number: ' Li L8' ,
        },
        {
            name: ' Flagship 5-Seat Family SUV',
            number:'Li L7'  ,
        },

    ]

}

const About = () => {
    return (
        <div>
            <section className="w-full h-screen">
                <HeaderBannerAbout bg={aboutBanner.bg} bgRes={aboutBanner.bg} title={aboutBanner.title}
                                   subTitle={aboutBanner.subTitle}/>
            </section>
            <section className={
                'w-full h-screen'
            }>
                <ListCar list={section2.list} listCenter={true}
                         about={true}
                         subTitle={section2.subTitle}
                         title={section2.title}
                         bgRes={'/mega.jpg'} bg={'/mega-1920.jpg'} logoImage={'/mega-eng.png'} carHeader={true}/>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  '}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div
                            className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 flex flex-col justify-center items-center '}>
                            <SectionTitle darkMode={false} styleBox={'text-center'}
                                          title={'We Create Mobile Homes'}
                            />
                            <button className={'flex gap-x-2  items-center  mt-5'}>

                                <span>
                                Watch Video
                                </span>
                                <span>
                                    <BsCaretRightFill/>
                                </span>
                            </button>
                        </div>
                        <div className={'col-span-5 '}>
                            <Video style={'w-full aspect-video '}/>

                        </div>

                    </div>

                </div>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  '}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div
                            className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 flex flex-col justify-center items-center '}>
                            <SectionTitle darkMode={false} styleBox={'text-center'}
                                          title={'A More Convenient Energy Solution'}
                                          subBigTitle={'With REEV and pure electric power options, we are leading the renewable energy revolution to replace gasoline vehicles.'}


                            />
                            <button className={'flex gap-x-2  items-center  mt-5'}>

                                <span>
                                Watch Video
                                </span>
                                <span>
                                    <BsCaretRightFill/>
                                </span>
                            </button>
                        </div>
                        <div className={'col-span-5 '}>
                            <Video style={'w-full aspect-video '}/>

                        </div>

                    </div>

                </div>
            </section>
            <section className={'section'}>
                <div className={'container section-item-space'}>
                    <SectionTitle title={'Learn About Li Auto'} subBigTitle={
                        "  We are dedicated to \"Create a Mobile Home, Create Happiness\". "
                    }/>

                    <div className={'grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-2'}>
                        <div className={'col-span-1 aspect-square md:aspect-[12/10]'}>
                            <IndexCard contentPositionEnd={'justify-between'} about={true}
                                       bottomText={'*Comes standard on all Li L series models.'}/>
                        </div>
                        <div className={'col-span-1 aspect-square md:aspect-[12/10]'}>
                            <IndexCard contentPositionEnd={'justify-between'} about={true}
                                       bottomText={'*Comes standard on all Li L series models.'}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'section'}>
                <div className={'container section-item-space md:px-[5%]'}>
                    <SectionTitle title={'Learn About Li Auto'} subBigTitle={
                        "  We are dedicated to \"Create a Mobile Home, Create Happiness\". "
                    }/>

                    <div className={'grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-2'}>
                        <div className={'col-span-1 aspect-square md:aspect-[12/10]'}>
                            <IndexCard contentPositionEnd={'justify-between'} about={true}/>
                        </div>
                        <div className={'col-span-1 aspect-square md:aspect-[12/10]'}>
                            <IndexCard contentPositionEnd={'justify-between'} about={true}
                                      />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;