import {useEffect} from "react";
import Aos from "aos";

const SectionTitle = ({title, subBigTitle, subSmallTitle, styleBox, subTitleTop, darkMode, black,titleStyle, titleSize, subStyle}) => {

    useEffect(() => {
        Aos.init({
            once: true
        });

    }, []);
    return (
        <div
            className={` ${styleBox ? styleBox : 'text-center'}  flex flex-col gap-y-1 md:gap-y-4  ${darkMode ? 'text-white' : 'text-dark'}`}>
            <div data-aos={"fade-up"} data-aos-duration="300">
                <h2 className={`${titleSize ? titleSize : 'text-[24px] md:text-4xl'} font-medium ${subTitleTop ? 'order-2' : 'order-1'}
                ${titleStyle ? 'relative after:top-0 after:w-9 after:h-[1px] after:bg-currentGold after:left-0 md:after:absolute after:content-[""]' : titleStyle} 
                `}>
                    {title}
                </h2>

            </div>
            {subSmallTitle &&
                <div data-aos={"fade-up"} data-aos-duration="400">
                    <p className={`${subStyle ? subStyle : 'text-sm md:text-lg' } ${subTitleTop ? 'order-1' : 'order-2'} ${darkMode ? 'currentWhiteText' : 'text-darkText'} ${black ? 'text-black' : ''} `}>
                        {subSmallTitle}
                    </p>
                </div>
            }
            {subBigTitle &&
                <div data-aos={"fade-up"} data-aos-duration="500">
                    <p className={`text-sm md:text-xl  ${subTitleTop ? 'order-1' : 'order-2'}  text-darkText ${darkMode ? 'currentWhiteText' : 'text-darkText'} ${black ? 'text-black' : ''}`}>
                        {subBigTitle}
                    </p>
                </div>
            }

        </div>
    )
};

export default SectionTitle;