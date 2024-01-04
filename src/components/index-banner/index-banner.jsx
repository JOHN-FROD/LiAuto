import {ImageUI} from "@/components";
const IndexBanner = ({carHeader , button}) => {

    return (
        <div className={'relative flex items-start justify-center h-full pt-[20%]  md:pt-[15%] lg:pt-[10%] '}>
            <ImageUI src={'/mega-1920.jpg'} alt={'mega'} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
            <ImageUI src={'/mega.jpg'} alt={'mega'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
            <div className={'relative z-[5] flex flex-col justify-center items-center gap-y-6'}>
                <div className={`relative ${carHeader ? ' md:w-[400px] lg:w-[500px] h-[90px]' : ' w-[200px] h-[60px]'}`}>
                    <ImageUI src={'/mega-eng.png'} alt={'mega'} imgStyle={'object-contain'}/>
                </div>
                {
                    button &&
                <button
                    className={'py-2 px-4 bg-white text-black text-xs md:text-base rounded-full duration-200 hover:text-white hover:bg-white '}>
                    Learn more
                </button>
                }
            </div>

        </div>
    )
};

export default IndexBanner;