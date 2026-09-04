import Container from "../Container/Container";
import Button from "../Button/Button";
import { Trans, useTranslation } from "react-i18next";
import feedbackImage from "../../assets/images/anyQuestions/anyQuestions-background.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AnyQuestions = () => {
    const { t } = useTranslation();
    const inputs = t("anyQuestions.inputs", {
        returnObjects: true,
    });

    const navigate = useNavigate();

    // for inputs
    const [errors, setErrors] = useState({});
    console.log(errors);

    const [formData, setFormData] = useState({
        name: "",
        tel: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        inputs.forEach((input) => {
            const value = formData[input.name];

            if (!value.trim()) {
                newErrors[input.name] = input.must;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setErrors({});
            console.log("Form is valid");

            navigate("/success");
        }
    };

    return (
        <div className='bg-[rgb(242,242,242)] pb-13 overflow-hidden mt-30'>
            <Container className='flex flex-col min-[1190px]:flex-row justify-between'>
                <div className='w-full md:w-[65%]'>
                    <div className='pt-30'>
                        <h2 className='text-4xl text-center md:text-start'>
                            {t("anyQuestions.extraQuest")}
                        </h2>
                        <p className='text-[14px] text-center md:text-start md:text-xl whitespace-nowrap'>
                            {t("anyQuestions.leaveContact")}
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='flex items-start gap-8 md:gap-5 flex-col md:flex-row mt-8'
                    >
                        {inputs.map((input, index) => {
                            return (
                                <div
                                    className='relative flex flex-col w-full'
                                    key={index}
                                >
                                    <label
                                        className='mb-1 leading-[110%]'
                                        htmlFor={input.htmlFor}
                                    >
                                        {input.label}
                                    </label>
                                    <input
                                        className={`p-2 border h-10 min-w-55 rounded bg-transparent text-black w-full outline-none ${errors[input.name] ? "border-red-500" : "border-black"}`}
                                        type={input.type}
                                        name={input.htmlFor}
                                        id={input.htmlFor}
                                        placeholder={input.placeholder}
                                        value={formData[input.name]}
                                        onChange={(e) => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                [input.name]: e.target.value,
                                            }));
                                        }}
                                    />
                                    {errors[input.name] && (
                                        <p className='text-[12px] xl:text-sm absolute bottom-[-30%] text-red-500 whitespace-nowrap'>
                                            {errors[input.name]}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                        <button
                            type='submit'
                            className='h-10 flex w-full px-8 min-[768px]:w-auto items-center justify-center self-end bg-[#FEC80B] hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none py-4 outline-none
                            '
                        >
                            {t("anyQuestions.sendButton")}
                        </button>
                    </form>

                    <p className='mt-6 whitespace-nowrap text-[12px] md:text-lg'>
                        <Trans
                            i18nKey='anyQuestions.agreement'
                            components={{
                                1: (
                                    <a
                                        href='/upload/privacy_policy.pdf'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='underline hover:no-underline text-purple-300'
                                    ></a>
                                ),
                            }}
                        ></Trans>
                    </p>
                </div>

                <div className='hidden min-[1200px]:block w-100 h-90 shrink-0'>
                    <img
                        className='object-left w-auto h-full max-w-none'
                        src={feedbackImage}
                    />
                </div>
            </Container>
        </div>
    );
};

export default AnyQuestions;
