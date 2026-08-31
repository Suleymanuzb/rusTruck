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
import { Link } from "react-router-dom";
import PhoneCallOnly from "./PhoneCalIconItself";

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
                    <div className='flex items-center  justify-between'>
                        <div className='flex items-center gap-1 sm:gap-3'>
                            {/* LOGO */}
                            <RusTruck to={"/"} />
                            <Gisp />
                        </div>

                        <div className='flex items-center max-[648px]:gap-1 max-[1200px]:gap-3 min-[1200px]:gap-10'>
                            <WorkingTime hasDropdown />
                            <PhoneCall
                                className='max-[430px]:w-7! max-[430px]:h-7! w-10! h-10!'
                                IconClassname='max-[430px]:w-4! w-4! md:h-5!'
                            />
                            <LanguageDropdown className='max-[430px]:w-7! max-[430px]:h-7! w-10 h-10 sm:hidden' />
                        </div>
                    </div>
                </Container>

                <div className='top-0 sticky w-full h-0.5 bg-[#fec400] my-2'></div>
            </header>

            <div ref={stickyMarker} className='h-px'></div>

            {/* Sticky Header with bottom curved wave grow */}
            <motion.div
                animate={{
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
                {isSticky && (
                    <div className='flex py-1 sm:hidden'>
                        <Container>
                            <div className='flex! items-center justify-between'>
                                <div className='flex flex-col'>
                                    <Link className='max-[390px]:text-[10px] max-[600px]:text-[12px] text-sm'>
                                        г. Нижний Новгород, ул. Торфяная, 35
                                    </Link>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className=''>
                                        <LanguageDropdown className='w-7 h-7 sm:hidden' />
                                    </div>
                                    <PhoneCallOnly
                                        className='w-7! h-7!'
                                        IconClassname='w-4 h-4 md:5h-5'
                                    />
                                </div>
                            </div>
                        </Container>
                    </div>
                )}

                {isSticky && (
                    <div className='w-full h-0.5 bg-[#fec400] mt-1 mb-2 sm:opacity-0'></div>
                )}

                <Container>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center  gap-4 lg:gap-10'>
                            <CatalogButton
                                openMenu={openMenu}
                                setOpenMenu={setOpenMenu}
                                isSticky={isSticky}
                            />
                            {isSticky && (
                                <div className='flex flex-col leading-none lg:hidden'>
                                    <Link className='font-extrabold mb-0.5'>
                                        РУСТРАК
                                    </Link>
                                    <Link to={"tel: 8 800-511-05-25"}>
                                        8 800-511-05-25
                                    </Link>
                                </div>
                            )}

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
                                <RusTruck
                                    to='/'
                                    isAnimated={false}
                                    className='hidden lg:block'
                                />
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

                            <div className='flex items-center gap-2.5'>
                                <Korzinka to='/korzinka' />
                                <Favourites to='/favourites' />
                                <LanguageDropdown className='hidden sm:flex w-10 h-10' />
                            </div>
                        </div>
                    </div>
                </Container>
            </motion.div>
        </>
    );
};

export default Header;
