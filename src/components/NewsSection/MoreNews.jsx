// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import i18next from "i18next";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
const { IconArrowRight } = icons;

export default function MoreNews({ TruckNews }) {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Navigation]}
                className='mySwiper'
            >
                <div className='flex gap-2'>
                    {TruckNews.map((item, i) => {
                        const truckWithLanguage = item?.[i18next.language];

                        return (
                            <SwiperSlide
                                key={i}
                                className='px-3 py-4  bg-white h-38!'
                            >
                                <Link
                                    to={`/news/${item.slug}`}
                                    className='flex flex-col  h-full'
                                >
                                    <div>
                                        <p>{item.date}</p>
                                        <h1 className='font-medium line-clamp-2 mt-1'>
                                            {truckWithLanguage.mainTitle}
                                        </h1>
                                    </div>

                                    <div className='flex-1 flex'>
                                        <button className='mt-auto flex items-center gap-2 transition-all opacity-30 hover:text-[#fec400] cursor-pointer'>
                                            {truckWithLanguage.moreButton}
                                            <span>
                                                <IconArrowRight />
                                            </span>
                                        </button>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </div>
            </Swiper>
        </>
    );
}
