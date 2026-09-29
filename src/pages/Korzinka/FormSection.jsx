import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import ModalFull from "./ModalFull";

const FormSection = () => {
    const { t } = useTranslation();

    const modalInputs = t("products.modal.inputs", {
        returnObjects: true,
    });

    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClose = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        modalInputs.forEach((item) => {
            const value = formData[item.name];

            if (!value.trim()) {
                newErrors[item.name] = item.must;
            }

            setErrors(newErrors);

            if (!agreed) {
                newErrors.agreement = "Необходимо дать согласие";
            }

            if (Object.keys(newErrors).length === 0) {
                setErrors({});
                setAgreed(true);
                navigate("/success");
            }
        });
    };

    return (
        <section className='pt-15 flex flex-col md:flex-row items-center gap-20'>
            {/* Form */}
            <div className='rounded-lg px-6 pt-8 pb-6  md:w-[50%]'>
                <div className='relative flex flex-col items-center md:gap-5 w-full'>
                    <div className='text-2xl mb-6.5'>
                        <h1 className='text-[32px] font-medium'>
                            {t("korzinka.checkoutSection.title")}
                        </h1>
                    </div>

                    <form
                        className='w-full md:w-[70%] flex flex-col gap-2'
                        onSubmit={handleSubmit}
                    >
                        {modalInputs.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col w-full  relative'
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
                                                [item.name]: e.target.value,
                                            }));
                                        }}
                                    />
                                    {/*  */}
                                    {errors[item.name] && (
                                        <p className='text-[10px] text-red-500 whitespace-nowrap'>
                                            {errors[item.name]}
                                        </p>
                                    )}

                                    {/*  */}
                                </div>
                            );
                        })}
                        <div className={`flex items-center gap-3 mt-5`}>
                            <input
                                type='checkbox'
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className='size-5.5 accent-black '
                            />

                            <p className='text-sm leading-none text-gray-400'>
                                {t("products.modal.agreement.text")}
                                <a
                                    href='/upload/privacy_policy.pdf'
                                    className='text-indigo-600 hover:text-blue-800 ml-1'
                                >
                                    {t("products.modal.agreement.link")}
                                </a>
                            </p>
                        </div>

                        {errors.agreement && (
                            <p className='text-[10px] text-red-500'>
                                {errors.agreement}
                            </p>
                        )}

                        <div className='w-full mt-7'>
                            <Button
                                type='submit'
                                variant='btn_big_more'
                                className='w-full whitespace-nowrap'
                            >
                                {t(
                                    "korzinka.checkoutSection.anyQuestionsPart.button",
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='flex items-start flex-col md:mt-60'>
                <h1 className='text-3xl font-medium mb-2'>
                    {t(
                        "korzinka.checkoutSection.anyQuestionsPart.leftQuestions",
                    )}
                </h1>
                <p className='mb-4 max-w-80 opacity-30'>
                    {t(
                        "korzinka.checkoutSection.anyQuestionsPart.contactWithUs",
                    )}
                </p>

                <p className='max-w-80  opacity-30'>
                    {t(
                        "korzinka.checkoutSection.anyQuestionsPart.numberForStates",
                    )}
                </p>
                <p className='mb-4 max-w-80  opacity-30'>
                    {t(
                        "korzinka.checkoutSection.anyQuestionsPart.numberFotLocals",
                    )}
                </p>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className='border px-2 py-2 rounded w-full hover:text-white cursor-pointer transition duration-300 hover:bg-black'
                >
                    {t("korzinka.checkoutSection.anyQuestionsPart.button")}
                </button>
            </div>

            {isModalOpen && (
                <ModalFull
                    onClose={onClose}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </section>
    );
};

export default FormSection;
