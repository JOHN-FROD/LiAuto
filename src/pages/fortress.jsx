import { HeaderBannerAbout, HeaderIndexInner, LargeSectionTitle, MoreCard, OptionsSectionImg, SectionTitle, SwiperSection } from '@/components'
import { t } from 'i18next'
import React from 'react'

const fortressHeader = {
  bgRes: '/fortress/fortress-header-720.jpg',
  bg: '/fortress/fortress-header-1920.jpg',
  title : t('fortress.header.title'),
  name: t('fortress.header.name'),
  subTitle: t('fortress.header.subTitle'),
}
const section1 = {
  title: t('fortress.section1.title'),
  subTitle: t('fortress.section1.subTitle'),
  subTitle2: t('fortress.section1.subTitle2'),
  bg: '/fortress/1section-bg.jpg',
  bgRes: '/fortress/1section-bgRes.jpg',
  list: [
    {
      title: t('fortress.section1.list1.title'),
      text: t('fortress.section1.list1.text')
    },
    {
      title: t('fortress.section1.list2.title'),
      text: t('fortress.section1.list2.text')
    },
    {
      title: t('fortress.section1.list3.title'),
      text: t('fortress.section1.list3.text')
    },
  ],

}
const section2 = {
  title: t('fortress.section2.title'),
  subTitle: t('fortress.section2.subTitle'),
  bg: '/fortress/2section-bg.jpg',
  bgRes: '/fortress/2section-bgRes.jpg',
  list: [
    {
      title: t('fortress.section2.list1.title'),
      text: t('fortress.section2.list1.text')
    },
    {
      title: t('fortress.section2.list2.title'),
      text: t('fortress.section2.list2.text')
    },
    {
      title: t('fortress.section2.list3.title'),
      text: t('fortress.section2.list3.text')
    },
  ],

}
const section3 ={
  title: t('fortress.section3.title'),
  subTitle: t('fortress.section3.subTitle'),
  lists: [
    {
      title: t('fortress.section3.list1.title'),
      text: t('fortress.section3.list1.text'),
      media: '/fortress/3-section-1-1920.jpg',
      mediaRes: '/fortress/3-section-1-720.jpg'
    },
    {
      title: t('fortress.section3.list2.title'),
      text: t('fortress.section3.list2.text'),
      media: '/fortress/3-section-2-1920.jpg',
      mediaRes: '/fortress/3-section-2-720.jpg'
    },
  ],
}

const fortress = () => {
  return (
    <div>
      <section className='relative'>
        <HeaderIndexInner bg={fortressHeader.bg} bgRes={fortressHeader.bgRes} styleJustify={'md:justify-start'} title={fortressHeader.title} namePage={fortressHeader.name} subTitle={fortressHeader.subTitle}/>
      </section>
      <section>
        <OptionsSectionImg title={section1.title} subTitle={section1.subTitle} bg={section1.bg} bgRes={section1.bgRes} list={section1.list} subTitle2={section1.subTitle2}/>       
      </section>
      <section>
        <OptionsSectionImg title={section2.title} subTitle={section2.subTitle} bg={section2.bg} bgRes={section2.bgRes} list={section2.list} subTitle2={section2.subTitle2}/>       
      </section>
      <section className={'relative section-car space-y-5 lg:space-y-10'}>
        <LargeSectionTitle title={section3.title} subTitle={section3.subTitle}/>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5 '}>
                    <SwiperSection hoverChangeText={true} carousel={section3.lists} isShadow={true}/>
                </div>
            </div>
        </div>
      </section>
      <section className='section-car'>
        <div className="container container-content">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <MoreCard title={'Force Transmission Pathways'} titleCategory={'Energy Distribution'} subTitle={'In addition to the main beam, force transmission pathways such as the subframe deform and absorb energy, which minimizes damage to both vehicles in the collision.The body is designed to absorb and disperse the collision energy in a variety of complex conditions. As vehicle-to-vehicle collisions are usually at higher speeds, with a shorter reaction time, and rapid acceleration increases, multiple force transmission pathways are needed to absorb and disperse forces to avoid stress concentration.'}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default fortress