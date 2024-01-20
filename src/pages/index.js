import { IndexBanner, IndexCard, SectionTitle} from "@/components";
import { useTranslation } from "react-i18next";


export default function Home() {

  const {t} = useTranslation()

  const HeaderBanner = {
    bg: '/LiAuto/liauto-header.jpg',
    bgRes: '/LiAuto/liauto-header-res.jpg',
    logoImage: '/LiAuto/MEGA-en-logo.png'
  }
  const section1 = {
    lists: [
      {
        media: '/LiAuto/liauto-section1-1.jpg',
        mediaRes: '/LiAuto/liauto-section1-1-res.jpg',
        logoImage: '/LiAuto/Li L7.png'
      },
      {
        media: '/LiAuto/liauto-section1-2.jpg',
        mediaRes: '/LiAuto/liauto-section1-2-res.jpg',
        logoImage: '/LiAuto/Li L8.png'
      }
    ]
  }
  const section2 = {
    media: '/LiAuto/liauto-section2.jpg',
    mediaRes: '/LiAuto/liauto-section2-res.jpg',
    logoImage: '/LiAuto/Li L9.png'
  }
  const section3 = {
    title: t('index.section1.title'),
    subtitle: t('index.section1.subtitle'),
    cards: [
      {
        title: t('index.section1.card1.title'),
        subtitle: t('index.section1.card1.subtitle'),
        media: '/LiAuto/liauto-section3-1.jpg',
        mediaRes: '/LiAuto/liauto-section3-1-res.jpg'
      },
      {
        title: t('index.section1.card2.title'),
        subtitle: t('index.section1.card2.subtitle'),
        media: "/LiAuto/liauto-section3-2.jpg",
        mediaRes: "/LiAuto/liauto-section3-2-res.jpg"
      },
      {
        title: t('index.section1.card3.title'),
        subtitle: t('index.section1.card3.subtitle'),
        media: "/LiAuto/liauto-section3-3.jpg",
        mediaRes: "/LiAuto/liauto-section3-3-res.jpg"
      },
      {
        title: t('index.section1.card4.title'),
        subtitle: t('index.section1.card4.subtitle'),
        media: "/LiAuto/liauto-section3-4.jpg",
        mediaRes: "/LiAuto/liauto-section3-4-res.jpg"
      },
      {
        title: t('index.section1.card5.title'),
        subtitle: t('index.section1.card5.subtitle'),
        media: "/LiAuto/liauto-section3-5.jpg",
        mediaRes: "/LiAuto/liauto-section3-5-res.jpg"
      },
      {
        title: t('index.section1.card6.title'),
        subtitle: t('index.section1.card6.subtitle'),
        media: "/LiAuto/liauto-section3-6.jpg",
        mediaRes: "/LiAuto/liauto-section3-6-res.jpg"
      }
    ]
  }
  const section4 = {
    title: t('index.section2.title'),
    subtitle: t('index.section2.subtitle'),
    cards: [
      {
        title: t('index.section2.card1.title'),
        subtitle: t('index.section2.card1.subtitle'),
        media: "/LiAuto/liauto-section6-1.jpg",
        mediaRes: "/LiAuto/liauto-section6-1-res.jpg"
      },
      {
        title: t('index.section2.card2.title'),
        subtitle: t('index.section2.card2.subtitle'),
        media: "/LiAuto/liauto-section6-2.jpg",
        mediaRes: "/LiAuto/liauto-section6-2-res.jpg",
      }
    ]
  }
  return (
      <main

      >
        <section >
          <div
              className={'w-full grid md:grid-cols-2  grid-cols-1 md:gap-4 gap-0'}
          >
            <div
                className={' h-[500px] max-h-[720px] md:h-[37vw]  col-span-1 md:col-span-2 '}>
              <IndexBanner button={'true'} carHeader={false} bg={HeaderBanner.bg} bgRes={HeaderBanner.bgRes} logoImage={HeaderBanner.logoImage} href={'#'} btnText={'Learn More'}/>

            </div>
            <div
                className={'col-span-1  h-[500px] max-h-[720px] md:h-[37vw] '}
            >
              <IndexBanner  button={'true'} carHeader={false} bg={section1.lists[0].media} bgRes={section1.lists[0].mediaRes} logoImage={section1.lists[0].logoImage} btnText={'Learn More'}/>

            </div>
            <div
                className={'col-span-1  h-[500px] max-h-[720px] md:h-[37vw] '}
            >
              <IndexBanner button={'true'} carHeader={false} bg={section1.lists[1].media} bgRes={section1.lists[1].mediaRes} logoImage={section1.lists[1].logoImage} btnText={'Learn More'}/>

            </div>
            <div
                className={' col-span-1 md:col-span-2  h-[500px] max-h-[720px] md:h-[37vw] '}
            >
              <IndexBanner button={'true'} bg={section2.media} bgRes={section2.mediaRes} logoImage={section2.logoImage} btnText={'Learn More'} />

            </div>
          </div>
        </section>
        <section className={'section'}>
          <div className={'container section-item-space'}>
            <SectionTitle  title={section3.title} subSmallTitle={section3.subtitle} />
            <div className={'grid md:grid-cols-2  grid-cols-1  md:gap-4 gap-2'}>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'justify-start'} title={section3.cards[0].title} subtitle={section3.cards[0].subtitle} bg={section3.cards[0].media} bgRes={section3.cards[0].mediaRes} btnText={'Learn More'} />
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'justify-start'} title={section3.cards[1].title} subtitle={section3.cards[1].subtitle} bg={section3.cards[1].media} bgRes={section3.cards[1].mediaRes} btnText={'Learn More'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'justify-start'} title={section3.cards[2].title} subtitle={section3.cards[2].subtitle} bg={section3.cards[2].media} bgRes={section3.cards[2].mediaRes} btnText={'Learn More'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'justify-start'} title={section3.cards[3].title} subtitle={section3.cards[3].subtitle} bg={section3.cards[3].media} bgRes={section3.cards[3].mediaRes} btnText={'Learn More'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'justify-start'} title={section3.cards[4].title} subtitle={section3.cards[4].subtitle} bg={section3.cards[4].media} bgRes={section3.cards[4].mediaRes} btnText={'Learn More'}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[16/10]'}>
                <IndexCard contentPositionEnd={'justify-start'} title={section3.cards[5].title} subtitle={section3.cards[5].subtitle} bg={section3.cards[5].media} bgRes={section3.cards[5].mediaRes} btnText={'Learn More'}/>
              </div>
            </div>
          </div>
        </section>
        <section className={'section'}>
          <div className={'container section-item-space'}>
            <SectionTitle title={section4.title} subSmallTitle={section4.subtitle} />

            <div className={'grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-2'}>
              <div className={'col-span-1 aspect-square md:aspect-[12/10]'}>
                <IndexCard bottomText={''} btnText={'Learn More'} contentPositionEnd={'md:justify-end'} title={section4.cards[0].title} subtitle={section4.cards[0].subtitle} bg={section4.cards[0].media} bgRes={section4.cards[0].mediaRes}/>
              </div>
              <div className={'col-span-1 aspect-square md:aspect-[12/10]'}>
                <IndexCard contentPositionEnd={'md:justify-end'} btnText={'Lear Mo'} title={section4.cards[1].title} subtitle={section4.cards[1].subtitle} bg={section4.cards[1].media} bgRes={section4.cards[1].mediaRes}/>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
