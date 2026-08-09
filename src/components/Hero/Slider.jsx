import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import heroSlides from "../../data/heroSlides";
import Button from "../Button/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import H1 from "../Typography/H1";

const Slider = ({ currentLang }) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className='
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
                {currentLang.hero.slides.map((slideText) => {
                    const slideImage = heroSlides.find(
                        (slide) => slide.id === slideText.id,
                    );

                    return (
                        <SwiperSlide key={slideText.id}>
                            <div
                                className='relative min-h-129.5 max-w-full rounded-xl bg-cover bg-center'
                                style={{
                                    backgroundImage: `url(${slideImage.image})`,
                                }}
                            >
                                {/* Dark overlay */}
                                <div className='absolute inset-0 bg-black/30 z-0' />

                                {/* text */}
                                <div className='absolute left-10 top-50 z-3 -translate-y-1/2'>
                                    <h1 className='max-w-113 font-bold leading-7.5 text-[28px] mb-4 text-white'>
                                        {slideText.title}
                                    </h1>
                                    <p className='text-white mb-8 leading-normal max-w-111.75'>
                                        {slideText.description}
                                    </p>

                                    {/* buttons */}
                                    <div className='flex gap-4'>
                                        {slideText.buttons.map(
                                            (button, buttonIndex) => (
                                                <Button
                                                    className='text-white'
                                                    key={buttonIndex}
                                                    variant={button.variant}
                                                >
                                                    {button.text}
                                                </Button>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default Slider;
