import {  Footer, Navbar  } from "@/components";
import { useEffect } from "react";
// import Aos from "aos";


const Layout = ({ children }) => {

    // useEffect(() => {
    //     Aos.init({
    //         once: true
    //     });
    // }, []);

    return (
        // !! padding oliw kk navbarni cqarib yuboriw ucun !!
        <div className="relative">
            <div className={'h-[52px]'}>
                <Navbar />
            </div>
            <div className={'  w-full h-full overflow-x-hidden '}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;