import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changleLang} from "@/slice/lang";
import {FaChevronDown} from "react-icons/fa";
import {ImageUI} from "@/components";

const SelectLang = () => {
    const [dropdown, setDropdown] = useState(false)
    const { t , i18n  } = useTranslation();
    const dispatch = useDispatch();
    const { lang } = useSelector((state) => state.langSlice);
     const handleChangleLang = (lang) => {
        i18n.changeLanguage(lang)
        dispatch(changleLang(lang))
    }
    console.log(lang)

    const handleLanguage=(e)=>{
       e.stopPropagation()
        setDropdown(prevState => !prevState)
    }

    useEffect(() => {
        const handleCloseModal=()=>{
            setDropdown(false)
        }

        window.addEventListener('click',handleCloseModal)

        return () => {
            window.removeEventListener('click',handleCloseModal)
        }
    }, [dropdown])

    return (
        <>

    <div className="flex flex-col items-center cursor-pointer uppercase ">
        <div onClick={(e) => handleLanguage(e)} className="flex items-center gap-1  duration-500 ">
            <p className={'text-base md:text-sm font-medium '}>{t('navbar.language')}</p>
            <FaChevronDown className="text-[9px]"/>
        </div>
        <div
            className={`fixed   z-[100] bg-white  grid grid-rows-[0fr] duration-300   rounded-xs  top-6 md:top-[53px]   ${dropdown && 'grid-rows-[1fr] border'}`}>
                <ul className="flex flex-col  tracking-widest max-lg:text-center text-dark overflow-hidden  px-3">
                    <li onClick={() => handleChangleLang('uz')}
                        className="transition-all duration-200 py-1.5  hover:text-darkBlue ease items-center  text-sm flex gap-2 font-medium">
                        <span className={'w-4 h-4 relative block flex-shrink-0 rounded-full'}>
                         <ImageUI alt={'uz'} src={'/uz.jpg'} priority={true} imgStyle={'object-contain'} />
                        </span>
                        <span>
                        {t('navbar.uz')}
                    </span>
                    </li>
                    <li onClick={() => handleChangleLang('ru')}
                        className="transition-all duration-200 py-1.5  hover:text-darkBlue ease items-center  text-sm flex gap-2 font-medium">
                         <span className={'w-4 h-4 relative block flex-shrink-0 rounded-full'}>
                         <ImageUI alt={'uz'} src={'/ru.png'} priority={true} imgStyle={'object-contain'}/>
                        </span>
                        <span>
                        {t('navbar.ru')}

                        </span>
                    </li>
                </ul>
        </div>
    </div>
        </>
    );
};

export default SelectLang;