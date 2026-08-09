import en from "../../data/translations/en";
import Navigation from "./Navigation";
import { icons } from "../../assets/icons/icons";
import CatalogButton from "../CatalogButton/CatalogButton";
import SearchInput from "./SearchInput";
import Korzinka from "./Korzinka";
import Favourites from "./Favourite";
import Container from "../Container/Container";

const { RusTruckLogo, BurgerIcon } = icons;

const Header = () => {
    return (
        <>
            <Container>
                <header>
                    <div>
                        <div>
                            <RusTruckLogo />
                        </div>

                        {/* below header */}
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-10'>
                                <CatalogButton />

                                <Navigation
                                    navigation={en.header.navigation}
                                ></Navigation>
                            </div>

                            <div className='flex items-center gap-4'>
                                <SearchInput />

                                <Korzinka to='/korzinka' />
                                <Favourites to='/favourites' />
                            </div>
                        </div>
                    </div>
                </header>
            </Container>
        </>
    );
};

export default Header;
