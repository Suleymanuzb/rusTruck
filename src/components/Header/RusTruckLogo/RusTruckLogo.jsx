import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { icons } from "../../../assets/icons/icons";

const { RusTruckLogo } = icons;

const RusTruck = ({ to = "/", className = "", isAnimated = true }) => {
    const logoRef = useRef(null);

    useEffect(() => {
        // If animation is disabled, don't run GSAP
        if (!isAnimated) return;

        const ctx = gsap.context(() => {
            gsap.set(logoRef.current, {
                perspective: 600,
                transformStyle: "preserve-3d",
            });

            gsap.to(logoRef.current, {
                rotateX: 360,
                duration: 2,
                ease: "none",
                repeat: -1,
            });
        }, logoRef);

        return () => ctx.revert();
    }, [isAnimated]);

    return (
        <Link
            to={to}
            className={`flex items-center shrink-0 py-1 ${className}`}
        >
            <div
                ref={logoRef}
                className={isAnimated ? "will-change-transform" : ""}
            >
                <RusTruckLogo />
            </div>
        </Link>
    );
};

export default RusTruck;
