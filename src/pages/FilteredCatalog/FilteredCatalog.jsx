import Container from "../../components/Container/Container";
import trucks from "../../data/truckData";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Trucks from "./Trucks";
import { icons } from "../../assets/icons/icons";
const { IconLine, IconTable, SearchIcon } = icons;

const FilteredCatalog = () => {
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
    console.log("MMMM", matchingTrucks);

    return (
        <div className='bg-gray-100'>
            <Container>
                <Breadcrumbs />
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-6 '>
                        {/* how many */}
                    </div>

                    <div className='flex items-centers gap-40'>
                        {/* <p>Сортировка: По бренду</p> */}

                        <div className='flex gap-4 items-center'>
                            <span className='hover:text-black text-[#A2A2A2] transform duration-300'>
                                <IconLine />
                            </span>
                            <span>
                                <IconTable className='hover:text-black text-[#A2A2A2] transform duration-300' />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-[300px_1fr] gap-6'>
                    <form className='bg-white py-5 px-6 overflow-y-auto border max-h-120'>
                        <p className='mb-4 font-medium leading-[1.1]'>Марка</p>

                        <div className='relative'>
                            <input
                                type='text'
                                className='outline-none border border-[#a2a2a2] rounded focus:border-[#fec80b] focus:shadow-[0_0_4px_#fec80b] transform duration-300 placeholder:text-gray-400 py-2 pl-3 pr-10'
                                placeholder='Найти'
                            />
                            <span className='absolute right-[15%] top-[15%]'>
                                <SearchIcon />
                            </span>
                        </div>

                        <div className='mt-6 pt-2.5 flex flex-col'>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                        </div>
                    </form>

                    {/*Trucks Part  */}
                    <Trucks
                        matchingTrucks={matchingTrucks}
                        i18n={i18n}
                        category={category}
                    />
                    {/*Trucks Part  */}
                </div>
            </Container>
        </div>
    );
};

export default FilteredCatalog;
