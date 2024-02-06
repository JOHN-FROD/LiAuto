import '@/styles/globals.css'
import Layout from "@/layout/layout";
import {Client, HydrationProvider} from "react-hydration-provider";
import {QueryClientProvider, QueryClient} from "react-query";


import "swiper/css";
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import "swiper/css/pagination";
import "swiper/css/navigation";
import 'video.js/dist/video-js.css';
import "aos/dist/aos.css";

import '@/localization/i18n'
import {Provider} from "react-redux";
import {store} from "@/store";

export default function App({Component, pageProps}) {
    const queryClient = new QueryClient();
    return (
        <HydrationProvider>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Layout>
                        <Client>
                            <Component {...pageProps} />
                        </Client>
                    </Layout>
                </Provider>
            </QueryClientProvider>
        </HydrationProvider>
    )

}
