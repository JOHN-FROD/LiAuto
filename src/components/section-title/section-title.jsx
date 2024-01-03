const SectionTitle = ({ title, subBigTitle , subSmallTitle , styleBox}) => {

    return (
        <div className={` ${styleBox ? styleBox : 'text-center'}   text-dark      space-y-4`}>
            <h2 className={'text-[24px]    md:text-5xl font-medium'}>
                {title}
            </h2>
            {subSmallTitle &&
                <p className={'text-sm md:text-lg text-darkText'}>
                    {subSmallTitle}
                </p>
            }
            {subBigTitle &&
                <p  className={'text-sm md:text-xl text-darkText'}>
                    {subBigTitle}
                </p>
            }

        </div>
    )
};

export default SectionTitle;