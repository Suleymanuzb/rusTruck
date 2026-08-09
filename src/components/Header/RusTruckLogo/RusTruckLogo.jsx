import { Link } from "react-router-dom";
import { icons } from "../../../assets/icons/icons";
const { RusTruckLogo } = icons;

const RusTruck = ({ to }) => {
    return (
        <Link to={to}>
            <RusTruckLogo />
        </Link>
    );
};

export default RusTruck;
