import { Link } from "react-router-dom";
import ru from "../../../data/translations/ru";
import { icons } from "../../../assets/icons/icons";
const { RusTruckLogo } = icons;
import gsap from "gsap";
import { useEffect } from "react";

const currentLang = ru;

const RusTruckLogoText = ({ to }) => {
    useEffect(() => {
        const logo = document.querySelector(".rus-truck-logo");

        gsap.set(logo, {
            transformPerspective: 700,
            transformStyle: "preserve-3d",
        });

        gsap.to(logo, {
            rotationX: 360,
            duration: 2,
            repeat: -1,
            ease: "none",
        });
    }, []);

    return (
        <Link to={to} className='flex items-center gap-2.5'>
            <div className='rus-truck-logo'>
                <RusTruckLogo />
            </div>
            <span className='hidden lg:block max-w-48 leading-none text-[14px] relative ml-2 before:content-[" "] before:absolute before:w-0.5 before:h-7 before:bg-[#FEC80B] before:-left-3 '>
                {currentLang.header.production}
            </span>
        </Link>
    );
};

export default RusTruckLogoText;
