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
        "top-10 left-115",
        "top-35 left-142",
        "top-65 left-150",
        "top-94 left-148",
        "top-120 left-135",
    ];

    const dotPositions = [
        "-left-8", // Конструкторское бюро
        "-left-9.5", // Разработка
        "-left-8", // Производственная база
        "-left-8.5", // Гарантия
        "-left-10", // Сервис
    ];

    return (
        <section ref={sectionRef} className='h-[500vh] my-20'>
            <div className='h-dvh sticky top-0 w-full flex items-center justify-between p-30'>
                <div className='benefits_left'>
                    <div className='relative'>
                        <img src={sliderImage} alt='' />
                        <ul className='list-none'>
                            <ul className='list-none'>
                                {items.map((item, index) => {
                                    const isActive = index === activeIndex;

                                    return (
                                        <li
                                            key={item.id}
                                            className={`absolute ${positions[index]} whitespace-nowrap`}
                                        >
                                            <span
                                                className={`absolute ${dotPositions[index]} top-1 w-5 h-5 rounded-full border-2 border-[#fec80b] ${isActive ? "bg-[#fec80b]" : "bg-white"}
                `}
                                            />

                                            <button className='benefits__button text opacity-100'>
                                                {item.name}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ul>
                    </div>
                </div>

                <div className='flex w-[30%]'>
                    <div className='relative w-0.5 h-120'>
                        {/* Background line */}
                        <div className='absolute inset-0 bg-transparent rounded-lg'></div>

                        {/* Growing line */}
                        <div
                            className='absolute top-0 left-0 w-full bg-[#fec80b] rounded-lg'
                            style={{
                                height: `${progress * 100}%`,
                            }}
                        />
                    </div>

                    <div className='flex items-center w-full ml-5'>
                        <div className='flex flex-col border-amber-400 mb-2'>
                            <div className='mb-8'>
                                {ItemSvg && <ItemSvg.svg />}
                            </div>

                            <div>
                                <p className='max-w-[]'>{item.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollSlider;
