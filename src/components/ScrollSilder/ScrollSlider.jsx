import { useState } from "react";
import sliderImage from "../../assets/images/sliderImage/benefits.png";
import lineSvg from "../../data/sliderLinePart";

const ScrollSlider = ({ currentLang }) => {

  const [scroll, setScroll] = useState(0);
  

    const item = currentLang?.scrollSlider?.linePart?.[0];
    const ItemSvg = lineSvg?.find((svg) => svg.id === item?.id);
    console.log(ItemSvg);

    return (
        <div className='flex items-center justify-between p-30 py-20'>
            <div className='benefits_left'>
                <div className='relative'>
                    <img src={sliderImage} alt='' />
                    <ul className='list-none'>
                        <li className='before:block before:absolute before:-left-8 before:top-1 before:rounded-full before:content-[""] before:w-5 before:h-5 before:bg-[#fec80b]  absolute top-10 left-115 whitespace-nowrap'>
                            <button className='benefits__button text opacity-100'>
                                Конструкторское бюро
                            </button>
                        </li>
                        <li className='before:block before:absolute before:-left-9.5 before:top-1 before:rounded-full before:content-[""] before:w-5 before:h-5 before:border-2 before:bg-white before:border-[#fec80b] absolute top-35 left-142 whitespace-nowrap'>
                            <button className='benefits__button text opacity-100'>
                                Разработка
                            </button>
                        </li>
                        <li className='before:block before:absolute before:-left-8 before:top-1 before:rounded-full before:content-[""] before:w-5 before:h-5 before:border-2 before:bg-white before:border-[#fec80b] absolute top-65 left-150 whitespace-nowrap'>
                            <button className='benefits__button text opacity-100'>
                                Производственная база
                            </button>
                        </li>
                        <li className='before:block before:absolute before:-left-8.5 before:top-0 before:rounded-full before:content-[""] before:w-5 before:h-5 before:border-2 before:bg-white before:border-[#fec80b] absolute top-94 left-148 whitespace-nowrap'>
                            <button>Гарантия</button>
                        </li>
                        <li className='before:block before:absolute before:-left-9.5 before:top-0 before:rounded-full before:content-[""] before:w-5 before:h-5 before:border-2 before:bg-white before:border-[#fec80b] absolute top-120 left-135 whitespace-nowrap'>
                            <button>Сервис</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex w-[20%] gap-5'>
                <div className='w-5 bg-[#fec80b] h-120 ml-10 rounded-lg'></div>

                <div>
                    <div className='flex flex-col border-amber-400 mb-2'>
                        <div className='mb-8'>
                            <ItemSvg.svg />
                        </div>

                        <div>
                            <p>{item.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollSlider;
