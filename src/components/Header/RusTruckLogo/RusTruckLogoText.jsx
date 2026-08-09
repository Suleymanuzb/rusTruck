import { Link } from "react-router-dom";
import ru from "../../../data/translations/ru";
import { icons } from "../../../assets/icons/icons";
const { RusTruckLogo } = icons;

const currentLang = ru;

const RusTruckLogoText = ({ to }) => {
    return (
        <Link to={to} className='flex items-center gap-2.5'>
            <RusTruckLogo />
            <span className='max-w-48 leading-none text-[14px] relative ml-2 before:content-[" "] before:absolute before:w-0.5 before:h-7 before:bg-[#FEC80B] before:-left-3 '>
                {currentLang.header.production}
            </span>
        </Link>
    );
};

export default RusTruckLogoText;
