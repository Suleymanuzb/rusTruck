import { useState } from "react";

const WorkingTime = ({ currentLang, hasDropdown = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(currentLang);

    return (
        <div>
            <div className='relative text-end hidden lg:block'>
                {/* Working time - clickable */}
                <p
                    onClick={() => setIsOpen(!isOpen)}
                    className='flex items-center min-[1px]:justify-center min-[1140px]:justify-end cursor-pointer'
                >
                    {currentLang?.header?.workingTime}
                    {hasDropdown && (
                        <span
                            className={` inline-flex
                w-4
                h-4
                text-[12px]
                items-center
                justify-center
                text-[#FEC80B]
                transition-transform
                duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            ▼
                        </span>
                    )}
                </p>

                {isOpen && (
                    <div className='absolute text-[14px] p-3 left-26.25 bg-[rgb(255,255,255)] rounded-lg w-43.25 top-[top: 18px] shadow'>
                        <p className='text-start mb-3'>
                            {currentLang?.header?.workingTimeOpened}
                        </p>
                        <p className='text-start'>
                            {currentLang?.header?.workingTimeWeekend}
                        </p>
                    </div>
                )}
            </div>

            <span className='hidden md:flex items-center justify-center text-[15px] leading-none text-[#A1A1A1] max-w-40 min-[1140px]:max-w-full'>
                {currentLang?.header?.adress}
            </span>
        </div>
    );
};

export default WorkingTime;
