import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DropDown from "./DropDown/DropDown";

const MegaMenu = ({ openMenu, setOpenMenu }) => {
    const { t } = useTranslation();

    const [openCategories, setOpenCategories] = useState(false);
    const [openAboutUs, setOpenAboutUs] = useState(false);
    const [openMedia, setOpenMedia] = useState(false);

    const closeMegaMenu = () => {
        setOpenMenu(null);
        setOpenCategories(false);
        setOpenAboutUs(false);
        setOpenMedia(false);
    };

    const handleCategories = () => {
        setOpenCategories((prev) => !prev);
    };

    const handleAboutUs = () => {
        setOpenAboutUs((prev) => !prev);
    };

    const handleMedia = () => {
        setOpenMedia((prev) => !prev);
    };

    const categories = t("header.megaMenu.categories.types", {
        returnObjects: true,
    });

    const aboutUs = t("header.megaMenu.aboutUs.links", {
        returnObjects: true,
    });

    const media = t("header.megaMenu.media.links", {
        returnObjects: true,
    });

    const service = t("header.megaMenu.service.links", {
        returnObjects: true,
    });

    const location = useLocation();
    const prevPathname = useRef(location.pathname);

    useEffect(() => {
        if (prevPathname.current !== location.pathname) {
            setOpenMenu(null);
            setOpenCategories(false);
            setOpenAboutUs(false);
            setOpenMedia(false);

            prevPathname.current = location.pathname;
        }
    }, [location.pathname, setOpenMenu]);

    return (
        <div className='fixed overflow-y-auto h-screen! left-0 top-31 sm:top-32 lg:top-36 bottom-0 z-10 w-screen bg-gray-200 pt-4'>
            <Container>
                <div className='flex flex-col justify-between max-[576px]:min-h-[calc(100vh-12.125rem)] '>
                    <div className='min-[576px]:grid min-[576px]:grid-cols-2 gap-y-5 md:grid-cols-20'>
                        <div
                            onClick={handleCategories}
                            className='md:col-span-6'
                        >
                            <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black'>
                                {t("header.megaMenu.categories.title")}
                                <motion.span
                                    animate={{
                                        rotate: openCategories ? 180 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className='inline-flex items-center
                                justify-center text-sm ml-2 text-[#fec400] min-[576px]:hidden'
                                >
                                    ▼
                                </motion.span>
                            </h1>

                            <DropDown openDropDown={openCategories}>
                                <ul>
                                    {categories.map((cat) => (
                                        <li
                                            key={cat.id}
                                            className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                        >
                                            <Link
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    closeMegaMenu();
                                                }}
                                                to={`/catalog/${cat.slug}`}
                                            >
                                                {cat.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </DropDown>
                        </div>

                        <div onClick={handleAboutUs} className='md:col-span-6'>
                            <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black '>
                                {t("header.megaMenu.aboutUs.title")}
                                <motion.span
                                    animate={{
                                        rotate: openAboutUs ? 180 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className='ml-2 inline-flex items-center justify-center text-sm text-[#fec400] min-[576px]:hidden'
                                >
                                    ▼
                                </motion.span>
                            </h1>
                            <DropDown openDropDown={openAboutUs}>
                                <ul>
                                    {aboutUs.map((link) => {
                                        return (
                                            <li
                                                key={link.path}
                                                className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                            >
                                                <Link
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        closeMegaMenu();
                                                    }}
                                                    to={link.path}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </DropDown>
                        </div>

                        <div className='grid md:col-span-8 md:grid lg:grid-cols-8 md:gap-x-10'>
                            <div
                                onClick={handleMedia}
                                className='md:col-span-4'
                            >
                                <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black '>
                                    {t("header.megaMenu.media.title")}
                                    <motion.span
                                        animate={{
                                            rotate: openMedia ? 180 : 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className='ml-2 inline-flex items-center justify-center text-sm text-[#fec400] min-[576px]:hidden'
                                    >
                                        ▼
                                    </motion.span>
                                </h1>
                                <DropDown openDropDown={openMedia}>
                                    <ul>
                                        {media.map((link) => {
                                            return (
                                                <li
                                                    key={link.path}
                                                    className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                                >
                                                    <Link
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            closeMegaMenu();
                                                        }}
                                                        to={link.path}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </DropDown>
                            </div>

                            <div className='md:col-span-4'>
                                <ul>
                                    {service.map((link) => {
                                        return (
                                            <li
                                                key={link.path}
                                                className='font-bold text-[1.6rem] leading-normal transition-all duration-300 hover:text-[#ffd43a] cursor-pointer mb-6'
                                            >
                                                <Link
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        closeMegaMenu();
                                                    }}
                                                    to={link.path}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='max-[576px]:block hidden text-gray-400'>
                        <p>{t("header.adress")}</p>
                        <p>
                            {t("header.forStates")}{" "}
                            {t("header.numberForStates")}
                        </p>
                        <p>
                            {t("header.forLocals")}{" "}
                            {t("header.numberFotLocals")}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MegaMenu;
