// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { icons } from "../../assets/icons/icons";
const { IconHeartBgWhite } = icons;
import Button from "../../components/Button/Button";
import { Link, useParams } from "react-router-dom";

// Import Swiper styles
import i18next from "i18next";
import { useFavouriteStore } from "../../store/favouritesStore";

const SimilarProducts = ({ similarTrucks }) => {
    const { category } = useParams();
    // console.log(category);
    const { addToFavourites, favourites } = useFavouriteStore();

    return (
        <>
            <Swiper
                className='mySwiper rounded-tl-xl rounded-tr-xl'
                wrapperClass='!items-stretch'
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    533: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                }}
            >
                {similarTrucks.map((similar, i) => {
                    const currentLang = similar[i18next.language];
                    // console.log(currentLang);

                    const isLiked = favourites.some(
                        (like) => like.id === similar.id,
                    );
                    // console.log(isLiked);

                    return (
                        <SwiperSlide key={i} className='flex flex-col h-auto!'>
                            <div>
                                <Link to={`/catalog/${category}/${similar.id}`}>
                                    <img
                                        className='aspect-17/13 object-cover'
                                        src={similar.images.image}
                                        alt={currentLang.truckType}
                                    />
                                </Link>
                            </div>

                            <div className='flex flex-col flex-1'>
                                <Link to={`/catalog/${category}/${similar.id}`}>
                                    <h1 className='line-clamp-2! leading-[105%] mt-2'>
                                        {currentLang.truckType}
                                    </h1>
                                </Link>

                                <div className='flex gap-2.5 mt-3'>
                                    <Link
                                        to={`/catalog/${category}/${similar.id}`}
                                    >
                                        <button
                                            variant='btn_big'
                                            className='bg-[#fec400] rounded-lg px-2 py-1.5 md:px-3 md:py-2.5 outline-none cursor-pointer'
                                        >
                                            Подробнее
                                        </button>
                                    </Link>

                                    <button
                                        className='cursor-pointer duration-150 active:scale-90'
                                        onClick={() => {
                                            addToFavourites(similar);
                                        }}
                                    >
                                        {isLiked ? (
                                            <IconHeartBgWhite
                                                heartColor='#fec400'
                                                className='w-5 h-5 min-[490px]:w-6 min-[490px]:h-6 cursor-pointer transition-all duration-150 hover:scale-110 active:scale-90'
                                            />
                                        ) : (
                                            <IconHeartBgWhite
                                                heartColor='transparent'
                                                className='w-5 h-5 min-[490px]:w-6 min-[490px]:h-6 cursor-pointer transition-all duration-150 hover:scale-110 active:scale-90'
                                            />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default SimilarProducts;
