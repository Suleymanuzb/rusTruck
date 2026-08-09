import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
const { KorzinkaIcon } = icons;

const Korzinka = ({ to }) => {
    return (
        <>
            <Link to={to}>
                <KorzinkaIcon />
            </Link>
        </>
    );
};

export default Korzinka;
