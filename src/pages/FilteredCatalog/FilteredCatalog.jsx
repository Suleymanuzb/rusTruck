import Container from "../../components/Container/Container";
import trucks from "../../data/truckData";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Trucks from "./Trucks";
import { icons } from "../../assets/icons/icons";
import { useEffect, useState } from "react";
import Form from "./Form";
import Head from "./Head";

const {
    IconLine,
    IconTable,
    SearchIcon,
    SettingsIcon,
    CheckIcon,
    IconClose,
    RefreshIcon,
} = icons;
import Button from "../../components/Button/Button";
import LiftingCapacity from "./Ranges/LiftingCapacity";
import PriceRange from "./Ranges/PriceRange";
import TankCapacity from "./Ranges/TankCapacity";

const FilteredCatalog = () => {
    const [isLine, setIsLine] = useState(false);
    const [isTable, setIsTable] = useState(true);
    const [isFilter, setIsFilter] = useState(false);

    const handleTable = () => {
        setIsTable(true);
        setIsLine(false);
    };

    const handleLine = () => {
        setIsTable(false);
        setIsLine(true);
    };

    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const { category } = useParams();

    const categories = t("header.megaMenu.categories.types", {
        returnObjects: true,
    });
    const selectedCategory = categories.find((item) => item.slug === category);

    const matchingTrucks = trucks.filter(
        (truck) => truck.categoryId === selectedCategory?.id,
    );

    useEffect(() => {
        if (isFilter) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isFilter]);

    return (
        <div className='bg-gray-100 relative pb-40'>
            <Container>
                <Breadcrumbs />

                {/* Category SORT TABLE LINE */}
                <Head
                    matchingTrucks={matchingTrucks}
                    selectedCategory={selectedCategory}
                    handleTable={handleTable}
                    handleLine={handleLine}
                    setIsFilter={setIsFilter}
                    isLine={isLine}
                    isTable={isTable}
                />

                {/* LEFT RIGHT */}
                <div className='grid lg:grid-cols-[300px_1fr] gap-6'>
                    <Form selectedCategory={selectedCategory} />

                    {/*Trucks Part  */}
                    <div className='flex flex-col gap-5'>
                        <Trucks
                            matchingTrucks={matchingTrucks}
                            i18n={i18n}
                            category={category}
                            isLine={isLine}
                            isTable={isTable}
                        />

                        <div>
                            <div
                                className='catalog__bottom-seo-text'
                                dangerouslySetInnerHTML={{
                                    __html: selectedCategory?.seoText || "",
                                }}
                            ></div>
                        </div>
                    </div>
                    {/*Trucks Part  */}
                </div>
            </Container>

            <div
                className={`fixed top-0 flex flex-col h-dvh  bg-white transition-transform duration-500 z-999 w-full ${isFilter ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className='shrink-0 flex items-center justify-between bg-black text-white py-4.5 pl-6 pr-2'>
                    <div>{t("filteredPage.filterResponsive.title")}</div>
                    <div onClick={() => setIsFilter((prev) => !prev)}>
                        <IconClose className='w-8 h-8 cursor-pointer' />
                    </div>
                </div>

                <form className='bg-white py-5 px-4 overflow-y-auto flex-1 min-h-0'>
                    <div className='mb-7.75 flex items-center gap-2'>
                        <span>
                            <RefreshIcon className='w-7 h-7' />
                        </span>

                        <span className='opacity-30'>
                            {t("filteredPage.filterResponsive.reset")}
                        </span>
                    </div>

                    {/* price range */}
                    {selectedCategory.id === 3 && (
                        <PriceRange selectedCategory={selectedCategory} />
                    )}

                    <p className='mb-4 font-medium leading-[1.1]'>
                        {selectedCategory?.brandsOfTrucks?.title}
                    </p>
                    <div className='relative'>
                        <input
                            type='text'
                            className='outline-none border border-[#a2a2a2] rounded focus:border-[#fec80b] focus:shadow-[0_0_4px_#fec80b] transform duration-300 placeholder:text-gray-400 py-2 pl-3 pr-10 w-full'
                            placeholder='Найти'
                        />
                        <span className='absolute right-[1%] top-[15%]'>
                            <SearchIcon />
                        </span>
                    </div>

                    <div className='mt-6 mb-8'>
                        {selectedCategory?.brandsOfTrucks?.brands.map(
                            (item) => {
                                return (
                                    <div
                                        key={item}
                                        className='flex flex-col p-1'
                                    >
                                        <label className='flex items-center cursor-pointer gap-2'>
                                            <div className='relative flex items-center'>
                                                <input
                                                    className='peer outline-none appearance-none rounded-xs w-6 h-6 border border-gray-400  checked:border-none checked:bg-black  cursor-pointer'
                                                    type='checkbox'
                                                />
                                                <CheckIcon className='absolute hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6' />
                                            </div>
                                            <span>{item}</span>
                                        </label>
                                    </div>
                                );
                            },
                        )}
                    </div>

                    {/* Тип бортовой платформы */}
                    {selectedCategory?.typesOfFlatbedPlatforms && (
                        <div className='mb-8'>
                            <h1 className='text-lg font-medium mb-2'>
                                {selectedCategory.typesOfFlatbedPlatforms.title}
                            </h1>

                            {selectedCategory?.typesOfFlatbedPlatforms?.flatbeds.map(
                                (item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='flex flex-col p-1'
                                        >
                                            <label className='flex items-center cursor-pointer gap-2'>
                                                <div className='relative flex items-center'>
                                                    <input
                                                        className='peer outline-none appearance-none rounded-xs w-6 h-6 border border-gray-400  checked:border-none checked:bg-black  cursor-pointer'
                                                        type='checkbox'
                                                    />
                                                    <CheckIcon className='absolute hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6' />
                                                </div>
                                                <span>{item.flatbed}</span>
                                            </label>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    )}

                    {selectedCategory.WheelFormula && (
                        <div className='mb-8'>
                            <h1 className='text-lg font-medium mb-2'>
                                {selectedCategory?.WheelFormula.title}
                            </h1>

                            {selectedCategory?.WheelFormula.wheelFormulaSizes.map(
                                (item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='flex flex-col p-1'
                                        >
                                            <label className='flex items-center cursor-pointer gap-2'>
                                                <div className='relative flex items-center'>
                                                    <input
                                                        className='peer outline-none appearance-none rounded-xs w-6 h-6 border border-gray-400  checked:border-none checked:bg-black  cursor-pointer'
                                                        type='checkbox'
                                                    />
                                                    <CheckIcon className='absolute hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6' />
                                                </div>
                                                <span>{item.size}</span>
                                            </label>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    )}

                    <div className='mb-8'>
                        <h1 className='text-lg font-medium mb-4'>
                            {selectedCategory?.GrossLoad?.title}
                        </h1>

                        <div>
                            {selectedCategory?.GrossLoad?.grossCapacities?.map(
                                (item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='flex flex-col p-1'
                                        >
                                            <label className='flex items-center cursor-pointer gap-2'>
                                                <div className='relative flex items-center'>
                                                    <input
                                                        className='peer outline-none appearance-none rounded-xs w-6 h-6 border border-gray-400  checked:border-none checked:bg-black  cursor-pointer'
                                                        type='checkbox'
                                                    />
                                                    <CheckIcon className='absolute hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6' />
                                                </div>
                                                <span>{item?.cap}</span>
                                            </label>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>

                    {/* lengthOfPlatform */}
                    <div className='mb-8'>
                        <h1 className='text-lg font-medium mb-2'>
                            {selectedCategory?.lengthOfPlatform?.title}
                        </h1>

                        <div>
                            {selectedCategory?.lengthOfPlatform?.lengths.map(
                                (item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='flex flex-col p-1'
                                        >
                                            <label className='flex items-center cursor-pointer gap-2'>
                                                <div className='relative flex items-center'>
                                                    <input
                                                        className='peer outline-none appearance-none rounded-xs w-6 h-6 border border-gray-400  checked:border-none checked:bg-black  cursor-pointer'
                                                        type='checkbox'
                                                    />
                                                    <CheckIcon className='absolute hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6' />
                                                </div>
                                                <span>{item.option}</span>
                                            </label>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>

                    <div className='mb-8'>
                        {selectedCategory?.typesOfTanks?.tanks?.map(
                            (item, i) => {
                                return (
                                    <div key={i} className='flex flex-col p-1'>
                                        <label className='flex items-center cursor-pointer gap-2'>
                                            <div className='relative flex items-center'>
                                                <input
                                                    className='peer outline-none appearance-none rounded-xs w-6 h-6 border border-gray-400  checked:border-none checked:bg-black  cursor-pointer'
                                                    type='checkbox'
                                                />
                                                <CheckIcon className='absolute hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6' />
                                            </div>
                                            <span>{item.tank}</span>
                                        </label>
                                    </div>
                                );
                            },
                        )}
                    </div>

                    {selectedCategory.id === 2 ||
                        (selectedCategory.id === 11 && (
                            <LiftingCapacity
                                selectedCategory={selectedCategory}
                            />
                        ))}

                    {/* Tank Capacity */}
                    {selectedCategory.TankCapacity && (
                        <TankCapacity selectedCategory={selectedCategory} />
                    )}

                    <div>
                        <Button
                            type='button'
                            variant='btn_big'
                            className='w-full py-3! text-normal outline-none'
                        >
                            {t("filteredPage.filterSideBar.showMore")}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FilteredCatalog;
