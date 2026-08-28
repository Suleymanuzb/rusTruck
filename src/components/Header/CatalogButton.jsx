import MegaMenu from "./MegaMenu";
import { motion } from "motion/react";

const CatalogButton = ({ openMenu, setOpenMenu, isSticky }) => {
    const isOpen = openMenu === "catalog";

    return (
        <>
            <motion.button
                animate={{
                    width: isSticky ? 52 : 142,
                    paddingLeft: isSticky ? 16 : 16,
                    paddingRight: isSticky ? 16 : 16,
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                }}
                className='
                    flex items-center gap-4
                    px-4 py-2.25
                    bg-[#FEC80B]
                    rounded-md
                    hover:bg-[#FFD43A]
                    active:bg-[#E9C135]
                    overflow-hidden
                    whitespace-nowrap
                '
                onClick={() => {
                    setOpenMenu(isOpen ? null : "catalog");
                }}
            >
                {/* Burger */}
                <span className='relative flex h-5 w-5 shrink-0 items-center justify-center'>
                    <span
                        className={`absolute block h-0.5 w-5 bg-black transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "-translate-y-2"
                        }`}
                    />

                    <span
                        className={`block h-0.5 w-5 bg-black transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />

                    <span
                        className={`absolute block h-0.5 w-5 bg-black transition-transform duration-300 ${
                            isOpen ? "-rotate-45" : "translate-y-2"
                        }`}
                    />
                </span>

                {/* Catalog text */}
                <motion.span
                    animate={{
                        opacity: isSticky ? 0 : 1,
                        width: isSticky ? 0 : 72,
                    }}
                    transition={{
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className='shrink-0 overflow-hidden whitespace-nowrap'
                >
                    Каталог
                </motion.span>
            </motion.button>

            {isOpen && (
                <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            )}
        </>
    );
};

export default CatalogButton;
