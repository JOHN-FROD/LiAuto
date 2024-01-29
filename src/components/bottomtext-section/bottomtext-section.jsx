import { ImageUI, SectionTitle, VideoUI } from ".."

const BottomTextSection = ({bg, bgRes, title, subtitle, video, media, isShadow  }) => {
  return (
      <div className={`relative md:h-screen max-md:pb-5 text-white`}>
          <div className={`relative z-[1] h-[50vh] md:h-full`}>
          {
              isShadow &&
              <div className={'w-full absolute bottom-0 left-0 h-[30%] z-10 bg-gradient-to-b from-white/0 to-black '}/>
          }
          {
            video
            ?
            <VideoUI media={media} />
            :
            <>
              <ImageUI src={bg} alt={'Li9'} imgStyle={'object-cover max-md:hidden object-center z-[1]'} />
              <ImageUI src={bgRes} alt={'Li9'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
            </>
          }
          </div>
        <div className={`container container-content h-auto md:h-full flex flex-col items-start justify-end md:absolute z-[5] bottom-10 left-0 right-0`}>
          <div className={`md:max-w-[500px] pt-5 sm:pt-14`}>
            <SectionTitle styleBox={'text-center md:text-start'} title={title} subSmallTitle={subtitle} titleSize={'text-[17px] sm:text-[37px] md:text-2xl md:text-white'} titleStyle={true} subStyle={'md:text-[#FFFFFF99] leading-[26px]'} />
          </div>
        </div>
      </div>
  )
}

export default BottomTextSection