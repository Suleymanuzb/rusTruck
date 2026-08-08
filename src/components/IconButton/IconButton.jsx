import { icons } from "../../assets/icons/icons";
const { ChevronRight, ChevronLeft } = icons;

const IconButton = ({ direction }) => {
    return (
        <button
            className='w-14 h-14 flex
                items-center
                justify-center

                border-2
                border-black
                rounded-lg

                bg-transparent
                text-black

                hover:bg-[#FEC80B]
                active:bg-[#E9C135]'
        >
            {direction === "right" && <ChevronRight />}

            {direction === "left" && <ChevronLeft />}
        </button>
    );
};

export default IconButton;
