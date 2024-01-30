const GradientSectionTitle = ({isGradient, title, categoryTitle}) => {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <p className="text-sm md:text-lg">{categoryTitle}</p>
      <h2 className={`text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-[1200px] ${isGradient ? "" : 'gradient-text'}`}>{title}</h2>
    </div>
  )
}

export default GradientSectionTitle