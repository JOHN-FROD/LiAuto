import React from 'react'

const LargeSectionTitle = ({title, subTitle}) => {
  return (
    <div>
      <div className="container container-content ">
        <div className='space-y-3 lg:space-y-5 lg:pl-[4vw]'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.3] max-w-[600px]'>{title}</h2>
          <p className='text-darkText max-w-[800px] md:text-lg lg:text-xl xl:text-2xl'>{subTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default LargeSectionTitle