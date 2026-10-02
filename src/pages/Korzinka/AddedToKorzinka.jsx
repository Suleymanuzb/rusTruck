import { useCartStore } from "../../store/cartStore";
import { useTranslation } from "react-i18next";
import { icons } from "../../assets/icons/icons";
const { DownloadIcon, DeleteIcon } = icons;
import Button from "../../components/Button/Button";
import trucks from "../../data/truckData";

import ModalFull from "./ModalFull";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddedCartToKorzina = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useCartStore((state) => state.cart);
    const { i18n, t } = useTranslation();
    const noCarts = cart.length === 0;

    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);

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
            {cart.map((cartItem, i) => {
                // console.log("cartItem", cartItem);

                const trucksInCart = trucks.find(
                    (each) => each.id === cartItem.id,
                );

                const categories = t("header.megaMenu.categories.types", {
                    returnObjects: true,
                });

                const foundCategories = categories.find(
                    (category) => category.id === trucksInCart?.categoryId,
                );
                console.log(foundCategories.slug);
                // console.log("truck:", trucksInCart);

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

                const currentPrice = product?.price;
                const isPriceAvailable =
                    currentPrice !== "Цена по запросу" &&
                    currentPrice !== "Price upon request" &&
                    currentPrice !== "Narx so‘rov bo‘yicha";

                return (
                    <div key={i}>
                        <div className='flex gap-0 sm:gap-4 lg:gap-7.5 shadow pr-4  max-[1024px]:h-34'>
                            <Link
                                to={`/catalog/${foundCategories.slug}/${trucksInCart.id}`}
                            >
                                <img
                                    src={trucksInCart.images.image}
                                    alt='truck'
                                    className='min-[400px]:min-w-40 w-75.25 h-full! object-cover'
                                />
                            </Link>

                            <div className='flex gap-7 justify-between w-full'>
                                <div className='flex max-[1200px]:p-4 max-[1200px]:flex-col w-full min-[1200px]:gap-15'>
                                    <div className='w-[75%]'>
                                        <Link
                                            to={`/catalog/${foundCategories.slug}/${trucksInCart.id}`}
                                            className='mb-3.5 lg:mb-8'
                                        >
                                            <h3 className='max-[400px]:text-[10px] text-[12px] md:text-base mt-1 sm:line-clamp-2 max-[768px]:mb-2'>
                                                {product?.truckType}
                                            </h3>
                                            {isPriceAvailable && (
                                                <h1 className='text-sm mb-1 font-medium md:hidden'>
                                                    {currentPrice}
                                                </h1>
                                            )}
                                        </Link>

                                        <div className='hidden lg:block'>
                                            {dimensionsValue && (
                                                <div className='flex max-[1200px]:gap-2 min-[1200px]:justify-between text-gray-400 text-sm '>
                                                    <p>
                                                        {t(
                                                            "filteredPage.trucksInLine.capacityOfTruck",
                                                        )}
                                                        :
                                                    </p>
                                                    <p className='border-b border-dotted  border-gray-400 min-[1200px]:flex-1 mb-1.75 '></p>
                                                    <p>{dimensionsValue}</p>
                                                </div>
                                            )}

                                            {mass && (
                                                <div className='flex max-[1200px]:gap-2 min-[1200px]:justify-between text-gray-400 text-sm '>
                                                    <p>
                                                        {t(
                                                            "filteredPage.trucksInLine.capacityOfLoad",
                                                        )}
                                                    </p>
                                                    <p className='border-b border-dotted  border-gray-400 min-[1200px]:flex-1 mb-1.5 '></p>
                                                    <p>{mass}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='self-center max-[1200px]:mt-1.5 max-[1200px]:self-start flex-1  min-[1200px]:mb-4 hidden md:block'>
                                        <div className='flex items-center rounded border border-[#ebebeb] w-20 lg:w-30'>
                                            <div
                                                onClick={() =>
                                                    removeFromCart(cartItem.id)
                                                }
                                                className='flex items-center justify-center max-[1024px]:w-6.25 max-[1024px]:h-6.25 w-9.25 h-9.25  py-1.25 px-1 transform duration-300 hover:bg-[#fec400] hover:rounded text-[#a2a2a2] text-xl cursor-pointer'
                                            >
                                                -
                                            </div>
                                            <div className='relative flex items-center justify-center max-[1024px]:w-6.25 max-[1024px]:h-6.25 w-9.25 h-9.25 py-1.25 px-1 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:border-l before:border-[#a2a2a2] after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-5 after:border-r after:border-[#a2a2a2]'>
                                                {cartItem.quantity}
                                            </div>
                                            <div
                                                onClick={() =>
                                                    increaseQuantity(
                                                        cartItem.id,
                                                    )
                                                }
                                                className='flex items-center justify-center max-[1024px]:w-6.25 max-[1024px]:h-6.25 w-9.25 h-9.25  py-1.25 px-1 transform duration-300 hover:bg-[#fec400] hover:rounded text-[#a2a2a2] text-xl cursor-pointer'
                                            >
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='md:flex flex-col items-center justify-center hidden'>
                                    {isPriceAvailable && (
                                        <h1 className='text-xl mb-1 font-medium hidden md:block'>
                                            {currentPrice}
                                        </h1>
                                    )}
                                    <Button
                                        onClick={() =>
                                            setIsOpen((prev) => !prev)
                                        }
                                        className='whitespace-nowrap bg-[#FEC80B] text-black hover:bg-[#FFD43A] active:bg-[#E9C135] px-5 lg:px-8 py-2 rounded flex items-center gap-1.5'
                                    >
                                        {product?.buttons?.getPk}
                                        <span>
                                            <DownloadIcon className='text-black mt-0.5' />
                                        </span>
                                    </Button>
                                    <p
                                        onClick={() =>
                                            removeFromCart(trucksInCart.id)
                                        }
                                        className='flex items-center gap-1.5 text-center mt-2 cursor-pointer! transition-all duration-300 hover:scale-110 active:scale-95'
                                    >
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

                        <div className='flex py-4 px-2  items-center md:hidden  justify-between'>
                            <div>
                                <div className='self-center max-[1200px]:mt-1.5 max-[1200px]:self-start flex-1  min-[1200px]:mb-4'>
                                    <div className='flex items-center rounded border border-[#ebebeb] w-30'>
                                        <div
                                            onClick={() =>
                                                removeFromCart(cartItem.id)
                                            }
                                            className='flex items-center justify-center h-6.25 w-9.25 h-9.25  py-1.25 px-1 transform duration-300 hover:bg-[#fec400] hover:rounded text-[#a2a2a2] text-xl cursor-pointer'
                                        >
                                            -
                                        </div>
                                        <div className='relative flex items-center justify-center h-6.25 w-9.25 h-9.25 py-1.25 px-1 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:border-l before:border-[#a2a2a2] after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-5 after:border-r after:border-[#a2a2a2]'>
                                            {cartItem.quantity}
                                        </div>
                                        <div
                                            onClick={() =>
                                                increaseQuantity(cartItem.id)
                                            }
                                            className='flex items-center justify-center h-6.25 w-9.25 h-9.25  py-1.25 px-1 transform duration-300 hover:bg-[#fec400] hover:rounded text-[#a2a2a2] text-xl cursor-pointer'
                                        >
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <Button
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    className='whitespace-nowrap max-[400px]:px-1.5 max-[400px]:py-1 max-[400px]:text-[12px] bg-[#FEC80B] text-black hover:bg-[#FFD43A] active:bg-[#E9C135] px-5 lg:px-8 py-2 rounded flex items-center gap-1.5'
                                >
                                    {product.buttons.getPk}
                                </Button>
                                <p
                                    onClick={() =>
                                        removeFromCart(trucksInCart.id)
                                    }
                                    className='flex items-center gap-1.5 text-center mt-2 cursor-pointer'
                                >
                                    <span>
                                        <DeleteIcon className='w-8 h-8 text-[#A2A2A2]' />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AddedCartToKorzina;
