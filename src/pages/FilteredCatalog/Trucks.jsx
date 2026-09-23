import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { icons } from "../../assets/icons/icons";
import { useState } from "react";
import ModalIsAvailable from "./Modal";
import { useTranslation } from "react-i18next";
import ModalFull from "./ModalFull";

const {
    IconLine,
    IconTable,
    SearchIcon,
    KorzinkaIcon,
    IconHeartBgWhite,
    DownloadIcon,
    IconMessage,
} = icons;

const Trucks = ({ matchingTrucks, i18n, category, isLine, isTable }) => {
    const { t } = useTranslation();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalFullOpen, setModalFullOpen] = useState(false);

    const [liked, setLiked] = useState(null);
    const [hoveredHeart, setHoveredHeart] = useState(null);

    return (
        <div
            className={`gap-5 ${isLine ? "grid grid-cols-1" : "grid grid-cols-2 md:grid-cols-3 min-[928px]:grid-cols-4 min-[1024px]:grid-cols-2! min-[1036px]:grid-cols-3!"}`}
        >
            {matchingTrucks.map((truck) => {
                const truckCurrentLang = truck?.[i18n.language];

                return (
                    <div
                        key={truck.id}
                        className={`bg-white w-full ${isLine ? "col-span-1 flex max-[665px]:flex-col max-[400px]:gap-1 gap-4 items-center" : ""}`}
                    >
                        <div className={`relative max-[665px]:w-full`}>
                            <Link
                                className='bg-black'
                                to={`/catalog/${category}/${truck.id}`}
                            >
                                <div
                                    className={`${isLine ? "max-[665px]:w-full! max-[630px]:w-hull w-62 h-65 relative" : "w-full h-full"}`}
                                >
                                    <img
                                        src={truck.images.image}
                                        alt='truck'
                                        className={`${isLine ? "w-full h-full" : "aspect-9/7.5"}  object-cover ${!truck.available ? "opacity-30" : ""}`}
                                    />

                                    <div
                                        onMouseEnter={() =>
                                            setHoveredHeart(truck.id)
                                        }
                                        onMouseLeave={() =>
                                            setHoveredHeart(null)
                                        }
                                        className='absolute top-[3%] right-[3%] z-35'
                                    >
                                        <IconHeartBgWhite
                                            className={`w-6 h-6 `}
                                            heartColor={
                                                liked === truck.id ||
                                                hoveredHeart === truck.id
                                                    ? "#fec400"
                                                    : "transparent"
                                            }
                                        />
                                    </div>

                                    {!truck.available && (
                                        <div className='absolute z-30 inset-0 flex items-center justify-center'>
                                            <span
                                                className={`text-xl px-5 py-2 ${isLine ? "whitespace-nowrap text-sm" : "whitespace-normal"}`}
                                            >
                                                Нет в продаже
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>

                        {/* here texts sites */}
                        <div
                            className={`mb-10 px-3 py-4 ${isLine ? "flex max-[580px]:flex-col flex-row gap-10 w-full justify-between " : ""}`}
                        >
                            <div>
                                <p
                                    className={`${isLine ? "text-sm" : "font-medium text-[16px] sm:text-lg"} mb-4 leading-[130%] line-clamp-2`}
                                >
                                    {truckCurrentLang?.truckType}
                                </p>
                                <h5
                                    className={`text-normal lg:text-[22px] font-medium mb-3 ${isLine ? "hidden" : "whitespace-nowrap max-[420px]:text-[14px] text-[20px] sm:text-sm md:text-lg lg:text-xl"}`}
                                >
                                    {truckCurrentLang?.price}
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
                                            <p>{truck.brand}</p>
                                        </div>

                                        <div className='flex justify-between text-gray-400 text-sm '>
                                            <p>
                                                {t(
                                                    "filteredPage.trucksInLine.capacityOfTruck",
                                                )}
                                            </p>
                                            <p className='border-b border-dotted  border-gray-400 flex-1 mb-1.75 '></p>
                                            <p>
                                                {Math.floor(
                                                    Math.random() * 100,
                                                )}
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
                                                {Math.floor(
                                                    Math.random() * 100,
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* isLine div */}
                            {isLine && truck.available && (
                                <div className=' flex flex-col items-center mt-4'>
                                    <div>
                                        <h5 className='max-[500px]text-[10px] whitespace-nowrap text-sm  md:text-lg xl:text-[22px] font-medium mb-3'>
                                            {truckCurrentLang?.price}
                                        </h5>
                                    </div>
                                    <div className='max-[665px]:w-full'>
                                        <Link
                                            to={`/catalog/${category}/${truck.id}`}
                                            className='inline-block max-[665px]:w-full  px-8 min-[1200px]:px-12! text-sm whitespace-nowrap bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none py-3.5 text-center mb-4.5'
                                        >
                                            {truckCurrentLang?.buttons.more}
                                        </Link>
                                    </div>
                                    <div>
                                        <Button
                                            onClick={() =>
                                                setModalFullOpen(() =>
                                                    setModalFullOpen(true),
                                                )
                                            }
                                            className='hidden md:flex gap-3 px-0 md:px-4 min-[1200px]:px-8! text-sm py-2 whitespace-nowrap bg-gray-200 transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none md:py-3.5 text-center mb-4.5'
                                        >
                                            {truckCurrentLang?.buttons.getPk}

                                            <DownloadIcon className='w-3 h-3.5' />
                                        </Button>
                                    </div>
                                </div>
                            )}
                            {/* isLine div */}

                            <div
                                className={`flex items-center gap-2 max-[768px]:flex-col max-[1024px]:flex-col max-[1036px]:flex-row max-[1250px]:flex-col max-[1250px]:gap-3 ${!truck.available ? "hidden" : ""} ${isLine ? "hidden" : ""}`}
                            >
                                <Link
                                    to={`/catalog/${category}/${truck.id}`}
                                    variant='btn_big'
                                    className='text-sm text-center max-[550px]:py-3 max-[550px]:px-1 px-2 whitespace-nowrap bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none py-4 w-full'
                                >
                                    {truckCurrentLang?.buttons.more}
                                </Link>

                                <div className='w-full flex items-center gap-2 max-[450px]:flex-col  max-[768px]:flex-row  max-[768px]:justify-center max-[1036px]:self-center max-[1250px]:self-start'>
                                    <div className='flex items-center gap-2'>
                                        <button>
                                            <KorzinkaIcon />
                                        </button>
                                        <button
                                            onClick={() => setLiked(truck.id)}
                                        >
                                            <IconHeartBgWhite
                                                className={`w-6 h-6 cursor-pointer ${liked === truck.id ? "text-[#fec400]" : "text-white"}`}
                                            />
                                        </button>
                                    </div>

                                    <div className='self-center md:self-start'>
                                        <button
                                            onClick={() =>
                                                setModalFullOpen(() =>
                                                    setModalFullOpen(true),
                                                )
                                            }
                                            className='flex gap-1.5 whitespace-nowrap text-[13px] text-gray-500 cursor-pointer'
                                        >
                                            {truckCurrentLang?.buttons.getPk}

                                            <DownloadIcon className='w-3 h-3.5 ' />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                            {isTable && !truck.available && (
                                <div className='flex items-center justify-center'>
                                    <Button
                                        onClick={() => setModalOpen(true)}
                                        className={`flex text-base items-center max-[400px]:text-[10px] max-[530px]:py-3 max-[530px]:text-sm justify-center gap-2 bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded-md leading-none py-4 whitespace-nowrap w-full px-3`}
                                    >
                                        {truckCurrentLang?.buttons?.iNeedThis}
                                        <IconMessage className='max-[1024px]:hidden shrink-0' />
                                    </Button>
                                </div>
                            )}

                            {isLine && !truck.available && (
                                <div className='flex items-center justify-center'>
                                    <button
                                        onClick={() => setModalOpen(true)}
                                        className={`flex items-center justify-center gap-2 py-2 bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded-md leading-none md:py-4 min-[1100px]:whitespace-nowrap w-full px-2`}
                                    >
                                        {t(
                                            "filteredPage.truckProducts.notificationButton",
                                        )}
                                        <IconMessage className='max-[1096px]:hidden' />
                                    </button>
                                </div>
                            )}

                            {modalOpen && !truck.available && (
                                <ModalIsAvailable
                                    open={modalOpen}
                                    onClose={() => {
                                        setModalOpen(false);
                                    }}
                                    truck={truck}
                                    truckCurrentLang={truckCurrentLang}
                                />
                            )}

                            {modalFullOpen && (
                                <ModalFull
                                    onClose={() => setModalFullOpen(false)}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Trucks;
