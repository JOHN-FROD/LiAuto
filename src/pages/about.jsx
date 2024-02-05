import React from "react";
import {
  HeaderBannerAbout,
  IndexCard,
  ListCar,
  SectionTitle,
  VideoUI,
  Feedback,
} from "@/components";
import { BsCaretRightFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t}=useTranslation()

  
const aboutBanner = {
    bg: "/about/about-header.jpg",
    bgRes: "/about/about-header-resp.jpg",
    title: t('about.header.title'),
    subTitle: t('about.header.subTitle'),
  }
  const section1 = {
    title: t('about.section1.title'),
    subTitle: t('about.section1.subTitle'),
    bgRes: '/about/about-section-1.jpg',
    bg: '/about/about-section-1-resp.jpg',
    list: [
      {
        name: t('about.section1.list1.text'),
        number: t('about.section1.list1.title'),
      },
      {
        name: t('about.section1.list2.text'),
        number: t('about.section1.list2.title'),
      },
      {
        name: t('about.section1.list3.text'),
        number: t('about.section1.list3.title'),
      },
    ],
  }
  const section2 = {
    title: t('about.section2.title'),
    href: t('about.section2.href'),
    media: 'https://p.ampmake.com/lilibrary/hd/76054470195839/2b6ec343-d0f6-463e-b882-fe82082908ee.mp4'
  }
  const section3 ={
    title : t('about.section3.title'),
    subTitle : t('about.section3.subTitle'),
    lists: [
      {
        title: t('about.section3.list1.title'),
        text: t('about.section3.list1.text'),
        href: t('about.section3.list1.href'),
        text2: t('about.section3.list1.text2'),
        bg: '/about/section-3-card-1.jpg',
        bgRes: '/about/section-3-card-1-resp.jpg',
      },
      {
        title: t('about.section3.list2.title'),
        text: t('about.section3.list2.text'),
        href: t('about.section3.list2.href'),
        text2: t('about.section3.list2.text2'),
        bg: '/about/section-3-card-2.jpg',
        bgRes: '/about/section-3-card-2-resp.jpg',
      },
    ]
  }
  const section4 ={
    title : t('about.section4.title'),
    subTitle : t('about.section4.subTitle'),
    lists: [
      {
        title: t('about.section4.list1.title'),
        text: t('about.section4.list1.text'),
        href: t('about.section4.list1.href'),
        text2: t('about.section4.list1.text2'),
        bg: '/about/section-4-card-1.jpg',
        bgRes: '/about/section-4-card-1-resp.jpg',
      },
      {
        title: t('about.section4.list2.title'),
        text: t('about.section4.list2.text'),
        href: t('about.section4.list2.href'),
        text2: t('about.section4.list2.text2'),
        bg: '/about/section-4-card-2.jpg',
        bgRes: '/about/section-4-card-2-resp.jpg',
      },
    ]
  }
  const section5 ={
    title : t('about.section5.title'),
    subTitle : t('about.section5.subTitle'),
    list1: {
        title: t('about.section5.list1.title'),
        text: t('about.section5.list1.text'),
        href: t('about.section5.list1.href'),
        text2: t('about.section5.list1.text2'),
        bg: '/about/section-5-card-1.jpg',
        bgRes: '/about/section-5-card-1-resp.jpg',
      },
    lists: [
      {
        title: t('about.section5.list2.title'),
        text: t('about.section5.list2.text'),
        href: t('about.section5.list2.href'),
        text2: t('about.section5.list2.text2'),
        bg: '/about/section-5-card-2.jpg',
        bgRes: '/about/section-5-card-2-resp.jpg',
      },
      {
        title: t('about.section5.list3.title'),
        text: t('about.section5.list3.text'),
        href: t('about.section5.list3.href'),
        text2: t('about.section5.list3.text2'),
        bg: '/about/section-5-card-3.jpg',
        bgRes: '/about/section-5-card-3-resp.jpg',
      },
      {
        title: t('about.section5.list4.title'),
        text: t('about.section5.list4.text'),
        href: t('about.section5.list4.href'),
        text2: t('about.section5.list4.text2'),
        bg: '/about/section-5-card-4.jpg',
        bgRes: '/about/section-5-card-4-resp.jpg',
      },
    ]
  }



  return (
    <div>
      <section className="w-full h-screen">
        <HeaderBannerAbout
          bg={aboutBanner.bg}
          bgRes={aboutBanner.bgRes}
          title={aboutBanner.title}
          subTitle={aboutBanner.subTitle}
        />
      </section>
      <section className={"w-full h-[120vh]"}>
        <ListCar
          list={section1.list}
          listCenter={true}
          about={true}
          subTitle={section1.subTitle}
          title={section1.title}
          bgRes={section1.bgRes}
          bg={section1.bg}
        />
      </section>
      <section className={"relative section-car "}>
        <div className={"container  container-content"}>
          <div className={"grid grid-cols-5 section-item-space"}>
            <div
              className={
                "col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 flex flex-col justify-center items-center "
              }
            >
              <SectionTitle
                subTitleTop={false}
                darkMode={false}
                styleBox={"text-center"}
                title={section2.title}
              />
              <button className={"flex gap-x-2  items-center  mt-5"}>
                <span>{section2.href}</span>
                <span>
                  <BsCaretRightFill />
                </span>
              </button>
            </div>
            <div className={"col-span-5 "}>
              <VideoUI
                media={section2.media}
                style={"w-full aspect-video "}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={"section"}>
        <div className={"container container-content section-item-space"}>
          <SectionTitle
            subTitleTop={false}
            title={section3.title}
            subBigTitle={section3.subTitle}
          />

          <div className={"grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-2"}>
            {
                section3.lists.map(card => (
                    <div className={"col-span-1 aspect-square md:aspect-auto md:h-[60vh] lg:h-[80vh]"}>
                       <IndexCard
                         contentPositionEnd={"justify-between"}
                         title={card.title}
                         subtitle={card.text}
                         btnText={card.href}
                         about={true}
                         bg={card.bg}
                         bgRes={card.bgRes}
                         bottomText={card.text2}
                       />
                     </div>
                ))
            }
          </div>
        </div>
      </section>
      <section className={"section"}>
        <div className={"container container-content section-item-space"}>
          <SectionTitle
            subTitleTop={false}
            title={section4.title}
            subBigTitle={section4.subTitle}
          />

          <div className={"grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-2"}>
            {
                section4.lists.map(card => (
                    <div className={"col-span-1 aspect-square md:aspect-auto md:h-[60vh] lg:h-[80vh]"}>
                       <IndexCard
                         contentPositionEnd={"justify-between"}
                         title={card.title}
                         subtitle={card.text}
                         btnText={card.href}
                         about={true}
                         bg={card.bg}
                         bgRes={card.bgRes}
                       />
                     </div>
                ))
            }
          </div>
        </div>
      </section>
      <section className={"section"}>
        <div className={"container section-item-space md:px-[5%]"}>
          <SectionTitle
            subTitleTop={false}
            title={section5.title}
            subBigTitle={section5.subTitle}
          />

          <div className={"grid grid-cols-1 md:gap-4 gap-2"}>
            <div className="w-full aspect-square md:aspect-auto md:h-[85vh]">
                <IndexCard
                     contentPositionEnd={"justify-between"}
                     title={section5.list1.title}
                     subtitle={section5.list1.text}
                     about={true}
                     bg={section5.list1.bg}
                     bgRes={section5.list1.bgRes}
                   />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2">
                {
                    section5.lists.map(card => (
                        <div className="-full aspect-square md:aspect-auto md:h-[55vh]">
                            <IndexCard
                              contentPositionEnd={"justify-between"}
                              title={card.title}
                              subtitle={card.text}
                              about={true}
                              bg={card.bg}
                              bgRes={card.bgRes}
                              isAboutGrid={true}
                            />
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
      </section>
      <section className={"section"}>
        <div className={"container section-item-space md:px-[5%]"}>
          <SectionTitle
            subTitleTop={false}
          />
          <div>
            <Feedback />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
