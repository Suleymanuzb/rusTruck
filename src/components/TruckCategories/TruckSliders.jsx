import ru from "../../data/translations/ru";
import truckCategories from "../../data/truckCategories";

import React, { forwardRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const TruckSliders = forwardRef((props, ref) => {
    return (
        <>
            <Swiper
                onSwiper={(swiper) => {
                    ref.current = swiper;
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 45,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 45,
                    },
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 45,
                    },
                    924: {
                        slidesPerView: 4,
                        spaceBetween: 45,
                    },
                    1201: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Navigation]}
                className='mySwiper  py-5!'
            >
                {ru.categories.trucks.map((truck) => {
                    const matchingImage = truckCategories.find(
                        (item) => item.id === truck.id,
                    );

                    return (
                        <SwiperSlide key={truck.id}>
                            <div
                                data-aos='fade-up'
                                className='flex! flex-col justify-between pt-4.5 pl-4 border border-gray-200 rounded-lg hover:shadow-[0_0_35px_rgba(254,200,11,0.20),0_0_70px_rgba(254,200,11,0.12)] hover:border hover:border-[#FEC80B] cursor-pointer h-61.25!  min-[1200px]:h-86!'
                            >
                                <div>
                                    <span
                                        className={`block text-[18px] min-[1200px]:text-2xl leading-[1.2] ${truck.category.includes(" ") ? "line-clamp-2" : "truncate"}`}
                                    >
                                        {truck.category}
                                    </span>
                                    <div>
                                        <span className='text-[#a2a2a2]'>
                                            {truck.howManyModels}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-end self-end max-[500px]:w-32 max-[500px]:h-32 max-[1200px]:w-35.75 max-[1200px]:h-35.75'>
                                    <img
                                        src={matchingImage.image}
                                        alt={truck.category}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
});

export default TruckSliders;
