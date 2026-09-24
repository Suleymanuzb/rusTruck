import Container from "../../components/Container/Container";
import trucks from "../../data/truckData";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Trucks from "./Trucks";
import { icons } from "../../assets/icons/icons";
import SortDown from "./SortDown";
import { useState } from "react";
import Form from "./Form";
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

    return (
        <div className='bg-gray-100 relative'>
            <Container>
                <Breadcrumbs />

                <div className='flex justify-between flex-col lg:flex-row lg:items-center mb-5'>
                    <div className='flex flex-col gap-1 md:flex-row md:items-center md:gap-6 '>
                        <h1 className='text-3xl font-medium'>
                            {selectedCategory.name}
                        </h1>

                        <span>
                            {matchingTrucks.length}
                            <span className='ml-1'>
                                {matchingTrucks.length === 1
                                    ? t(
                                          "header.megaMenu.categories.products.product",
                                      )
                                    : matchingTrucks.length >= 2 &&
                                        matchingTrucks.length <= 4
                                      ? t(
                                            "header.megaMenu.categories.products.producta",
                                        )
                                      : t(
                                            "header.megaMenu.categories.products.products",
                                        )}
                            </span>
                        </span>
                    </div>

                    <div className='flex items-center justify-between relative'>
                        <div
                            onClick={() => setIsFilter((prev) => !prev)}
                            className='flex border w-7.5 h-7.5 rounded bg-black  items-center justify-center lg:hidden'
                        >
                            <SettingsIcon />
                        </div>

                        <div className=' flex items-centers gap-3 lg:gap-40 self-end'>
                            <SortDown />

                            <div className='flex gap-1 items-center'>
                                <div
                                    onClick={handleLine}
                                    className={`p-2 rounded-full ${isLine ? "bg-[#fec400]" : ""}`}
                                >
                                    <span
                                        className={`hover:text-black text-[#A2A2A2] transform duration-300 cursor-pointer ${isLine ? "text-black" : "text-[#A2A2A2]"}`}
                                    >
                                        <IconLine />
                                    </span>
                                </div>

                                <div
                                    onClick={handleTable}
                                    className={`p-2 rounded-full ${isTable ? "bg-[#fec400]" : "bg-none"}`}
                                >
                                    <span>
                                        <IconTable
                                            className={`hover:text-black text-[#A2A2A2] transform duration-300 cursor-pointer ${isTable ? "text-black" : ""}`}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                className={`absolute -top-31.5 flex flex-col h-screen bg-white transition-transform duration-500 z-999 w-full ${isFilter ? "translate-x-0" : "-translate-x-full"}`}
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

                    <p className='mb-4 font-medium leading-[1.1]'>
                        {selectedCategory.brandsOfTrucks.title}
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
                        {selectedCategory.brandsOfTrucks.brands.map((item) => {
                            return (
                                <div key={item} className='flex flex-col p-1'>
                                    <label className='flex items-center cursor-pointer gap-3'>
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
                        })}
                    </div>

                    <div className='mb-8'>
                        <h1 className='text-lg font-medium mb-4'>
                            {selectedCategory.GrossLoad.title}
                        </h1>

                        <div>
                            {selectedCategory.GrossLoad.grossCapacities.map(
                                (item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='flex flex-col p-1'
                                        >
                                            <label className='flex items-center cursor-pointer gap-3'>
                                                <div className='relative flex items-center'>
                                                    <input
                                                        className='peer outline-none appearance-none rounded-xs w-6 h-6 border border-gray-400  checked:border-none checked:bg-black  cursor-pointer'
                                                        type='checkbox'
                                                    />
                                                    <CheckIcon className='absolute hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none w-6 h-6' />
                                                </div>
                                                <span>{item.cap}</span>
                                            </label>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>

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
