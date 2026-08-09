import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
const { FavIcon } = icons;

const Favourites = ({ to }) => {
    return (
        <>
            <Link to={to}>
                <FavIcon />
            </Link>
        </>
    );
};

export default Favourites;
