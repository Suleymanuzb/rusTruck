import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { TruckNews } from "../../data/TruckNews";
import i18next from "i18next";
import { icons } from "../../assets/icons/icons";
const { IconArrowRight } = icons;
import Slider from "./Slider";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useState } from "react";

const News = () => {
    const { t } = useTranslation();

    const [visibleCount, setVisibleCount] = useState(9);
    const [isLoading, setIsLoading] = useState(false);

    const handleMore = () => {
        setIsLoading(true);

        setTimeout(() => {
            setVisibleCount((prev) => prev + 8);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Container>
            <Breadcrumbs />
            <h1 className='mb-8 text-3xl font-medium'>
                {t("newsPage.intro.title")}
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5'>
                {TruckNews.slice(0, visibleCount).map((item, index) => {
                    const truckNewsLanguage = item?.[i18next.language];
                    {
                        if (index === 0) {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col md:flex-row gap-4 mb-14 col-span-full'
                                >
                                    <Link to={item.slug} className='md:w-[40%]'>
                                        <Slider item={item} />
                                    </Link>

                                    <div className='max-[768px]:w-full w-1/2'>
                                        <p className='mb-2.75'>{item.date}</p>

                                        <h1 className='text-2xl font-medium line-clamp-2'>
                                            {truckNewsLanguage.mainTitle}
                                        </h1>

                                        {truckNewsLanguage.description && (
                                            <p className='my-8l'>
                                                {truckNewsLanguage.description}
                                            </p>
                                        )}

                                        <Link
                                            to={item.slug}
                                            className='cursor-pointer opacity-50 flex items-center gap-4 transform duration-300 hover:text-[#fec400]'
                                        >
                                            {truckNewsLanguage.moreButton}
                                            <span>
                                                <IconArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div className='col-span-1 mb-10 flex flex-col gap-3'>
                                <Link to={item.slug}>
                                    <img
                                        src={item.gallerImages[0].image}
                                        alt='news images'
                                        className='w-full h-full object-cover aspect-20/13 rounded cursor-pointer'
                                    />
                                </Link>
                                <div>
                                    <Link className='block' to={item.slug}>
                                        {item.date}
                                    </Link>

                                    <Link
                                        to={item.slug}
                                        className='font-medium leading-[120%]'
                                    >
                                        {truckNewsLanguage.mainTitle}
                                    </Link>

                                    <Link
                                        to={item.slug}
                                        className='mt-7 cursor-pointer opacity-50 flex items-center gap-4 transform duration-300 hover:text-[#fec400]'
                                    >
                                        {truckNewsLanguage.moreButton}
                                        <span>
                                            <IconArrowRight />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div className='flex items-center justify-center'>
                {visibleCount < TruckNews.length && (
                    <Button
                        onClick={handleMore}
                        variant='btn_big_more'
                        className='cursor-pointer mb-11'
                    >
                        {isLoading ? (
                            <span className='flex items-center justify-center gap-1.5'>
                                <span className='h-2 w-2 bg-current rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:-0.3s]'></span>
                                <span className='h-2 w-2 bg-current rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:-0.15s]'></span>
                                <span className='h-2 w-2 bg-current rounded-full animate-bounce [animation-duration:0.6s]'></span>
                            </span>
                        ) : (
                            t("newsPage.button")
                        )}
                    </Button>
                )}
            </div>
        </Container>
    );
};

export default News;
