import { IndexBanner } from "@/components"
import { useTranslation } from "react-i18next"

const LiL8 = () => {
  const {t}=useTranslation()
  const indexBanner={
    bg:"/Lil8/section_1_web.jpg",
    bgRes:'/Lil8/section_1_rsp.jpg',
    logoImage:'/Lil8/section1-logo.png',
  }
  const section2={
    bg:"/Li9/lil9-section1-min.jpg",
    bgRes:"/Li9/lil9-section1-res-min.jpg",
    title:t("li9.section2.title"),
    list:[
        {
            name: t('li9.section2.list1.name'),
            number: '5,218',
            type:t('li9.section2.list1.type')
        },
        {
            name: t('li9.section2.list2.name'),
            number: '1,998',
            type:t('li9.section2.list2.type')
        },
        {
            name: t('li9.section2.list3.name'),
            number: '1,800',
            type:t('li9.section2.list3.type')
        },
        {
            name: t('li9.section2.list4.name'),
            number: '3,105',
            type:t('li9.section2.list4.type')
        },
    ]
  }

  
  return (
    <div>
      <section className={'w-full h-screen relative'}>
        <IndexBanner bgRes={indexBanner.bgRes} bg={indexBanner.bg} logoImage={indexBanner.logoImage} carHeader={true}/>
      </section>
    </div>
  )
}

export default LiL8