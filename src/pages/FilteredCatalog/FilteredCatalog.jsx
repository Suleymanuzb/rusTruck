import Container from "../../components/Container/Container";
import { icons } from "../../assets/icons/icons";
import { useParams, Link } from "react-router-dom";
import trucks from "../../data/truckData";
const { IconLine, IconTable, SearchIcon } = icons;

const FilteredCatalog = ({ currentLang }) => {
    const language = currentLang.ru;

    const { category } = useParams();

    const categories = currentLang.header.megaMenu.categories.types;
    console.log(categories);

    const selectedCategory = categories.find((item) => item.slug === category);
    console.log(selectedCategory);

    const matchingTrucks = trucks.filter(
        (truck) => truck.categoryId === selectedCategory.id,
    );
    console.log(matchingTrucks);

    return (
        <div className='bg-gray-100'>
            <Container>
                <div className='mb-6'>
                    <p className='text-gray-400'>
                        Главная Каталог Автомобили ДОПОГ категория EXII
                    </p>
                </div>

                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-6 '>
                        <h1 className='text-3xl font-medium'>
                            Автомобили ДОПОГ категория EXII
                        </h1>
                        <span className='text-gray-400'>4 товара</span>
                    </div>

                    <div className='flex items-centers gap-40'>
                        <p>Сортировка: По бренду</p>

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
                            <span className='absolute right-[5.5%] top-[15%]'>
                                <SearchIcon />
                            </span>
                        </div>

                        <div className='mt-6 pt-2.5 flex flex-col'>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                            <label className='relative inline-flex items-center cursor-pointer text-sm'>
                                <input type='checkbox' />
                                <span className='ml-2'>Gaz</span>
                            </label>
                        </div>
                    </form>

                    <div className='grid grid-cols-3 gap-5'>
                        {matchingTrucks.map((truck) => {
                            return (
                                <div key={truck.id} className='bg-white'>
                                    <Link className="">
                                        <img
                                            src={truck.images.image}
                                            alt=''
                                            className='aspect-9/7.5 object-cover'
                                        />
                                    </Link>
                                    <div>
                                        <p>text</p>
                                        <p>another Text</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FilteredCatalog;
