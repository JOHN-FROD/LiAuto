import { ImageUI } from '..'

const TitleBottomSection = ({bg, bgRes, title, subtitle, subtitle2, imgBox}) => {
  return (
    <>
      <div className={'relative flex items-end justify-center h-full lg:pt-[10%] '}>
        <ImageUI src={bg} alt={'mega'} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
        <ImageUI src={bgRes} alt={'mega'} imgStyle={`object-cover block md:hidden object-top z-[1]`}/>
        <div className={'relative z-[5] flex flex-col md:items-end gap-y-6'}>
          <div className="container-content text-white space-y-4 md:space-y-6 max-md:w-[80%] max-md:pl-[10%] pb-[10%]">
              <p className={'text-xl md:text-2xl lg:text-3xl'}>
                  {subtitle}
              </p>
              <h2 className={'text-3xl md:text-4xl lg:text-5xl xl:text-7xl'}>
                  {title}
              </h2>
          </div>
        </div>
      </div>
      {
        subtitle2
        &&
        <div className={'space-y-1 text-darkText text-xs mt-2'}>
          <p >
              {subtitle2}
          </p>
        </div>
      }
    </>
  )
}

export default TitleBottomSection