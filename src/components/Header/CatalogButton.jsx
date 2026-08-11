import Container from "../Container/Container";
import { Link } from "react-router-dom";

const CatalogButton = ({ currentLang, openMenu, setOpenMenu }) => {
    const isOpen = openMenu === "catalog";

    return (
        <>
            <button
                className='
                flex items-center gap-4
                px-4 py-2.25
                bg-[#FEC80B]
                rounded-md
                hover:bg-[#FFD43A]
                active:bg-[#E9C135]
            '
                onClick={() => {
                    setOpenMenu(isOpen ? null : "catalog");
                }}
            >
                {/* Burger container */}
                {/* Burger */}
                <span className='relative flex h-5 w-5 items-center justify-center'>
                    <span
                        className={`absolute block h-0.5 w-5 bg-black transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "-translate-y-2"
                        }`}
                    ></span>

                    <span
                        className={`block h-0.5 w-5 bg-black transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    ></span>

                    <span
                        className={`absolute block h-0.5 w-5 bg-black transition-transform duration-300 ${
                            isOpen ? "-rotate-45" : "translate-y-2"
                        }`}
                    ></span>
                </span>

                <span className='text-[18px]'>Каталог</span>
            </button>

            {isOpen && (
                <div className='fixed overflow-y-auto left-0 top-36.5 bottom-0 z-10  w-screen bg-gray-200 pt-4'>
                    <Container>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black'>
                                    {
                                        currentLang.header.megaMenu.categories
                                            .title
                                    }
                                </h1>
                                <ul>
                                    {currentLang.header.megaMenu.categories.types.map(
                                        (cat, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                                >
                                                    <Link to={cat.path}>
                                                        {cat.name}
                                                    </Link>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black '>
                                    {currentLang.header.megaMenu.aboutUs.title}
                                </h1>
                                <ul>
                                    {currentLang.header.megaMenu.aboutUs.links.map(
                                        (link, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                                >
                                                    <Link to={link.path}>
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black '>
                                    {currentLang.header.megaMenu.media.title}
                                </h1>
                                <ul>
                                    {currentLang.header.megaMenu.media.links.map(
                                        (link, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                                >
                                                    <Link to={link.path}>
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    {currentLang.header.megaMenu.service.links.map(
                                        (link, item) => {
                                            return (
                                                <li
                                                    key={item}
                                                    className='font-bold text-[1.6rem] leading-normal transition-all duration-300 hover:text-[#ffd43a] cursor-pointer mb-6'
                                                >
                                                    <Link to={link.path}>
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
};

export default CatalogButton;
