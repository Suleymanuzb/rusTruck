import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import trucks from "../../data/truckData";

const ProductSliders = ({ currentLang }) => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    {trucks.map((truck, id) => {
                       
                        return (
                            <div key={id}>
                                <div>{truck.image}</div>
                                <div>
                                    <p>{truck[currentLang].truckType}</p>
                                </div>
                            </div>
                        );
                    })}
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default ProductSliders;
