import { Link } from "react-router-dom";
import { icons } from "../../../assets/icons/icons";
const { RusTruckLogo } = icons;

const RusTruck = ({ to }) => {
    return (
        <Link to={to} className='hidden lg:flex items-center shrink-0'>
            <RusTruckLogo />
        </Link>
    );
};

export default RusTruck;
