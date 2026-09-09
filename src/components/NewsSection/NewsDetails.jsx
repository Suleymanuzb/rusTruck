import { Link, useParams } from "react-router-dom";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";
import { TruckNews } from "../../data/TruckNews";
import { Fragment } from "react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { span } from "motion/react-client";

const NewsDetails = () => {
    const { i18n } = useTranslation();
    const { slug } = useParams();

    const currentTruck = TruckNews.find((item) => item.slug === slug);
    // console.log(currentTruck);

    const truckWithLanguage = currentTruck?.[i18n.language];
    // console.log(truckWithLanguage);

    return (
        <Container className='pb-39'>
            <Breadcrumbs />
            <h1 className='text-xl max-[400px]:leading-[110%] leading-[135%] font-bold sm:font-normal sm:text-2xl lg:text-3xl mb-3 mt-5'>
                {truckWithLanguage.mainTitle}
            </h1>
            <p className='leading-normal text-lg sm:mb-5 md:mb-7 lg:mb-10'>
                {currentTruck.date}
            </p>

            <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
                <div className='lg:w-[40%]'>
                    {truckWithLanguage?.newsInfo?.map((mainNews, i) => (
                        <div key={i}>
                            {mainNews?.title && (
                                <h2 className='text-xl font-bold mb-4'>
                                    {mainNews.title}
                                </h2>
                            )}

                            {mainNews.type === "paragraph" && (
                                <p>
                                    {mainNews.section.map((each, i) => {
                                        if (each.type === "Link") {
                                            return (
                                                <Link
                                                    key={i}
                                                    className=' ml-1 cursor-pointer text-purple-700 font-medium'
                                                    to={each.href}
                                                >
                                                    {each.value}
                                                </Link>
                                            );
                                        }

                                        if (
                                            each.value.includes(
                                                "Завод «Рустрак»",
                                            )
                                        ) {
                                            return (
                                                <span
                                                    key={i}
                                                    className=' ml-1 cursor-pointer font-extrabold'
                                                    to={each.href}
                                                >
                                                    {each.value} <br />
                                                </span>
                                            );
                                        }

                                        return <span>{each.value}</span>;
                                    })}
                                </p>
                            )}

                            {mainNews?.section?.map((item, j) => {
                                if (item.type === "comment") {
                                    return (
                                        <div className='mb-3' key={j}>
                                            <p className=''>
                                                <span className='font-bold text-[#f55409]'>
                                                    {item.author}
                                                </span>{" "}
                                            </p>
                                            <p className='text-[#f16522]'>
                                                {item.text}
                                            </p>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={j}>
                                        <p className='my-3'>{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className=' lg:w-[60%] cursor-pointer'>
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
                                        className='w-full lg:w-[90%] rounded-2xl! aspect-30/22 object-cover'
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
