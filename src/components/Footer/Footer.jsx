import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Footer = () => {
    const { t } = useTranslation();

    const [IsOpen, setIsOpen] = useState(false);
    const { error, setError } = useState("");

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

    // here will be - form codes
    const handleInputs = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    //

    const handleModal = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className='bg-black pt-15.5'>
            <Container className='relative'>
                <div className='grid grid-cols-14 text-white'>
                    <div className='col-span-5'>
                        {info.map((item, i) => {
                            if (item.type === "button") {
                                return (
                                    <Button
                                        key={i}
                                        onClick={handleModal}
                                        variant='btn_big'
                                        className='text-black mt-4 mb-6 cursor-pointer'
                                    >
                                        {item.text}
                                    </Button>
                                );
                            }

                            if (item.type === "disclaimer") {
                                return (
                                    <Fragment key={i}>
                                        {/* SVG Divider inserted between button & disclaimer */}
                                        <svg
                                            className='w-full text-gray-600 my-2'
                                            height='2'
                                            viewBox='0 0 100 2'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <line
                                                x1='0'
                                                y1='1'
                                                x2='100'
                                                y2='1'
                                                stroke='currentColor'
                                                strokeDasharray='4 4'
                                            />
                                        </svg>

                                        <p className='text-xs text-gray-400 opacity-80 leading-relaxed'>
                                            {item.text}
                                        </p>
                                    </Fragment>
                                );
                            }

                            return (
                                <div key={i} className='col-span-5  '>
                                    <Link to={item.to} className='mb-2'>
                                        {item.text}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <div className='col-span-3'>
                        {aboutUs.map((item, i) => {
                            if (item.type === "title") {
                                return (
                                    <h1 key={i} className='mb-8'>
                                        {item.text}
                                    </h1>
                                );
                            }

                            return (
                                <Link key={i} className='block'>
                                    {item.text}
                                </Link>
                            );
                        })}
                    </div>

                    <div className='col-span-3'>
                        {services.map((item, i) => {
                            return (
                                <Link className='block' key={i}>
                                    {item.text}
                                </Link>
                            );
                        })}
                    </div>

                    <div className='col-span-3'>
                        {media.map((item, i) => {
                            return (
                                <Link className='block' key={i}>
                                    {item.text}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {IsOpen && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 border-2 border-red-900'>
                        <div
                            onClick={() => setIsOpen(false)}
                            className='fixed inset-0 bg-black/50'
                        ></div>

                        <div className='modal z-10 bg-white rounded-lg px-5 pt-13 pb-8.5'>
                            <div className='p-4'>
                                <div className='flex flex-col items-center mb-6'>
                                    <h1 className='text-3xl font-medium'>
                                        {t("footer.inputTitle.orderCall")}
                                    </h1>
                                    <h4 className=''>
                                        {t("footer.inputTitle.getInTouch")}
                                    </h4>
                                </div>

                                <form
                                    action='#'
                                    className='flex flex-col items-center'
                                >
                                    <div className='p-4'>
                                        {inputs.map((input, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className='flex flex-col items-start w-full'
                                                >
                                                    <label
                                                        htmlFor={`footer-${input.htmlFor}`}
                                                        className='mt-4 w-full cursor-pointer'
                                                    >
                                                        {input.label}
                                                    </label>
                                                    <input
                                                        onChange={handleInputs}
                                                        type='text'
                                                        name={input.name}
                                                        value={
                                                            formData[input.name]
                                                        }
                                                        id={`footer-${input.htmlFor}`}
                                                        placeholder={
                                                            input.placeholder
                                                        }
                                                        className='outline-none border-[#fec400] rounded py-2 pl-3 pr-10 border w-full   [#fec400]/30'
                                                    />
                                                </div>
                                            );
                                        })}

                                        <div className='mt-4'>
                                            <input
                                                type='checkbox'
                                                name='agreement'
                                                id='agreement'
                                            />

                                            <label
                                                htmlFor='agreement'
                                                className='ml-2'
                                            >
                                                Я согласен с условиями
                                            </label>
                                        </div>

                                        <Button
                                            type='submit'
                                            variant='btn_big'
                                            className='mt-3 self-center w-full'
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
