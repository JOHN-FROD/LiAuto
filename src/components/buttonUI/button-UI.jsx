const ButtonUI = ({href, btnText}) => {
  return (
    <>
      {
        href
        ?
        <a href={href} className="text-sm md:text-base text-white">
          {btnText}
        </a>
        :
        <button className="text-white  duration-200 flex items-center gap-x-1.5 text-sm md:text-base">
          {btnText}
        </button>
      }
    </>
  )
}

export default ButtonUI