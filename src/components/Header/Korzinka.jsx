import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
import { useCartStore } from "../../store/cartStore";
const { KorzinkaIcon } = icons;

const Korzinka = ({ to }) => {
    const cart = useCartStore((state) => state.cart);

    return (
        <>
            <Link to={to} className='relative'>
                <KorzinkaIcon className='h-8 w-8 cursor-pointer transition-all duration-150 active:scale-90 active:opacity-60' />

                <div className='absolute bottom-0.5 -right-2.5 bg-[#fec400] rounded-lg w-6 h-3.5 flex items-center justify-center text-[10px]'>
                    {cart.length}
                </div>
            </Link>
        </>
    );
};

export default Korzinka;
