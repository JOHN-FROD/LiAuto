import {IndexBanner, SectionTitle, Video} from "@/components";
import {BsCaretRightFill} from "react-icons/bs";


const liMega = ({ children }) => {


    return (

        <div className="relative">
            <section className={
                'w-full h-screen'
            }>
                <IndexBanner carHeader={true} />
            </section>
            <section className={'relative section'}>
                <div className={'container'}>
                    <div className={'grid grid-cols-5 '}>
                        <div className={'col-span-5 md:col-span-3'}>
                            <SectionTitle styleBox={'text-start'} title={'Li MEGA, The greatest happiness!'} subSmallTitle={'Li MEGA launch will be officially released on March 1, 2024.'} />
                            <button className={'flex gap-x-2 '}>

                                <span>
                                Watch Video
                                </span>
                                <span>
                                    <BsCaretRightFill/>
                                </span>
                            </button>
                        </div>
                        <div className={'col-span-5 h-screen'}>
                            <Video />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default liMega;