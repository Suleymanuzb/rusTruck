import sliderImage from "../../assets/images/sliderImage/benefits.png";

const ScrollSlider = () => {
    return (
        <div className='flex items-center justify-between p-30 py-20'>
            <div className='benefits_left'>
                <div className='relative'>
                    <img src={sliderImage} alt='' />
                    <ul className='list-none'>
                        <li className='absolute top-10 left-115 whitespace-nowrap'>
                            <button className='benefits__button text opacity-100'>
                                Конструкторское бюро
                            </button>
                        </li>
                        <li className='absolute top-28 left-135 whitespace-nowrap'>
                            <button>Разработка</button>
                        </li>
                        <li className='absolute top-65 left-150 whitespace-nowrap'>
                            <button>Производственная база</button>
                        </li>
                        <li>
                            <button>Гарантия</button>
                        </li>
                        <li>
                            <button>Сервис</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-[20%]'>
                <p>hellow how are you</p>
                <p>hellow how are you</p>
                <p>hellow how are you</p>
                <p>hellow how are you</p>
            </div>
        </div>
    );
};

export default ScrollSlider;
