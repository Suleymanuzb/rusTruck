import { icons } from "../../assets/icons/icons";
const { PhoneIcon } = icons;

const PhoneCallOnly = ({
    className = "",
    IconClassname = "",
}) => {
    return (
        <button
            type='button'
            className={`${className} md:w-[3.7rem]
        md:h-[3.7rem]
        p-0
        cursor-pointer
        border-0
        bg-[#fec80b]
        transition-all
        duration-300
        ease-in-out
        outline-none
        rounded-full
        appearance-none
        flex
        items-center
        justify-center
        overflow-hidden
        uppercase`}
        >
            <PhoneIcon className={`${IconClassname}`} />
        </button>
    );
};

export default PhoneCallOnly;
