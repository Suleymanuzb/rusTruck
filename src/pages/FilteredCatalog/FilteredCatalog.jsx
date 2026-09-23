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
const { IconLine, IconTable, SearchIcon } = icons;

const FilteredCatalog = () => {
    const [isLine, setIsLine] = useState(false);
    const [isTable, setIsTable] = useState(true);

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
        <div className='bg-gray-100'>
            <Container>
                <Breadcrumbs />

                <div className='flex justify-between flex-col lg:flex-row lg:items-center mb-5'>
                    <div className='flex items-center gap-6 '>
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

                    <div className='flex items-center justify-between'>
                        <div className=''>sort</div>

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

                <div className='grid lg:grid-cols-[300px_1fr]   gap-6'>
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
        </div>
    );
};

export default FilteredCatalog;
