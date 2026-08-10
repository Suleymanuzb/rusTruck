import { Link } from "react-router-dom";

const NavigationItem = ({
    children,
    to,
    hasDropdown = false,
    onClick,
    isOpen = false,
}) => {
    if (hasDropdown) {
        return (
            <button
                to={to || "#"}
                className='relative cursor-pointer flex items-center gap-1 text-[16px] font-normal'
                onClick={onClick}
            >
                {children}
                {hasDropdown && (
                    <span
                        className={`flex items-center justify-center text-[#FEC80B] transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                        ▼
                    </span>
                )}
            </button>
        );
    }

    return (
        <Link
            to={to}
            className='relative flex items-center gap-1 text-[16px] font-normal'
        >
            {children}
        </Link>
    );
};

export default NavigationItem;
