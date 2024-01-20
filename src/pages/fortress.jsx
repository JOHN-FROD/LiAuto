import { HeaderBannerAbout, MoreCard, SectionTitle, SwiperSection } from '@/components'
import React from 'react'

const fortressHeader = {
  bgRes: '/fortress/fortress-header-720.jpg',
  bg: '/fortress/fortress-header-1920.jpg',
  title : 'Keep Every Family Member Safe',
  subTitle: 'Li Auto Fortress Safe Body™',
  subTitle2: '*Comes standard on all Li L series models.',
}
const section1 = {
  title:'A Safe Ride for Every Occupant.',
  subTitle: 'Reliability proven through 40+ crash test items, surpassing C-IASI and C-NCAP standards. Safety solutions have been developed and tested for each seat for comprehensive protection.',
  subTitle2: 'Reliability proven through 40+ crash test items, surpassing C-IASI and C-NCAP standards. Safety solutions have been developed and tested for each seat for comprehensive protection.',

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
      <section className="w-full h-screen">
       <HeaderBannerAbout bg={fortressHeader.bg} bgRes={fortressHeader.bgRes} title={fortressHeader.title}
        subTitle={fortressHeader.subTitle}/>
      </section>      
      <section className={'relative section-car '}>
        <div className={'container  container-content'}>
          <div className={'grid grid-cols-5 section-item-space'}>
            <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
              <SectionTitle darkMode={false} styleBox={'text-start'} title={section1.title}
                            subSmallTitle={section1.subTitle}/>
            </div>
            <div className={'col-span-5 '}>
            </div>
            <div className="col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3">
              <p className="text-white/50 text-sm ">{section1.subTitle2}</p>
            </div>
          </div>
        </div>
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