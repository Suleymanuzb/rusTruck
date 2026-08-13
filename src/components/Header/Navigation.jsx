import NavigationItem from "./NavigationItem";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Navigation = ({ navigation, currentLang, openMenu, setOpenMenu }) => {
    return (
        <div>
            <nav className='relative flex items-center max-[1200px]:gap-3 min-[1200px]:gap-10'>
                <NavigationItem
                    hasDropdown
                    currentLang={currentLang}
                    isOpen={openMenu === "about"}
                    onClick={() => {
                        setOpenMenu(openMenu === "about" ? null : "about");
                    }}
                >
                    {navigation.about}
                </NavigationItem>

                <NavigationItem
                    hasDropdown
                    currentLang={currentLang}
                    isOpen={openMenu === "media"}
                    onClick={() => {
                        setOpenMenu(openMenu === "media" ? null : "media");
                    }}
                >
                    {navigation.media}
                </NavigationItem>

                <NavigationItem to='/service'>
                    {navigation.service}
                </NavigationItem>

                <NavigationItem to='/news'>{navigation.news}</NavigationItem>

                <NavigationItem to='/contacts'>
                    {navigation.contacts}
                </NavigationItem>

                {/* About modal */}
                {openMenu === "about" && (
                    <div className='fixed overflow-y-auto left-0 top-36.5 bottom-0 z-10  w-screen bg-gray-200 pt-4'>
                        <Container>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black'>
                                        {
                                            currentLang.header.megaMenu
                                                .categories.title
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
                                        {
                                            currentLang.header.megaMenu.aboutUs
                                                .title
                                        }
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
                                        {
                                            currentLang.header.megaMenu.media
                                                .title
                                        }
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
                                            (link) => {
                                                return (
                                                    <li className='font-bold text-[1.6rem] leading-normal transition-all duration-300 hover:text-[#ffd43a] cursor-pointer mb-6'>
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

                {/* Media modal */}
                {openMenu === "media" && (
                    <div className='fixed overflow-y-auto left-0 top-36.5 bottom-0 z-10  w-screen bg-gray-200 pt-4'>
                        <Container>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black'>
                                        {
                                            currentLang.header.megaMenu
                                                .categories.title
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
                                        {
                                            currentLang.header.megaMenu.aboutUs
                                                .title
                                        }
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
                                        {
                                            currentLang.header.megaMenu.media
                                                .title
                                        }
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
                                            (link) => {
                                                return (
                                                    <li className='font-bold text-[1.6rem] leading-normal transition-all duration-300 hover:text-[#ffd43a] cursor-pointer mb-6'>
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
            </nav>
        </div>
    );
};

export default Navigation;
