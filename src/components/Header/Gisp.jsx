import ru from "../../data/translations/ru";
import { icons } from "../../assets/icons/icons";
const { GispIcon } = icons;
const currentLang = ru;

const Gisp = () => {
    return (
        <div className='flex items-center gap-1.5 leading-none'>
            <div className='w-6'>
                <GispIcon className='w-full h-full' />
            </div>
            <div className='max-w-8.75 text-[7px] font-bold'>
                <span>{currentLang.header.gispText}</span>
            </div>
        </div>
    );
};

export default Gisp;
