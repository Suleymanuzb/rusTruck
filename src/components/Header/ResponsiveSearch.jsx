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
        setSearch("");
    };

    return (
        <div className='lg:hidden'>
            <span
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className='text-2xl'
            >
                <IconSearch />
            </span>

            <div
                className={`border search-box absolute z-300 ${isSticky ? "top-24.5 sm:top-16" : "top-13"} left-0 w-full grid transition-all duration-300 ${isSearchOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] pointer-events-none"}`}
            >
                <Container className='overflow-hidden'>
                    <div
                        className={`border bg-white py-2.5 ${isSticky ? "px-4" : ""}`}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className='flex items-center h-10 border-2 border-[#FEC80B] rounded-full py-3 bg-white'
                        >
                            <input
                                type='text'
                                className='w-full min-w-0 h-full text-[16px] outline-none ml-4 py-3'
                                onChange={handleSearch}
                                value={search}
                            />

                            <SearchIcon
                                onClick={handleSubmit}
                                className='mr-4 active:scale-95 cursor-pointer shrink-0'
                            />
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ResponsiveSearch;
