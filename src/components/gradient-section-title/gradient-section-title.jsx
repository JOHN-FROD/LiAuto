const GradientSectionTitle = ({isGradient, title, categoryTitle, leftTitle}) => {
  return (
    <div className={`flex flex-col gap-2 items-center text-center ${leftTitle ? 'lg:pl-[4vw] md:text-start md:items-start' : ''} `}>
      <p className={` md:text-lg lg:text-xl xl:text-2xl  ${leftTitle ? ' text-dark font-medium ' : 'text-sm'}`}>{categoryTitle}</p>
      <h2 className={`${leftTitle ?  'text-2xl font-medium lg:font-[450] md:text-3xl lg:text-4xl xl:leading-[1.3] xl:text-[55px]' : `text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-[1200px] ${isGradient ? "" : 'gradient-text'}`} `}>{title}</h2>
    </div>
  )
}

export default GradientSectionTitle