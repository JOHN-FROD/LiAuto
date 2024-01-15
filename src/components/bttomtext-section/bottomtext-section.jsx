import { ImageUI, SectionTitle } from ".."

const BottomTextSection = ({bg, bgRes, title, subtitle  }) => {
  return (
    <section>
      <div className="relative h-[500px] max-h-[720px] md:h-[37vw]  text-white pb-[10%] md:pb-[5%]">
        <ImageUI src={bg} alt={'Li9'} imgStyle={'object-cover max-md:hidden object-center z-[1]'} />
        <ImageUI src={bgRes} alt={'Li9'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
        <div className="container h-full flex flex-col items-start justify-end relative z-20">
          <SectionTitle styleBox={'text-start text-white'} title={title} subSmallTitle={subtitle} titleStyle={true}  />
        </div>
      </div>
    </section>
  )
}

export default BottomTextSection