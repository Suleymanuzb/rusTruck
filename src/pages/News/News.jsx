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
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Pagination, ConfigProvider } from "antd";
import Loader from "../../components/Loader/Loader";
import { div } from "motion/react-client";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const News = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title =
            "Актуальные новости производителя автоспецтехники «РусТрак»";
    }, []);

    const newsGridRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [isShowingMore, setIsShowingMore] = useState(false);

    const [isPaginationLoading, setIsPaginationLoading] = useState(false);

    const handleMore = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsShowingMore(true);
            setCurrentPage((prev) => prev + 1);

            setIsLoading(false);
        }, 1000);
    };

    const totalPages = Math.ceil((TruckNews.length - 1) / pageSize);

    let paginatedNews;

    if (isShowingMore) {
        const endIndex = currentPage * pageSize + 1;
        paginatedNews = TruckNews.slice(1, endIndex);
    } else {
        const startIndex =
            currentPage === 1 ? 1 : 1 + (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        paginatedNews = TruckNews.slice(startIndex, endIndex);
    }

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    return (
        <div>
            <Container>
                {isPaginationLoading && <Loader />}

                <Breadcrumbs />
                <h1 className='mb-8 text-3xl font-medium'>
                    {t("newsPage.intro.title")}
                </h1>

                {/* 0 */}
                {currentPage === 1 && TruckNews.length > 0 && (
                    <div className='flex flex-col md:flex-row gap-4 mb-14 col-span-full'>
                        <Link to={TruckNews[0].slug} className='md:w-[40%]'>
                            <Slider item={TruckNews[0]} />
                        </Link>

                        <div className='max-[768px]:w-full w-1/2'>
                            <p className='mb-2.75'>{TruckNews[0].date}</p>

                            <h1 className='text-2xl font-medium line-clamp-2'>
                                {TruckNews[0]?.[i18next.language]?.mainTitle}
                            </h1>

                            {TruckNews[0]?.[i18next.language]?.description && (
                                <p className='my-8'>
                                    {
                                        TruckNews[0]?.[i18next.language]
                                            ?.description
                                    }
                                </p>
                            )}

                            <Link
                                to={TruckNews[0].slug}
                                className='cursor-pointer opacity-50 flex items-center gap-4 transform duration-300 hover:text-[#fec400]'
                            >
                                {TruckNews[0]?.[i18next.language]?.moreButton}
                                <span>
                                    <IconArrowRight />
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
                {/* 0 */}

                <div
                    ref={newsGridRef}
                    data-aos='fade-up'
                    className={`scroll-mt-42 min-[500px]:scroll-mt-35  md:scroll-mt-18.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 transition-opacity duration-300`}
                >
                    {paginatedNews.map((item, index) => {
                        const truckNewsLanguage = item?.[i18next.language];

                        {
                            return (
                                <div
                                    key={index}
                                    className='col-span-1 mb-10 flex flex-col gap-3'
                                >
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
                                            className='max-[400px]:line-clamp-1 max-[550px]:text-[10px] max-[550px]:font-medium font-bold leading-[120%]'
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
                    {currentPage < totalPages && (
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

                <div className='flex justify-center mb-10'>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: "#000",
                                colorTextActive: "#000000",
                            },
                            components: {
                                Pagination: {
                                    itemActiveBg: "#fec400",
                                    activeBorderColor: "yellow",
                                },
                            },
                        }}
                    >
                        <Pagination
                            onShowSizeChange={onShowSizeChange}
                            showSizeChanger={false}
                            total={TruckNews.length}
                            current={currentPage}
                            pageSize={pageSize}
                            onChange={(page) => {
                                setIsLoading(true);
                                setIsPaginationLoading(true);
                                setCurrentPage(page);
                                setIsShowingMore(false);

                                // const gridPosition = newsGridRef.current.getBoundingClient().top;
                                // console.log(gridPosition);

                                setTimeout(() => {
                                    newsGridRef.current?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });

                                    setIsLoading(false);
                                    setIsPaginationLoading(false);
                                }, 400);
                            }}
                            itemRender={(page, type, originalElement) => {
                                if (type === "prev") {
                                    return (
                                        <span className='flex  gap-1'>
                                            <span className='text-xl'>‹</span>
                                            <span>{t("newsPage.back")}</span>
                                        </span>
                                    );
                                }
                                if (type === "next") {
                                    return (
                                        <span className='flex  gap-1'>
                                            <span className=''>
                                                {t("newsPage.next")}
                                            </span>
                                            <span className='text-xl'>›</span>
                                        </span>
                                    );
                                }
                                return originalElement;
                            }}
                        />
                    </ConfigProvider>
                </div>
            </Container>

            <AnyQuestions />
        </div>
    );
};

export default News;
