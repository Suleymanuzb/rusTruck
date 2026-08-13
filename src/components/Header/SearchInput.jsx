import { icons } from "../../assets/icons/icons";
const { SearchIcon } = icons;

const SearchInput = () => {
    return (
        <div className='hidden min-w-77.5 lg:flex items-center justify-center border-2 border-[#FEC80B] rounded-full '>
            <input
                type='text'
                className='w-full text-[16px] outline-none ml-2 py-2'
            />
            <SearchIcon className='mr-4 active:scale-95 cursor-pointer' />
        </div>
    );
};

export default SearchInput;
