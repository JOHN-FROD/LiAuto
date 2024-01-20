import { ImageUI, SectionTitle, VideoUI } from ".."

const BottomTextSection = ({bg, bgRes, title, subtitle, video, media, paddingB  }) => {
  return (
      <div className={`relative  md:h-[37vw] max-md:pb-16 text-white`}>
          <div className="relative z-[1] h-[500px] max-h-[720px] md:h-[37vw]">
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
        <div className={`container h-full flex flex-col items-start justify-end md:absolute z-40 bottom-0 left-0 right-0  ${paddingB ? paddingB : 'pb-[3%]'}`}>
          <div className="md:max-w-[380px] pt-5 sm:pt-14">
            <SectionTitle styleBox={'text-center md:text-start md:text-white'} title={title} subSmallTitle={subtitle} titleSize={'text-[17px] sm:text-[37px] md:text-lg sm:leading-[50px] sm:pb-3'} titleStyle={'md:text-lg'} subStyle={'md:text-[#FFFFFF99] text-xs sm:text-[26px] md:text-xs'} />
          </div>
        </div>
      </div>
  )
}

export default BottomTextSection