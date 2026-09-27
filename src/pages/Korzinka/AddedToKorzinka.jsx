import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import { useTranslation } from "react-i18next";
import { icons } from "../../assets/icons/icons";
const { DownloadIcon, DeleteIcon } = icons;
import Button from "../../components/Button/Button";
import trucks from "../../data/truckData";

import ModalFull from "./ModalFull";
import { Link } from "react-router-dom";

const AddedCartToKorzina = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useCartStore((state) => state.cart);
    const { i18n, t } = useTranslation();
    const noCarts = cart.length === 0;

    return noCarts ? (
        <div>
            <p
                className='text-2xl mb-14'
                dangerouslySetInnerHTML={{
                    __html: t("korzinka.empty"),
                }}
            ></p>

            <div className='flex items-center gap-4'>
                <Link
                    to={"/"}
                    className='bg-transparent border-2 hover:bg-[#FFD43A] border-[#FEC80B] hover:bg-[#FFD43A] text-black active:bg-[#E9C135] rounded-md leading-none px-10 py-2.5'
                >
                    {t("korzinka.toHome")}
                </Link>
                <Link
                    to={"/catalog"}
                    className='bg-[#FEC80B] text-black hover:bg-[#FFD43A] active:bg-[#E9C135] px-10 py-2 rounded'
                >
                    {t("korzinka.toCatalog")}
                </Link>
            </div>
        </div>
    ) : (
        <div className='flex flex-col gap-6'>
            {cart.map((truckId) => {
                const trucksInCart = trucks.find((each) => each.id === truckId);

                const product = trucksInCart?.[i18n.language];

                const truckInfo = product?.specifications.truckInfo;
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

                const currentPrice = product.price;
                const isPriceAvailable =
                    currentPrice !== "Цена по запросу" &&
                    currentPrice !== "Price upon request" &&
                    currentPrice !== "Narx so‘rov bo‘yicha";

                return (
                    <div className='flex gap-7.5 shadow pr-4' key={truckId}>
                        <div>
                            <img
                                src={trucksInCart.images.image}
                                alt='truck'
                                className='w-62.25 h-35 object-cover'
                            />
                        </div>

                        <div className='flex gap-7 justify-between w-full'>
                            <div className='flex gap-15 w-full'>
                                <div className='w-[75%]'>
                                    <div className='mb-8'>
                                        <h3 className='text-base mt-1'>
                                            {product.truckType}
                                        </h3>
                                    </div>

                                    <div>
                                        {dimensionsValue && (
                                            <div className='flex justify-between text-gray-400 text-sm '>
                                                <p>
                                                    {t(
                                                        "filteredPage.trucksInLine.capacityOfTruck",
                                                    )}
                                                    :
                                                </p>
                                                <p className='border-b border-dotted  border-gray-400 flex-1 mb-1.75 '></p>
                                                <p>{dimensionsValue}</p>
                                            </div>
                                        )}

                                        {mass && (
                                            <div className='flex justify-between text-gray-400 text-sm '>
                                                <p>
                                                    {t(
                                                        "filteredPage.trucksInLine.capacityOfLoad",
                                                    )}
                                                </p>
                                                <p className='border-b border-dotted  border-gray-400 flex-1 mb-1.5 '></p>
                                                <p>{mass}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='self-center  flex-1'>
                                    <div className='flex items-center rounded border border-[#ebebeb] w-30'>
                                        <div className='flex items-center justify-center w-9.25 h-9.25  py-1.25 px-1 transform duration-300 hover:bg-[#fec400] hover:rounded text-[#a2a2a2] text-xl cursor-pointer'>
                                            -
                                        </div>
                                        <div className='relative flex items-center justify-center w-9.25 h-9.25 py-1.25 px-1 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:border-l before:border-[#a2a2a2] after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-5 after:border-r after:border-[#a2a2a2]'>
                                            5
                                        </div>
                                        <div className='flex items-center justify-center w-9.25 h-9.25  py-1.25 px-1 transform duration-300 hover:bg-[#fec400] hover:rounded text-[#a2a2a2] text-xl cursor-pointer'>
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                {isPriceAvailable && (
                                    <h1 className='text-xl mb-1 font-medium'>
                                        {currentPrice}
                                    </h1>
                                )}
                                <Button
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    variant='btn_big_more'
                                    className='flex cursor-pointer gap-2 whitespace-nowrap '
                                >
                                    {product.buttons.getPk}
                                    <span>
                                        <DownloadIcon className='text-black mt-0.5' />
                                    </span>
                                </Button>
                                <p className='flex items-center gap-1.5 text-center mt-2 cursor-pointer'>
                                    {t("korzinka.delete")}{" "}
                                    <span>
                                        <DeleteIcon />
                                    </span>
                                </p>
                            </div>
                        </div>

                        {isOpen && (
                            <ModalFull onClose={() => setIsOpen(!isOpen)} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default AddedCartToKorzina;
