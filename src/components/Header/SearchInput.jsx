import { useState } from "react";
import { icons } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
const { SearchIcon } = icons;

const SearchInput = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?query=${search}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='hidden min-w-77.5 lg:flex items-center justify-center border-2 border-[#FEC80B] rounded-full'
        >
            <input
                type='text'
                className='w-full text-[16px] outline-none ml-4 py-2'
                onChange={handleSearch}
                value={search}
            />
            <SearchIcon
                onClick={handleSubmit}
                className='mr-4 active:scale-95 cursor-pointer'
            />
        </form>
    );
};

export default SearchInput;
