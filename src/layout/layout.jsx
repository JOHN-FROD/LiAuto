import {  Footer, Navbar  } from "@/components";
import apiService from "@/service/axois";

import {useQuery} from "react-query";

const Layout = ({ children }) => {
    const { data: social,refetch:refetchSocial } = useQuery("social", () =>
        apiService.getData("socials/"),{
        enabled:false
    })
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