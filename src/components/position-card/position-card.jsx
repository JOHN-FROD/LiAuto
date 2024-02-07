import React from 'react';

const PositionCard = ({gold, card}) => {
    return (

        <div
            className={'w-full sm:max-w-[28rem] py-8 px-7 rounded-2xl   bg-gradient-to-t from-[#353535] to-[100%] to-[#161616] text-darkText space-y-7 md:space-y-20'}>
            <div className={'space-y-3 md:space-y-4'}>
                <h4 className={`text-3xl md:text-5xl ${gold ? 'from-[#cfa574] ' : 'from-[#919191]'} bg-gradient-to-r to-[#fdf7f1] bg-clip-text text-transparent text-[34px] leading-[45px] font-semibold`}>
                    {card.title}
                </h4>
                <ul className={' text-base md:text-xl text-[#bababa]'}>
                    <li>
                        {card.subTitle}
                    </li>
                </ul>
            </div>
            <div>
                <ul className={'space-y-2 md:space-y-5 text-[#bababa] font-medium '}>
                    {
                        card.info.map((item => (
                            <li key={item.id} className={' space-y-1 md:space-y-3'}>
                                <p className={'text-sm md:text-base'}>
                                    {item.title}
                                </p>
                                <p className={`text-xl bg-gradient-to-r ${gold ? 'from-[#cfa574] ' : 'from-[#919191]'} bg-clip-text text-transparent md:text-[34px]  md:leading-[36px]`}>
                                    {item.subTitle}
                                </p>
                            </li>

                        )))
                    }
                </ul>
            </div>


        </div>
    );
};

export default PositionCard;