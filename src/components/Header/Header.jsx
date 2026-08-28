import Navigation from "./Navigation";
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
import { motion } from "motion/react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const isMenuOpen = openMenu !== null;

    const stickyMarker = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            {
                rootMargin: "-20px 0px 0px 0px",
            },
        );

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
            </header>

            <div ref={stickyMarker} className='h-px'></div>

            {/* Sticky Header with bottom curved wave grow */}
            <motion.div
                animate={{
                    paddingTop: 10,
                    // Bottom swells from 10px -> 28px peak -> snaps back to 10px
                    paddingBottom: isSticky ? [10, 28, 10] : 10,
                }}
                transition={{
                    duration: 1,
                    // Curve overshoot cubic-bezier: creates elastic wave arc
                    ease: [0.34, 1.7, 0.64, 1],
                    // Explicit keyframe pacing (swells fast to 40%, then curves back slowly)
                    times: [0, 0.4, 1],
                }}
                className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
                    isSticky ? "shadow-lg" : ""
                }`}
            >
                {/* {isSticky && <div className='bg-black h-5'>extra header</div>} */}
                <Container>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-10'>
                            <CatalogButton
                                openMenu={openMenu}
                                setOpenMenu={setOpenMenu}
                                isSticky={isSticky}
                            />

                            {/* LOGO (Expands only when sticky) */}
                            <motion.div
                                initial={false}
                                animate={{
                                    width: isSticky ? "auto" : 0,
                                    opacity: isSticky ? 1 : 0,
                                    marginRight: isSticky ? 0 : -40,
                                }}
                                transition={{
                                    duration: 0.35,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className='overflow-hidden shrink-0 flex items-center'
                            >
                                <RusTruck to='/'/>
                            </motion.div>

                            <div className='hidden xl:block'>
                                <Navigation
                                    openMenu={openMenu}
                                    setOpenMenu={setOpenMenu}
                                />
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <SearchInput className='hidden lg:block' />

                            <div className='flex items-center gap-4'>
                                <Korzinka to='/korzinka' />
                                <Favourites to='/favourites' />
                                <LanguageDropdown />
                            </div>
                        </div>
                    </div>
                </Container>
            </motion.div>
        </>
    );
};

export default Header;
