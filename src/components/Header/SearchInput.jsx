import { icons } from "../../assets/icons/icons";
const { SearchIcon } = icons;

const SearchInput = () => {
    return (
        <div className='flex border-2 border-[#FEC80B] max-w-76 rounded-full '>
            <input type='text' className='w-full outline-none ml-2' />
            <SearchIcon className='mr-2 active:scale-95 cursor-pointer' />
        </div>
    );
};

export default SearchInput;
