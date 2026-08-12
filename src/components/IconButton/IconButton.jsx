import { icons } from "../../assets/icons/icons";
const { ChevronRight, ChevronLeft } = icons;

const IconButton = ({ direction, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='w-9.75 h-9.75 flex
                items-center
                justify-center

                border
                border-black
                rounded

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
