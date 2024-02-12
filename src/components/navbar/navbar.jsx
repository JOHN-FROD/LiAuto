import Link from "next/link";
import {ImageUI, SelectLang} from "@/components";
import {CiMenuBurger} from "react-icons/ci";
import {useState} from "react";
import {routeConfig} from "@/config/constants";
import {useTranslation} from "react-i18next";



const Navbar = () => {
    const {t}=useTranslation()
    const [openNav, setOpenNav] = useState(false)
    return (
        <nav
            className="bg-white  fixed w-[100%] z-[100]  top-0 start-0 border-b border-gray-200 overflow-x-hidden ">
            <div className="container  bg-white flex flex-wrap items-center justify-between py-4">
                <Link href="/" className="flex items-center space-x-3 relative w-[98px] h-4">
                    <ImageUI src={'/LiAuto-logo.svg'}/>

                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                    <SelectLang />
                    <button onClick={() => setOpenNav(!openNav)} type="button"

                            className="inline-flex items-center p-1 justify-center text-sm text-black rounded-sm md:hidden   focus:outline-none focus:ring-2 focus:ring-black"
                    >
                        <CiMenuBurger className={'text-xl'}/>
                    </button>
                </div>
                <div
                    className={`items-center justify-between  h-full bg-white w-full md:flex md:w-auto md:order-1 fixed  duration-500 md:static md:z-0 z-[-1] left-0 ${openNav ? 'top-[57px]' : 'top-[-100%]'} `}
                >
                    <ul className="flex flex-col  items-center w-full  p-4 text-base md:text-sm md:p-0  font-medium   md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 bg-white ">
                        {
                            routeConfig.map(nav => (
                                <li key={nav.name} className={'relative z-50'}>
                                    <Link href={nav.link} onClick={() => setOpenNav(!openNav)}
                                       className="block w-full text-black uppercase  hover:opacity-60 py-4 md:py-0"
                                    >
                                        {t(`${nav.name}`)}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
};

export default Navbar;