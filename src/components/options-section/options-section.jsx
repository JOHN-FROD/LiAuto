import { ImageUI, SectionTitle } from ".."

const OptionsSection = ({title, lists }) => {
  return (
    <div className="py-10 md:py-20 lg:py-32 bg-[#FAFAFA]">
      <div className='container section-item-space'>
        <SectionTitle title={title}/>
        <div className="flex flex-col items-center mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full lg:gap-7 xl:w-[80%] 2xl:w-[70%] ">
              {
                lists.map(card => (
                  <div className="bg-white flex flex-col h-full rounded-2xl  justify-between">
                    <div className="p-5  space-y-3 order-3 md:order-1">
                      <div className="pt-5 max-md:hidden w-14 h-14 lg:w-20 lg:h-20 xl:w-32 xl:h-32 relative">
                        <ImageUI src={card.icon} imgStyle={'object-cover'}/>
                      </div>
                      <h3 className="font-medium text-xl lg:text-2xl ">{card.title}</h3>
                      <p className="text-sm lg:text-base">{card.text}</p>
                    </div>
                    <div className="relative order-2 w-full h-[150px] md:h-48 lg:h-60 rounded-t-xl md:rounded-t-none	md:rounded-b-2xl overflow-hidden">
                      <ImageUI src={card.image} imgStyle={'object-cover'}/>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OptionsSection