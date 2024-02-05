import {IoLocation} from "react-icons/io5";
import {FaPhoneAlt} from "react-icons/fa";
import {TbWorld} from "react-icons/tb";
import {MdMailOutline, MdOutlineWorkHistory} from "react-icons/md";
import {ImageUI} from "@/components";
import axios from "axios";
import lang from "@/slice/lang";
import {useTranslation} from "react-i18next";

const Contact = ({contact}) => {
    const {t} = useTranslation()
    // console.log(contact?.web_banner_url?.url)
    return (
        <>
            <div className={'w-full h-[200px] md:h-[350px] relative'}>
                {
                        <>
                            <ImageUI src={`${process.env.NEXT_PUBLIC_IMAGE}/${contact?.web_banner_url?.url}`} alt={'banner'} imgStyle={'object-cover object-center hidden md:block'}/>
                            <ImageUI src={`${process.env.NEXT_PUBLIC_IMAGE}/${contact?.rsp_banner_url?.url}`} alt={'banner'} imgStyle={'object-cover object-center block md:hidden'}/>
                        </>

                }

                <div className="container h-full flex relative  items-center lg:px-[5%] z-10 mt-10">
                    <h2 className={'text-2xl md:text-3xl  font-medium text-white drop-shadow-lg'}>
                        {t('navbar.contact')}
                    </h2>
                </div>
            </div>
            <section className="my-10">
                <div className="container lg:px-[5%]">
                    <div
                        className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-4 py-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-10 md:px-8  backdrop-blur-[30px]">
                        <div className="mb-12 grid gap-6 grid-cols-2 lg:grid-cols-4">
                            <div className="mx-auto flex items-center gap-y-3 flex-col">
                                <IoLocation className={'text-3xl md:text-4xl flex-shrink-0'} />
                                <h6 className="text-sm md:text-base font-medium text-center text-darkText">
                                    {
                                        lang === 'ru' ? contact?.address_ru : contact?.address_uz
                                    }
                                   </h6>
                            </div>
                            <a href={`tel:${ contact?.phone[0]?.number}`} className="mx-auto flex items-center gap-y-3 flex-col">
                                <FaPhoneAlt className={'text-3xl md:text-4xl flex-shrink-0'} />

                                    {
                                        contact?.phone?.map((number , id) => (
                                            <p key={id} className="text-sm md:text-base font-medium text-center text-darkText">
                                                {
                                                number?.number
                                                }
                                            </p>
                                                ))
                                                }
                                        </a>
                                        <a href={`mailto:${contact?.email}`} className="mx-auto flex items-center gap-y-3 flex-col">
                                <MdMailOutline  className={'text-3xl md:text-4xl flex-shrink-0'} />
                                <p className="text-sm md:text-base font-medium text-center text-darkText">{contact?.email}</p>
                            </a>
                            <h6  className="mx-auto flex items-center gap-y-3 flex-col">
                                <MdOutlineWorkHistory  className={'text-3xl md:text-4xl flex-shrink-0'} />
                                <p className="text-sm md:text-base font-medium space-x-1 text-center text-darkText">
                                    <span>{contact?.start_time}</span>
                                    <span>-</span>
                                    <span>
                                        {contact?.end_time}
                                    </span>
                                </p>
                            </h6>

                        </div>
                            <iframe
                                className={'w-full aspect-video md:aspect-[16/5]'}
                                src={contact?.map}
                                 allowFullScreen="" loading="lazy"
                                />
                    </div>
                </div>
            </section>
        </>

    );
};

export default Contact;


export async function getServerSideProps({req, res}) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );
    // Fetch data from external API
    const [contact] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}contacts/`),
    ]);

    return {
        props: {
            contact: contact.data,
        },
    };
}