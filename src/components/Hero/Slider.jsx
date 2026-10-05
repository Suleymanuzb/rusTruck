// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import heroSlides from "../../data/heroSlides";
import Button from "../Button/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import H1 from "../Typography/H1";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Slider = () => {
    const { t } = useTranslation();

    const heroSlidesArray = t("hero.slides", {
        returnObjects: true,
    });

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    // modal state
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className=' rounded-xl
        mySwiper
         [&_.swiper-button-next]:!w-6
        [&_.swiper-button-next]:!h-6
          [&_.swiper-button-next]:!text-gray-500

        [&_.swiper-button-prev]:!w-6
        [&_.swiper-button-prev]:!h-6
           [&_.swiper-button-prev]:!text-gray-500

        [&_.swiper-button-next]:after:!text-[20px]
        [&_.swiper-button-prev]:after:!text-[20px]
      [&_.swiper-pagination-bullet]:!size-5
    [&_.swiper-pagination-bullet]:!rounded-full
     [&_.swiper-pagination-bullet]:!border-[2px]
    [&_.swiper-pagination-bullet]:!border-white/70
     [&_.swiper-pagination-bullet]:!bg-transparent

    [&_.swiper-pagination-bullet-active]:!bg-white/70
    [&_.swiper-pagination-bullet-active]:!opacity-100
    [&_.swiper-pagination-bullet-active]:!border-white/70
    '
            >
                {heroSlidesArray.map((slideText) => {
                    const slideImage = heroSlides.find(
                        (slide) => slide.id === slideText.id,
                    );

                    return (
                        <div>
                            <SwiperSlide key={slideText.id}>
                                <div
                                    className='relative min-h-115 md:min-h-129.5 max-w-full rounded-xl bg-cover bg-center'
                                    style={{
                                        backgroundImage: `url(${slideImage.image})`,
                                    }}
                                >
                                    {/* Dark overlay */}
                                    <div className='absolute inset-0 bg-black/30 z-0 rounded-xl' />

                                    {/* text */}
                                    <div
                                        data-aos='fade-right'
                                        className='absolute max-[442px]:left-4 left-10 top-40 md:top-50 z-3 -translate-y-1/2'
                                    >
                                        <div>
                                            <h1 className='max-w-113 font-bold leading-7.5 max-[442px]:text-[23px] text-[28px] mb-4 text-white'>
                                                {slideText.title}
                                            </h1>
                                        </div>
                                        <p className='text-white mb-8 leading-normal max-w-111.75 max-[442px]:text-[14px]'>
                                            {slideText.description}
                                        </p>

                                        {/* buttons */}
                                        {slideText.buttons.map(
                                            (button, buttonIndex) => {
                                                // / If button has "to", it is a navigation button
                                                if (button?.to) {
                                                    return (
                                                        <Link
                                                            to={button.to}
                                                            key={buttonIndex}
                                                        >
                                                            <Button
                                                                key={
                                                                    buttonIndex
                                                                }
                                                                className='text-white max-[768px]:px-4 py-2'
                                                                variant={
                                                                    button.variant
                                                                }
                                                            >
                                                                {button.text}
                                                            </Button>
                                                        </Link>
                                                    );
                                                }

                                                return (
                                                    <Button
                                                        key={buttonIndex}
                                                        className='text-white max-[768px]:px-4 py-2'
                                                        variant={button.variant}
                                                        onClick={() => {
                                                            if (
                                                                button.text ===
                                                                "Заказать звонок"
                                                            ) {
                                                                setIsOpen(true);
                                                            }
                                                        }}
                                                    >
                                                        {button.text}
                                                    </Button>
                                                );
                                            },
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    );
                })}
            </Swiper>

            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    );
};

export default Slider;
