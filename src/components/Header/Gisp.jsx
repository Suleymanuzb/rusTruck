import { icons } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
const { GispIcon } = icons;

const Gisp = () => {
    const { t } = useTranslation();

    return (
        <div className='hidden min-[420px]:flex items-center gap-1.5 leading-none pr-5 pl-3  lg:pl-0'>
            <div className='w-6'>
                <GispIcon className='w-full h-full' />
            </div>
            <div className='max-w-8.75 text-[7px] font-bold'>
                <span>{t("header.gispText")}</span>
            </div>
        </div>
    );
};

export default Gisp;
