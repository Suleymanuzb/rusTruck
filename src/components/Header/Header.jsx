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
import { useEffect, useState } from "react";
import LanguageDropdown from "./languageDropdown";

const { BurgerIcon } = icons;

const Header = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const isMenuOpen = openMenu !== null;
    // console.log(currentLang);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header>
                <div>
                    <Container>
                        {/* top header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center pt-4 pb-2.25'>
                                <RusTruckLogoText to='/' />
                                <Gisp />
                            </div>

                            <div className='flex items-center max-[1200px]:gap-3 min-[1200px]:gap-10'>
                                <WorkingTime hasDropdown />
                                <PhoneCall />
                            </div>
                        </div>
                    </Container>

                    <div className='w-full h-0.5 bg-[#FFE99D]'></div>

                    <Container>
                        {/* below header */}
                        <div className='flex justify-between py-2.5'>
                            <div className='flex items-center gap-10'>
                                <CatalogButton
                                    openMenu={openMenu}
                                    setOpenMenu={setOpenMenu}
                                />

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

                {/* hidden Header */}
                <Container>
                    <div className='flex items-center justify-between hidden'>
                        <div className='flex items-center gap-6'>
                            <RusTruck />
                            <BurgerButton />
                        </div>
                        <div className='flex items-center gap-6'>
                            <SearchInput />

                            <Korzinka to='/korzinka' />
                            <Favourites to='/favourites' />
                            <PhoneCallHidden />
                        </div>
                    </div>
                </Container>
                {/* hidden Header */}
            </header>
        </>
    );
};

export default Header;
