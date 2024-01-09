import '@/styles/globals.css'
import Layout from "@/layout/layout";


import "swiper/css";
import 'swiper/css/effect-fade'
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Client, HydrationProvider} from "react-hydration-provider";

export default function App({Component, pageProps}) {
    return (
        <HydrationProvider>
            <Layout>
                <Client>
                    <Component {...pageProps} />
                </Client>
            </Layout>
        </HydrationProvider>
    )

}
