import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
const { FavIcon } = icons;
import { useFavouriteStore } from "../../store/favouritesStore";

const Favourites = ({ to }) => {
    const favourites = useFavouriteStore((state) => state.favourites);

    return (
        <>
            <Link className='relative' to={to}>
                <FavIcon />

                <div className='absolute bottom-0.5 -right-2.5 bg-[#fec400] rounded-lg w-6 h-3.5 flex items-center justify-center text-[10px]'>
                    {favourites.length}
                </div>
            </Link>
        </>
    );
};

export default Favourites;
