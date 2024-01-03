import {IndexBanner} from "@/components";


const liMega = ({ children }) => {


    return (

        <div className="relative">
            <section className={
                'w-full h-screen'
            }>
                <IndexBanner carHeader={true} />
            </section>
        </div>
    );
};

export default liMega;