import ru from "../../data/translations/ru";
import Navigation from "./Navigation";
import { icons } from "../../assets/icons/icons";
import CatalogButton from "../CatalogButton/CatalogButton";
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

const currentLang = ru;

const { BurgerIcon } = icons;

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <Container>
                        {/* top header */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center pt-4 pb-2.25'>
                                <RusTruckLogoText to='/home' />
                                <Gisp />
                            </div>

                            <div className='flex items-center gap-10'>
                                <WorkingTime
                                    currentLang={currentLang}
                                    hasDropdown
                                />
                                <PhoneCall currentLang={currentLang} />
                            </div>
                        </div>
                    </Container>

                    <div className='w-full h-0.5 bg-[#FFE99D]'></div>

                    <Container>
                        {/* below header */}
                        <div className='flex justify-between py-2.5'>
                            <div className='flex items-center gap-10'>
                                <CatalogButton />

                                <Navigation
                                    currentLang={currentLang}
                                    navigation={currentLang.header.navigation}
                                ></Navigation>
                            </div>

                            <div className='flex items-center gap-4'>
                                <SearchInput />

                                <Korzinka to='/korzinka' />
                                <Favourites to='/favourites' />
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
                            <Navigation
                                navigation={currentLang.header.navigation}
                            ></Navigation>
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
