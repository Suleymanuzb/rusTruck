import { TruckNews } from "../../data/TruckNews";
import { Fragment } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = ({ item }) => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{
                clickable: true,
            }}
            className='rounded-xl
            
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
            {item?.gallerImages?.map((each, i) => {
                return (
                    <SwiperSlide className=' w-[40%] overflow-hidden'>
                        <img
                            key={i}
                            src={each?.image}
                            alt='truck'
                            className=' w-full lg:w-full rounded-2xl! aspect-30/22 object-cover'
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;
