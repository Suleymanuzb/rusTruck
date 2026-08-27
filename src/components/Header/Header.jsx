import Navigation from "./Navigation";
import { icons } from "../../assets/icons/icons";
import SearchInput from "./SearchInput";
import Korzinka from "./Korzinka";
import Favourites from "./Favourite";
import Container from "../Container/Container";
import RusTruckLogoText from "./RusTruckLogo/RusTruckLogoText";
import Gisp from "./Gisp";
import WorkingTime from "./WorkingTime";
import PhoneCall from "./PhoneCall";
import Button from "../Button/Button";
import BurgerButton from "./HeaderHidden/BurgerButton";
import RusTruck from "./RusTruckLogo/RusTruckLogo";
import PhoneCallHidden from "./HeaderHidden/PhoneCall";
import CatalogButton from "./CatalogButton";
import { useEffect, useRef, useState } from "react";
import LanguageDropdown from "./languageDropdown";

const { BurgerIcon } = icons;

const Header = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const isMenuOpen = openMenu !== null;
    // console.log(currentLang);

    // for understanding where is the sticky div
    const [isSticky, setIsSticky] = useState(false);
    const stickyMarker = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsSticky(!entry.isIntersecting);
        });

        if (stickyMarker.current) {
            observer.observe(stickyMarker.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header>
                <div className=''>
                    <Container>
                        {/* Main header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3 pt-4 pb-2.25'>
                                {/* LOGO */}
                                <RusTruck to={"/"} />
                                <Gisp />
                            </div>

                            <div className='flex items-center max-[1200px]:gap-3 min-[1200px]:gap-10'>
                                <WorkingTime hasDropdown />
                                <PhoneCall />
                            </div>
                        </div>
                    </Container>

                    <div className='w-full h-0.5 bg-[#FFE99D]'></div>
                </div>
            </header>

            <div ref={stickyMarker} className='h-px'></div>

            {/* sticky header */}
            <div className='sticky top-0 z-50 bg-white'>
                <Container>
                    <div className='flex justify-between py-2.5'>
                        <div className='flex items-center gap-10'>
                            <CatalogButton
                                openMenu={openMenu}
                                setOpenMenu={setOpenMenu}
                                isSticky={isSticky}
                            />

                            {/* LOGO */}
                            {isSticky && <RusTruck />}

                            <div className='hidden lg:block'>
                                <Navigation
                                    openMenu={openMenu}
                                    setOpenMenu={setOpenMenu}
                                ></Navigation>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <SearchInput />

                            <div className='flex items-center gap-4'>
                                <Korzinka to='/korzinka' />
                                <Favourites to='/favourites' />
                                <LanguageDropdown />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Header;
