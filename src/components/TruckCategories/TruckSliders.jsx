// import truckCategories from "../../data/truckCategories/";

import React, { forwardRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import TruckCards from "./TruckCards";

const TruckSliders = forwardRef(({ currentLang }, ref) => {
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
                {currentLang?.header?.megaMenu?.categories?.types.map(
                    (truck) => {
                        return (
                            <SwiperSlide key={truck.id}>
                                <TruckCards category={truck} />
                            </SwiperSlide>
                        );
                    },
                )}
            </Swiper>
        </>
    );
});

export default TruckSliders;
