import {ImageUI, SectionTitle} from "@/components";
import Aos from "aos";
import {useEffect} from "react";



const ListCar = ({  title  , listCenter , subTitle , list , bgRes , bg ,about}) => {

    useEffect(() => {
        Aos.init({
            once: true
        });

    }, []);
    return (
        <div className={`relative flex items-start justify-center h-full pt-[20%]  ${about ? 'md:pt-[10%] lg:pt-[7%]' : " md:pt-[15%] lg:pt-[10%]"} `}>
            <ImageUI src={bg} alt={'mega'} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
            <ImageUI src={bgRes} alt={'mega'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
            <div className={'relative container z-[5] flex flex-col justify-center items-center gap-4-6 text-white'}>

                <SectionTitle darkMode={about ? false : true} black={true}
                              title={title}/>

                <p className={`text-sm  mt-3 ${about ? 'md:text-sm lg:px-[18vw]' : 'md:text-lg'}   text-black text-center`}>
                    {subTitle}
                </p>


                <div className={'xl:w-2/3'} data-aos={'fade-up'} data-aos-duration="600">
                    <div
                        className={`w-full  ${about ? 'flex flex-wrap gap-y-10 items-center justify-center text-black' : 'grid grid-cols-2 gap-6 md:grid-cols-4'}    md:grid-cols-4 md:divide-x  ${about ? 'divide-black': 'divide-white/30'}  my-4`}>
                    {
                            list?.map((item, ind) => (
                                <div key={ind}
                                     className={`flex justify-center items-center `}>
                                    <div className={`px-1 flex flex-col justify-between ${about ? "px-[2vw]" : ""}   ${listCenter ? 'text-center' : 'text-left'}`}>
                                        <p className={` md:text-xs lg:text-base ${about ? 'order-2 lg:text-sm ' : 'order-1 text-base'}`}>
                                            {
                                                item.name
                                            }
                                        </p>
                                        <p className={`  md:text-3xl lg:text-5xl font-medium md:font-normal ${about ? 'order-1 md:text-lg lg:text-xl' : 'order-2 text-2xl'}`}>
                                            {
                                                item.number
                                            }
                                            <span className={'ml-1 text-base'}>
                                    {
                                        item.type
                                    }
                                        </span>
                                        </p>
                                    </div>

                                </div>
                            ))
                    }


                    </div>

                </div>


            </div>


        </div>
    );
};

export default ListCar;