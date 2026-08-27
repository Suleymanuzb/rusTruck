import { useTranslation } from "react-i18next";
import { icons } from "../../assets/icons/icons";
const { PhoneIcon } = icons;

const PhoneCall = () => {
    const { t } = useTranslation();

    return (
        <div className='flex items-center gap-6'>
            <div className='hidden md:flex flex-col text-[#A1A1A1]'>
                <span className='min-[1140px]:ml-7 whitespace-nowrap'>
                    {t("header.forStates")}
                    <a href='tel:88005110525'>{t("header.numberForStates")}</a>
                </span>
                <span className='whitespace-nowrap'>
                    {t("header.forLocals")}
                    <a href='tel:88005110525'>{t("header.numberFotLocals")}</a>
                </span>
            </div>

            {/*phone icon  */}
            <button
                type='button'
                className='w-10 h-10 md:w-[3.7rem]
        md:h-[3.7rem]
        p-0
        cursor-pointer
        border-0
        bg-[#fec80b]
        transition-all
        duration-300
        ease-in-out
        outline-none
        rounded-full
        appearance-none
        flex
        items-center
        justify-center
        overflow-hidden
        uppercase'
            >
                <PhoneIcon className='w-4! h-4! md:w-6! md:h-6!' />
            </button>
        </div>
    );
};

export default PhoneCall;
