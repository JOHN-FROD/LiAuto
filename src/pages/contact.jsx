import {IoLocation} from "react-icons/io5";
import {FaPhoneAlt} from "react-icons/fa";
import {TbWorld} from "react-icons/tb";
import {MdMailOutline} from "react-icons/md";
import {ImageUI} from "@/components";

const Contact = () => {
    return (
        <>
            <div className={'w-full h-[200px] md:h-[350px] bg-red-300 relative'}>
                    <ImageUI src={'/contact.png'} imgStyle={'object-cover object-center'}/>

                <div className="container h-full flex relative  items-center lg:px-[5%] z-10 mt-10">
                    <h2 className={'text-2xl md:text-3xl  font-medium text-white drop-shadow-lg'}>
                        Contact
                    </h2>
                </div>
            </div>
            <section className="my-10">

                <div className="container lg:px-[5%]">
                    <div
                        className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-4 py-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12  backdrop-blur-[30px]">
                        <div className="mb-12 grid gap-6 grid-cols-2 lg:grid-cols-4">
                            <div className="mx-auto flex items-center gap-y-3 flex-col">
                                <IoLocation className={'text-3xl md:text-4xl flex-shrink-0'} />
                                <h6 className="text-sm md:text-base font-medium text-center text-darkText">Проспект Амира Темура 40, Юнусабадский р-н, г.Ташкент</h6>
                            </div>
                            <a href={'tel:'} className="mx-auto flex items-center gap-y-3 flex-col">
                                <FaPhoneAlt className={'text-3xl md:text-4xl flex-shrink-0'} />
                                <h6 className="text-sm md:text-base font-medium text-center text-darkText">+998 78 141 88 88.</h6>
                            </a>
                            <a href={'mailto:'} className="mx-auto flex items-center gap-y-3 flex-col">
                                <MdMailOutline  className={'text-3xl md:text-4xl flex-shrink-0'} />
                                <h6 className="text-sm md:text-base font-medium text-center text-darkText">info@LiAuto.uz</h6>
                            </a>
                            <a href={''} target={"_blank"} className="mx-auto flex items-center gap-y-3 flex-col">
                                <TbWorld className={'text-3xl md:text-4xl flex-shrink-0'} />
                                <h6 className="text-sm md:text-base font-medium text-center text-darkText">Lixiangauto.uz</h6>
                            </a>

                        </div>
                            <iframe
                                className={'w-full aspect-video md:aspect-[16/5]'}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.550033796306!2d69.27785338951652!3d41.31865142628815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b10178e7961%3A0x9bdcdb9451269387!2sLeapmotor%20CA!5e0!3m2!1suz!2s!4v1706681165861!5m2!1suz!2s"
                                 allowFullScreen="" loading="lazy"
                                ></iframe>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Contact;