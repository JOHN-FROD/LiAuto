const SectionTitle = ({ title, subBigTitle , subSmallTitle , styleBox , subTitleTop , darkMode , black, titleStyle, subStyle}) => {

    return (
        <div className={` ${styleBox ? styleBox : 'text-center'}  flex flex-col gap-y-1 md:gap-y-4  ${darkMode ? 'text-white' : 'text-dark'}`}>
            <h2 className={`text-[24px]    md:text-5xl font-medium ${subTitleTop ? 'order-2' : 'order-1'} ${titleStyle ? 'relative after:top-0 after:w-9 after:h-[1px] after:bg-currentGold after:left-0 after:absolute after:content-[""]' : titleStyle}`}>
                {title}
            </h2>
            {subSmallTitle &&
                <p className={`text-sm md:text-lg   ${subTitleTop ? 'order-1' : 'order-2'} ${darkMode ? 'currentWhiteText' : 'text-darkText'} ${black ? 'text-black' : ''} ${subStyle} `}>
                    {subSmallTitle}
                </p>
            }
            {subBigTitle &&
                <p  className={`text-sm md:text-xl  ${subTitleTop ? 'order-1' : 'order-2'}  text-darkText ${darkMode ? 'currentWhiteText' : 'text-darkText'} ${black ? 'text-black' : ''}`}>
                    {subBigTitle}
                </p>
            }

        </div>
    )
};

export default SectionTitle;