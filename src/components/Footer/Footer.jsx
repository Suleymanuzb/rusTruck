import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import qrCodeImg from "../../assets/images/footer/qr.svg";
import { icons } from "../../assets/icons/icons";
const { IconClose, IconChevronDown } = icons;

import max from "../../assets/images/footer/social-media/max-messenger-sign-logo.svg";
import telegram from "../../assets/images/footer/social-media/telegram.svg";
import vk from "../../assets/images/footer/social-media/VK_com-logo.svg";
import rutube from "../../assets/images/footer/social-media/Rutube_icon.png";
import youtube from "../../assets/images/footer/social-media/YouTube_full-color_icon.png";
import yandexZen from "../../assets/images/footer/social-media/Yandex_Zen_logo_icon.png";
import FooterDropDown from "./FooterDropDown";

const Footer = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false);

    const [isDropDown, setIsDropDown] = useState(false);

    const [openAboutUs, setOpenAboutUs] = useState(false);
    const [openMedia, setOpenMedia] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        tel: "",
    });

    const info = t("footer.mainInfo", {
        returnObjects: true,
    });

    const aboutUs = t("footer.aboutUs", {
        returnObjects: true,
    });

    const services = t("footer.services", {
        returnObjects: true,
    });
    const media = t("footer.media", {
        returnObjects: true,
    });

    const inputs = t("footer.inputs", {
        returnObjects: true,
    });

    const handleCloseModal = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        inputs.forEach((input) => {
            const value = formData[input.name];

            if (!value.trim()) {
                newErrors[input.name] = input.must;
            }
        });

        if (!agreed) {
            newErrors.agreement = "Необходимо дать согласие";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsOpen(false);
            setAgreed(true);
            setErrors({});
            console.log("Form is valid");

            navigate("/success");
        }
    };

    const handleDropDown = () => {
        setIsDropDown((prev) => !prev);
        console.log(isDropDown);
        setOpenAboutUs((prev) => !prev);
    };

    const handleMediaDropDown = () => {
        setOpenMedia((prev) => !prev);
    };

    return (
        <div
            data-aos='fade-up'
            className='bg-black pt-8 md:pt-15.5 pb-14 md:pb-10'
        >
            <Container className='relative'>
                <div className='grid  md:grid-cols-14 gap-x-10 text-white'>
                    <div className='col-span-5'>
                        {info.map((item, i) => {
                            if (item.type === "button") {
                                return (
                                    <Button
                                        key={i}
                                        onClick={handleCloseModal}
                                        variant='btn_big'
                                        className='text-black mt-4 mb-6 cursor-pointer bg-[#FEC80B] hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded-md leading-none px-8 py-3.5'
                                    >
                                        {item.text}
                                    </Button>
                                );
                            }

                            if (item.type === "disclaimer") {
                                return (
                                    <Fragment key={i}>
                                        {/* SVG Divider inserted between button & disclaimer */}
                                        <div className='mb-3'>
                                            <img
                                                className='w-45 h-36'
                                                src={qrCodeImg}
                                            />
                                        </div>
                                    </Fragment>
                                );
                            }

                            return (
                                <div key={i} className='col-span-5'>
                                    <Link to={item.to} className='mb-2'>
                                        {item.text}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <div className='col-span-3 flex flex-col gap-3'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <h1 onClick={handleDropDown}>
                                {aboutUs[0].title}{" "}
                            </h1>

                            <span
                                onClick={handleDropDown}
                                className={`md:hidden cursor-pointer inline-block items-center justify-center text-xl opacity-50 transform duration-300 ${isDropDown ? "-rotate-180" : "rotate-0"}`}
                            >
                                <IconChevronDown />
                            </span>
                        </div>

                        <FooterDropDown openDropDown={openAboutUs}>
                            {aboutUs.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className='flex items-start gap-2 '
                                    >
                                        <Link to={item.to} className='mb-3.5'>
                                            {item.text}
                                        </Link>
                                    </div>
                                );
                            })}
                        </FooterDropDown>
                    </div>

                    <div className='hidden mt-12 md:flex flex-col gap-3  col-span-3'>
                        {services.map((item, i) => {
                            return (
                                <Link className='block' key={i}>
                                    {item.text}
                                </Link>
                            );
                        })}
                    </div>

                    <div className='col-span-3  flex flex-col gap-3'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <h1 onClick={handleMediaDropDown}>
                                {media[0].title}{" "}
                            </h1>

                            <span
                                onClick={handleMediaDropDown}
                                className={`md:hidden cursor-pointerinline-block items-center justify-center text-xl opacity-50 transform duration-300 ${openMedia ? "-rotate-180" : "rotate-0"}`}
                            >
                                <IconChevronDown />
                            </span>
                        </div>
                        <FooterDropDown openDropDown={openMedia}>
                            {media.map((item, i) => {
                                if (item.type === "title") {
                                    return (
                                        <h1 key={i} className='mb-3.5'>
                                            {item.text}
                                        </h1>
                                    );
                                }

                                return (
                                    <Link className='block' key={i}>
                                        {item.text}
                                    </Link>
                                );
                            })}
                        </FooterDropDown>
                    </div>
                </div>

                <div className='max-[768px]:flex max-[768px]:flex-col-reverse max-[768px]:gap-5 grid md:grid-cols-6 mt-10 md:flex md:justify-between lg:justify-normal lg:gap-35'>
                    <div className='text-white col-span-3'>
                        {info.map((item, i) => {
                            if (item.type === "disclaimerOne")
                                return (
                                    <p className='text-sm opacity-40' key={i}>
                                        {item.text}
                                    </p>
                                );
                        })}
                        {info.map((item, i) => {
                            if (item.type === "disclaimer")
                                return (
                                    <p
                                        className='max-w-110 text-sm opacity-40'
                                        key={i}
                                    >
                                        {item.text}
                                    </p>
                                );
                        })}
                    </div>

                    <div className='text-white col-span-3 flex items-center gap-2'>
                        <div className='w-7.5 h-7.5'>
                            <img
                                className='w-full h-full object-cover'
                                src={max}
                                alt='social-media'
                            />
                        </div>

                        <div className='w-7.5 h-7.5'>
                            <img
                                className='w-full h-full object-cover'
                                src={telegram}
                                alt='social-media'
                            />
                        </div>

                        <div className='w-7.5 h-7.5'>
                            <img
                                className='w-full h-full object-cover'
                                src={vk}
                                alt='social-media'
                            />
                        </div>

                        <div className='w-7.5 h-7.5'>
                            <img
                                className='w-full h-full object-cover'
                                src={rutube}
                                alt='social-media'
                            />
                        </div>

                        <div className='w-7.5 h-7.5'>
                            <img
                                className='w-full h-full object-cover'
                                src={youtube}
                                alt='social-media'
                            />
                        </div>

                        <div className='w-7.5 h-7.5'>
                            <img
                                className='w-full h-full object-cover'
                                src={yandexZen}
                                alt='social-media'
                            />
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className='fixed z-50 inset-0 flex items-center justify-center p-4'>
                        <div
                            onClick={handleCloseModal}
                            className='fixed inset-0  bg-black/50'
                        ></div>

                        <div className='modal fixed z-10 w-80 md:min-w-120 bg-white top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg px-6 pt-8 pb-6'>
                            <div
                                onClick={handleCloseModal}
                                className='absolute top-1 right-1'
                            >
                                <span className='text-3xl cursor-pointer'>
                                    <IconClose />
                                </span>
                            </div>

                            <div className='relative flex flex-col items-center md:gap-5 w-full'>
                                <div className='text-2xl'>
                                    <h1 className='font-medium text-center w-full text-xl md:text-2xl'>
                                        {t("footer.inputTitle.orderCall")}
                                    </h1>
                                    <h4 className='font-medium text-center w-full text-sm'>
                                        {t("footer.inputTitle.getInTouch")}
                                    </h4>
                                </div>

                                <form
                                    className='w-full md:w-[70%] flex flex-col md:gap-3'
                                    onSubmit={handleSubmit}
                                >
                                    {inputs.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='flex flex-col w-full mt-1'
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
                                                    placeholder={
                                                        item.placeholder
                                                    }
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
                                    })}
                                    <div
                                        className={`flex gap-3 mt-1 ${!errors.agreement ? "mb-20" : "mb-0"}`}
                                    >
                                        <input
                                            type='checkbox'
                                            checked={agreed}
                                            onChange={(e) =>
                                                setAgreed(e.target.checked)
                                            }
                                            className='size-7.5 accent-black '
                                        />

                                        <p className='text-sm leading-none text-gray-400'>
                                            {t("products.modal.agreement.text")}
                                            <a
                                                href='/upload/privacy_policy.pdf'
                                                className='text-indigo-600 hover:text-blue-800 ml-1'
                                            >
                                                {t(
                                                    "products.modal.agreement.link",
                                                )}
                                            </a>
                                        </p>
                                    </div>

                                    {errors.agreement && (
                                        <p className='text-sm text-red-500 mb-3'>
                                            {errors.agreement}
                                        </p>
                                    )}

                                    <div className='w-full'>
                                        <Button
                                            type='submit'
                                            variant='btn_big_more'
                                            className='w-full whitespace-nowrap'
                                        >
                                            {t("footer.button")}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Footer;
