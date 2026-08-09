import { Link } from "react-router-dom";

const NavigationItem = ({ children, to, hasDropdown = false }) => {
    return (
        <Link
            to={to}
            className='flex items-center gap-1 text-[16px] font-normal'
        >
            {children}
            {hasDropdown && <span>▼</span>}
        </Link>
    );
};

export default NavigationItem;
