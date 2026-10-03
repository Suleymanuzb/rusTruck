import { useSearchParams } from "react-router-dom";
import trucks from "../../data/truckData";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import { useFavouriteStore } from "../../store/favouritesStore";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Modal from "./Modal";
import { useCartStore } from "../../store/cartStore";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SimilarProducts from "./SimilarProdcts";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";
const { IconHeartBgWhite, IconHeart, KorzinkaIcon } = icons;
import NoItem from "../../assets/images/noCart/noItem.jpg";

const Search = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const categories = t("header.megaMenu.categories.types", {
        returnObjects: true,
    });

    const [isOpen, setIsopen] = useState(false);
    const [searchParams] = useSearchParams();

    // 2. Grab whatever is stored after "?query="
    const query = searchParams.get("query") || "";
    console.log("The user searched for:", query); //

    const filteredTrucks = trucks.filter((truck) => {
        const localizedData = truck[currentLang] || truck.ru;

        const matchesTruckType = localizedData.truckType
            .toLowerCase()
            .includes(query.toLowerCase());

        const matchesBrand = truck.brand
            .toLowerCase()
            .includes(query.toLowerCase());

        const matchesCategory = localizedData.category
            .toLowerCase()
            .includes(query.toLowerCase());

        return matchesTruckType || matchesBrand || matchesCategory;
    });

    const { favourites, addToFavourites } = useFavouriteStore();
    const { addToCart } = useCartStore();
    return (
        <div>
            <Container>
                <Breadcrumbs />
                <div className='mb-4 md:mb-8'>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>
                        {t("search.title")}: <span>«{query}»</span>{" "}
                        <span>{filteredTrucks.length}</span>
                    </h1>
                </div>

                <div className='flex items-center justify-center'>
                    {filteredTrucks.length === 0 ? (
                        <div className='w-100 h-100 my-10'>
                            <img
                                className='w-full h-full object-cover'
                                src={NoItem}
                                alt='no cart'
                            />
                        </div>
                    ) : (
                        <div>
                            {
                                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                                    {filteredTrucks.map((truck, i) => {
                                        const currentLanguage = i18n.language;

                                        const category = categories.find(
                                            (item) =>
                                                item.id === truck.categoryId,
                                        );

                                        const isLiked = favourites.some(
                                            (apple) => apple.id === truck.id,
                                        );

                                        return (
                                            <div
                                                key={i}
                                                className='relative h-full'
                                            >
                                                <div className='relative'>
                                                    <Link
                                                        to={`/catalog/${category.slug}/${truck.id}`}
                                                    >
                                                        <img
                                                            className='w-full block aspect-12/10 object-cover rounded-t-sm'
                                                            src={
                                                                truck.images
                                                                    .image
                                                            }
                                                        />
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
                                                                    className='w-6 h-6 cursor-pointer transition-all duration-150 hover:scale-110 active:scale-90'
                                                                />
                                                            ) : (
                                                                <IconHeartBgWhite
                                                                    heartColor='transparent'
                                                                    className='w-6 h-6 cursor-pointer transition-all duration-150 hover:scale-110 active:scale-90'
                                                                />
                                                            )}
                                                        </button>
                                                    </div>

                                                    <div className='hidden md:absolute top-[1.5%] right-[2%]'>
                                                        <span className='text-transparent hover:text-[#fec80b] cursor-pointer'>
                                                            <IconHeart />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='bg-white px-0.5 py-2 min-[500px]:px-3 sm:py-4'>
                                                    <div>
                                                        <Link
                                                            to={`/catalog/${category.slug}/${truck.id}`}
                                                            className='md:text-center xl:text-start mb-4 line-clamp-2 text-[14px] min-[1200px]:text-lg w-full'
                                                        >
                                                            {
                                                                truck[
                                                                    currentLanguage
                                                                ]?.truckType
                                                            }
                                                        </Link>
                                                        <p className='text-center md:text-start font-medium leading-[1.18] mb-3 md:text-xl'>
                                                            {
                                                                truck[
                                                                    currentLanguage
                                                                ]?.price
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className='max-[1360px]:flex max-[1360px]:items-center max-[1360px]:flex-col min-[1360px]:flex min-[1360px]:items-center min-[1360px]:gap-3'>
                                                        <Link
                                                            to={`/catalog/${category.slug}/${truck.id}`}
                                                            variant='btn_big'
                                                            className='w-full max-[1360px]:mb-3 py-2.5 font-normal text-sm bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none md:py-4 text-center px-4'
                                                        >
                                                            {
                                                                truck?.[
                                                                    currentLanguage
                                                                ]?.buttons?.more
                                                            }
                                                        </Link>
                                                        <div className='flex items-center gap-2 '>
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
                                                        <Button
                                                            onClick={() =>
                                                                setIsopen(true)
                                                            }
                                                            className='hidden md:flex gap-2.5 cursor-pointer   whitespace-nowrap transition-all duration-300  active:scale-80 mt-2'
                                                            variant='getKp'
                                                            arrowDown='true'
                                                        >
                                                            {
                                                                truck[
                                                                    currentLanguage
                                                                ]?.buttons.getPk
                                                            }
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* modal */}
                                    {isOpen && (
                                        <Modal
                                            onClose={() => setIsopen(false)}
                                        />
                                    )}
                                </div>
                            }
                        </div>
                    )}
                </div>

                {filteredTrucks.length >= 1 && (
                    <div>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium mb-6 mt-1.5'>
                            {t("newsPage.similarTrucks.title")}
                        </h1>
                        <SimilarProducts similarTrucks={filteredTrucks} />
                    </div>
                )}
            </Container>

            <AnyQuestions />
        </div>
    );
};
export default Search;
