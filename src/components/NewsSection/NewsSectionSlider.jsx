// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { forwardRef } from "react";
import Button from "../Button/Button";
import { icons } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TruckNews } from "../../data/TruckNews";

const { IconHeart, IconArrowRight } = icons;

const NewsSlider = forwardRef((props, ref) => {
    const { i18n } = useTranslation();

    return (
        <Swiper
            data-aos='fade-up'
            className='mySwiper rounded-tr-lg rounded-tl-lg relative!'
            onSwiper={(swiper) => {
                if (ref) {
                    ref.current = swiper;
                }
            }}
            spaceBetween={15}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
        >
            {TruckNews.map((truck, id) => {
                const product = truck?.[i18n.language];
                const coverImage = truck?.gallerImages[0]?.image;
                // console.log(truck);

                return (
                    <SwiperSlide key={id} className='bg-transparent'>
                        <div className='relative h-full flex flex-col'>
                            <div className='relative'>
                                <Link to={`/news/${truck.slug}`}>
                                    {coverImage && (
                                        <img
                                            key={id}
                                            src={coverImage}
                                            alt={product?.mainTitle}
                                            className='w-full object-cover aspect-10/8'
                                        />
                                    )}
                                </Link>

                                <div className='hidden md:absolute top-[1.5%] right-[2%]'>
                                    <span className='text-transparent hover:text-[#fec80b] cursor-pointer'>
                                        <IconHeart />
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white flex flex-col gap-4 flex-1 px-0.5 py-2 min-[500px]:px-2.75 sm:py-5.5'>
                                <div>
                                    <a className='md:text-start xl:text-start mb-1.25 line-clamp-2 text-[14px]  min-[1200px]:text-lg w-full leading-[1.3] cursor-pointer'>
                                        {truck.date}
                                    </a>
                                    <div>
                                        <p className='max-[400px]:text-[13px] sm:text-lg font-medium w-full cursor-pointer leading-normal'>
                                            {product?.mainTitle}
                                        </p>
                                    </div>
                                </div>
                                <div className='max-[1360px]:flex max-[1360px]:items-start max-[1360px]:flex-col min-[1360px]:flex min-[1360px]:items-center min-[1360px]:gap-3 mt-auto'>
                                    <Button
                                        variant='big_border'
                                        className='max-[400px]:text-[13px] sm:text-lg text-[#a2a2a2]  flex items-center gap-4 hover:text-[#fec80b] transform duration-300 leading-[1.1] mt-auto cursor-pointer'
                                    >
                                        {truck.button} <IconArrowRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
});

export default NewsSlider;
