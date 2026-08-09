import { icons } from "../../../assets/icons/icons";
const { PhoneIcon } = icons;

const PhoneCallHidden = () => {
    return (
        <>
            <button
                type='button'
                className='w-[3.7rem]
        h-[3.7rem]
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
        uppercase'
            >
                <PhoneIcon className='max-w-full h-auto' />
            </button>
        </>
    );
};

export default PhoneCallHidden;
