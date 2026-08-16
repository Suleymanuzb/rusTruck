import { useEffect, useRef, useState } from "react";
import sliderImage from "../../assets/images/sliderImage/benefits.png";
import lineSvg from "../../data/sliderLinePart";

const ScrollSlider = ({ currentLang }) => {
    const sectionRef = useRef(null);

    const [progress, setProgress] = useState(0);

    const items = currentLang?.scrollSlider?.linePart || [];

    const activeIndex = Math.min(
        Math.floor(progress * items.length),
        items.length - 1,
    );

    const item = items[activeIndex];

    const ItemSvg = lineSvg?.find((svg) => svg.id === item?.id);

    useEffect(() => {
        const handleScroll = () => {
            const rect = sectionRef.current.getBoundingClientRect();

            // const sectionTop = rect.top;

            const newProgress = Math.min(
                Math.max(-rect.top / (rect.height - window.innerHeight), 0),
                1,
            );

            setProgress(newProgress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    console.log("progress:", progress);
    console.log("activeIndex:", activeIndex);
    console.log("item:", item);

    const positions = [
        { top: "5%", left: "71%" },

        { top: "23%", left: "95%" },

        { top: "44%", left: "103%" },

        { top: "65%", left: "101%" },

        { top: "83%", left: "91.5%" },
    ];

    return (
        <section ref={sectionRef} className='h-[500vh] my-10 min-[890px]:my-20'>
            <div className='sticky gap-20 top-0 w-full flex flex-col-reverse items-start justify-start  min-[890px]:h-dvh min-[890px]:flex-row min-[890px]:items-center min-[890px]:justify-between px-6 md:px-10 lg:px-20 xl:px-30'>
                <div className='benefits_left w-[45%] min-[890px]:w-[45%] lg:w-[45%] max-[1235px]:w-[45%] xl:w-[40%] '>
                    <div className='relative w-full'>
                        <img
                            className='w-full h-auto'
                            src={sliderImage}
                            alt='slider image'
                        />

                        <ul className='absolute inset-0'>
                            {items.map((item, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <li
                                        key={item.id}
                                        className={`absolute whitespace-nowrap`}
                                        style={{
                                            top: positions[index].top,
                                            left: positions[index].left,
                                            transform: "translateY(-50%)",
                                        }}
                                    >
                                        <span
                                            className={`before:-left-3.5
before:top-2
before:absolute

before:border-[#00FFFF]
before:content-[""]
before:inline-block
before:w-5
before:h-5
before:rounded-full
before:border-2


max-[500px]:before:w-3
max-[500px]:before:h-3
max-[500px]:ml-2
min-[890px]:before:border-[#fec80b]

min-[500px]:before:-left-4
min-[500px]:before:w-3.5
min-[500px]:before:h-3.5

md:before:-left-5

min-[1024px]:before:-left-7

min-[1190px]:before:-left-6!

min-[1500px]:before:-left-6.5!

ml-1.5

${isActive ? "before:bg-[#00FFFF] min-[890px]:before:bg-[#fec80b]" : "before:bg-white"}
`}
                                        />

                                        <button className='text-[12px] benefits__button text opacity-100'>
                                            {item.name}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className='w-full flex max-[890px]:flex-col-reverse max-[890px]:gap-4 min-[890px]:w-[30%]'>
                    <div className='relative w-0.5 h-120 max-[890px]:w-full max-[890px]:h-0.5'>
                        {/* Background line */}
                        <div className='absolute inset-0 bg-transparent rounded-lg'></div>

                        {/* Growing line */}
                        <div
                            className='absolute top-0 left-0 w-full bg-[#fec80b] rounded-lg hidden min-[890px]:block'
                            style={{
                                height: `${progress * 100}%`,
                            }}
                        />

                        {/* Mobile → horizontal */}
                        <div
                            className='absolute top-0 left-0 h-full bg-[#3bf5ff] rounded-lg hidden max-[890px]:block'
                            style={{
                                width: `${progress * 100}%`,
                            }}
                        />
                    </div>

                    <div className='flex items-center w-full ml-3'>
                        <div className='w-full flex flex-col items-strecht min-[540]:flex-col gap-5 min-[890px]:flex-col min-[890px]:items-start mb-2'>
                            <div className='mb-8 w-full'>
                                {ItemSvg && <ItemSvg.svg />}
                            </div>

                            <div className='max-[890px]:w-full'>
                                <p className='max-[890px]:text-[15px] w-full'>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollSlider;
