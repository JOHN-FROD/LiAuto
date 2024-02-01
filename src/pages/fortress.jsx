import { GradientSectionTitle, HeaderBannerAbout, HeaderIndexInner, IndexCard, LargeSectionTitle, LiCarsOptions, MoreCard, OptionsCard, OptionsSectionImg, SectionTitle, SwiperSection } from '@/components'
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
const section4 = {
  categoryTitleGradient: t('fortress.section4.categoryTitleGradient'),
  gradientTitle : t('fortress.section4.gradientTitle'),
  categoryTitle : t('fortress.section4.categoryTitle'),
  title : t('fortress.section4.title'),
  lists : [
    {
      category: t('fortress.section4.list1.category'),
      title: t('fortress.section4.list1.title'),
      text: t('fortress.section4.list1.text'),
      bg: '/fortress/4-section-1-1920.jpg',
      bgRes: '/fortress/4-section-1-720.jpg'
    },
    {
      category: t('fortress.section4.list2.category'),
      title: t('fortress.section4.list2.title'),
      text: t('fortress.section4.list2.text'),
      bg: '/fortress/4section-2-1920.jpg',
      bgRes: '/fortress/4section-2-720.jpg'
    },
    {
      category: t('fortress.section4.list3.category'),
      title: t('fortress.section4.list3.title'),
      text: t('fortress.section4.list3.text'),
      bg: '/fortress/4section-3-1920.jpg',
      bgRes: '/fortress/4section-3-720.jpg'
    },
    {
      category: t('fortress.section4.list4.category'),
      title: t('fortress.section4.list4.title'),
      text: t('fortress.section4.list4.text'),
      bg: '/fortress/4section-4-1920.jpg',
      bgRes: '/fortress/4section-4-720.jpg'
    },
  ]

}
const section5 = {
  categoryTitle : t('fortress.section5.categoryTitle'),
  title : t('fortress.section5.title'),
  lists : [
    {
      title: t('fortress.section5.list1.title'),
      text: t('fortress.section5.list1.text'),
      bg: '/fortress/5section-1-1920.jpg',
      bgRes: '/fortress/5section-1-720.jpg'
    },
    {
      title: t('fortress.section5.list2.title'),
      text: t('fortress.section5.list2.text'),
      bg: '/fortress/5section-2-1920.jpg',
      bgRes: '/fortress/5section-2-720.jpg'
    },
    {
      title: t('fortress.section5.list3.title'),
      text: t('fortress.section5.list3.text'),
      bg: '/fortress/5section-3-1920.jpg',
      bgRes: '/fortress/5section-3-720.jpg'
    },
    {
      title: t('fortress.section5.list4.title'),
      text: t('fortress.section5.list4.text'),
      bg: '/fortress/5section-4-1920.jpg',
      bgRes: '/fortress/5section-4-720.jpg'
    },
  ]

}
const section6 = {
  categoryTitle : t('fortress.section6.categoryTitle'),
  title : t('fortress.section6.title'),
  lists : [
    {
      category: t('fortress.section6.list1.category'),
      title: t('fortress.section6.list1.title'),
      text: t('fortress.section6.list1.text'),
      bg: '/fortress/6section-1-1920.jpg',
      bgRes: '/fortress/6section-1-720.jpg'
    },
    {
      category: t('fortress.section6.list2.category'),
      title: t('fortress.section6.list2.title'),
      text: t('fortress.section6.list2.text'),
      bg: '/fortress/6section-2-1920.jpg',
      bgRes: '/fortress/6section-2-720.jpg'
    },
    {
      category: t('fortress.section6.list3.category'),
      title: t('fortress.section6.list3.title'),
      text: t('fortress.section6.list3.text'),
      bg: '/fortress/6section-3-1920.jpg',
      bgRes: '/fortress/6section-3-720.jpg'
    },
    {
      category: t('fortress.section6.list4.category'),
      title: t('fortress.section6.list4.title'),
      text: t('fortress.section6.list4.text'),
      bg: '/fortress/6section-4-1920.jpg',
      bgRes: '/fortress/6section-4-720.jpg'
    },
  ]

}
const section7 = {
  categoryTitle : t('fortress.section7.categoryTitle'),
  title : t('fortress.section7.title'),
  lists : [
    {
      title: t('fortress.section7.list1.title'),
      text: t('fortress.section7.list1.text'),
      text2: t('fortress.section7.list1.text2'),
      bg: '/fortress/7section-1-1920.jpg',
      bgRes: '/fortress/7section-1-720.jpg'
    },
    {
      title: t('fortress.section7.list2.title'),
      text: t('fortress.section7.list2.text'),
      text2: t('fortress.section7.list2.text2'),
      bg: '/fortress/7section-2-720.jpg',
      bgRes: '/fortress/7section-2-1920.jpg'
    },
    {
      title: t('fortress.section7.list3.title'),
      text: t('fortress.section7.list3.text'),
      text2: t('fortress.section7.list3.text2'),
      bg: '/fortress/7section-3-1920.jpg',
      bgRes: '/fortress/7section-3-720.jpg'
    },
    {
      title: t('fortress.section7.list4.title'),
      text: t('fortress.section7.list4.text'),
      bg: '/fortress/7section-4-720.jpg',
      bgRes: '/fortress/7section-4-1920.jpg'
    },
  ]

}
const section8 = {
  categoryTitle : t('fortress.section8.categoryTitle'),
  title : t('fortress.section8.title'),
  carsName : [
    {
      name: 'Li L7',
      id: 0
    },
    {
      name: 'Li L8',
      id: 1
    },
    {
      name: 'Li L9',
      id: 2
    },
  ],
  cars : [
    {
      models: [
        {
          title: 'Li L7 Air   ',
          href: '/li-l7',
          options1 : [
            {
              title: t('fortress.section8.car1.model1.list1.title'),
              text: t('fortress.section8.car1.model1.list1.text'),
            },
            {
              title: t('fortress.section8.car1.model1.list2.title'),
              text: t('fortress.section8.car1.model1.list2.text'),
            },
            {
              title: t('fortress.section8.car1.model1.list3.title'),
              text: t('fortress.section8.car1.model1.list3.text'),
            },
          ],
          options2 : [
            {
              img: '/fortress/8section-option1.svg',
              text: t('fortress.section8.car1.model1.list4.text'),
            },
            {
              img: '/fortress/8section-option3.svg',
              text: t('fortress.section8.car1.model1.list5.text'),
            },
          ],
          options3 : [
            {
              icon: '/fortress/8section-option2.svg',
              title: t('fortress.section8.car1.model1.list6.title'),
              title2: t('fortress.section8.car1.model1.list6.title2'),
              text: t('fortress.section8.car1.model1.list6.text'),

            },
            {
              icon: '/fortress/8section-option5.svg',
              title: t('fortress.section8.car1.model1.list7.title'),
              title2: t('fortress.section8.car1.model1.list7.title2'),
              text: t('fortress.section8.car1.model1.list7.text'),
            },
          ]
        },
        {
          title: 'Li L7 Pro   ',
          href: '/li-l7',
          options1 : [
            {
              title: t('fortress.section8.car1.model2.list1.title'),
              text: t('fortress.section8.car1.model2.list1.text'),
            },
            {
              title: t('fortress.section8.car1.model2.list2.title'),
              text: t('fortress.section8.car1.model2.list2.text'),
            },
            {
              title: t('fortress.section8.car1.model2.list3.title'),
              text: t('fortress.section8.car1.model2.list3.text'),
            },
          ],
          options2 : [
            {
              img: '/fortress/8section-option1.svg',
              text: t('fortress.section8.car1.model2.list4.text'),
            },
            {
              img: '/fortress/8section-option4.svg',
              text: t('fortress.section8.car1.model2.list5.text'),
            },
          ],
          options3 : [
            {
              icon: '/fortress/8section-option2.svg',
              title: t('fortress.section8.car1.model2.list6.title'),
              title2: t('fortress.section8.car1.model2.list6.title2'),
              text: t('fortress.section8.car1.model2.list6.text'),

            },
            {
              icon: '/fortress/8section-option5.svg',
              title: t('fortress.section8.car1.model2.list7.title'),
              title2: t('fortress.section8.car1.model2.list7.title2'),
              text: t('fortress.section8.car1.model2.list7.text'),
            },
          ]
        },
        {
          title: 'Li L7 Max   ',
          href: '/li-l7',
          options1 : [
            {
              title: t('fortress.section8.car1.model3.list1.title'),
              text: t('fortress.section8.car1.model3.list1.text'),
            },
            {
              title: t('fortress.section8.car1.model3.list2.title'),
              text: t('fortress.section8.car1.model3.list2.text'),
            },
            {
              title: t('fortress.section8.car1.model3.list3.title'),
              text: t('fortress.section8.car1.model3.list3.text'),
            },
          ],
          options2 : [
            {
              img: '/fortress/8section-option1.svg',
              text: t('fortress.section8.car1.model3.list4.text'),
            },
            {
              img: '/fortress/8section-option4.svg',
              text: t('fortress.section8.car1.model3.list5.text'),
            },
          ],
          options3 : [
            {
              icon: '/fortress/8section-option2.svg',
              title: t('fortress.section8.car1.model3.list6.title'),
              title2: t('fortress.section8.car1.model3.list6.title2'),
              text: t('fortress.section8.car1.model3.list6.text'),

            },
            {
              icon: '/fortress/8section-option5.svg',
              title: t('fortress.section8.car1.model3.list7.title'),
              title2: t('fortress.section8.car1.model3.list7.title2'),
              text: t('fortress.section8.car1.model3.list7.text'),
            },
          ]
        },
      ]
    },
    {
      models: [
        {
          title: 'Li L8 Air   ',
          href: '/li-l8',
          options1 : [
            {
              title: t('fortress.section8.car2.model1.list1.title'),
              text: t('fortress.section8.car2.model1.list1.text'),
            },
            {
              title: t('fortress.section8.car2.model1.list2.title'),
              text: t('fortress.section8.car2.model1.list2.text'),
            },
            {
              title: t('fortress.section8.car2.model1.list3.title'),
              text: t('fortress.section8.car2.model1.list3.text'),
            },
          ],
          options2 : [
            {
              img: '/fortress/8section-option1.svg',
              text: t('fortress.section8.car2.model1.list4.text'),
            },
            {
              img: '/fortress/8section-option3.svg',
              text: t('fortress.section8.car2.model1.list5.text'),
            },
          ],
          options3 : [
            {
              icon: '/fortress/8section-option2.svg',
              title: t('fortress.section8.car2.model1.list6.title'),
              title2: t('fortress.section8.car2.model1.list6.title2'),
              text: t('fortress.section8.car2.model1.list6.text'),

            },
            {
              icon: '/fortress/8section-option5.svg',
              title: t('fortress.section8.car2.model1.list7.title'),
              title2: t('fortress.section8.car2.model1.list7.title2'),
              text: t('fortress.section8.car2.model1.list7.text'),
            },
          ]
        },
        {
          title: 'Li L8 Pro   ',
          href: '/li-l8',
          options1 : [
            {
              title: t('fortress.section8.car2.model2.list1.title'),
              text: t('fortress.section8.car2.model2.list1.text'),
            },
            {
              title: t('fortress.section8.car2.model2.list2.title'),
              text: t('fortress.section8.car2.model2.list2.text'),
            },
            {
              title: t('fortress.section8.car2.model2.list3.title'),
              text: t('fortress.section8.car2.model2.list3.text'),
            },
          ],
          options2 : [
            {
              img: '/fortress/8section-option1.svg',
              text: t('fortress.section8.car2.model2.list4.text'),
            },
            {
              img: '/fortress/8section-option4.svg',
              text: t('fortress.section8.car2.model2.list5.text'),
            },
          ],
          options3 : [
            {
              icon: '/fortress/8section-option2.svg',
              title: t('fortress.section8.car2.model2.list6.title'),
              title2: t('fortress.section8.car2.model2.list6.title2'),
              text: t('fortress.section8.car2.model2.list6.text'),

            },
            {
              icon: '/fortress/8section-option5.svg',
              title: t('fortress.section8.car2.model2.list7.title'),
              title2: t('fortress.section8.car2.model2.list7.title2'),
              text: t('fortress.section8.car2.model2.list7.text'),
            },
          ]
        },
        {
          title: 'Li L8 Max   ',
          href: '/li-l8',
          options1 : [
            {
              title: t('fortress.section8.car2.model3.list1.title'),
              text: t('fortress.section8.car2.model3.list1.text'),
            },
            {
              title: t('fortress.section8.car2.model3.list2.title'),
              text: t('fortress.section8.car2.model3.list2.text'),
            },
            {
              title: t('fortress.section8.car2.model3.list3.title'),
              text: t('fortress.section8.car2.model3.list3.text'),
            },
          ],
          options2 : [
            {
              img: '/fortress/8section-option1.svg',
              text: t('fortress.section8.car2.model3.list4.text'),
            },
            {
              img: '/fortress/8section-option4.svg',
              text: t('fortress.section8.car2.model3.list5.text'),
            },
          ],
          options3 : [
            {
              icon: '/fortress/8section-option2.svg',
              title: t('fortress.section8.car2.model3.list6.title'),
              title2: t('fortress.section8.car2.model3.list6.title2'),
              text: t('fortress.section8.car2.model3.list6.text'),

            },
            {
              icon: '/fortress/8section-option5.svg',
              title: t('fortress.section8.car2.model3.list7.title'),
              title2: t('fortress.section8.car2.model3.list7.title2'),
              text: t('fortress.section8.car2.model3.list7.text'),
            },
          ]
        },
      ]
    },
    {
      models: [
        {
          title: 'Li L9 Pro   ',
          href: '/li-l9',
          options1 : [
            {
              title: t('fortress.section8.car3.model2.list1.title'),
              text: t('fortress.section8.car3.model2.list1.text'),
            },
            {
              title: t('fortress.section8.car3.model2.list2.title'),
              text: t('fortress.section8.car3.model2.list2.text'),
            },
            {
              title: t('fortress.section8.car3.model2.list3.title'),
              text: t('fortress.section8.car3.model2.list3.text'),
            },
          ],
          options2 : [
            {
              img: '/fortress/8section-option1.svg',
              text: t('fortress.section8.car3.model2.list4.text'),
            },
            {
              img: '/fortress/8section-option4.svg',
              text: t('fortress.section8.car3.model2.list5.text'),
            },
          ],
          options3 : [
            {
              icon: '/fortress/8section-option2.svg',
              title: t('fortress.section8.car3.model2.list6.title'),
              title2: t('fortress.section8.car3.model2.list6.title2'),
              text: t('fortress.section8.car3.model2.list6.text'),

            },
            {
              icon: '/fortress/8section-option5.svg',
              title: t('fortress.section8.car3.model2.list7.title'),
              title2: t('fortress.section8.car3.model2.list7.title2'),
              text: t('fortress.section8.car3.model2.list7.text'),
            },
          ]
        },
        {
          title: 'Li L9 Max   ',
          href: '/li-l9',
          options1 : [
            {
              title: t('fortress.section8.car3.model3.list1.title'),
              text: t('fortress.section8.car3.model3.list1.text'),
            },
            {
              title: t('fortress.section8.car3.model3.list2.title'),
              text: t('fortress.section8.car3.model3.list2.text'),
            },
            {
              title: t('fortress.section8.car3.model3.list3.title'),
              text: t('fortress.section8.car3.model3.list3.text'),
            },
          ],
          options2 : [
            {
              img: '/fortress/8section-option1.svg',
              text: t('fortress.section8.car3.model3.list4.text'),
            },
            {
              img: '/fortress/8section-option4.svg',
              text: t('fortress.section8.car3.model3.list5.text'),
            },
          ],
          options3 : [
            {
              icon: '/fortress/8section-option2.svg',
              title: t('fortress.section8.car3.model3.list6.title'),
              title2: t('fortress.section8.car3.model3.list6.title2'),
              text: t('fortress.section8.car3.model3.list6.text'),

            },
            {
              icon: '/fortress/8section-option5.svg',
              title: t('fortress.section8.car3.model3.list7.title'),
              title2: t('fortress.section8.car3.model3.list7.title2'),
              text: t('fortress.section8.car3.model3.list7.text'),
            },
          ]
        },
      ]
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
      <div className="container pt-10 pb-6 md:pt-[68px] md:pb-8 lg:pt-24 lg:pb-11">
        <GradientSectionTitle title={section4.gradientTitle} categoryTitle={section4.categoryTitleGradient}/>
      </div>
      <section className='pb-10 lg:pb-12'>
        <div className="container container-content">
          <div className='py-6 md:pt-9 md:pb-5 lg:pt-12 lg:pb-8'>
            <GradientSectionTitle leftTitle={true} title={section4.title}  categoryTitle={section4.categoryTitle}/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2.5 lg:gap-4">
            {
              section4.lists.map(card => (
                <MoreCard title={card.title} titleCategory={card.category} subTitle={card.text} bg={card.bg} bgRes={card.bgRes}/>
              ))
            }
          </div>
        </div>
      </section>
      <section className='pb-10 lg:pb-12'>
        <div className="container container-content">
          <div className='py-6 md:pt-9 md:pb-5 lg:pt-12 lg:pb-8'>
            <GradientSectionTitle leftTitle={true} title={section5.title}  categoryTitle={section5.categoryTitle}/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2.5 lg:gap-4">
            {
              section5.lists.map(card => (
                <MoreCard title={card.title} titleCategory={card.category} isTextBack={true} subTitle={card.text} bg={card.bg} bgRes={card.bgRes}/>
              ))
            }
          </div>
        </div>
      </section>
      <section className='pb-10 lg:pb-12'>
        <div className="container container-content">
          <div className='py-6 md:pt-9 md:pb-5 lg:pt-12 lg:pb-8'>
            <GradientSectionTitle leftTitle={true} title={section6.title}  categoryTitle={section6.categoryTitle}/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2.5 lg:gap-4">
            {
              section6.lists.map(card => (
                <OptionsCard title={card.title} bg={card.bg} bgRes={card.bgRes} text={card.text} category={card.category}/>
              ))
            }
          </div>
        </div>
      </section>
      <section className='pb-10 lg:pb-12 pt-5'>
        <div className="container container-content">
          <div className='py-6 md:pt-9 md:pb-5 lg:pt-12 lg:pb-8'>
          <GradientSectionTitle title={section7.title} categoryTitle={section7.categoryTitle}/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2.5 lg:gap-4">
            {
              section7.lists.map(card => (
                <MoreCard title={card.title} subTitle2={card.text2} titleCategory={card.category} isTitleBlack={true} subTitle={card.text} bg={card.bg} bgRes={card.bgRes}/>
              ))
            }
          </div>
        </div>
      </section>
      <section className='bg-[#fafafa] pt-20 pb-10 md:py-[65px] lg:py-[90px] '>
        <div className="container container-content">
          <GradientSectionTitle title={section8.title} isntGradient={true} categoryTitle={section8.categoryTitle}/>
          <div>
            <LiCarsOptions listName={section8.carsName} listOptions={section8.cars}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default fortress