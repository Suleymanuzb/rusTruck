import { icons } from "../../assets/icons/icons";
const { PhoneIcon } = icons;

const PhoneCall = ({ currentLang }) => {
    return (
        <div className='flex items-center gap-6'>
            <div className='flex flex-col text-[#A1A1A1]'>
                <span className='ml-7'>
                    {currentLang.header.forStates}
                    <a href='tel:88005110525'>
                        {currentLang.header.numberForStates}
                    </a>
                </span>
                <span>
                    {currentLang.header.forLocals}
                    <a href='tel:88005110525'>
                        {currentLang.header.numberFotLocals}
                    </a>
                </span>
            </div>

            {/*phone icon  */}
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
        </div>
    );
};

export default PhoneCall;
