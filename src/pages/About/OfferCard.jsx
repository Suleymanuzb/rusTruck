import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import { offerCardsImages } from "../../data/aboutOffer";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import IconButton from "../../components/IconButton/IconButton";

const OfferCard = () => {
    const { t } = useTranslation();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Container className='pt-22 pb-10'>
            <div className='flex items-center justify-between'>
                <h1 className='md:max-w-120 text-lg'>
                    {t("aboutPage.offers.title")}
                </h1>

                <div className='hidden md:flex items-center gap-4'>
                    <div ref={prevRef}>
                        <IconButton
                            direction='left'
                            className='custom-prev cursor-pointer! select-none'
                        />
                    </div>

                    <div ref={nextRef}>
                        <IconButton
                            direction='right'
                            className='custom-next cursor-pointer! select-none'
                        />
                    </div>
                </div>
            </div>

            {/*  */}
            {t("aboutPage.offers.offerCards", {
                returnObjects: true,
            }).map((each) => {
                const matchingSvg = offerCardsImages.find(
                    (item) => item.id === each?.id,
                );
                const image = matchingSvg?.img;

                return (
                    <div
                        key={each.id}
                        className='grid grid-cols-1 my-5 border border-gray-200 py-6 px-3 h-auto! rounded-lg md:hidden'
                    >
                        <div>
                            <img src={image} alt='icon' />
                        </div>
                        <div className='pt-6'>
                            <h4 className='mb-2 text-lg font-medium'>
                                {each.title}
                            </h4>
                            <p>{each.text}</p>
                        </div>
                    </div>
                );
            })}

            <div className='hidden md:block'>
                <Swiper
                    modules={[Pagination, Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1022: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                    }}
                    spaceBetween={30}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className='mySwiper  py-7.5! mt-4'
                >
                    {t("aboutPage.offers.offerCards", {
                        returnObjects: true,
                    }).map((each) => {
                        const matchingSvg = offerCardsImages.find(
                            (item) => item.id === each?.id,
                        );
                        const image = matchingSvg?.img;

                        return (
                            <SwiperSlide
                                key={each.id}
                                className='border border-gray-200 py-6 px-3 h-auto! rounded-lg'
                            >
                                <div>
                                    <img src={image} alt='icon' />
                                </div>
                                <div className='pt-6'>
                                    <h4 className='mb-2 text-lg font-medium'>
                                        {each.title}
                                    </h4>
                                    <p>{each.text}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </Container>
    );
};

export default OfferCard;
