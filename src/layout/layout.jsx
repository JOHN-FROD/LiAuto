import {  Footer, Navbar  } from "@/components";
import apiService from "@/service/axois";

import {useQuery} from "react-query";
import {useEffect} from "react";

const Layout = ({ children }) => {
    const { data: social,refetch:refetchSocial } = useQuery("socials", () =>
        apiService.getData("/socials/"),{
        enabled:false
    })

    useEffect(() => {
        refetchSocial()
    } , [])

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
            <Footer social={social?.links} />
        </div>
    );
};

export default Layout;