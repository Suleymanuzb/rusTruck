import { useEffect, useRef, useState } from "react";
import sliderImage from "../../assets/images/sliderImage/benefits.png";
import lineSvg from "../../data/sliderLinePart";
import { useTranslation } from "react-i18next";
import Container from "../Container/Container";

const ScrollSlider = () => {
    const { t } = useTranslation();

    const scrollSlider = t("scrollSlider.linePart", {
        returnObjects: true,
    });

    console.log("scrollSlider:", scrollSlider);
    console.log("type:", typeof scrollSlider);
    console.log("isArray:", Array.isArray(scrollSlider));

    const sectionRef = useRef(null);

    const [progress, setProgress] = useState(0);

    const items = scrollSlider || [];

    console.log("scrollSlider:", scrollSlider);
    console.log("is array:", Array.isArray(scrollSlider));

    const activeIndex = Math.min(
        Math.floor(progress * items.length),
        items.length - 1,
    );

    const item = items[activeIndex];

    const ItemSvg = lineSvg?.find((svg) => svg.id === item?.id);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            // 1. Get exact sticky container distance
            const totalScrollableDistance = rect.height - window.innerHeight;

            // 2. Measure scroll ONLY when section top has hit 0 (pinned)
            // If rect.top > 0, we haven't reached the sticky point yet, so progress stays 0.
            const scrolledDistance = -rect.top;

            const newProgress = Math.min(
                Math.max(scrolledDistance / totalScrollableDistance, 0),
                1,
            );

            setProgress(newProgress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const positions = [
        "top-[4%] left-[70%] min-[890px]:left-[67%] min-[680px]:left-[68%] max-[600px]:left-[71%] max-[500px]:left-[72%]",
        "top-[25%] left-[91.5%] max-[600px]:left-[93%] max-[500px]:left-[92%]",

        "top-[45%] left-[98%] min-[850px]:left-[98%] min-[680px]:left-[97.5%] min-[600px]:left-[97%] min-[505px]:left-[98%] min-[405px]:left-[97.5%] max-[400px]:left-[97%]",
        
        "top-[67%] left-[92.5%] min-[1120px]:left-[95%] min-[1024px]:left-[94%] min-[850px]:left-[95%] min-[600px]:left-[94%] min-[500px]:left-[94.5%] min-[450px]:left-[94%]",

        "top-[82%] left-[84%] min-[1200px]:left-[85.5%] min-[1024px]:left-[85%] min-[890px]:left-[86%] min-[780px]:left-[85%] min-[500px]:left-[84%] min-[450px]:left-[83%]",
    ];

    return (
        <Container>
            <section
                ref={sectionRef}
                className='h-[500vh] my-10 min-[890px]:my-20'
            >
                <div className='h-dvh sticky gap-10 top-25 min-[890px]:top-25 w-full flex flex-col max-[890px]:mt-20 min-[890px]:flex-row min-[890px]:items-start'>
                    {/* image and circular dots part */}

                    <div className='benefits_left w-[60%]'>
                        <div className='w-[55%] min-[890px]:w-[60%] relative'>
                            <img
                                className='w-full h-auto block'
                                src={sliderImage}
                                alt='slider image'
                            />

                            {/* for dots */}
                            {items.map((item, index) => {
                                const isActive = index === activeIndex;
                                const position =
                                    positions[index] || "top-0 left-0";

                                return (
                                    <div
                                        key={item.id || index}
                                        className={`whitespace-nowrap absolute ${position}`}
                                    >
                                        <p className='flex items-center gap-0.5 sm-gap-2'>
                                            <span
                                                className={`inline-block border-[0.5px] w-1.5 h-1.5 min-[450px]:w-1.5 min-[450px]:h-1.5 min-[600px]:w-2.5 min-[600px]:h-2.5 min-[810px[:w-3.5 min-[810px[:h-3.5 lg:w-4 lg:h-4 rounded-full sm:border ${
                                                    isActive
                                                        ? "bg-[#fec80b] border-[#fec80b]"
                                                        : "bg-white border-[#fec80b]"
                                                }`}
                                            ></span>
                                            <span className='text-[8px] '>
                                                {item.name}
                                            </span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* svg and growing line part */}
                    <div className='relative w-full min-[890px]:w-[30%]'>
                        <div className='relative w-0.5 h-120 max-[890px]:w-full max-[890px]:h-1 bg-transparent rounded-full overflow-visible min-[890px]:absolute min-[890px]:left-0 min-[890px]:top-1/2 min-[890px]:-translate-y-1/2'>
                            {/* Desktop (Vertical) Growing Line */}
                            <div
                                className='absolute inset-0 origin-top rounded-full hidden min-[890px]:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                                style={{
                                    transform: `scaleY(${progress})`,
                                }}
                            >
                                {/* Core Glowing Line */}
                                <div className='w-full h-full bg-[#fec80b] rounded-full shadow-[0_0_12px_#fec80b,0_0_24px_rgba(254,200,11,0.4)]' />

                                {/* Leading Airplane Tip (Desktop - Flight Path Downwards) */}
                                {progress > 0 && (
                                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none flex items-center justify-center'>
                                        {/* Engine Jet Thruster Glow */}
                                        <span className='absolute -top-1 w-2.5 h-2.5 bg-[#fec80b] rounded-full animate-ping opacity-75 blur-[1px]' />

                                        {/* Airplane Icon */}
                                        <svg
                                            className='relative w-6 h-6 fill-[#fec80b] rotate-180 drop-shadow-[0_0_8px_rgba(254,200,11,0.9)] filter brightness-110'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Mobile (Horizontal) Growing Line */}
                            <div
                                className='absolute inset-0 origin-left rounded-full hidden max-[890px]:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                                style={{
                                    transform: `scaleX(${progress})`,
                                }}
                            >
                                {/* Core Glowing Line */}
                                <div className='w-full h-full bg-[#fec80b] rounded-full ' />

                                {/* Leading Airplane Tip (Mobile - Flight Path Rightward) */}
                                {progress > 0 && (
                                    <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 pointer-events-none flex items-center justify-center'>
                                        {/* Engine Jet Thruster Glow */}
                                        <span className='absolute -left-1 w-2.5 h-2.5 bg-[#fec80b] rounded-full animate-ping opacity-75 blur-[1px]' />

                                        {/* Airplane Icon */}
                                        <svg
                                            className='relative w-6 h-6 fill-[#fec80b] rotate-90 drop-shadow-[0_0_8px_rgba(254,200,11,0.9)] filter brightness-110'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z' />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='flex items-center w-full ml-5 mt-10'>
                            <div className='w-full flex flex-col items-strecht min-[540]:flex-col gap-5 min-[890px]:flex-col min-[890px]:items-start mb-2'>
                                <div className='lg:mb-8 w-full'>
                                    {ItemSvg && <ItemSvg.svg />}
                                </div>

                                <div className='w-full max-[890px]:w-full'>
                                    <p className='max-[890px]:text-[15px] w-full'>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default ScrollSlider;
