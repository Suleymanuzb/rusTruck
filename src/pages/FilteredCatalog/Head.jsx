import { useTranslation } from "react-i18next";
import { icons } from "../../assets/icons/icons";
const { IconLine, IconTable, SettingsIcon } = icons;
import SortDown from "./SortDown";

const Head = ({
    matchingTrucks,
    selectedCategory,
    handleLine,
    handleTable,
    setIsFilter,
    isLine,
    isTable,
}) => {
    const { t } = useTranslation();

    return (
        <div className='flex justify-between flex-col lg:flex-row lg:items-center mb-5'>
            <div className='flex flex-col gap-1 md:flex-row md:items-center md:gap-6 '>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-medium'>
                    {selectedCategory.name}
                </h1>

                <span>
                    {matchingTrucks.length}
                    <span className='ml-1'>
                        {matchingTrucks.length === 1
                            ? t("header.megaMenu.categories.products.product")
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
    );
};

export default Head;
