import React, { useState } from 'react';
import {ImageUI, SectionTitle} from "@/components";


const ConfigurationsSection = ({data}) => {
    const [modelIdx, setModelIdx] = useState(0)
    return (
        <div className='py-20 lg:py-32'>
           <SectionTitle styleBox={'text-center'} title={data.title}/>
           <div className={'grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 md:pt-11 lg:pt-16'}>
           <div className={'w-full h-[300px] md:h-[350px] lg:h-[390px] xl:h-[430px] relative'}>
                <ImageUI src={data?.medias[modelIdx]?.media} imgStyle={'object-cover'} />
           </div>
            <div className={'px-7 md:pl-0 md:pr-10 lg:pr-14 xl:pr-20'}>
                <div className={'flex'}>
                    {
                        data?.models?.map(model => (
                            <div key={model.id} className={`text-center w-full duration-200 text-lg md:text-xl py-3 font-medium border-b-4 lg:text-2xl ${modelIdx == model?.id ? 'border-black text-black' : 'border-[#eee] text-darkText'} cursor-pointer`} onClick={() => setModelIdx(model?.id)}>
                                {
                                    model?.title
                                }
                            </div>
                        ))
                    }

                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 mt-5">
                    {
                        data?.infos[modelIdx && modelIdx]?.info.map(info => (
                            <div key={info.id} className="space-y-2 py-3">
                                <h6 className={'text-[#999] text-sm lg:text-base'}>{info.title}</h6>
                                <p className={' lg:text-xl '}>
                                    {info.text}
                                </p>
                            </div>
                        ))
                    }
                    
                </div>
                
            </div>
          </div>

        </div>
    );
};

export default ConfigurationsSection;