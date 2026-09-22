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
            className={`gap-5 ${isLine ? "grid grid-cols-1" : "grid grid-cols-3"}`}
        >
            {matchingTrucks.map((truck) => {
                const truckCurrentLang = truck?.[i18n.language];

                return (
                    <div
                        key={truck.id}
                        className={`bg-white w-auto ${isLine ? "col-span-1 flex gap-4 items-center" : ""}`}
                    >
                        <div className={`relative`}>
                            <Link
                                className='bg-black'
                                to={`/catalog/${category}/${truck.id}`}
                            >
                                <div
                                    className={`${isLine ? "w-62 h-65 relative" : "w-full h-full"}`}
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

                        <div
                            className={`mb-10 px-3 py-4 ${isLine ? "flex w-full justify-between " : ""}`}
                        >
                            <div>
                                <p
                                    className={`${isLine ? "text-sm" : "text-lg"} mb-4 leading-[130%] line-clamp-2`}
                                >
                                    {truckCurrentLang?.truckType}
                                </p>
                                <h5
                                    className={`text-[22px] font-medium mb-3 ${isLine ? "hidden" : ""}`}
                                >
                                    {truckCurrentLang?.price}
                                </h5>

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
                                <div className='flex flex-col items-center mt-4'>
                                    <div>
                                        <h5 className='text-[22px] font-medium mb-3'>
                                            {truckCurrentLang?.price}
                                        </h5>
                                    </div>
                                    <div className=' w-full'>
                                        <Link
                                            to={`/catalog/${category}/${truck.id}`}
                                            variant='btn_big'
                                            className=' block text-sm px-4! whitespace-nowrap bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none  md:py-3.5 text-center mb-4.5'
                                        >
                                            {truckCurrentLang?.buttons.more}
                                        </Link>
                                    </div>
                                    <div>
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
                            )}
                            {/* isLine div */}

                            <div
                                className={`flex items-center gap-2 ${!truck.available ? "hidden" : ""} ${isLine ? "hidden" : ""}`}
                            >
                                <Link
                                    to={`/catalog/${category}/${truck.id}`}
                                    variant='btn_big'
                                    className='text-sm px-4! whitespace-nowrap bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded-md leading-none md:px-8 md:py-4'
                                >
                                    {truckCurrentLang?.buttons.more}
                                </Link>

                                <button>
                                    <KorzinkaIcon />
                                </button>
                                <button onClick={() => setLiked(truck.id)}>
                                    <IconHeartBgWhite
                                        className={`w-6 h-6 cursor-pointer ${liked === truck.id ? "text-[#fec400]" : "text-white"}`}
                                    />
                                </button>

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

                            {!truck.available && (
                                <div className='flex items-center justify-center'>
                                    <button
                                        onClick={() => setModalOpen(true)}
                                        className={`flex items-center justify-center gap-2 bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded-md leading-none md:py-4 whitespace-nowrap w-full`}
                                    >
                                        {truckCurrentLang?.buttons?.iNeedThis}
                                        <IconMessage className='max-[1024px]:hidden shrink-0' />
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
