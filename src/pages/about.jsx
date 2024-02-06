import React from "react";
import {
  HeaderBannerAbout,
  IndexCard,
  ListCar,
  SectionTitle,
  VideoUI,
  Feedback,
  SwiperSection,
} from "@/components";
import { BsCaretRightFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import AboutGridSection from "@/components/about-grid-section/about-grid-section";

const About = () => {
  const { t } = useTranslation()


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
  const section3 = {
    title: t('about.section3.title'),
    subTitle: t('about.section3.subTitle'),
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
  const section4 = {
    title: t('about.section4.title'),
    subTitle: t('about.section4.subTitle'),
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
  const section5 = {
    title: t('about.section5.title'),
    subTitle: t('about.section5.subTitle'),
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
  const section6 = {
    title: t('about.section6.title'),
    subTitle: t('about.section6.subTitle'),
    lists: [
      {
        title: t('about.section6.list1.title'),
        text: t('about.section6.list1.text'),
        bg: '/about/section-6-card-1.jpg',
        bgRes: '/about/section-6-card-1-resp.jpg'
      },
      {
        title: t('about.section6.list2.title'),
        text: t('about.section6.list2.text'),
        bg: '/about/section-6-card-2.jpg',
        bgRes: '/about/section-6-card-2-resp.jpg'
      },
      {
        title: t('about.section6.list3.title'),
        text: t('about.section6.list3.text'),
        bg: '/about/section-6-card-3.jpg',
        bgRes: '/about/section-6-card-3-resp.jpg'
      },
      {
        title: t('about.section6.list4.title'),
        text: t('about.section6.list4.text'),
        bg: '/about/section-6-card-4.jpg',
        bgRes: '/about/section-6-card-4-resp.jpg'
      },
    ]
  }
  const section7 = {
    title: t("about.section7.title"),
    media: 'https://p.ampmake.com/lilibrary/hd/760886048688968/5b490e42-eca4-4000-97fe-63354f10fd24.mp4'
  }
  const section8 = {
    title: t("about.section8.title"),
    subtitle: t("about.section8.subTitle"),
    lists: [
      {
        title: t("about.section8.list1.title"),
        text: t("about.section8.list1.subtitle"),
        text2: t("about.section8.list1.subtitle2"),
        bg: "/about/section-8-card-1.jpg",
        bgRes: "/about/section-8-card-1-resp.jpg"
      },
      {
        title: t("about.section8.list2.title"),
        text: t("about.section8.list2.subtitle"),
        text2: t("about.section8.list2.subtitle2"),
        bg: "/about/section-8-card-2.jpg",
        bgRes: "/about/section-8-card-2-resp.jpg"
      },
      {
        title: t("about.section8.list3.title"),
        text: t("about.section8.list3.subtitle"),
        text2: t("about.section8.list3.subtitle2"),
        bg: "/about/section-8-card-3.jpg",
        bgRes: "/about/section-8-card-3-resp.jpg"
      }
    ]
  }
  const section9 = {
    title: t("about.section9.title"),
    subtitle: t("about.section9.subTitle"),
    lists: [
      {
        id:1,
        mediaRes: "/about/section9-card1.jpg"
      },
      {
        id:2,
        mediaRes: "/about/section9-card2.jpg"
      },
      {
        id:3,

        mediaRes: "/about/section9-card3.jpg"
      },
      {
        id:4,

        mediaRes: "/about/section9-card4.jpg"
      }
    ],
    card1: {
      bg: "/about/section-9-card-1.jpg"
    },
    card2: {
      title: t("about.section9.card1.title"),
      text: t("about.section9.card1.text")
    },
    card3: {
      bg: "/about/section-9-card-2.jpg"
    },
    card4: {
      title: t("about.section9.card2.title"),
      text: t("about.section9.card2.text")
    },
    card5: {
      bg: "/about/section-9-card-3.jpg"
    },
    card6: {
      bg: "/about/section-9-card-4.jpg"
    },
    card7: {
      title: t("about.section9.card3.title"),
      text: t("about.section9.card3.text")
    },
    card8: {
      bg: "/about/section-9-card-5.jpg"
    },
    card9: {
      bg: "/about/section-9-card-6.jpg"
    },
    card10: {
      bg: "/about/section-9-card-7.jpg"
    },
    card11: {
      title: t("about.section9.card4.title"),
      text: t("about.section9.card4.text")
    },
    card12: {
      bg: "/about/section-9-card-8.jpg"
    }
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
        <div className={"container section-item-space container-content "}>
          <div className="lg:px-[6vw]">
            <SectionTitle
              subTitleTop={false}
              title={section6.title}
              subBigTitle={section6.subTitle}
            />
          </div>
          <div className={"grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-2"}>
            {
              section6.lists.map(card => (
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
                media={section7.media}
                style={"w-full aspect-video "}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative section-car">
        <div className="container container-content">
          <SectionTitle
            subTitleTop={false}
            title={section8.title}
            subBigTitle={section8.subtitle}
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-2 mt-5">
            {
              section8.lists.map(card => (
                <div className="-full aspect-square md:aspect-auto md:h-[55vh]">
                  <IndexCard
                    contentPositionEnd={"justify-between"}
                    title={card.title}
                    subtitle={card.text}
                    bottomText={card.text2}
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
      </section>
      <section className="relative section-car md:pb-[8vw]">
        <div className="container container-content">
          <SectionTitle
            subTitleTop={false}
            title={section9.title}
            subBigTitle={section9.subtitle}
          />
          <AboutGridSection row1card1={section9.card1.bg} row1title1={section9.card2.title} row1subtitle1={section9.card2.text} row1card2={section9.card3.bg} row1title2={section9.card4.title} row1subtitle2={section9.card4.text} row1card3={section9.card5.bg} row2card1={section9.card6.bg} row2title1={section9.card7.title} row2subtitle1={section9.card7.text} row2card2={section9.card8.bg} row3card1={section9.card9.bg} row3card2={section9.card10.bg} row3title1={section9.card11.title} row3subtitle1={section9.card11.text} row3card3={section9.card12.bg} />
          <SwiperSection carousel={section9.lists} hoverChangeText={false} Res={true}/>
        </div>
      </section>
    </div>
  );
};

export default About;
