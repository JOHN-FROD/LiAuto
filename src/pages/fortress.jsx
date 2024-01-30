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
  title:'Безопасная езда для каждого пассажира.  ',
  subTitle: 'Надежность подтверждена более чем 40 краш-тестами, превосходящими стандарты C-IASI и C-NCAP. Для каждого сиденья были разработаны и протестированы решения по безопасности, обеспечивающие комплексную защиту.  ',
  subTitle2: '*Все модели L9 и L8 прошли тесты на безопасность третьего ряда.',
  bg: '/fortress/1section-bg.jpg',
  bgRes: '/fortress/1section-bgRes.jpg',
  list: [
    {
      title: 'Передний пассажир',
      text: 'Тест на безопасность при столкновении со смещением 25 % — обязательный этап, разработанный Li Auto для обеспечения защиты переднего пассажира в случае столкновения со смещением 25 % на его стороне автомобиля.'
    },
    {
      title: 'Передний пассажир',
      text: 'Тест на безопасность при столкновении со смещением 25 % — обязательный этап, разработанный Li Auto для обеспечения защиты переднего пассажира в случае столкновения со смещением 25 % на его стороне автомобиля.'
    },
    {
      title: 'Передний пассажир',
      text: 'Тест на безопасность при столкновении со смещением 25 % — обязательный этап, разработанный Li Auto для обеспечения защиты переднего пассажира в случае столкновения со смещением 25 % на его стороне автомобиля.'
    },
  ],

}
const section3 ={
  title: 'Protects Pedestrians.',
  subTitle: 'Li Auto scored 76% on C-IASI pedestrian protection tests, surpassing the G rating requirement of 65%. Dual aluminum alloy front bumper beams and a unique pedestrian thigh protection structure keep those inside and outside the vehicle safe. ',
  lists: [
    {
      title: 'Dual Aluminum Alloy Front Bumper Beams',
      text: 'Dual aluminum alloy front bumper beams used in the L series absorb front impacts and prevent pedestrians from going under the vehicle.',
      media: '/fortress/3-section-1-1920.jpg',
      mediaRes: '/fortress/3-section-1-720.jpg'
    },
    {
      title: 'Thigh Protection Structure',
      text: "The unique structure used in the L series front bumpers minimizes the impact on pedestrian's thighs during a front impact.",
      media: '/fortress/3-section-2-1920.jpg',
      mediaRes: '/fortress/3-section-2-720.jpg'
    },
  ]
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
      <section className={'relative section-car '}>
                <div className={'container  container-content'}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={false} styleBox={'text-start'} title={section3.title}
                                          subSmallTitle={section3.subTitle}/>
                        </div>
                        <div className={'col-span-5 '}>
                            <SwiperSection hoverChangeText={true} carousel={section3.lists}/>

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