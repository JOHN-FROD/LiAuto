import React from 'react';
import {PositionCard, SectionTitle} from "@/components";

const BottomPositionCards = ({section}) => {
    return (
        <div className="container container-content section-item-space">
            <SectionTitle styleBox={'text-center'} title={section.title}
                          darkMode={true}
            />
            <div className="flex flex-wrap md:flex-nowrap gap-7  justify-center">
                {
                    section.cards.map((item)=>(
                        <PositionCard key={item.id} card={item} gold={true}/>
                    ))
                }

            </div>
        </div>
    );
};

export default BottomPositionCards;