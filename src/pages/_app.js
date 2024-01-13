import '@/styles/globals.css'
import Layout from "@/layout/layout";
import {Client, HydrationProvider} from "react-hydration-provider";


import "swiper/css";
import 'swiper/css/effect-fade'
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'video.js/dist/video-js.css';
import "aos/dist/aos.css";

import '@/localization/i18n'

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
