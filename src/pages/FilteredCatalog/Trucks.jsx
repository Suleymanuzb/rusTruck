import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { icons } from "../../assets/icons/icons";
import { useEffect, useState } from "react";
import ModalIsAvailable from "./Modal";
import { useTranslation } from "react-i18next";
import ModalFull from "./ModalFull";
import { useCartStore } from "../../store/cartStore";
import { useFavouriteStore } from "../../store/favouritesStore";
import NoItem from "../../assets/images/noCart/noItem.jpg";
import App from "./Pagination";
import Loader from "../../components/Loader/Loader";

const { KorzinkaIcon, IconHeartBgWhite, DownloadIcon, IconMessage } = icons;

const Trucks = ({ i18n, category, isLine, isTable, finalFilteredTrucks }) => {
    const { t } = useTranslation();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalFullOpen, setModalFullOpen] = useState(false);

    const addToCart = useCartStore((state) => state.addToCart);

    const { addToFavourites, favourites } = useFavouriteStore();

    // pagintaion
    const [currentPage, setCurrentPage] = useState(1);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);

        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, [currentPage]);
    // pagintaion

    return (
        <>
            {loader && <Loader />}

            <div>
                {/*finalFilteredTrucks  - which is  searching based on brand*/}
                <div className='flex items-center justify-center'>
                    {finalFilteredTrucks.length === 0 ? (
                        <div className='max-[450px]:w-full w-80 h-80 my-10'>
                            <img
                                className='w-full h-full object-cover'
                                src={NoItem}
                                alt='no cart'
                            />
                        </div>
                    ) : (
                        //    trucks and pagination
                        <div>
                            <div
                                className={`flex flex-col gap-5 ${isLine ? "grid grid-cols-1" : "grid grid-cols-2 md:grid-cols-3 min-[928px]:grid-cols-4 min-[1024px]:grid-cols-2! min-[1036px]:grid-cols-3!"}`}
                            >
                                {finalFilteredTrucks
                                    .slice(
                                        (currentPage - 1) * 3,
                                        currentPage * 3,
                                    )
                                    .map((truck, i) => {
                                        const isLiked = favourites.some(
                                            (apple) => apple.id === truck.id,
                                        );

                                        const truckCurrentLang =
                                            truck?.[i18n.language];

                                        const truckInfo =
                                            truckCurrentLang?.specifications
                                                .truckInfo;
                                        const length = truckInfo?.find((item) =>
                                            [
                                                "Длина автомобиля, мм",
                                                "Vehicle length, mm",
                                                "Avtomobil uzunligi, mm",
                                            ].includes(item.title),
                                        )?.value;

                                        const width = truckInfo?.find((item) =>
                                            [
                                                "Ширина автомобиля, мм",
                                                "Vehicle width, mm",
                                                "Avtomobil kengligi, mm",
                                            ].includes(item.title),
                                        )?.value;

                                        const height = truckInfo?.find((item) =>
                                            [
                                                "Высота автомобиля, мм",
                                                "Vehicle height, mm",
                                                "Avtomobil balandligi, mm",
                                            ].includes(item.title),
                                        )?.value;

                                        const dimensionsValue =
                                            length && width && height
                                                ? `${length} * ${width} * ${height} мм`
                                                : "";

                                        const mass = truckInfo?.find((item) =>
                                            [
                                                "Грузоподъёмность, кг",
                                                "Payload capacity, kg",
                                                "Yuk ko‘tarish qobiliyati, kg",
                                            ].includes(item.title),
                                        )?.value;

                                        return (
                                            <div
                                                key={i}
                                                className={`bg-white w-full ${isLine ? "col-span-1 flex max-[665px]:flex-col max-[400px]:gap-1 gap-4 items-center" : "flex flex-col"}  md:h-full`}
                                            >
                                                <div
                                                    className={`relative max-[665px]:w-full`}
                                                >
                                                    <Link
                                                        className='bg-black'
                                                        to={`/catalog/${category}/${truck.id}`}
                                                    >
                                                        <div
                                                            className={`${isLine ? "max-[665px]:w-full! max-[630px]:w-hull w-62 h-65 relative" : "w-full h-full"}`}
                                                        >
                                                            <img
                                                                src={
                                                                    truck.images
                                                                        .image
                                                                }
                                                                alt='truck'
                                                                className={`${isLine ? "w-full h-full" : "aspect-9/7.5"}  object-cover ${!truck.available ? "opacity-30" : ""}`}
                                                            />

                                                            {!truck.available && (
                                                                <div className='absolute z-30 inset-0 flex items-center justify-center'>
                                                                    <span
                                                                        className={`text-xl px-5 py-2 ${isLine ? "whitespace-nowrap text-sm" : "whitespace-normal"}`}
                                                                    >
                                                                        {t(
                                                                            "filteredPage.notInsale",
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </Link>
                                                    <div className='absolute top-[3%] right-[3%] z-35'>
                                                        <button
                                                            onClick={() => {
                                                                addToFavourites(
                                                                    truck,
                                                                );
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

                                                {/* here texts sites */}
                                                <div
                                                    className={`lg:mb-4 px-3 py-4 ${isLine ? "flex max-[580px]:flex-col flex-row gap-10 w-full justify-between " : "flex flex-col flex-1"}`}
                                                >
                                                    <div>
                                                        <p
                                                            className={`${isLine ? "text-sm" : "font-medium text-[16px] sm:text-lg"} max-[490px]:text-center max-[490px]:text-[12px]   mb-1md:mb-4 leading-[130%] line-clamp-2`}
                                                        >
                                                            {
                                                                truckCurrentLang?.truckType
                                                            }
                                                        </p>
                                                        <h5
                                                            className={`text-normal lg:text-[22px] max-[490px]:text-center font-medium mb-3 ${isLine ? "hidden" : "whitespace-nowrap max-[490px]:text-[12px] sm:text-sm md:text-lg lg:text-xl"}`}
                                                        >
                                                            {
                                                                truckCurrentLang?.price
                                                            }
                                                        </h5>

                                                        {/* three GRAY TEXTS brand, grosscapacity gabarit */}
                                                        {isLine && (
                                                            <div>
                                                                <div className='flex justify-between text-gray-400 text-sm '>
                                                                    <p>
                                                                        {t(
                                                                            "filteredPage.trucksInLine.brand",
                                                                        )}
                                                                    </p>
                                                                    <p className='border-b border-dotted  border-gray-400 flex-1 mb-1.75 '></p>
                                                                    <p>
                                                                        {
                                                                            truck.brand
                                                                        }
                                                                    </p>
                                                                </div>

                                                                <div className='flex justify-between text-gray-400 text-sm '>
                                                                    <p>
                                                                        {t(
                                                                            "filteredPage.trucksInLine.capacityOfTruck",
                                                                        )}
                                                                        :
                                                                    </p>
                                                                    <p className='border-b border-dotted  border-gray-400 flex-1 mb-1.75 '></p>
                                                                    <p>
                                                                        {
                                                                            dimensionsValue
                                                                        }
                                                                    </p>
                                                                </div>

                                                                <div className='flex justify-between text-gray-400 text-sm '>
                                                                    <p>
                                                                        {t(
                                                                            "filteredPage.trucksInLine.capacityOfLoad",
                                                                        )}
                                                                    </p>
                                                                    <p className='border-b border-dotted  border-gray-400 flex-1 mb-1.75 '></p>
                                                                    <p>
                                                                        {mass}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* isLine div */}
                                                    {isLine &&
                                                        truck.available && (
                                                            <div className=' flex flex-col items-center mt-4'>
                                                                <div>
                                                                    <h5 className='max-[500px]text-[10px] whitespace-nowrap text-sm  md:text-lg xl:text-[22px] font-medium mb-3'>
                                                                        {
                                                                            truckCurrentLang?.price
                                                                        }
                                                                    </h5>
                                                                </div>
                                                                <div className='max-[665px]:w-full'>
                                                                    <Link
                                                                        to={`/catalog/${category}/${truck.id}`}
                                                                        className='inline-block max-[665px]:w-full  px-8 min-[1200px]:px-12! text-sm whitespace-nowrap bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none py-3.5 text-center mb-4.5'
                                                                    >
                                                                        {
                                                                            truckCurrentLang
                                                                                ?.buttons
                                                                                .more
                                                                        }
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <Button
                                                                        onClick={() =>
                                                                            setModalFullOpen(
                                                                                () =>
                                                                                    setModalFullOpen(
                                                                                        true,
                                                                                    ),
                                                                            )
                                                                        }
                                                                        className='hidden md:flex gap-3 px-0 md:px-4 min-[1200px]:px-8! text-sm py-2 whitespace-nowrap bg-gray-200 transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none md:py-3.5 text-center mb-4.5'
                                                                    >
                                                                        {
                                                                            truckCurrentLang
                                                                                ?.buttons
                                                                                .getPk
                                                                        }

                                                                        <DownloadIcon className='w-3 h-3.5' />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    {/* isLine div */}

                                                    <div
                                                        className={`flex items-center gap-2 max-[768px]:flex-col max-[1024px]:flex-col max-[1036px]:flex-row max-[1250px]:flex-col max-[1250px]:gap-3 ${!truck.available ? "hidden" : ""} ${isLine ? "hidden" : "mt-auto"}`}
                                                    >
                                                        <Link
                                                            to={`/catalog/${category}/${truck.id}`}
                                                            variant='btn_big'
                                                            className='text-sm text-center max-[490px]:py-2 max-[490px]:text-[12px] max-[490px]:px-4 max-[550px]:py-3 max-[550px]:px-1 whitespace-nowrap bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none py-4 min-[490px]:w-full'
                                                        >
                                                            {
                                                                truckCurrentLang
                                                                    ?.buttons
                                                                    .more
                                                            }
                                                        </Link>

                                                        <div className='max-[490px]:text-center min-[490px]:w-full flex items-center gap-2 max-[450px]:flex-col  max-[768px]:flex-row  max-[768px]:justify-center max-[1036px]:self-center max-[1250px]:self-start'>
                                                            <div className='flex items-center gap-2'>
                                                                <button
                                                                    onClick={() =>
                                                                        addToCart(
                                                                            truck.id,
                                                                        )
                                                                    }
                                                                >
                                                                    <KorzinkaIcon className='max-[490px]:w-5 max-[490px]:h-5  h-8 w-8 cursor-pointer transition-all duration-150 hover:scale-110 active:scale-90 active:opacity-60' />
                                                                </button>
                                                            </div>

                                                            <div className='self-center md:self-start'>
                                                                <button
                                                                    onClick={() =>
                                                                        setModalFullOpen(
                                                                            () =>
                                                                                setModalFullOpen(
                                                                                    true,
                                                                                ),
                                                                        )
                                                                    }
                                                                    className='flex gap-1.5 whitespace-nowrap text-[13px] text-gray-500 cursor-pointer transition-all active:scale-90 active:opacity-60 hover:text-black'
                                                                >
                                                                    {
                                                                        truckCurrentLang
                                                                            ?.buttons
                                                                            .getPk
                                                                    }

                                                                    <DownloadIcon className='w-3 h-3.5 ' />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*  */}
                                                    {isTable &&
                                                        !truck.available && (
                                                            <div className='flex items-center justify-center'>
                                                                <Button
                                                                    onClick={() =>
                                                                        setModalOpen(
                                                                            true,
                                                                        )
                                                                    }
                                                                    className={`flex text-base items-center max-[400px]:text-[10px] max-[530px]:py-3 max-[530px]:text-sm justify-center gap-2 bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded-md leading-none py-4 whitespace-nowrap w-full px-3`}
                                                                >
                                                                    {
                                                                        truckCurrentLang
                                                                            ?.buttons
                                                                            ?.iNeedThis
                                                                    }
                                                                    <IconMessage className='max-[1024px]:hidden shrink-0' />
                                                                </Button>
                                                            </div>
                                                        )}

                                                    {isLine &&
                                                        !truck.available && (
                                                            <div className='flex items-center justify-center'>
                                                                <button
                                                                    onClick={() =>
                                                                        setModalOpen(
                                                                            true,
                                                                        )
                                                                    }
                                                                    className={`flex items-center justify-center gap-2 py-2 bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded-md leading-none md:py-4 min-[1100px]:whitespace-nowrap w-full px-2`}
                                                                >
                                                                    {t(
                                                                        "filteredPage.truckProducts.notificationButton",
                                                                    )}
                                                                    <IconMessage className='max-[1096px]:hidden' />
                                                                </button>
                                                            </div>
                                                        )}

                                                    {modalOpen &&
                                                        !truck.available && (
                                                            <ModalIsAvailable
                                                                open={modalOpen}
                                                                onClose={() => {
                                                                    setModalOpen(
                                                                        false,
                                                                    );
                                                                }}
                                                                truck={truck}
                                                                truckCurrentLang={
                                                                    truckCurrentLang
                                                                }
                                                            />
                                                        )}

                                                    {modalFullOpen && (
                                                        <ModalFull
                                                            onClose={() =>
                                                                setModalFullOpen(
                                                                    false,
                                                                )
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    )}
                </div>

                {/* pagination */}
                <div className='flex items-center justify-center mt-20'>
                    <App
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        finalFilteredTrucks={finalFilteredTrucks}
                    />
                </div>
            </div>
        </>
    );
};

export default Trucks;
