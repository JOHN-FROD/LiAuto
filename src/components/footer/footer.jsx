import {ImageUI} from "@/components";
import {FaAngleRight} from "react-icons/fa";
import {BiLogoTelegram, BiLogoYoutube} from "react-icons/bi";
import {useEffect} from "react";
const IndexCard = ({contentPositionEnd , social}) => {
    // contentPosition ---- start or end



    return (
       <footer className={'bg-black'}>
           <div className={'container  py-3 flex items-center justify-between '}>
               <p className={'text-sm space-x-1 text-white/50'}>
                   <span>
                       © Li Auto Inc.
                   </span>
                   <span>
                   {new Date().getFullYear()}

                   </span>

               </p>

                   {
                       social &&
               <div className={'space-x-5 text-white/50 flex items-center text-xl'}>

                   <a  target={"_blank"} href={social[0]?.link}>
                       <BiLogoTelegram/>
                   </a>
                   <a  target={"_blank"} href={social[1]?.link}>
                       <BiLogoYoutube/>
                   </a>
               </div>
                   }

           </div>
       </footer>
    )
};

export default IndexCard;