const SectionTitle = ({ title, subBigTitle , subSmallTitle , styleBox , subTitleTop , darkMode , black}) => {

    return (
        <div className={` ${styleBox ? styleBox : 'text-center'}  flex flex-col gap-y-1 md:gap-y-4  ${darkMode ? 'text-white' : 'text-dark'}`}>
            <h2 className={`text-[24px]    md:text-5xl font-medium ${subTitleTop ? 'order-1' : 'order-2'} `}>
                {title}
            </h2>
            {subSmallTitle &&
                <p className={`text-sm md:text-lg   ${subTitleTop ? 'order-2' : 'order-1'} ${darkMode ? 'curretWhiteText' : 'text-darkText'} ${black ? 'text-black' : ''} `}>
                    {subSmallTitle}
                </p>
            }
            {subBigTitle &&
                <p  className={`text-sm md:text-xl   text-darkText ${darkMode ? 'curretWhiteText' : 'text-darkText'} ${black ? 'text-black' : ''}`}>
                    {subBigTitle}
                </p>
            }

        </div>
    )
};

export default SectionTitle;