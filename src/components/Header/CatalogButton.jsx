import Container from "../Container/Container";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";

const CatalogButton = ({ openMenu, setOpenMenu }) => {
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
                <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            )}
        </>
    );
};

export default CatalogButton;
