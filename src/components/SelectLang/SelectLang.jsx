import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changleLang} from "@/slice/lang";
import {FaChevronDown} from "react-icons/fa";

const SelectLang = () => {
    const [dropdown, setDropdown] = useState(false)
    const { t , i18n  } = useTranslation();
    const dispatch = useDispatch();
    const { lang } = useSelector((state) => state.langSlice);
    const handleChangleLang = (lang) => {
        i18n.changeLanguage(lang)
        dispatch(changleLang(lang))
    }
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

    <div className="flex flex-col items-center cursor-pointer ">
        <div onClick={(e) => handleLanguage(e)} className="flex items-center gap-1  duration-500 ">
            <p className={'text-base md:text-sm font-medium '}>{t('navbar.language')}</p>
            <FaChevronDown className="text-[9px]"/>
        </div>
        <div
            className={`fixed   z-[100] bg-white  grid grid-rows-[0fr] duration-300  border-white rounded-xs  top-6 md:top-[53px]   ${dropdown && 'grid-rows-[1fr] border'}`}>
                <ul className="flex flex-col divide-y divide-[#E6E8EC]  px-2 tracking-widest max-lg:text-center text-dark overflow-hidden">
                    <li onClick={() => handleChangleLang('uz')}
                        className="transition-all duration-200  hover:text-darkBlue ease block text-sm">{t('navbar.uz')}
                    </li>
                    <li  onClick={() => handleChangleLang('ru')}
                        className="transition-all duration-200  hover:text-darkBlue ease block text-sm">{t('navbar.ru')}
                    </li>
                </ul>
        </div>
    </div>
</>
    );
};

export default SelectLang;