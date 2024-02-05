import { BottomPositionCards, CloseBtnUI, ExtraSection, HeaderBannerAbout, ImageUI, IndexBanner, SectionTitle, SwiperSection, SwiperTab, TitleBanner, TitleBottomSection, VideoUI } from "@/components"
import { useTranslation } from "react-i18next"

const LiL7 = () => {
  const {t} = useTranslation()
  const indexBanner = {
    bg: "/Lil7/header-bg.jpg",
    bgRes: "/Lil7/header-bg-resp.jpg",
    logo: "/Lil7/header-logo.png"
  }
  const section = {
    bg: "/Lil7/section-bg.jpg",
    bgRes: "/Lil7/section-bg-res.jpg",
    title: t("li7.section1.title"),
    subTitle: t("li7.section1.subtitle")
  }
  const section2 = {
    bg: "/Lil7/section2-bg.jpg",
    bgRes: "/Lil7/section2-bg-res.jpg",
    video: "/Lil7/section2.mp4",
    title: t("li7.section2.title"),
    subTitle: t("li7.section2.subtitle")
  }
  const section3 = {
    title: t("li7.section3.title"),
    list: [
      {
        title: t("li7.section3.list1.title"),
        text: t("li7.section3.list1.subtitle"),
        media: "https://v.ampmake.com/lilibrary/hd/586946098437601/4ae0611e-5f29-48ec-b43e-4af8cea21229.mp4",
        video: true
      },
      {
        title: t("li7.section3.list2.title"),
        text: t("li7.section3.list2.subtitle"),
        media: "https://v.ampmake.com/lilibrary/hd/586933654827039/9241d214-62e3-4838-99f2-0279bc045947.mp4",
        video: true
      },
      {
        title: t("li7.section3.list3.title"),
        text: t("li7.section3.list3.subtitle"),
        media: "https://v.ampmake.com/lilibrary/hd/586935769130768/a3db3cd7-6384-4b2a-986b-43e5d677716f.mp4",
        video: true
      }
    ]
  }
  const section4 = {
    title: t("li7.section4.title"),
    subTitle: t("li7.section4.subtitle"),
    bg: "/Lil7/section4-bg.jpg",
    bgRes: "/Lil7/section4-bg-resp.jpg"
  }
  const section5 = {
    title: t("li7.section5.title"),
    subtitle: t("li7.section5.subtitle"),
    bg: "/Lil7/section5-bg.jpg",
    bgRes: "/Lil7/section5-bg-resp.jpg"
  }
  const section6 = {
    title: t("li7.section6.title"),
    subtitle: t("li7.section6.subtitle"),
    bg: "/Lil7/section6-bg.jpg",
    bgRes: "/Lil7/section6-bg-res.jpg",
    video: "/Lil7/section6-video.mp4"
  }
  const section7 = {
    title: t("li7.section7.title"),
    subtitle2: t("li7.section7.subtitle2"),
    list: [
      {
        title: t("li7.section7.list1.title"),
        text: t("li7.section7.list1.subtitle"),
        media: "/Lil7/section7-1-bg.jpg",
        mediaRes: "/Lil7/section7-1-bg-res.jpg",
      },
      {
        title: t("li7.section7.list2.title"),
        text: t("li7.section7.list2.subtitle"),
        media: "/Lil7/section7-2-bg.jpg",
        mediaRes: "/Lil7/section7-2-bg-res.jpg",
      },
      {
        title: t("li7.section7.list3.title"),
        text: t("li7.section7.list3.subtitle"),
        media: "/Lil7/section7-3-bg.jpg",
        mediaRes: "/Lil7/section7-3-bg-res.jpg",
      }
    ],
    title2: t("li7.section7.title2"),
    list2: [
      {
        title: t("li7.section7.list4.title"),
        text: t("li7.section7.list4.subtitle"),
        media: "/Lil7/section7-4-bg.jpg",
        mediaRes: "/Lil7/section7-4-bg-res.jpg"
      },
      {
        title: t("li7.section7.list5.title"),
        text: t("li7.section7.list5.subtitle"),
        media: ("/Lil7/section7-5-bg.jpg"),
        mediaRes: ("/Lil7/section7-5-bg-res.jpg")
      }
    ],
    media2: "/Lil7/section7-6-bg.jpg",
    media2Res: "/Lil7/section7-6-bg-res.jpg",
    title3: t("li7.section7.title3"),
    subtitle3: t("li7.section7.subtitle3"),
    media3: "/Lil7.section7-6-bg.jpg",
    media3Res: "/Lil7/section7-6-bg-res.jpg",
    list3: [
      {
        title: t("li7.section7.list6.title"),
        subtitle: t("li7.section7.list6.subtitle")
      },
      {
        title: t("li7.section7.list7.title"),
        subtitle: t("li7.section7.list7.subtitle")
      }
    ]
  }
  const section8 = {
    title: t("li7.section8.title"),
    subtitle: t("li7.section8.subtitle"),
    bg: "/Lil7/section8-bg.jpg",
    bgRes: "/Lil7/section8-bg-res.jpg"
  }
  const section9 = {
    title: t("li7.section9.title"),
    subtitle: t("li7.section9.subtitle"),
    bg: "/Lil7/section9-bg.jpg",
    bgRes: "/Lil7/section9-bg-res.jpg"
  }
  const section10 = {
    title: t("li7.section10.title"),
    subtitle: t("li7.section10.subtitle"),
    list: [
      {
        title: t("li7.section10.list1.title"),
        text: t("li7.section10.list1.subtitle"),
        media: "/Lil7/section10-1-bg.jpg",
        mediaRes: "/Lil7/section10-1-bg-res.jpg"
      },
      {
        title: t("li7.section10.list2.title"),
        text: t("li7.section10.list2.subtitle"),
        media: "/Lil7/section10-2-bg.jpg",
        mediaRes: "/Lil7/section10-2-bg-res.jpg"
      },
      {
        title: t("li7.section10.list3.title"),
        text: t("li7.section10.list3.subtitle"),
        media: "/Lil7/section10-3-bg.jpg",
        mediaRes: "/Lil7/section10-3-bg-res.jpg"
      },
      {
        title: t("li7.section10.list4.title"),
        text: t("li7.section10.list4.subtitle"),
        media: "/Lil7/section10-4-bg.jpg",
        mediaRes: "/Lil7/section10-4-bg-res.jpg"
      }
    ]
  }
  const section11 = {
    title: t("li7.section11.title"),
    subtitle: t("li7.section11.subtitle"),
    video: "https://p.ampmake.com/lilibrary/hd/795571127412934/5ae2b78e-5ffc-4917-babc-b8a2cebf64ad.mp4",
    
  }
  const section12 = {
    title: t("li7.section12.title"),
    subtitle: t("li7.section12.subtitle"),
    list: [
      {
        title: t("li7.section12.list1.title"),
        text: t("li7.section12.list1.subtitle"),
        media: "/Lil7/section12-1-bg.jpg",
        mediaRes: "/Lil7/section12-1-bg-res.jpg"
      },
      {
        title: t("li7.section12.list2.title"),
        text: t("li7.section12.list2.subtitle"),
        video: true,
        media: "https://p.ampmake.com/lilibrary/hd/982278238680130/9b895d99-3d79-469b-8a98-ba36322cd4b1.mp4"
      }
    ]
  }
  const section13 = {
    title: t("li7.section13.title"),
    subtitle: t("li7.section13.subtitle"),
    bg: "/Lil7/section13-bg.jpg",
    bgRes: "/Lil7/section13-bg-res.jpg"
  }
  const section14 = {
    title: t("li7.section14.title"),
    subtitle: t("li7.section14.subtitle"),
    bg: "/Lil7/section14-bg.jpg",
    bgRes: "/Lil7/section14-bg-res.jpg"
  }
  const section15 = {
    title: t("li7.section15.title"),
    subtitle: t("li7.section15.subtitle"),
    subtitle2: t("li7.section15.subtitle2"),
    video: "/Lil7/section15-video.mp4",
    list: [
      {
        title: t("li7.section15.list1.title"),
        subtitle: t("li7.section15.list1.subtitle")
      },
      {
        title: t("li7.section15.list2.title"),
        subtitle: t("li7.section15.list2.subtitle")
      },
      {
        title: t("li7.section15.list3.title"),
        subtitle: t("li7.section15.list3.subtitle")
      },
      {
        title: t("li7.section15.list4.title"),
        subtitle: t("li7.section15.list4.subtitle")
      }
    ]
  }
  const section16 = {
    title: t("li7.section16.title"),
    subtitle: t("li7.section16.subtitle"),
    bg: "/Lil7/section16-bg.jpg",
    bgRes: "/Lil7/section16-bg-res.jpg",
    video: "/Lil7/section16-video.mp4",
    list: [
      {
        name: t("li7.section16.item1.name"),
        value: t("li7.section16.item1.value")
      },
      {
        name: t("li7.section16.item2.name"),
        value: t("li7.section16.item2.value")
      },
      {
        name: t("li7.section16.item3.name"),
        value: t("li7.section16.item3.value")
      },
      {
        name: t("li7.section16.item4.name"),
        value: t("li7.section16.item4.value")
      }
    ]
  }
  const section17 = {
    title: t("li7.section17.title"),
    subtitle: t("li7.section17.subtitle"),
    bg: "/Lil7/section17-bg.jpg",
    bgRes: "/Lil7/section17-bg-res.jpg",
    video: "/Lil7/section17-video.mp4"
  }
  const section18 = {
    title: t("li7.section18.title"),
    subtitle: t("li7.section18.subtitle"),
    bg: "/Lil7/section18-bg.jpg",
    bgRes: "/Lil7/section18-bg-res.jpg"
  }
  const section19 = {
    title: t("li7.section19.title"),
    subtitle: t("li7.section19.subtitle"),
    subtitle2: t("li7.section19.subtitle2"),
    bg: "/Lil7/section19-bg.jpg",
    bgRes: "/Lil7/section19-bg-res.jpg",
    video: "/Lil7/section19-video.mp4"
  }
  const section20 = {
    title: t("li7.section20.title"),
    subtitle: t("li7.section20.subtitle"),
    list: [
      {
        title: t("li7.section20.list1.title"),
        text: t("li7.section20.list1.subtitle"),
        media: "/Lil7/section20-1-bg.jpg",
        mediaRes: "/Lil7/section20-1-bg-res.jpg"
      },
      {
        title: t("li7.section20.list2.title"),
        text: t("li7.section20.list2.subtitle"),
        media: "/Lil7/section20-2-bg.jpg",
        mediaRes: "/Lil7/section20-2-bg-res.jpg"
      },
      {
        title: t("li7.section20.list3.title"),
        text: t("li7.section20.list3.subtitle"),
        media: "/Lil7/section20-3-bg.jpg",
        mediaRes: "/Lil7/section20-3-bg-res.jpg"
      },
      {
        title: t("li7.section20.list4.title"),
        text: t("li7.section20.list4.subtitle"),
        media: "/Lil7/section20-4-bg.jpg",
        mediaRes: "/Lil7/section20-4-bg-res.jpg"
      },
    ]
  }
  const section21 = {
    title: t("li7.section21.title"),
    subtitle: t("li7.section21.subtitle.subtitle"),
    bg: "/Lil7/section21-bg.jpg",
    bgRes: "/Lil7/section21-bg-res.jpg",
    list1: [
      {
        title: t("li7.section21.item1.name"),
        subtitle: t("li7.section21.item1.value")
      },
      {
        title: t("li7.section21.item2.name"),
        subtitle: t("li7.section21.item2.value")
      },
      {
        title: t("li7.section21.item3.name"),
        subtitle: t("li7.section21.item3.value")
      },
    ],
    list2: [
      {
        bg: "/Lil7/section21-list1.jpg",
        bgRes: "/Lil7/section21-list1-res.jpg",
        title: t("li7.section21.list1.title"),
        subtitle: t("li7.section21.list1.subtitle")
      },
      {
        bg: "/Lil7/section21-list2.jpg",
        bgRes: "/Lil7/section21-list2-res.jpg",
        title: t("li7.section21.list2.title"),
        subtitle: t("li7.section21.list2.subtitle")
      },
      {
        bg: "/Lil7/section21-list3.jpg",
        bgRes: "/Lil7/section21-list3-res.jpg",
        title: t("li7.section21.list3.title"),
        subtitle: t("li7.section21.list3.subtitle")
      },
    ]
  }
  const section22 = {
    title: t("li7.section22.title"),
    subtitle: t("li7.section22.subtitle"),
    bg: "/Lil7/section22-bg.jpg",
    bgRes: "/Lil7/section22-bg-res.jpg"
  }
  const section23 = {
    title: t("li7.section23.title"),
    subtitle: t("li7.section23.subtitle"),
    item: {
      name: t("li7.section23.item.name"),
      value: t("li7.section23.item.value")
    },
    list: [
      {
        title: t("li7.section23.list1.title"),
        text: t("li7.section23.list1.subtitle"),
        media: "/Lil7/section23-1-bg.jpg",
        mediaRes: "/Lil7/section23-1-res.jpg"
      },
      {
        title: t("li7.section23.list2.title"),
        text: t("li7.section23.list2.subtitle"),
        media: "/Lil7/section23-2-bg.jpg",
        mediaRes: "/Lil7/section23-2-res.jpg"
      }
    ]
  }
  const section24 = {
    title: t("li7.section24.title"),
    subtitle: t("li7.section24.subtitle"),
    bg: "/Lil7/section24-bg.jpg",
    bgRes: "/Lil7/section24-bg-res.jpg"
  }
  const section25 = {
    title: t("li7.section25.title"),
    subtitle: t("li7.section25.subtitle"),
    subtitle2: t("li7.section25.subtitle2"),
    bg: "/Lil7/section25-bg.jpg",
    bgRes: "/Lil7/section25-bg-res.jpg"
  }
  const section26 = {
    title: t("li7.section26.title"),
    subtitle: t("li7.section26.subtitle"),
    bg: "/Lil7/section26-bg.jpg",
    bgRes: "/Lil7/section26-bg-res.jpg"
  }
  const section27 = {
    title: t("li7.section27.title"),
    subtitle: t("li7.section27.subtitle"),
    subtitle2: t("li7.section27.subtitle2"),
    bg: "/Lil7/section27-bg.jpg",
    bgRes: "/Lil7/section27-bg-res.jpg"
  }
  const section28 = {
    title: t("li7.section28.title"),
    subtitle: t("li7.section28.subtitle"),
    item: [
      {
        name: t("li7.section28.item1.name"),
        value: t("li7.section28.item1.value")
      },
      {
        name: t("li7.section28.item2.name"),
        value: t("li7.section28.item2.value")
      }
    ],
    list: [
      {
        title: t("li7.section28.list1.title"),
        text: t("li7.section28.list1.subtitle"),
        media: "/Lil7/section28-1-video.mp4",
        video: true
      },
      {
        title: t("li7.section28.list2.title"),
        text: t("li7.section28.list2.subtitle"),
        media: "/Lil7/section28-2-video.mp4",
        video: true
      }
    ],
    list2: [
      {
        title: t("li7.section28.item3.title"),
        subtitle: t("li7.section28.item3.subtitle"),
        bg: "/Lil7/section28-list1.jpg",
        bgRes: "/Lil7/section28-list1-res.jpg",
      },
      {
        title: t("li7.section28.item4.title"),
        subtitle: t("li7.section28.item4.subtitle"),
        bg: "/Lil7/section28-list2.jpg",
        bgRes: "/Lil7/section28-list2-res.jpg",
      },
      {
        title: t("li7.section28.item5.title"),
        subtitle: t("li7.section28.item5.subtitle"),
        bg: "/Lil7/section28-list3.jpg",
        bgRes: "/Lil7/section28-list3-res.jpg",
      },
      {
        title: t("li7.section28.item6.title"),
        subtitle: t("li7.section28.item6.subtitle"),
        bg: "/Lil7/section28-list4.jpg",
        bgRes: "/Lil7/section28-list4-res.jpg",
      },
    ]
  }
 const section29 = {
  title: t("li7.section29.title"),
  subtitle: t("li7.section29.subtitle"),
  bg: "/Lil7/section29-bg.jpg",
  bgRes: "/Lil7/section29-bg-res.jpg"
 }
 const section30 = {
  title: t("li7.section30.title"),
  subtitle: t("li7.section30.subtitle"),
  item: {
    name: t("li7.section30.item1.name"),
    value: t("li7.section30.item1.value")
  },
  list: [
    {
      title: t("li7.section30.list1.title"),
      text: t("li7.section30.list1.subtitle"),
      media: "/Lil7/section30-1-bg.jpg",
      mediaRes: "/Lil7/section30-1-bg-res.jpg"
    },
    {
      title: t("li7.section30.list2.title"),
      text: t("li7.section30.list2.subtitle"),
      media: "/Lil7/section30-2-bg.jpg",
      mediaRes: "/Lil7/section30-2-bg-res.jpg"
    }
  ]
 }
 const section31 = {
  title: t("li7.section31.title"),
  subtitle: t("li7.section31.subtitle"),
  bg: "/Lil7/section31-bg.jpg",
  bgRes: "/Lil7/section31-bg-res.jpg",
  item: {
    name: t("li7.section31.item1.name"),
    value: t("li7.section31.item1.value")
  }
 }
 const section32 = {
  title: t("li7.section32.title"),
  subtitle: t("li7.section32.subtitle"),
  list: [
    {
      title: t("li7.section32.list1.title"),
      text: t("li7.section32.list1.subtitle"),
      media: "/Lil7/section32-1-bg.jpg",
      mediaRes: "/Lil7/section32-1-bg-res.jpg"
    },
    {
      title: t("li7.section32.list2.title"),
      text: t("li7.section32.list2.subtitle"),
      media: "/Lil7/section32-2-bg.jpg",
      mediaRes: "/Lil7/section32-2-bg-res.jpg"
    },
    {
      title: t("li7.section32.list3.title"),
      text: t("li7.section32.list3.subtitle"),
      media: "/Lil7/section32-3-bg.jpg",
      mediaRes: "/Lil7/section32-3-bg-res.jpg"
    },
  ]
 }
 const section33 = {
  title: t("li7.section33.title"),
  subtitle: t("li7.section33.subtitle"),
  subtitle2: t("li7.section33.subtitle6"),
  cards1: {
    subtitle: t("li7.section33.subtitle2"),
    card1: {
      bg: "/Lil7/section33-1-bg.jpg",
      bgRes: "/Lil7/section33-1-bg-res.jpg"
    },
    card2: {
      bg: "/Lil7/section33-2-bg.jpg",
      bgRes: "/Lil7/section33-2-bg-res.jpg"
    },
    card3: {
      bg: "/Lil7/section33-3-bg.jpg",
      bgRes: "/Lil7/section33-3-bg-res.jpg"
    },
    card4: {
      bg: "/Lil7/section33-4-bg.jpg",
      bgRes: "/Lil7/section33-4-bg-res.jpg"
    },
    card5: {
      bg: "/Lil7/section33-5-bg.jpg",
      bgRes: "/Lil7/section33-5-bg-res.jpg"
    },
    card6: {
      bg: "/Lil7/section33-6-bg.jpg",
      bgRes: "/Lil7/section33-6-bg-res.jpg"
    },
    card7: {
      bg: "/Lil7/section33-7-bg.jpg",
      bgRes: "/Lil7/section33-7-bg-res.jpg"
    },
    card8: {
      bg: "/Lil7/section33-8-bg.jpg",
      bgRes: "/Lil7/section33-8-bg-res.jpg"
    },
    card9: {
      bg: "/Lil7/section33-9-bg.jpg",
      bgRes: "/Lil7/section33-9-bg-res.jpg"
    },
  },
  cards2: {
    subtitle: t("li7.section33.subtitle3"),
    card1: {
      bg: "/Lil7/section33-10-bg.jpg",
      bgRes: "/Lil7/section33-10-bg-res.jpg"
    },
    card2: {
      bg: "/Lil7/section33-11-bg.jpg",
      bgRes: "/Lil7/section33-11-bg-res.jpg"
    },
    card3: {
      bg: "/Lil7/section33-12-bg.jpg",
      bgRes: "/Lil7/section33-12-bg-res.jpg"
    },
    card4: {
      bg: "/Lil7/section33-13-bg.jpg",
      bgRes: "/Lil7/section33-13-bg-res.jpg"
    },
    card5: {
      bg: "/Lil7/section33-14-bg.jpg",
      bgRes: "/Lil7/section33-14-bg-res.jpg"
    },
    card6: {
      bg: "/Lil7/section33-15-bg.jpg",
      bgRes: "/Lil7/section33-15-bg-res.jpg"
    },
    card7: {
      bg: "/Lil7/section33-16-bg.jpg",
      bgRes: "/Lil7/section33-16-bg-res.jpg"
    },
    card8: {
      bg: "/Lil7/section33-17-bg.jpg",
      bgRes: "/Lil7/section33-17-bg-res.jpg"
    },
    card9: {
      bg: "/Lil7/section33-18-bg.jpg",
      bgRes: "/Lil7/section33-18-bg-res.jpg"
    },
  },
  cards3: {
    subtitle: t("li7.section33.subtitle4"),
    card1: {
      bg: "/Lil7/section33-19-bg.jpg",
      bgRes: "/Lil7/section33-19-bg-res.jpg"
    },
    card2: {
      bg: "/Lil7/section33-20-bg.jpg",
      bgRes: "/Lil7/section33-20-bg-res.jpg"
    },
    card3: {
      bg: "/Lil7/section33-21-bg.jpg",
      bgRes: "/Lil7/section33-21-bg-res.jpg"
    },
    card4: {
      bg: "/Lil7/section33-22-bg.jpg",
      bgRes: "/Lil7/section33-22-bg-res.jpg"
    },
    card5: {
      bg: "/Lil7/section33-23-bg.jpg",
      bgRes: "/Lil7/section33-23-bg-res.jpg"
    },
    card6: {
      bg: "/Lil7/section33-24-bg.jpg",
      bgRes: "/Lil7/section33-24-bg-res.jpg"
    },
    card7: {
      bg: "/Lil7/section33-25-bg.jpg",
      bgRes: "/Lil7/section33-25-bg-res.jpg"
    },
    card8: {
      bg: "/Lil7/section33-26-bg.jpg",
      bgRes: "/Lil7/section33-26-bg-res.jpg"
    },
    card9: {
      bg: "/Lil7/section33-27-bg.jpg",
      bgRes: "/Lil7/section33-27-bg-res.jpg"
    },
  },
  cards4: {
    subtitle: t("li7.section33.subtitle5"),
    card1: {
      bg: "/Lil7/section33-28-bg.jpg",
      bgRes: "/Lil7/section33-28-bg-res.jpg"
    },
    card2: {
      bg: "/Lil7/section33-29-bg.jpg",
      bgRes: "/Lil7/section33-29-bg-res.jpg"
    },
    card3: {
      bg: "/Lil7/section33-30-bg.jpg",
      bgRes: "/Lil7/section33-30-bg-res.jpg"
    },
    card4: {
      bg: "/Lil7/section33-31-bg.jpg",
      bgRes: "/Lil7/section33-31-bg-res.jpg"
    },
    card5: {
      bg: "/Lil7/section33-32-bg.jpg",
      bgRes: "/Lil7/section33-32-bg-res.jpg"
    },
    card6: {
      bg: "/Lil7/section33-33-bg.jpg",
      bgRes: "/Lil7/section33-33-bg-res.jpg"
    },
    card7: {
      bg: "/Lil7/section33-34-bg.jpg",
      bgRes: "/Lil7/section33-34-bg-res.jpg"
    },
    card8: {
      bg: "/Lil7/section33-35-bg.jpg",
      bgRes: "/Lil7/section33-35-bg-res.jpg"
    },
    card9: {
      bg: "/Lil7/section33-36-bg.jpg",
      bgRes: "/Lil7/section33-36-bg-res.jpg"
    },
  },
 }
 const section34 = {
  title: t("li7.section34.title"),
  link: t("li7.section34.link"),
  cards: [
    {
      id: 1,
      title: t("li7.section34.card1.title"),
      subTitle: t("li7.section34.card1.subtitle"),
      info: [
        {
          id: 1,
          title: t("li7.section34.card1.info1.title"),
          subTitle: t("li7.section34.card1.info1.subtitle")
        },
        {
          id: 2,
          title: t("li7.section34.card1.info2.title"),
          subTitle: t("li7.section34.card1.info2.subtitle")
        },
        {
          id: 3,
          title: t("li7.section34.card1.info3.title"),
          subTitle: t("li7.section34.card1.info3.subtitle")
        },
      ]
    },
    {
      id: 2,
      title: t("li7.section34.card2.title"),
      subTitle: t("li7.section34.card2.subtitle"),
      info: [
        {
          id: 1,
          title: t("li7.section34.card2.info1.title"),
          subTitle: t("li7.section34.card2.info1.subtitle"),
        },
        {
          id: 2,
          title: t("li7.section34.card2.info2.title"),
          subTitle: t("li7.section34.card2.info2.subtitle"),
        },
        {
          id: 3,
          title: t("li7.section34.card2.info3.title"),
          subTitle: t("li7.section34.card2.info3.subtitle"),
        },
      ]
    },
    {
      id: 3,
      title: t("li7.section34.card3.title"),
      subTitle: t("li7.section34.card3.subtitle"),
      info: [
        {
          id: 1,
          title: t("li7.section34.card3.info1.title"),
          subTitle: t("li7.section34.card3.info1.subtitle"),
        },
        {
          id: 2,
          title: t("li7.section34.card3.info2.title"),
          subTitle: t("li7.section34.card3.info2.subtitle"),
        },
        {
          id: 3,
          title: t("li7.section34.card3.info3.title"),
          subTitle: t("li7.section34.card3.info3.subtitle"),
        },
      ]
    }
  ]
 }
 const section35 = {
  title: t("li7.section35.title"),
  lists: [
    {
      allName: t("li7.section35.list1.name"),
      title: t("li7.section35.list1.card.title"),
      name: t("li7.section35.list1.card.subtitle"),
      text: t("li7.section35.list1.card.subtitle2"),
      isGradient: true,
      options: [
        {
          title: t("li7.section35.list1.card.row1.info1.name"),
          text: t("li7.section35.list1.card.row1.info1.value")
        },
        {
          title: t("li7.section35.list1.card.row1.info2.name"),
          text: t("li7.section35.list1.card.row1.info2.value")
        },
        {
          title: t("li7.section35.list1.card.row1.info3.name"),
          text: t("li7.section35.list1.card.row1.info3.value")
        },
        {
          title: t("li7.section35.list1.card.row1.info4.name"),
          text: t("li7.section35.list1.card.row1.info4.value")
        },
        {
          title: t("li7.section35.list1.card.row1.info5.name"),
          text: t("li7.section35.list1.card.row1.info5.value")
        },
        {
          title: t("li7.section35.list1.card.row1.info6.name"),
          text: t("li7.section35.list1.card.row1.info6.value")
        },
        {
          title: t("li7.section35.list1.card.row1.info7.name"),
          text: t("li7.section35.list1.card.row1.info7.value")
        },
        {
          title: t("li7.section35.list1.card.row1.info8.name"),
          text: t("li7.section35.list1.card.row1.info8.value")
        },
        {
          title: t("li7.section35.list1.card.row2.info1.name"),
          text: t("li7.section35.list1.card.row2.info1.value")
        },
        {
          title: t("li7.section35.list1.card.row2.info2.name"),
          text: t("li7.section35.list1.card.row2.info2.value")
        },
        {
          title: t("li7.section35.list1.card.row2.info3.name"),
          text: t("li7.section35.list1.card.row2.info3.value")
        },
        {
          title: t("li7.section35.list1.card.row2.info4.name"),
          text: t("li7.section35.list1.card.row2.info4.value")
        },
        {
          title: t("li7.section35.list1.card.row2.info5.name"),
          text: t("li7.section35.list1.card.row2.info5.value")
        },
        {
          title: t("li7.section35.list1.card.row2.info6.name"),
          text: t("li7.section35.list1.card.row2.info6.value")
        },
        {
          title: t("li7.section35.list1.card.row2.info7.name"),
          text: t("li7.section35.list1.card.row2.info7.value")
        }
      ]
    },
    {
      allName: t("li7.section35.list2.name"),
      title: t("li7.section35.list2.card.title"),
      name: t("li7.section35.list2.card.subtitle"),
      text: t("li7.section35.list2.card.subtitle2"),
      isGradient: true,
      options: [
        {
          title: t("li7.section35.list2.card.row1.info1.name"),
          text: t("li7.section35.list2.card.row1.info1.value")
        },
        {
          title: t("li7.section35.list2.card.row1.info2.name"),
          text: t("li7.section35.list2.card.row1.info2.value")
        },
        {
          title: t("li7.section35.list2.card.row1.info3.name"),
          text: t("li7.section35.list2.card.row1.info3.value")
        },
        {
          title: t("li7.section35.list2.card.row1.info4.name"),
          text: t("li7.section35.list2.card.row1.info4.value")
        },
        {
          title: t("li7.section35.list2.card.row1.info5.name"),
          text: t("li7.section35.list2.card.row1.info5.value")
        },
        {
          title: t("li7.section35.list2.card.row1.info6.name"),
          text: t("li7.section35.list2.card.row1.info6.value")
        },
        {
          title: t("li7.section35.list2.card.row1.info7.name"),
          text: t("li7.section35.list2.card.row1.info7.value")
        },
        {
          title: t("li7.section35.list2.card.row2.info1.name"),
          text: t("li7.section35.list2.card.row2.info1.value")
        },
        {
          title: t("li7.section35.list2.card.row2.info2.name"),
          text: t("li7.section35.list2.card.row2.info2.value")
        },
        {
          title: t("li7.section35.list2.card.row2.info3.name"),
          text: t("li7.section35.list2.card.row2.info3.value")
        },
        {
          title: t("li7.section35.list2.card.row2.info4.name"),
          text: t("li7.section35.list2.card.row2.info4.value")
        },
        {
          title: t("li7.section35.list2.card.row2.info5.name"),
          text: t("li7.section35.list2.card.row2.info5.value")
        },
        {
          title: t("li7.section35.list2.card.row2.info6.name"),
          text: t("li7.section35.list2.card.row2.info6.value")
        },
        {
          title: t("li7.section35.list2.card.row2.info7.name"),
          text: t("li7.section35.list2.card.row2.info7.value")
        }
      ]
    },
    {
      allName: t("li7.section35.list3.name"),
      title: t("li7.section35.list3.card.title"),
      name: t("li7.section35.list3.card.subtitle"),
      text: t("li7.section35.list3.card.subtitle2"),
      isGradient: true,
      options: [
        {
          title: t("li7.section35.list3.card.row1.info1.name"),
          text: t("li7.section35.list3.card.row1.info1.value")
        },
        {
          title: t("li7.section35.list3.card.row1.info2.name"),
          text: t("li7.section35.list3.card.row1.info2.value")
        },
        {
          title: t("li7.section35.list3.card.row1.info3.name"),
          text: t("li7.section35.list3.card.row1.info3.value")
        },
        {
          title: t("li7.section35.list3.card.row1.info4.name"),
          text: t("li7.section35.list3.card.row1.info4.value")
        },
        {
          title: t("li7.section35.list3.card.row1.info5.name"),
          text: t("li7.section35.list3.card.row1.info5.value")
        },
        {
          title: t("li7.section35.list3.card.row1.info6.name"),
          text: t("li7.section35.list3.card.row1.info6.value")
        },
        {
          title: t("li7.section35.list3.card.row2.info1.name"),
          text: t("li7.section35.list3.card.row2.info1.value")
        },
        {
          title: t("li7.section35.list3.card.row2.info2.name"),
          text: t("li7.section35.list3.card.row2.info2.value")
        },
        {
          title: t("li7.section35.list3.card.row2.info3.name"),
          text: t("li7.section35.list3.card.row2.info3.value")
        },
        {
          title: t("li7.section35.list3.card.row2.info4.name"),
          text: t("li7.section35.list3.card.row2.info4.value")
        },
        {
          title: t("li7.section35.list3.card.row2.info5.name"),
          text: t("li7.section35.list3.card.row2.info5.value")
        },
      ]
    },
    {
      allName: t("li7.section35.list4.name"),
      title: t("li7.section35.list4.card.title"),
      name: t("li7.section35.list4.card.subtitle"),
      text: t("li7.section35.list4.card.subtitle2"),
      isGradient: true,
      options: [
        {
          title: t("li7.section35.list4.card.row1.info1.name"),
          text: t("li7.section35.list4.card.row1.info1.value")
        },
        {
          title: t("li7.section35.list4.card.row1.info2.name"),
          text: t("li7.section35.list4.card.row1.info2.value")
        },
        {
          title: t("li7.section35.list4.card.row1.info3.name"),
          text: t("li7.section35.list4.card.row1.info3.value")
        },
        {
          title: t("li7.section35.list4.card.row1.info4.name"),
          text: t("li7.section35.list4.card.row1.info4.value")
        },
        {
          title: t("li7.section35.list4.card.row2.info1.name"),
          text: t("li7.section35.list4.card.row2.info1.value")
        },
        {
          title: t("li7.section35.list4.card.row2.info2.name"),
          text: t("li7.section35.list4.card.row2.info2.value")
        },
        {
          title: t("li7.section35.list4.card.row2.info3.name"),
          text: t("li7.section35.list4.card.row2.info3.value")
        },
        {
          title: t("li7.section35.list4.card.row2.info4.name"),
          text: t("li7.section35.list4.card.row2.info4.value")
        },
      ]
    },
  ]
 }
 const section36 = {
  title: t("li7.section17.title2"),
  subtitle: t("li7.section17.subtitle2"),
  list: [
    {
      title: t("li7.section17.list1.title"),
      text: t("li7.section17.list1.subtitle"),
      media: "/Lil7/section34-1-bg.jpg",
      mediaRes: "/Lil7/section34-1-bg-res.jpg"
    },
    {
      title: t("li7.section17.list2.title"),
      text: t("li7.section17.list2.subtitle"),
      media: "/Lil7/section34-2-bg.jpg",
      mediaRes: "/Lil7/section34-2-bg-res.jpg"
    }
  ]
 }
 const section37 = {
  title: t("li7.section17.title3"),
  subtitle: t("li7.section17.subtitle3"),
  video: "https://p.ampmake.com/lilibrary/hd/961243954363915/b7f9142f-3370-4af4-9819-de3a3fa745d8.mp4"
 }
 const section38 = {
  title: t("li7.section36.title"),
  subtitle: t("li7.section36.subtitle"),
  title2: t("li7.section36.item.title"),
  subtitle2: t("li7.section36.item.subtitle"),
  media: "/Lil7/section35-bg.jpg",
  mediaRes: "/Lil7/section35-bg-res.jpg"
 }
 const section39 = {
  list: [
    {
      title: t("li7.section37.list1.title"),
      text: t("li7.section37.list1.subtitle"),
      video: "https://v.ampmake.com/lilibrary/hd/470244834747147/3f0b76c3-04fd-4592-9673-48e61a5da0a6.mp4"
    },
    {
      title: t("li7.section37.list2.title"),
      text: t("li7.section37.list2.subtitle"),
      video: "https://p.ampmake.com/lilibrary/hd/035409250143449/4dba11a5-8210-4ac3-abbf-2417297c4dc0.mp4"
    },
    {
      title: t("li7.section37.list3.title"),
      text: t("li7.section37.list3.subtitle"),
      video: "https://v.ampmake.com/lilibrary/hd/470303697390858/a0d14785-e79f-46ee-874d-7065a5e74c68.mp4"
    },
    {
      title: t("li7.section37.list4.title"),
      text: t("li7.section37.list4.subtitle"),
      video: ("https://p.ampmake.com/lilibrary/hd/035339551529997/988c9c92-d07e-484c-b1b4-7752528f364e.mp4")
    }
  ]
 }
 const section40 = {
  list: [
    {
      title: t("li7.section38.list1.title"),
      text: t("li7.section38.list1.subtitle"),
      video: "https://vod.ampmake.com/mda-niurny8n9mn4kn3p/vodmp4fd/mda-niurny8n9mn4kn3p.mp4"
    },
    {
      title: t("li7.section38.list2.title"),
      text: t("li7.section38.list2.subtitle"),
      video: "https://vod.ampmake.com/mda-niusc6x7fw8b8375/vodmp4fd/mda-niusc6x7fw8b8375.mp4"
    },
    {
      title: t("li7.section38.list3.title"),
      text: t("li7.section38.list3.subtitle"),
      video: "https://vod.ampmake.com/mda-niurzt881rbzkxi4/vodmp4fd/mda-niurzt881rbzkxi4.mp4"
    }
  ]
 }
  return (
    <div>
      <section className={'w-full h-screen relative'}>
        <IndexBanner logo_uz={indexBanner.logo} bgRes={indexBanner.bgRes} bg={indexBanner.bg} logoImage={indexBanner.logo} carHeader={true}/>
      </section>
      <section className={'w-full h-[50vh] md:h-screen'}>
      <div className={'relative flex items-start justify-start h-full pt-[10%] '}>
        <ImageUI src={section.bg} alt={'li-l7'} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
        <ImageUI src={section.bgRes} alt={'li-l7'} imgStyle={'object-cover md:hidden object-top z-[1]'}/>
        <div className={'container relative z-[5] flex flex-col pl-[5%] md:pl-[15%] md:gap-y-6 text-white'}>
          <div data-aos={"fade-up"} data-aos-duration="400">
              <p className={`text-sm md:text-2xl md:leading-6`}>
                  {section.subTitle}
              </p>
          </div>
          <div data-aos={"fade-up"} data-aos-duration="500">
              <p className={`text-[45px] md:text-[80px] leading-[55px] md:leading-[96px]`}>
                  {section.title}
              </p>
          </div>
        </div>
        </div>
      </section>
      <section className={'relative section-car max-md:pt-10'}> 
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                    <SectionTitle styleBox={'text-start'} title={section2.title} subSmallTitle={section2.subTitle}/>
                </div>
                <div className={'col-span-5 '}>
                    <VideoUI media={section2.video} style={'w-full aspect-video '}/>
                </div>
            </div>
        </div>
      </section>
      <section className={'relative section-car max-md:py-10'}>
          <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                      <SectionTitle styleBox={'text-start'} title={section3.title} subSmallTitle={section3.subTitle}/>
                  </div>
                  <div className={'col-span-5 '}>
                      <SwiperSection hoverChangeText={true} carousel={section3.list} isShadow={true}/>
                  </div>
              </div>
          </div>
      </section>
      <section className={'relative section-car max-md:py-10 md:pb-[11vw] '}>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
              <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                  <SectionTitle styleBox={'text-start'} title={section4.title}
                                subSmallTitle={section4.subTitle}/>
              </div>
              <div className={'col-span-5 '}>
                <div className={'w-full h-screen sm:h-[40vh] lg:h-screen relative'}>
                  <div className={'w-full h-full relative z-[5]  bg-black'}>
                    <ImageUI src={section4?.bg} alt={section4.title}
                              imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                    <ImageUI src={section4?.bgRes} alt={section4.title}
                              imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                  </div> 
                </div>              
              </div>
            </div>
        </div>
      </section>
      <section className="w-full h-[60vh] sm:h-screen">
        <TitleBottomSection bg={section5.bg} bgRes={section5.bgRes} title={section5.title} subtitle={section5.subtitle} />
      </section>
      <section className={'relative section-car bg-black'}>
        <div className={'container container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                    <SectionTitle darkMode={true} styleBox={'text-start'} title={section6.title}
                                  subSmallTitle={section6.subtitle}/>
                </div>
                <div className={'col-span-5 '}>
                    <VideoUI media={section6.video} style={'w-full aspect-video '}/>
                </div>
            </div>
        </div>
      </section>
      <section className={'relative section-car pb-0 bg-black'}>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                    <SectionTitle darkMode={true} styleBox={'text-start'} title={section7.title}/>
                </div>
                <div className={'col-span-5 '}>
                    <SwiperSection hoverChangeText={true} carousel={section7.list} isShadow={true}/>
                </div>
            </div>
        </div>
        <ExtraSection parentId={'extra'}>
          <section className="max-md:py-10">
            <div className={'container  container-content'}>
                <div className={'grid grid-cols-5 section-item-space'}>
                    <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                        <SectionTitle styleBox={'text-start md:text-center'} darkMode={true} title={section7.title2} subSmallTitle={section7.subtitle2}/>
                    </div>
                    <div className={'col-span-5 '}>
                        <SwiperSection hoverChangeText={true} carousel={section7.list2} isShadow={true}/>
                    </div>
                </div>
            </div>
          </section>
          <section className="md:h-screen max-md:py-10 bg-black">
            <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5 '}>
                  <div className={'w-full md:h-screen relative flex flex-col gap-4'}>
                    <div className={'max-md:order-2 w-full h-[70vh] md:h-full relative z-[5]'}>
                      <ImageUI src={section7?.media2} alt={section7.title}
                                imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                      <ImageUI src={section7?.media2Res} alt={section7.title}
                                imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                    </div> 
                    <div className="md:absolute top-0 left-0 flex flex-col justify-around h-full z-[10] gap-5 md:max-w-[32vw]">
                      <SectionTitle title={section7.title3} titleSize={'max-md:text-lg'} styleBox={'text-start'} darkMode={true} />
                      <div className="flex max-md:w-1/2 gap-5">
                        <SectionTitle darkMode={true} styleBox={'text-start'} titleSize={"text-lg md:text-[32px]"} title={section7.list3[0].title} subSmallTitle={section7.list3[0].subtitle} subStyle={'text-xs md:text-base text-darkText'}/>
                        <SectionTitle darkMode={true} styleBox={'text-start'} titleSize={"text-lg md:text-[32px]"} title={section7.list3[1].title} subSmallTitle={section7.list3[1].subtitle} subStyle={'text-xs md:text-base text-darkText'} />
                      </div>
                      <SectionTitle styleBox={'text-start'} darkMode={true} subSmallTitle={section7.subtitle3} />
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </section>
        </ExtraSection>
      </section>
      <section className="w-full h-screen">
        <TitleBottomSection bg={section8.bg} bgRes={section8.bgRes} title={section8.title} subtitle={section8.subtitle} />
      </section>
      <section className={'relative section-car max-md:py-10 md:pb-[11vw] '}>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
              <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                  <SectionTitle styleBox={'text-start'} title={section9.title} subSmallTitle={section9.subtitle}/>
              </div>
              <div className={'col-span-5 '}>
                <div className={'w-full h-screen sm:h-[40vh] lg:h-screen relative'}>
                  <div className={'w-full h-full relative z-[5]  bg-black'}>
                    <ImageUI src={section9?.bg} alt={section9.title}
                              imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                    <ImageUI src={section9?.bgRes} alt={section9.title}
                              imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                  </div> 
                </div>              
              </div>
            </div>
        </div>
      </section>
      <section className={'relative section-car max-md:py-10 md:pb-[11vw]'}>
          <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                      <SectionTitle styleBox={'text-start'} title={section10.title} subSmallTitle={section10.subtitle}/>
                  </div>
                  <div className={'col-span-5 '}>
                      <SwiperSection hoverChangeText={true} carousel={section10.list} isShadow={true}/>
                  </div>
              </div>
          </div>
      </section>
      <section className="w-full h-[60vh] max-md:bg-black md:h-screen">
        <div className={'relative flex items-center justify-center h-full pt-[20%]  md:pt-[15%] lg:pt-[10%] '}>
          <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <VideoUI media={section11.video} style={'w-full aspect-video '}/>
          </div>
          <div className={'absolute top-20 left-20 md:relative z-[5] flex flex-col items-end gap-y-6'}>
              <div className="container-content text-white space-y-4 md:space-y-6">
                  <p className={'text-xl md:text-2xl lg:text-3xl'}>
                      {section11.subtitle}
                  </p>
                  <h2 className={'text-3xl md:text-4xl lg:text-5xl xl:text-7xl'}>
                      {section11.title
                      }
                  </h2>
              </div>
          </div>
        </div>
      </section>
      <section className={'relative section-car max-md:py-10 bg-black'}>
          <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                      <SectionTitle darkMode={true} styleBox={'text-start'} title={section12.title}
                                    subSmallTitle={section12.subtitle}/>
                  </div>
                  <div className={'col-span-5 '}>
                      <SwiperSection hoverChangeText={true} carousel={section12.list} isShadow={true}/>
                  </div>
              </div>
          </div>
      </section>
      <section className={'relative section-car max-md:py-10 md:pb-[11vw] bg-black '}>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
              <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                  <SectionTitle darkMode={true} styleBox={'text-start'} title={section13.title}
                                subSmallTitle={section13.subtitle}/>
              </div>
              <div className={'col-span-5 '}>
                <div className={'w-full h-screen sm:h-[40vh] lg:h-screen relative'}>
                  <div className={'w-full h-full relative z-[5]  bg-black'}>
                    <ImageUI src={section13?.bg} alt={section13.title}
                              imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                    <ImageUI src={section13?.bgRes} alt={section13.title}
                              imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                  </div> 
                </div>              
              </div>
            </div>
        </div>
      </section>
      <section className="w-full h-screen">
        <TitleBottomSection bg={section14.bg} bgRes={section14.bgRes} title={section14.title} subtitle={section14.subtitle} />
      </section>
      <section className={'relative section-car bg-black'}>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                    <SectionTitle darkMode={true} styleBox={'text-start'} title={section15.title} subSmallTitle={section15.subtitle}/>
                    <div className={'flex md:divide-x pt-10'}>
                      <div className={'flex flex-col  justify-between gap-2 pl-0  px-[5%]'}>
                          <p className={'text-lg md:text-lg text-white'}>
                              {section15.list[0].title}
                          </p>
                          <p className={'text-2xl sm:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                              {section15.list[0].subtitle}
                          </p>
                      </div>
                      <div className={'flex flex-col  items-end text-left px-[5%]'}>
                          <div className={'flex flex-col justify-between gap-2'}>
                              <p className={'text-lg md:text-lg text-white'}>
                                {section15.list[1].title}                                        </p>
                              <p className={'text-2xl sm:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                                {section15.list[1].subtitle}
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className={'flex flex-col py-5'}>
                      <div className={'flex flex-col justify-between gap-2'}>
                          <p className={'text-lg md:text-lg text-white'}>
                            {section15.list[2].title}                                        </p>
                          <p className={'text-2xl sm:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                            {section15.list[2].subtitle}
                          </p>
                      </div>
                  </div>
                  <div className={'flex flex-col py-5'}>
                      <div className={'flex flex-col justify-between gap-2'}>
                          <p className={'text-lg md:text-lg text-white'}>
                            {section15.list[3].title}                                        </p>
                          <p className={'text-2xl sm:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                            {section15.list[3].subtitle}
                          </p>
                      </div>
                  </div>
                </div>
                <div className={'col-span-5 '}>
                    <VideoUI media={section15.video} style={'w-full aspect-video '}/>
                    <div className={'space-y-1 text-darkText text-xs mt-2'}>
                        <p >
                            {section15.subtitle2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className={'relative section-car bg-black '}>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                  <SectionTitle darkMode={true} styleBox={'text-start'} title={section17.title}
                                  subSmallTitle={section17.subtitle}/>
                </div>
                <div className={'col-span-5 '}>
                  <VideoUI media={section17.video} style={'w-full aspect-video '}/>
                </div>
            </div>
        </div>
        <ExtraSection>
          <section className={'relative section-car max-md:py-10 bg-black'}>
            <div className={'container  container-content'}>
                <div className={'grid grid-cols-5 section-item-space'}>
                    <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                        <SectionTitle darkMode={true} styleBox={'text-start'} title={section36.title}
                                      subSmallTitle={section36.subtitle}/>
                    </div>
                    <div className={'col-span-5 '}>
                        <SwiperSection hoverChangeText={true} carousel={section36.list} isShadow={true}/>
                    </div>
                </div>
            </div>
        </section>
        <section>
          <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                    <SectionTitle darkMode={true} styleBox={'text-start'} title={section37.title}
                                    subSmallTitle={section37.subtitle}/>
                  </div>
                  <div className={'col-span-5 '}>
                    <VideoUI media={section37.video} style={'w-full aspect-video '}/>
                  </div>
              </div>
          </div>
        </section>
        </ExtraSection>
      </section>
      <section className="w-full h-screen">
        <TitleBottomSection bg={section18.bg} bgRes={section18.bgRes} title={section18.title} subtitle={section18.subtitle} />
      </section>
      <section className={'relative section-car'}>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                    <SectionTitle styleBox={'text-start'} title={section19.title}
                                  subSmallTitle={section19.subtitle}/>
                </div>
                <div className={'col-span-5 '}>
                    <VideoUI media={section19.video} style={'w-full aspect-video '}/>
                    <div className={'space-y-1 text-darkText text-xs mt-2'}>
                        <p >
                            {section19.subtitle2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className={'relative section-car'}>
          <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                      <SectionTitle styleBox={'text-start'} title={section20.title}
                                    subSmallTitle={section20.subtitle}/>
                  </div>
                  <div className={'col-span-5 '}>
                      <SwiperSection hoverChangeText={true} carousel={section20.list} isShadow={true}/>
                  </div>
              </div>
          </div>
      </section>
      <section className={'relative section-car  border-t border-white/50 md:border-0 '}>
        <div className={'container container-content '}>
          <div className={'grid grid-cols-5 section-item-space'}>
            <div
                className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 section-item-children-space'}>
              <SectionTitle styleBox={'text-start'} title={section4.title}
                            subSmallTitle={section4.subTitle}/>
              <div className={'flex md:divide-x gap-5 flex-wrap'}>
                <div className={'flex flex-col  md:justify-between gap-2 pl-0 '}>
                  <p className={'text-xs md:text-lg text-currentWhiteText'}>
                    {section21.list1[0].title}
                  </p>
                  <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                    {section21.list1[0].subtitle}
                  </p>
                </div>
                <div className={'flex flex-col  items-end text-left'}>
                  <div className={'flex flex-col md:justify-between gap-2'}>
                    <p className={'text-xs md:text-lg text-currentWhiteText'}>
                      {section21.list1[1].title}                                        </p>
                    <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                      {section21.list1[1].subtitle}
                    </p>
                  </div>
                </div>
                <div className={'flex flex-col  items-end text-left'}>
                  <div className={'flex flex-col md:justify-between gap-2'}>
                    <p className={'text-xs md:text-lg text-currentWhiteText'}>
                      {section21.list1[2].title}</p>
                    <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                      {section21.list1[2].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-span-5 '}>
              <div className={'w-full h-screen sm:h-[70vh] lg:h-screen relative'}>
                <div className={'w-full h-full relative z-[5] bg-black rounded-[15px]'}>
                  <ImageUI src={section21?.bg} alt={section21.title} imgStyle={'object-cover hidden md:block object-center z-[1] rounded-[15px]'}/>
                  <ImageUI src={section21?.bgRes} alt={section21.title} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                </div> 
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10">
                <div className="flex flex-col items-center gap-10">
                  <div className="w-full h-[240px] relative z-[5] rounded-[15px]">
                    {/* swiper in responsive */}
                    <ImageUI src={section21.list2[0].bg} alt={section21.title} imgStyle={'object-cover hidden md:block object-center z-[1] rounded-[15px]'} />
                    <ImageUI src={section21.list2[0].bgRes} alt={section21.title} imgStyle={'object-cover block md:hidden object-center z-[1] rounded-[15px]'}/>
                  </div>
                  <div className="text-center">
                    <SectionTitle title={section21.list2[0].title} titleSize={'text-xs'} subSmallTitle={section21.list2[0].subtitle} subStyle={'text-[11px]'} />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                  <div className="w-full h-[240px] relative z-[5] rounded-[15px]">
                    {/* swiper in responsive */}
                    <ImageUI src={section21.list2[1].bg} alt={section21.title} imgStyle={'object-cover hidden md:block object-center z-[1] rounded-[15px]'} />
                    <ImageUI src={section21.list2[1].bgRes} alt={section21.title} imgStyle={'object-cover block md:hidden object-center z-[1] rounded-[15px]'}/>
                  </div>
                  <div className="text-center">
                    <SectionTitle title={section21.list2[1].title} titleSize={'text-xs'} subSmallTitle={section21.list2[1].subtitle} subStyle={'text-[11px]'} />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-10 sm:max-md:col-span-2">
                  <div className="w-full h-[240px] relative z-[5] rounded-[15px]">
                    {/* swiper in responsive */}
                    <ImageUI src={section21.list2[2].bg} alt={section21.title} imgStyle={'object-cover hidden md:block object-center z-[1] rounded-[15px]'} />
                    <ImageUI src={section21.list2[2].bgRes} alt={section21.title} imgStyle={'object-cover block md:hidden object-center z-[1] rounded-[15px]'}/>
                  </div>
                  <div className="text-center">
                    <SectionTitle title={section21.list2[2].title} titleSize={'text-xs'} subSmallTitle={section21.list2[0].subtitle} subStyle={'text-[11px]'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={'relative section-car md:pb-[11vw]'}>
        <div className={'container  container-content'}>
          <div className={'grid grid-cols-5 section-item-space'}>
            <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                <SectionTitle styleBox={'text-start'} title={section22.title} subSmallTitle={section22.subtitle}/>
            </div>
            <div className={'col-span-5 '}>
              <div className={'w-full h-screen sm:h-[70vh] lg:h-screen relative'}>
                <div className={'w-full h-full relative z-[5]'}>
                  <ImageUI src={section22?.bg} alt={section22.title} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                  <ImageUI src={section22?.bgRes} alt={section22.title} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                </div> 
              </div>              
            </div>
          </div>
        </div>
      </section>
      <section className={'relative section-car md:pb-[11vw]'}>
        <div className={'container  container-content'}>
            <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 md:flex items-end justify-between gap-5'}>
                    <SectionTitle styleBox={'text-start'} title={section23.title}
                                  subSmallTitle={section23.subtitle}/>
                    <div className="max-md:pt-5">
                      <p className="text-xs md:text-lg text-[#191919] leading-4 md:leading-7">{section23.item.name}</p>
                      <p className="text-lg md:text-[70px] md:leading-[98px] text-currentGold font-semibold">{section23.item.value}</p>
                    </div>
                </div>
                <div className={'col-span-5 '}>
                    <SwiperSection hoverChangeText={true} carousel={section23.list} isShadow={true}/>
                </div>
            </div>
        </div>
      </section>
      <section className="w-full h-screen">
        <TitleBottomSection bg={section24.bg} bgRes={section24.bgRes} title={section24.title} subtitle={section24.subtitle} />
      </section>
      <section className={'relative section-car md:pb-[11vw] bg-black'}>
          <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                    <SectionTitle darkMode={true} styleBox={'text-start'} title={section25.title}
                                  subSmallTitle={section25.subtitle}/>
                </div>
                <div className={'col-span-5 '}>
                  <div className={'w-full h-screen sm:h-[70vh] lg:h-screen relative'}>
                    <div className={'w-full h-full relative z-[5]'}>
                      <ImageUI src={section25?.bg} alt={section25.title}
                                imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                      <ImageUI src={section25?.bgRes} alt={section25.title}
                                imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                    </div>
                    <div className={'space-y-1 text-darkText text-xs mt-2'}>
                      <p >
                          {section25.subtitle2}
                      </p>
                    </div>
                  </div>              
                </div>
              </div>
          </div>
      </section>
      <section className="w-full h-screen">
        <TitleBottomSection bg={section26.bg} bgRes={section26.bgRes} title={section26.title} subtitle={section26.subtitle} />
      </section>
      <section className="w-full h-screen">
        <TitleBottomSection bg={section27.bg} bgRes={section27.bgRes} title={section27.title} subtitle={section27.subtitle} subtitle2={section27.subtitle2} />
      </section>
      <section className={'relative section-car  border-t border-white/50 md:border-0 bg-black'}>
        <div className={'container container-content '}>
          <div className={'grid grid-cols-5 section-item-space'}>
            <div
                className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 section-item-children-space'}>
              <SectionTitle darkMode={true} styleBox={'text-start'} title={section28.title}
                            subSmallTitle={section28.subtitle}/>
              <div className={'flex md:divide-x'}>
                <div className={'flex flex-col justify-between gap-2 pl-0  px-[5%]'}>
                  <p className={'text-xs md:text-lg text-white font-medium'}>
                    {section28.item[0].name}
                  </p>
                  <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                    {section28.item[0].value}
                  </p>
                </div>
                <div className={'flex flex-col  items-end text-left px-[5%]'}>
                  <div className={'flex flex-col justify-between gap-2'}>
                    <p className={'text-xs md:text-lg text-white font-medium'}>
                      {section28.item[1].name}                                        </p>
                    <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                      {section28.item[1].value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-span-5 '}>
            <SwiperSection hoverChangeText={true} carousel={section28.list} isShadow={true}/>
              <div className="">
                <div className="flex flex-col items-center gap-10">
                  <div className="w-full ">
                  {/* swiper in responsive */}
                  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pt-10">
                    <div className="flex flex-col items-center gap-10">
                      <div className="w-full h-[240px] relative z-[5] rounded-[15px]">
                        {/* swiper in responsive */}
                        <ImageUI src={section28.list2[0].bg} alt={section28.list2[0].title} imgStyle={'object-cover hidden md:block object-center z-[1] rounded-[15px]'} />
                        <ImageUI src={section28.list2[0].bgRes} alt={section28.list2[0].title} imgStyle={'object-cover block md:hidden object-center z-[1] rounded-[15px]'}/>
                      </div>
                      <div className="text-center">
                        <SectionTitle title={section28.list2[0].title} titleSize={'text-xs'} subSmallTitle={section28.list2[0].subtitle} subStyle={'text-[11px]'} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                      <div className="w-full h-[240px] relative z-[5] rounded-[15px]">
                        {/* swiper in responsive */}
                        <ImageUI src={section28.list2[1].bg} alt={section28.title} imgStyle={'object-cover hidden md:block object-center z-[1] rounded-[15px]'} />
                        <ImageUI src={section28.list2[1].bgRes} alt={section28.title} imgStyle={'object-cover block md:hidden object-center z-[1] rounded-[15px]'}/>
                      </div>
                      <div className="text-center">
                        <SectionTitle title={section28.list2[1].title} titleSize={'text-xs'} subSmallTitle={section28.list2[1].subtitle} subStyle={'text-[11px]'} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                      <div className="w-full h-[240px] relative z-[5] rounded-[15px]">
                        {/* swiper in responsive */}
                        <ImageUI src={section28.list2[2].bg} alt={section28.title} imgStyle={'object-cover hidden md:block object-center z-[1] rounded-[15px]'} />
                        <ImageUI src={section28.list2[2].bgRes} alt={section28.title} imgStyle={'object-cover block md:hidden object-center z-[1] rounded-[15px]'}/>
                      </div>
                      <div className="text-center">
                        <SectionTitle title={section28.list2[2].title} titleSize={'text-xs'} subSmallTitle={section28.list2[0].subtitle} subStyle={'text-[11px]'} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                      <div className="w-full h-[240px] relative z-[5] rounded-[15px]">
                        {/* swiper in responsive */}
                        <ImageUI src={section28.list2[3].bg} alt={section28.title} imgStyle={'object-cover hidden md:block object-center z-[1] rounded-[15px]'} />
                        <ImageUI src={section28.list2[3].bgRes} alt={section28.title} imgStyle={'object-cover block md:hidden object-center z-[1] rounded-[15px]'}/>
                      </div>
                      <div className="text-center">
                        <SectionTitle title={section28.list2[3].title} titleSize={'text-xs'} subSmallTitle={section28.list2[3].subtitle} subStyle={'text-[11px]'} />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExtraSection parentId={'section39'}>
          <section className={'relative section-car bg-black'}>
            <div className={'container  container-content'}>
                <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                      <SectionTitle darkMode={true} styleBox={'text-start'} title={section38.title}
                                    subSmallTitle={section38.subtitle}/>
                  </div>
                  <div className={'col-span-5 '}>
                    <div className={'w-full h-screen sm:h-[70vh] lg:h-screen relative'}>
                      <div className={'w-full h-full relative z-[5]'}>
                        <ImageUI src={section38?.media} alt={section38.title}
                                  imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                        <ImageUI src={section38?.mediaRes} alt={section38.title}
                                  imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                        <div>
                          <SectionTitle darkMode={true} title={section38.title2} subSmallTitle={section38.subtitle2} titleSize={'text-xl'} subStyle={'text-sm'} styleBox={'text-center absolute bottom-10 left-0 right-0 z-[5]'} />
                        </div>
                      </div>
                    </div>              
                  </div>
                </div>
              </div>
          </section>
          <section className="bg-white relative z-[5] md:py-[11vw]">
            <div className={'container container-content'}>
              <div className={'section-item-space'}>
                  <div className="h-screen">
                      <SwiperSection hoverChangeText={true} carousel={section39.list} isShadow={true}/>
                  </div>
              </div>
            </div>
          </section>
          <section className="bg-white relative z-[5] pb-[11vw]">
            <div className={'container container-content'}>
              <div className={'section-item-space'}>
                  <div className="h-screen">
                      <SwiperSection hoverChangeText={true} carousel={section40.list} isShadow={true}/>
                  </div>
              </div>
            </div>
          </section>
        </ExtraSection>
      </section>
      <section className="w-full h-screen">
          <TitleBottomSection bg={section29.bg} bgRes={section29.bgRes} title={section29.title} subtitle={section29.subtitle} />
      </section>
      <section className={'relative section-car'}>
          <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 md:flex items-end justify-between gap-5'}>
                      <SectionTitle styleBox={'text-start'} title={section30.title}
                                    subSmallTitle={section30.subtitle}/>
                      <div className="max-md:pt-5">
                        <p className="text-xs md:text-lg text-[#191919] leading-4 md:leading-7 font-medium">{section30.item.name}</p>
                        <p className="text-lg md:text-[70px] md:leading-[98px] text-currentGold font-semibold">{section30.item.value}</p>
                      </div>
                  </div>
                  <div className={'col-span-5 '}>
                      <SwiperSection hoverChangeText={true} carousel={section30.list} isShadow={true}/>
                  </div>
              </div>
          </div>
      </section>
      <section className={'relative section-car'}>
          <div className={'container  container-content'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 md:flex items-end justify-between gap-5'}>
                      <SectionTitle styleBox={'text-start'} title={section31.title}
                                    subSmallTitle={section31.subtitle}/>
                      <div className="max-md:pt-5">
                        <p className="text-xs md:text-lg text-[#191919] leading-4 md:leading-7">{section31.item.name}</p>
                        <p className="text-xl md:text-[70px] md:leading-[98px] text-currentGold font-semibold">{section31.item.value}</p>
                      </div>
                  </div>
                  <div className={'col-span-5 '}>
                  <div className={'w-full h-screen sm:h-[40vh] lg:h-screen relative'}>
                    <div className={'w-full h-full relative z-[5]'}>
                      <ImageUI src={section31?.bg} alt={section31.title}
                                imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
                      <ImageUI src={section31?.bgRes} alt={section31.title}
                                imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
                    </div>
                  </div> 
                  </div>
              </div>
          </div>
      </section>
      <section className={'relative section-car'}>
          <div className={'container  container-content md:pb-[11vw]'}>
              <div className={'grid grid-cols-5 section-item-space'}>
                  <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 flex items-end justify-between gap-5'}>
                      <SectionTitle styleBox={'text-start'} title={section32.title}
                                    subSmallTitle={section32.subtitle}/>
                  </div>
                  <div className={'col-span-5 '}>
                      <SwiperSection hoverChangeText={true} carousel={section32.list} isShadow={true}/>
                  </div>
              </div>
          </div>
      </section>
      <section className="section-car bg-black">
        <div className="container container-content">
          <SectionTitle styleBox={'text-start'} darkMode={true} title={section33.title} subSmallTitle={section33.subtitle} subTitleTop={true} />
          <div className="pt-[22vw] md:pt-20 md:pb-[11vw] max-md:w-[1000px] max-md:overflow-x-scroll">
            <SectionTitle styleBox={'text-start'} darkMode={true} subSmallTitle={section33.cards1.subtitle} />
            <div className="grid grid-cols-3 gap-[10px] pt-5">
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card1.bg} alt={section33.title}
                          imgStyle={'hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card1.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card2.bg} alt={section33.title}
                          imgStyle={'hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card2.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card3.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card3.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card4.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card4.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card5.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card5.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card6.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card6.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card7.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card7.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card8.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card8.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards1.card9.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards1.card9.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
            </div>
            <SectionTitle styleBox={'text-start'} darkMode={true} subSmallTitle={section33.cards2.subtitle} />
            <div className="grid grid-cols-3 gap-[10px] pt-5 max-md:overflow-scroll">
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card1.bg} alt={section33.title}
                          imgStyle={'hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card1.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card2.bg} alt={section33.title}
                          imgStyle={'hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card2.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card3.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card3.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card4.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card4.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card5.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card5.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card6.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card6.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card7.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card7.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card8.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card8.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards2.card9.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards2.card9.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
            </div>
            <SectionTitle styleBox={'text-start'} darkMode={true} subSmallTitle={section33.cards3.subtitle} />
            <div className="grid grid-cols-3 gap-[10px] pt-5 max-md:overflow-scroll">
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card1.bg} alt={section33.title}
                          imgStyle={'hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card1.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card2.bg} alt={section33.title}
                          imgStyle={'hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card2.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card3.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card3.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card4.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card4.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card5.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card5.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card6.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card6.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card7.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card7.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card8.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card8.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards3.card9.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards3.card9.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
            </div>
            <SectionTitle styleBox={'text-start'} darkMode={true} subSmallTitle={section33.cards4.subtitle} />
            <div className="grid grid-cols-3 gap-[10px] pt-5 max-md:overflow-scroll">
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card1.bg} alt={section33.title}
                          imgStyle={'hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card1.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card2.bg} alt={section33.title}
                          imgStyle={'hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card2.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card3.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card3.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card4.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card4.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card5.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card5.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card6.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card6.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card7.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card7.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card8.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card8.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
              <div className="relative h-[180px] shrink-0">
                <ImageUI src={section33?.cards4.card9.bg} alt={section33.title}
                          imgStyle={' hidden md:block object-center z-[1] rounded-xl'}/>
                <ImageUI src={section33?.cards4.card9.bgRes} alt={section33.title}
                          imgStyle={'block md:hidden object-center z-[1] rounded-xl'}/>
              </div>
            </div>
          <SectionTitle darkMode={true} styleBox={'text-start text-xs'} subSmallTitle={section33.subtitle2} />
          </div>
        </div>
      </section>
      <section className={'section relative bg-dark'}>
        <BottomPositionCards section={section34}/>
      </section>
      <section>
        <SwiperTab title={section35.title} lists={section35.lists}/>
      </section>
    </div>
  )
}

export default LiL7