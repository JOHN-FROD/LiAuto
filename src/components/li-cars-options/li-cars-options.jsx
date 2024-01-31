import { useState } from "react"

const LiCarsOptions = ({listName, listOptions}) => {
  const [tab, setTab] = useState(0)
  return (
    <div className="flex flex-col items-center">
      <div className="flex ">
        {
          listName?.map(item => (
            <div className={`border-b-[0.5px] text-sm py-1 px-4 text-[#191919] cursor-pointer  ${tab === item.id ? "border-b-2 border-[#057568] text-black" : ""} `} key={item.id} onClick={() => setTab(item.id)}>{item.name}</div>
          ))
        }
      </div>
      <div className="lg:py-[10vw]">
        {
          // listOptions[tab]?.
        }
      </div>
    </div>
  )
}

export default LiCarsOptions