import { useParams } from "react-router-dom";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";
import { TruckNews } from "../../data/TruckNews";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const NewsDetails = () => {
    const { i18n } = useTranslation();
    const { slug } = useParams();

    const currentTruck = TruckNews.find((item) => item.slug === slug);
    console.log(currentTruck);

    const truckWithLanguage = currentTruck?.[i18n.language];
    console.log(truckWithLanguage);

    return (
        <Container>
            <h1 className='text-3xl leading-[1.8] mb-3'>
                {truckWithLanguage.mainTitle}
            </h1>
            <p className='leading-normal text-lg mb-10'>{currentTruck.date}</p>

            <div className='flex justify-between gap-6'>
                <div className='w-[40%]'>
                    {truckWithLanguage?.newsInfo?.map((mainNews, i) => (
                        <div key={i}>
                            {mainNews?.title && (
                                <h2 className='text-xl font-bold mb-4'>
                                    {mainNews.title}
                                </h2>
                            )}

                            {mainNews?.section?.map((item, j) => (
                                <div key={j}>
                                    <p className='my-3'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='w-[60%] cursor-pointer'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className='mySwiper'
                    >
                        {currentTruck?.gallerImages?.map((each, i) => {
                            return (
                                <SwiperSlide>
                                    <img
                                        key={i}
                                        src={each?.image}
                                        alt={truckWithLanguage?.mainTitle}
                                        className='w-[90%] rounded-2xl! aspect-30/22 object-cover'
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default NewsDetails;
