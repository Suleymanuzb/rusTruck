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
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Navigation]}
                className='mySwiper'
            >
                {ru.categories.trucks.map((truck) => {
                    const matchingImage = truckCategories.find(
                        (item) => item.id === truck.id,
                    );

                    return (
                        <SwiperSlide
                            key={truck.id}
                            className='flex! flex-col justify-between pt-4.5 pl-4 border border-gray-100 rounded-lg hover:shadow-xl hover:border hover:border-[#FEC80B] cursor-pointer h-86!'
                        >
                            <div>
                                <span className='text-2xl leading-[1.2]'>
                                    {truck.category}
                                </span>
                                <div>{truck.howManyModels}</div>
                            </div>
                            <div className='flex justify-end'>
                                <img
                                    
                                    src={matchingImage.image}
                                    alt={truck.category}
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
});

export default TruckSliders;
