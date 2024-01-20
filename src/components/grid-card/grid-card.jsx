import React from 'react';
import {CardL9, SectionTitle} from "@/components";

const GridCard = ({cards}) => {
    return (
        <div className="container section-item-space">
            <SectionTitle title={cards.title} />
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                <div className="col-span-full sm:col-span-6 ">
                    <CardL9 title={cards.card1.title} bg={cards.card1.bg} bgRes={cards.card1.bgRes}/>
                </div>
                <div className="col-span-2 ">
                    <CardL9 title={cards.card2.title} bg={cards.card2.bg} bgRes={cards.card2.bgRes} />
                </div>

                <div className="col-span-3 sm:col-span-4 ">
                    <CardL9 title={cards.card3.title} bg={cards.card3.bg} bgRes={cards.card3.bgRes} />
                </div>
                <div className="col-span-5 sm:col-span-2 ">
                    <CardL9 title={cards.card4.title} bg={cards.card4.bg} bgRes={cards.card4.bgRes} />
                </div>
                <div className="col-span-3 sm:col-span-2 ">
                    <CardL9 title={cards.card5.title} bg={cards.card5.bg} bgRes={cards.card5.bgRes} />
                </div>

                <div className="col-span-2 ">
                    <CardL9 title={cards.card6.title} bg={cards.card6.bg} bgRes={cards.card6.bgRes} />
                </div>
                <div className="col-span-5 sm:col-span-6 ">
                    <CardL9 title={cards.card7.title} bg={cards.card7.bg} bgRes={cards.card7.bgRes} />
                </div>

                <div className="col-span-2 ">
                    <CardL9
                        title={cards.card8.title} bg={cards.card8.bg} bgRes={cards.card8.bgRes} />
                </div>
                <div className="col-span-3 sm:col-span-2 ">
                    <CardL9 title={cards.card9.title} bg={cards.card9.bg} bgRes={cards.card9.bgRes} />
                </div>
                <div className="col-span-5 sm:col-span-4 ">
                    <CardL9 title={cards.card10.title} bg={cards.card10.bg} bgRes={cards.card10.bgRes} />
                </div>
                <div className=" col-span-3 sm:col-span-4 ">
                    <CardL9 title={cards.card11.title} bg={cards.card11.bg} bgRes={cards.card11.bgRes} />
                </div>
                <div className="col-span-2 ">
                    <CardL9 title={cards.card12.title} bg={cards.card12.bg} bgRes={cards.card12.bgRes} />
                </div>
                <div className="col-span-5 sm:col-span-2 ">
                    <CardL9 title={cards.card13.title} bg={cards.card13.bg} bgRes={cards.card13.bgRes} />
                </div>
                <div className="col-span-2 sm:col-span-6 ">
                    <CardL9 title={cards.card14.title} bg={cards.card14.bg} bgRes={cards.card14.bgRes} />
                </div>
                <div className=" col-span-3 sm:col-span-2 ">
                    <CardL9 title={cards.card15.title} bg={cards.card15.bg} bgRes={cards.card15.bgRes} />
                </div>
            </div>
        </div>
    );
};

export default GridCard;