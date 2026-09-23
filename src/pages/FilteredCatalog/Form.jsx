import { useTranslation } from "react-i18next";
import { icons } from "../../assets/icons/icons";
const { SearchIcon, CheckIcon } = icons;
import Button from "../../components/Button/Button";

const Form = ({ selectedCategory }) => {
    const { t } = useTranslation();

    return (
        <form className='hidden lg:block bg-white py-5 px-4 overflow-y-auto max-h-160 top-25 sticky'>
            <p className='mb-4 font-medium leading-[1.1]'>
                {selectedCategory.brandsOfTrucks.title}
            </p>
            <div className='relative'>
                <input
                    type='text'
                    className='outline-none border border-[#a2a2a2] rounded focus:border-[#fec80b] focus:shadow-[0_0_4px_#fec80b] transform duration-300 placeholder:text-gray-400 py-2 pl-3 pr-10 w-full'
                    placeholder='Найти'
                />
                <span className='absolute right-[4%] top-[15%]'>
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
                                <div key={i} className='flex flex-col p-1'>
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
    );
};

export default Form;
