import { useEffect, useState } from "react";
import { icons } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
const { IconSearch, SearchIcon } = icons;

const ResponsiveSearch = ({ isSticky }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?query=${search}`);
        setIsSearchOpen(false);
    };

    return (
        <div className='lg:hidden'>
            <span onClick={() => setIsSearchOpen(true)} className='text-2xl'>
                <IconSearch />
            </span>

            <div
                className={`search-box absolute z-300 ${isSticky ? "top-24.5 sm:top-16 bg-amber-200" : "top-13"} left-0 w-full grid transition-all duration-300 ${isSearchOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] pointer-events-none"}`}
            >
                <Container className='overflow-hidden'>
                    <div className='bg-white py-2.5'>
                        <form
                            onSubmit={handleSubmit}
                            className='flex items-center h-10 border-2 border-[#FEC80B] rounded-full py-3 bg-gray-200!'
                        >
                            <input
                                type='text'
                                className='w-full h-full text-[16px] outline-none ml-4'
                                onChange={handleSearch}
                                value={search}
                            />

                            <SearchIcon
                                onClick={handleSubmit}
                                className='mr-4 active:scale-95 cursor-pointer'
                            />
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ResponsiveSearch;
