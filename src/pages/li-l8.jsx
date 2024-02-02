import { BottomPositionCards, BottomTextSection, ConfigurationsSection, GridCard, IndexBanner, ListCar, OptionsSection, SwiperSection, SwiperTab, TitleBanner } from "@/components"
import { useTranslation } from "react-i18next"

const LiL8 = () => {
  const {t}=useTranslation()
  const indexBanner={
    bg:"/Lil8/section_1_web.jpg",
    bgRes:'/Lil8/section_1_rsp.jpg',
    logoImage:'/Lil8/section1-logo.png',
  }
  const section2={
    bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section_2_web.jpg`,
    bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section_2_rsp.jpg`,
    title:t("li8.section2.title"),
    list:[
        {
            name: t('li8.section2.list4.name'),
            number: '1315 ',
            type:t('li8.section2.list1.type')
        },
        {
            name: t('li8.section2.list2.name'),
            number: '1100 ',
            type:t('li8.section2.list2.type')
        },
        {
            name: t('li8.section2.list3.name'),
            number: '5.3 ',
            type:t('li8.section2.list3.type')
        },
        {
            name: t('li8.section2.list4.name'),
            number: '3,105',
            type:t('li8.section2.list4.type')
        },
    ]
  }
  const section3={
    bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section_3_web.jpg`,
    bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section_3_rsp.jpg`,
    title:t("li8.section3.title"),
    list:[
        {
            name: t('li8.section3.list1.name'),
            number: '5080 ',
            type:t('li8.section3.list1.type')
        },
        {
            name: t('li8.section3.list2.name'),
            number: '1995  ',
            type:t('li8.section3.list2.type')
        },
        {
            name: t('li8.section3.list3.name'),
            number: '1800  ',
            type:t('li8.section3.list3.type')
        },
        {
            name: t('li8.section3.list4.name'),
            number: '3005 ',
            type:t('li8.section3.list4.type')
        },
    ]
  }
  const section4={
    title:t('li8.section4.title'),
    subTitle:t('li8.section4.subTitle'),
    video:"http://vod.ampmake.com/mda-niunn0xwbjtvk8rv/vodmp4fd/mda-niunn0xwbjtvk8rv.mp4",
  }
  const section5=[
    {
        title: t('li8.section5.list1.title'),
        text: t('li8.section5.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section4.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section4_rsp.jpeg`,
        video:false
    },
    {
        title: t('li8.section5.list2.title'),
        text: t('li8.section5.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section4_image2_web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section4_image2_rsp.jpeg`,
        video:false

    },
  ]
  const section6=[
    {
        title: t('li8.section6.list1.title'),
        text: t('li8.section6.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section6_2web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section6_2rsp.jpeg`,
        video:false
    },
    {
        title: t('li8.section6.list2.title'),
        text: t('li8.section6.list2.text'),
        video: true,
        media: 'http://vod.ampmake.com/mda-niugdjr012j1fkr2/vodmp4fd/mda-niugdjr012j1fkr2.mp4'
    },
    {
      title: t('li8.section6.list3.title'),
      text: t('li8.section6.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section4_image2_web.jpeg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section4_image2_rsp.jpeg`,
      video:false
  },
  ]
  const section7=[
    {
        title: t('li8.section7.list1.title'),
        text: t('li8.section7.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section7_1web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section7_1rsp.jpeg`,
        video:false
    },
    {
        title: t('li8.section7.list2.title'),
        text: t('li8.section7.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section7_2web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section7_2rsp.jpg`,
        video:false
    },
    {
      title: t('li8.section7.list3.title'),
      text: t('li8.section7.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section7_3rsp.jpeg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section7_3web.jpeg`,
      video:false
  },
  ]
  const section8={
    bg:"/Lil8/section8_web.jpg",
    bgRes:"/Lil8/section8_rsp.jpg",
    title:t("li8.section8.title"),
    subTitle:t('li8.section8.subTitle')
  }
  const section9=[
    {
        title: t('li8.section9.list1.title'),
        text: t('li8.section9.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section8_1web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section8_1rsp.jpg`,
        video:false
    },
    {
        title: t('li8.section9.list2.title'),
        text: t('li8.section9.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section8_2web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section8_2rsp.jpg`,
        video:false
    },
    {
      title: t('li8.section9.list3.title'),
      text: t('li8.section9.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section8_3web.jpg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section8_3rsp.jpg`,
      video:false
    },
    {
      title: t('li8.section9.list3.title'),
      text: t('li8.section9.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section8_4web.jpg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section8_4rsp.png`,
      video:false
    },
  ]
  const section10=[
    {
        title: t('li8.section10.list1.title'),
        text: t('li8.section10.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section9_1web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section9_1rsp.jpeg`,
        video:false
    },
    {
        title: t('li8.section10.list2.title'),
        text: t('li8.section10.list2.text'),
        media: 'http://vod.ampmake.com/mda-niugf620qfv5ucii/vodmp4fd/mda-niugf620qfv5ucii.mp4',
        video: true
    },
  ]
  const section11=[
    
    {
        title: t('li8.section11.list1.title'),
        text: t('li8.section11.list1.text'),
        video: true,
        media: 'http://vod.ampmake.com/mda-niugni5ppwz33p7k/vodmp4fd/mda-niugni5ppwz33p7k.mp4'
    },
    {
      title: t('li8.section11.list2.title'),
      text: t('li8.section11.list2.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section10_2web.jpeg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section10_2rsp.jpeg`,
      video:false
    },
  ]
  const section12={
    bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_web.jpeg`,
    bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_rsp.jpeg`,
    title:t("li8.section12.title"),
    subTitle:t("li8.section12.subTitle"),
  }
  const section13=[
    {
        title: t('li8.section13.list1.title'),
        text: t('li8.section13.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_1rsp.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_1web.jpg`,
        video:false
    },
    {
        title: t('li8.section13.list2.title'),
        text: t('li8.section13.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_2web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_2rsp.jpg`,
        video:false
    },
    {
      title: t('li8.section13.list3.title'),
      text: t('li8.section13.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_3web.jpg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_3rsp.png`,
      video:false
    },
    {
      title: t('li8.section13.list3.title'),
      text: t('li8.section13.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_3web.jpg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section11_3rsp.png`,
      video:false
    },
  ]
  const section14={
    title:t('li8.section14.title'),
    subTitle:t('li8.section14.subTitle'),
    bg: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section12_web.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section12_rsp.jpeg`
  }
  const section15=[
    {
        title: t('li8.section15.list1.title'),
        text: t('li8.section15.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section15_1web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section15_1rsp.jpg`,
        video:false
    },
    {
        title: t('li8.section15.list2.title'),
        text: t('li8.section15.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section12_2web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section12_2rsp.jpg`,
        video:false
    },
    {
      title: t('li8.section15.list3.title'),
      text: t('li8.section15.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section12_3web.jpeg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section12_3rsp.jpeg`,
      video:false
    },
  ]
  const section16={
    title:t("li8.section16.title"),
    subTitle:t("li8.section16.subTitle"),
    media: 'http://vod.ampmake.com/mda-niugphp24avcxj47/vodmp4fd/mda-niugphp24avcxj47.mp4'
  }
  const section17=[
    {
        title: t('li8.section17.list1.title'),
        text: t('li8.section17.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section13_1rsp.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section13_1web.jpeg`,
        video:false
    },
    {
        title: t('li8.section17.list2.title'),
        text: t('li8.section17.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section13_2web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section13_2rsp.jpg`,
        video:false
    },
    {
      title: t('li8.section17.list3.title'),
      text: t('li8.section17.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section13_3web.jpg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section13_3rsp.jpeg`,
      video:false
    },
  ]
  const section18=[
    {
        title: t('li8.section18.list1.title'),
        text: t('li8.section18.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section14_1web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section14_1rsp.jpg`,
        video:false
    },
    {
        title: t('li8.section18.list2.title'),
        text: t('li8.section18.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section14_2web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section14_2rsp.jpeg`,
        video:false
    },
    {
      title: t('li8.section18.list3.title'),
      text: t('li8.section18.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section14_3web.jpg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section14_3rsp.jpeg`,
      video:false
    },
    {
      title: t('li8.section18.list4.title'),
      text: t('li8.section18.list4.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section14_4web.jpg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section14_4rsp.jpeg`,
      video:false
    },
  ]
  const section19=[
    {
        title: t('li8.section19.list1.title'),
        text: t('li8.section19.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section15_1web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section15_1rsp.jpeg`,
        video:false
    },
    {
        title: t('li8.section19.list2.title'),
        text: t('li8.section19.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section15_2web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section15_2rsp.jpeg`,
        video:false
    },
  ]
  const section20={
    title:t('li8.section20.title'),
    subTitle:t('li8.section20.subTitle'),
    bg: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section20_web.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section20_rsp.jpg`
  }
  const section21=[
    {
        title: t('li8.section21.list1.title'),
        text: t('li8.section21.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section16_1web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section16_1rsp.jpg`,
        video:false
    },
    {
        title: t('li8.section21.list2.title'),
        text: t('li8.section21.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section16_2web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section16_2rsp.jpg`,
        video:false
    },
  ]
  const section22=[
    {
        title: t('li8.section22.list1.title'),
        text: t('li8.section22.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section17_1web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section17_1rsp.jpeg`,
        video:false
    },
    {
        title: t('li8.section22.list2.title'),
        text: t('li8.section22.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section17_2web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section17_2rsp.jpeg`,
        video:false
    },
  ]
  const section23={
    subTitle: t('li8.section23.subTitle'),
    lists: [
    {
        title: t('li8.section23.list1.title'),
        text: t('li8.section23.list1.text'),
        media:'http://vod.ampmake.com/mda-nfhmjmrapuy5ducg/vodmp4fd/mda-nfhmjmrapuy5ducg.mp4',
        video: true
    },
    {
        title: t('li8.section23.list2.title'),
        text: t('li8.section23.list2.text'),
        media:'http://vod.ampmake.com/mda-nfhjcny0y42yq843/vodmp4fd/mda-nfhjcny0y42yq843.mp4',
        video: true
    },
    {
      title: t('li8.section23.list1.title'),
      text: t('li8.section23.list1.text'),
      media:'http://vod.ampmake.com/mda-niuyrguws14if44h/vodmp4fd/mda-niuyrguws14if44h.mp4',
      video: true
  },
  {
      title: t('li8.section23.list2.title'),
      text: t('li8.section23.list2.text'),
      media:'http://vod.ampmake.com/mda-nfjje5b1g0e7mq5b/vodmp4fd/mda-nfjje5b1g0e7mq5b.mp4',
      video: true
  },
  ]
  }
  const section24={
    subTitle: t('li8.section24.subTitle'),
    lists: [
    {
        title: t('li8.section24.list1.title'),
        text: t('li8.section24.list1.text'),
        media:'http://vod.ampmake.com/mda-niurny8n9mn4kn3p/vodmp4fd/mda-niurny8n9mn4kn3p.mp4',
        video: true
    },
    {
        title: t('li8.section24.list2.title'),
        text: t('li8.section24.list2.text'),
        media:'http://vod.ampmake.com/mda-niusc6x7fw8b8375/vodmp4fd/mda-niusc6x7fw8b8375.mp4',
        video: true
    },
    {
      title: t('li8.section24.list1.title'),
      text: t('li8.section24.list1.text'),
      media:'http://vod.ampmake.com/mda-niurzt881rbzkxi4/vodmp4fd/mda-niurzt881rbzkxi4.mp4',
      video: true
    },
    ]
  }
  const section25=[
    {
        title: t('li8.section25.list1.title'),
        text: t('li8.section25.list1.text'),
        media: 'http://vod.ampmake.com/mda-niugu9n7h0wu7kz1/vodmp4fd/mda-niugu9n7h0wu7kz1.mp4',
        video:true
    },
    {
        title: t('li8.section25.list2.title'),
        text: t('li8.section25.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section20_2web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section20_2rsp.jpg`,
        video:false
    },
  ]
  const section26={
    title:t('li8.section26.title'),
    subTitle:t('li8.section26.subTitle'),
    bg: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section21_web.jpg`,
    bgRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section21_rsp.jpg`
  }
  const section27=[
    {
        title: t('li8.section27.list1.title'),
        text: t('li8.section27.list1.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section21_1web.jpg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section21_1rsp.jpeg`,
        video:false
    },
    {
        title: t('li8.section27.list2.title'),
        text: t('li8.section27.list2.text'),
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section21_2web.jpeg`,
        mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section21_2rsp.jpeg`,
        video:false
    },
    {
      title: t('li8.section27.list3.title'),
      text: t('li8.section27.list3.text'),
      media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section21_3web.jpg`,
      mediaRes: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section21_3rsp.jpeg`,
      video:false
  },
  ]
  const section28 = {
    title: t('li8.section28.title'), 
    lists: [
      {
        title: t('li8.section28.list1.title'),
        text: t('li8.section28.list1.text'),
        icon: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section28-1icon.png`,
        image: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section28-1img.jpg`
      },
      {
        title: t('li8.section28.list2.title'),
        text: t('li8.section28.list2.text'),
        icon: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section28-2icon.png`,
        image: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section28-2img.jpg`
      },
      {
        title: t('li8.section28.list3.title'),
        text: t('li8.section28.list3.text'),
        icon: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section28-3icon.jpg`,
        image: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section28-3img.jpg`
      },
    ]
  }
  const section29={
    title:t('li8.section29.title'),
    card1:{
        title:t('li8.section29.card1.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_1web.jpeg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_1rsp.jpeg`
    },
    card2:{
        title:t('li8.section29.card2.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_2web.jpeg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_2rsp.jpeg`
    },
    card3:{
        title:t('li8.section29.card3.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_3web.jpeg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_3rspo.jpeg`
    },
    card4:{
        title:t('li8.section29.card4.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_4web.jpg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_4rsp.jpeg`
    },
    card5:{
        title:t('li8.section29.card5.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_5web.jpeg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_5rsp.jpeg`
    },
    card6:{
        title:t('li8.section29.card6.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_6web.jpg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_6rsp.jpeg`
    },
    card7:{
        title:t('li8.section29.card7.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_7we.jpeg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_7rsp.jpeg`
    },
    card8:{
        title:t('li8.section29.card8.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_rsp.jpeg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_rsp.jpeg`
    },
    card9:{
        title:t('li8.section29.card9.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_8web.jpeg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_8rsp.jpeg`
    },
    card10:{
        title:t('li8.section29.card10.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_9web.jpeg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_9rsp.jpeg`
    },
    card11:{
        title:t('li8.section29.card11.title'),
         bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}lil9-section31-11.png`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}lil9-section31-11-res.png`
    },
    card12:{
        title:t('li8.section29.card12.title'),
         bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}lil9-section31-12.png`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}lil9-section31-1-res.png`
    },
    card13:{
        title:t('li8.section29.card13.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_10web.jpg`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section23_10rsp.jpg`
    },
    card14:{
        title:t('li8.section29.card14.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/section23_11web.jpg"`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/section23_11rsp.jpg"`
    },
    card15:{
        title:t('li8.section29.card15.title'),
        bg:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/section23_12web.jpg"`,
        bgRes:`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/section23_12rsp.png"`
    }
  }
  const section30={
    title:t('li8.section30.title'),
    cards:[
        {
            id:1,
            title:t('li8.section30.card1.title'),
            subTitle:t('li8.section30.card1.subTitle'),
            info:[
                {
                    id:1,
                    title:t('li8.section30.card1.info1.title'),
                    subTitle:t('li8.section30.card1.info1.subTitle')
                },
                {
                    id:2,
                    title:t('li8.section30.card1.info2.title'),
                    subTitle:t('li8.section30.card1.info2.subTitle')
                },
                {
                    id:3,
                    title:t('li8.section30.card1.info3.title'),
                    subTitle:t('li8.section30.card1.info3.subTitle')
                }
            ]
        },
        {
            id:2,
            title:t('li8.section30.card2.title'),
            subTitle:t('li8.section30.card2.subTitle'),
            info:[
                {
                    id:1,
                    title:t('li8.section30.card2.info1.title'),
                    subTitle:t('li8.section30.card2.info1.subTitle')
                },
                {
                    id:2,
                    title:t('li8.section30.card2.info2.title'),
                    subTitle:t('li8.section30.card2.info2.subTitle')
                },
                {
                    id:3,
                    title:t('li8.section30.card2.info3.title'),
                    subTitle:t('li8.section30.card2.info3.subTitle')
                }
            ]
        },
        {
            id:3,
            title:t('li8.section30.card3.title'),
            subTitle:t('li8.section30.card3.subTitle'),
            info:[
                {
                    id:1,
                    title:t('li8.section30.card3.info1.title'),
                    subTitle:t('li8.section30.card3.info1.subTitle')
                },
                {
                    id:2,
                    title:t('li8.section30.card3.info2.title'),
                    subTitle:t('li8.section30.card3.info2.subTitle')
                },
                {
                    id:3,
                    title:t('li8.section30.card3.info3.title'),
                    subTitle:t('li8.section30.card3.info3.subTitle')
                }
            ]
        }
    ]
  }
  const section31 = {
    title:t('li8.section31.title'),
    lists: [
      {
        name: t('li8.section31.list1.name'),
        title: t('li8.section31.list1.title'),
        text: t('li8.section31.list1.text'),
        allName: t('li8.section31.list1.allName'),
        isGradient: true,
        options: [
          {
            title: t('li8.section31.list1.option1.title'),
            text: t('li8.section31.list1.option1.text'),
          },
          {
            title: t('li8.section31.list1.option2.title'),
            text: t('li8.section31.list1.option2.text'),
          },
          {
            title: t('li8.section31.list1.option3.title'),
            text: t('li8.section31.list1.option3.text'),
          },
          {
            title: t('li8.section31.list1.option4.title'),
            text: t('li8.section31.list1.option4.text'),
          },
          {
            title: t('li8.section31.list1.option5.title'),
            text: t('li8.section31.list1.option5.text'),
          },
          {
            title: t('li8.section31.list1.option6.title'),
            text: t('li8.section31.list1.option6.text'),
          },
          {
            title: t('li8.section31.list1.option7.title'),
            text: t('li8.section31.list1.option7.text'),
          },
          {
            title: t('li8.section31.list1.option8.title'),
            text: t('li8.section31.list1.option8.text'),
          },
          {
            title: t('li8.section31.list1.option9.title'),
            text: t('li8.section31.list1.option9.text'),
          },
          {
            title: t('li8.section31.list1.option10.title'),
            text: t('li8.section31.list1.option10.text'),
          },
          {
            title: t('li8.section31.list1.option11.title'),
            text: t('li8.section31.list1.option11.text'),
          },
          {
            title: t('li8.section31.list1.option12.title'),
            text: t('li8.section31.list1.option12.text'),
          },
          {
            title: t('li8.section31.list1.option13.title'),
            text: t('li8.section31.list1.option13.text'),
          },
          {
            title: t('li8.section31.list1.option14.title'),
            text: t('li8.section31.list1.option14.text'),
          },
          {
            title: t('li8.section31.list1.option15.title'),
            text: t('li8.section31.list1.option15.text'),
          },
        ]
      },
      {
        name: t('li8.section31.list2.name'),
        title: t('li8.section31.list2.title'),
        text: t('li8.section31.list2.text'),
        isGradient: false,
        allName: t('li8.section31.list2.allName'),
        options: [
          {
            title: t('li8.section31.list2.option1.title'),
            text: t('li8.section31.list2.option1.text'),
          },
          {
            title: t('li8.section31.list2.option2.title'),
            text: t('li8.section31.list2.option2.text'),
          },
          {
            title: t('li8.section31.list2.option3.title'),
            text: t('li8.section31.list2.option3.text'),
          },
          {
            title: t('li8.section31.list2.option4.title'),
            text: t('li8.section31.list2.option4.text'),
          },
          {
            title: t('li8.section31.list2.option5.title'),
            text: t('li8.section31.list2.option5.text'),
          },
          {
            title: t('li8.section31.list2.option6.title'),
            text: t('li8.section31.list2.option6.text'),
          },
          {
            title: t('li8.section31.list2.option7.title'),
            text: t('li8.section31.list2.option7.text'),
          },
          {
            title: t('li8.section31.list2.option8.title'),
            text: t('li8.section31.list2.option8.text'),
          },
          {
            title: t('li8.section31.list2.option9.title'),
            text: t('li8.section31.list2.option9.text'),
          },
          {
            title: t('li8.section31.list2.option10.title'),
            text: t('li8.section31.list2.option10.text'),
          },
          {
            title: t('li8.section31.list2.option11.title'),
            text: t('li8.section31.list2.option11.text'),
          },
          {
            title: t('li8.section31.list2.option12.title'),
            text: t('li8.section31.list2.option12.text'),
          },
          {
            title: t('li8.section31.list2.option13.title'),
            text: t('li8.section31.list2.option13.text'),
          },
          {
            title: t('li8.section31.list2.option14.title'),
            text: t('li8.section31.list2.option14.text'),
          },
          {
            title: t('li8.section31.list2.option15.title'),
            text: t('li8.section31.list2.option15.text'),
          },
        ]
      },
      {
        name: t('li8.section31.list3.name'),
        title: t('li8.section31.list3.title'),
        text: t('li8.section31.list3.text'),
        allName: t('li8.section31.list3.allName'),

        isGradient: true,
        options: [
          {
            title: t('li8.section31.list3.option1.title'),
            text: t('li8.section31.list3.option1.text'),
          },
          {
            title: t('li8.section31.list3.option2.title'),
            text: t('li8.section31.list3.option2.text'),
          },
          {
            title: t('li8.section31.list3.option3.title'),
            text: t('li8.section31.list3.option3.text'),
          },
          {
            title: t('li8.section31.list3.option4.title'),
            text: t('li8.section31.list3.option4.text'),
          },
          {
            title: t('li8.section31.list3.option5.title'),
            text: t('li8.section31.list3.option5.text'),
          },
          {
            title: t('li8.section31.list3.option6.title'),
            text: t('li8.section31.list3.option6.text'),
          },
          {
            title: t('li8.section31.list3.option7.title'),
            text: t('li8.section31.list3.option7.text'),
          },
          {
            title: t('li8.section31.list3.option8.title'),
            text: t('li8.section31.list3.option8.text'),
          },
          {
            title: t('li8.section31.list3.option9.title'),
            text: t('li8.section31.list3.option9.text'),
          },
          {
            title: t('li8.section31.list3.option10.title'),
            text: t('li8.section31.list3.option10.text'),
          },
          {
            title: t('li8.section31.list3.option11.title'),
            text: t('li8.section31.list3.option11.text'),
          },
        ]
      },
      {
        name: t('li8.section31.list4.name'),
        title: t('li8.section31.list4.title'),
        text: t('li8.section31.list4.text'),
        allName: t('li8.section31.list4.allName'),
        isGradient: false,
        options: [
          {
            title: t('li8.section31.list4.option1.title'),
            text: t('li8.section31.list4.option1.text'),
          },
          {
            title: t('li8.section31.list4.option2.title'),
            text: t('li8.section31.list4.option2.text'),
          },
          {
            title: t('li8.section31.list4.option3.title'),
            text: t('li8.section31.list4.option3.text'),
          },
          {
            title: t('li8.section31.list4.option4.title'),
            text: t('li8.section31.list4.option4.text'),
          },
          {
            title: t('li8.section31.list4.option5.title'),
            text: t('li8.section31.list4.option5.text'),
          },
          {
            title: t('li8.section31.list4.option6.title'),
            text: t('li8.section31.list4.option6.text'),
          },
          {
            title: t('li8.section31.list4.option7.title'),
            text: t('li8.section31.list4.option7.text'),
          },
          {
            title: t('li8.section31.list4.option8.title'),
            text: t('li8.section31.list4.option8.text'),
          },
        ]
      },
    ]
  }
  const section32 ={
    title: t('li8.section32.title'),
    models: [
      {
        title: t('li8.section32.model1.name'),
        id: 0,
      },
      {
        title: t('li8.section32.model2.name'),
        id: 1,
      },
      {
        title: t('li8.section32.model3.name'),
        id: 2,
      },
    ],
    infos: [
      {
        id: 0,
        info: [
          {
            title: t('li8.section32.model1.info1.title'),
            text: t('li8.section32.model1.info1.text'),
            id: 0
          },
          {
            title: t('li8.section32.model1.info2.title'),
            text: t('li8.section32.model1.info2.text'),
            id: 0
          },
          {
            title: t('li8.section32.model1.info3.title'),
            text: t('li8.section32.model1.info3.text'),
            id: 0
          },
          {
            title: t('li8.section32.model1.info4.title'),
            text: t('li8.section32.model1.info4.text'),
            id: 0
          },
          {
            title: t('li8.section32.model1.info5.title'),
            text: t('li8.section32.model1.info5.text'),
            id: 0
          },
          {
            title: t('li8.section32.model1.info6.title'),
            text: t('li8.section32.model1.info6.text'),
            id: 0
          },
          
        ]
      },
      {
        id: 1,
        info: [
          {
            title: t('li8.section32.model2.info1.title'),
            text: t('li8.section32.model2.info1.text'),
            id: 0
          },
          {
            title: t('li8.section32.model2.info2.title'),
            text: t('li8.section32.model2.info2.text'),
            id: 0
          },
          {
            title: t('li8.section32.model2.info3.title'),
            text: t('li8.section32.model2.info3.text'),
            id: 0
          },
          {
            title: t('li8.section32.model2.info4.title'),
            text: t('li8.section32.model2.info4.text'),
            id: 0
          },
          {
            title: t('li8.section32.model2.info5.title'),
            text: t('li8.section32.model2.info5.text'),
            id: 0
          },
          {
            title: t('li8.section32.model2.info6.title'),
            text: t('li8.section32.model2.info6.text'),
            id: 0
          },
          
        ]
      },
      {
        id: 2,
        info: [
          {
            title: t('li8.section32.model3.info1.title'),
            text: t('li8.section32.model3.info1.text'),
            id: 0
          },
          {
            title: t('li8.section32.model3.info2.title'),
            text: t('li8.section32.model3.info2.text'),
            id: 0
          },
          {
            title: t('li8.section32.model3.info3.title'),
            text: t('li8.section32.model3.info3.text'),
            id: 0
          },
          {
            title: t('li8.section32.model3.info4.title'),
            text: t('li8.section32.model3.info4.text'),
            id: 0
          },
          {
            title: t('li8.section32.model3.info5.title'),
            text: t('li8.section32.model3.info5.text'),
            id: 0
          },
          {
            title: t('li8.section32.model3.info6.title'),
            text: t('li8.section32.model3.info6.text'),
            id: 0
          },
          
        ]
      },
    ],
    medias: [
      {
        id: 0,
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section31-3model.png`,
      },
      {
        id: 1,
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section31-2model.png`,
      },
      {
        id: 2,
        media: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}section31-1model.png`,
      },
    ]
  }
  return (
    <div>
      <section className={'w-full h-screen relative'}>
        <IndexBanner bgRes={indexBanner.bgRes} bg={indexBanner.bg} logoImage={indexBanner.logoImage} carHeader={true}/>
      </section>
      <section className={'w-full h-screen'}>
        <ListCar
          list={section2.list}
          title={section2.title}
          bgRes={section2.bgRes} bg={section2.bg}
        />
      </section>
      <section className={'w-full h-screen'}>
        <ListCar
          list={section3.list}
          title={section3.title}
          bgRes={section3.bgRes} bg={section3.bg}
        />
      </section>
      <section className={' relative'}>
        <TitleBanner video={true} banner={section4}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section5} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section6} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section7} isShadow={true}/>
      </section>
      <section className={' relative'}>
        <TitleBanner banner={section8}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section9} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section10} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section11} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <BottomTextSection video={false} bg={section12.bg} bgRes={section12.bgRes} title={section12.title} subtitle={section12.subTitle} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section13} isShadow={true}/>
      </section>
      <section className={' relative'}>
        <TitleBanner video={false} banner={section14}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section15} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <BottomTextSection video={true} media={section16.media} title={section16.title} subtitle={section16.subTitle} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section17} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section18} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section19} isShadow={true}/>
      </section>
      <section className={' relative'}>
        <TitleBanner video={false} banner={section20}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section21} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section22} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section23.lists} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section24.lists} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section25} isShadow={true}/>
      </section>
      <section className={'relative'}>
        <BottomTextSection video={false} bgRes={section26.bgRes} bg={section26.bg} title={section26.title} subtitle={section26.subTitle}/>
      </section>
      <section className={'relative'}>
        <SwiperSection carousel={section27} isShadow={true}/>
      </section>
      <section className="relative">
        <OptionsSection title={section28.title} lists={section28.lists}/>
      </section>
      <section className={'section'}>
        <GridCard cards={section29}/>
      </section>
      <section className={'section relative bg-dark'}>
        <BottomPositionCards section={section30}/>
      </section>
      <section>
        <SwiperTab title={section31.title} lists={section31.lists}/>
      </section>
      <section>
        <ConfigurationsSection data={section32}/>
      </section>
    </div>
  )
}

export default LiL8