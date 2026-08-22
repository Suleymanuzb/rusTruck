// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import trucks from "../../data/truckData";
import { forwardRef, useEffect, useState } from "react";
import Button from "../Button/Button";
import { icons } from "../../assets/icons/icons";
import { useNavigate, Link } from "react-router-dom";
const { IconHeart } = icons;

const ProductSliders = forwardRef(({ currentLang }, ref) => {
    const [isOpen, setIsopen] = useState(false);
    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        currentLang.products.modal.inputs.forEach((item) => {
            const value = formData[item.name];

            if (!value.trim()) {
                newErrors[item.name] = item.must;
            }
        });

        if (!agreed) {
            newErrors.agreement = "Необходимо дать согласие";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // submit form
            setIsSuccess(true);
            setIsopen(false);
            setAgreed(false);
            setErrors({});
            console.log("Form is valid");

            navigate("/success");
        }
    };

    const language = currentLang.language;

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleOpenModal = () => setIsopen(true);

    const handleCloseModal = () => setIsopen(false);

    console.log(isOpen);

    return (
        <div className='relative'>
            {isOpen && <div className='fixed inset-0 z-10 bg-black/50'></div>}

            <Swiper
                className='mySwiper rounded-tr-lg rounded-tl-lg relative!'
                onSwiper={(swiper) => {
                    ref.current = swiper;
                }}
                spaceBetween={15}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {trucks.map((truck, id) => {
                    return (
                        <SwiperSlide
                            key={id}
                            className='h-auto! bg-transparent'
                        >
                            <div className='relative h-full'>
                                <div className='relative'>
                                    <Link to={`/catalog/krany-manipula`}>
                                        <img
                                            className='w-full block aspect-12/10 object-cover'
                                            src={truck.images.image}
                                        />
                                    </Link>

                                    <div className='hidden md:absolute top-[1.5%] right-[2%]'>
                                        <span className='text-transparent hover:text-[#fec80b] cursor-pointer'>
                                            <IconHeart />
                                        </span>
                                    </div>
                                </div>

                                <div className='bg-white px-0.5 py-2 min-[500px]:px-3 sm:py-4'>
                                    <div>
                                        <a className='md:text-center xl:text-start mb-4 line-clamp-2 text-[14px]  min-[1200px]:text-lg w-full'>
                                            {truck[language].truckType}
                                        </a>
                                        <p className='text-center md:text-start font-medium leading-[1.18] mb-3 md:text-xl'>
                                            {truck[language].price}
                                        </p>
                                    </div>
                                    <div className='max-[1360px]:flex max-[1360px]:items-center max-[1360px]:flex-col min-[1360px]:flex min-[1360px]:items-center min-[1360px]:gap-3 '>
                                        <Button
                                            variant='btn_big'
                                            className='w-full max-[1360px]:mb-3 py-2.5 font-normal text-sm'
                                        >
                                            {truck?.[language]?.buttons?.more}
                                        </Button>
                                        <Button
                                            onClick={handleOpenModal}
                                            className='flex gap-2.5 cursor-pointer  whitespace-nowrap'
                                            variant='getKp'
                                            arrowDown='true'
                                        >
                                            {truck[language].buttons.getPk}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {isOpen && (
                <div className='modal fixed z-10 w-120 bg-white top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg border px-6 pt-8 pb-6'>
                    <div
                        onClick={handleCloseModal}
                        className='absolute top-3 right-3'
                    >
                        <span className='text-3xl cursor-pointer'>X</span>
                    </div>

                    <div className='relative flex flex-col items-center gap-11 justify-center w-full'>
                        <div className='text-2xl'>
                            <h1 className='font-medium text-center'>
                                {currentLang.products.modal.title}
                            </h1>
                        </div>

                        <form className='w-[70%]' onSubmit={handleSubmit}>
                            {currentLang.products.modal.inputs.map(
                                (item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className='flex flex-col w-full'
                                        >
                                            <label
                                                className='mb-1.25 text-sm'
                                                htmlFor={item.name}
                                            >
                                                {item.label}
                                            </label>
                                            <input
                                                id={item.name}
                                                name={item.name}
                                                className='outline-none border border-[#a2a2a2] rounded focus:border-[#fec80b] focus:shadow-[0_0_4px_#fec80b] transform duration-300 placeholder:text-gray-400 py-3 pl-3 pr-10.25'
                                                type={item.type}
                                                placeholder={item.placeholder}
                                                value={formData[item.name]}
                                                onChange={(e) => {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        [item.name]:
                                                            e.target.value,
                                                    }));
                                                }}
                                            />
                                            {/*  */}
                                            {errors[item.name] && (
                                                <p className='text-sm text-red-500'>
                                                    {errors[item.name]}
                                                </p>
                                            )}

                                            {/*  */}
                                        </div>
                                    );
                                },
                            )}
                            <div className='flex gap-3 mb-14'>
                                <input
                                    type='checkbox'
                                    checked={agreed}
                                    onChange={(e) =>
                                        setAgreed(e.target.checked)
                                    }
                                    className='size-7.5 accent-black '
                                />
                                <p className='text-sm leading-none text-gray-400'>
                                    {currentLang.products.modal.agreement.text}
                                    <a
                                        href='/upload/privacy_policy.pdf'
                                        className='text-indigo-600 hover:text-blue-800 ml-1'
                                    >
                                        {
                                            currentLang.products.modal.agreement
                                                .link
                                        }
                                    </a>
                                </p>
                            </div>

                            {errors.agreement && (
                                <p className='text-sm text-red-500'>
                                    {errors.agreement}
                                </p>
                            )}

                            <div className='w-full'>
                                <Button
                                    type='submit'
                                    variant='btn_big_more'
                                    className='w-full'
                                >
                                    {currentLang.products.modal.getPk}
                                </Button>
                            </div>
                        </form>

                        <p>{JSON.stringify(formData)}</p>
                    </div>
                </div>
            )}
        </div>
    );
});

export default ProductSliders;
