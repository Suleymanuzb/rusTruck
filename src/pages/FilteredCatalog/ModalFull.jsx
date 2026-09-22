import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
const { IconClose } = icons;
import Button from "../../components/Button/Button";
import { div } from "motion/react-client";

const ModalFull = ({ onClose }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        modalInputs.forEach((item) => {
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
            setErrors({});
            setAgreed(true);
            navigate("/success");
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div>
            <div className='fixed inset-0 z-70 bg-black/20'></div>

            <div className=' modal fixed z-100 w-80 md:min-w-120 bg-white top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg px-6 pt-8 pb-6'>
                <div onClick={onClose} className='absolute top-1 right-1'>
                    <span className='text-3xl cursor-pointer'>
                        <IconClose />
                    </span>
                </div>

                <div className='relative flex flex-col items-center md:gap-5 w-full'>
                    <div className='text-2xl'>
                        <h1 className='font-medium text-center w-full text-xl md:text-2xl'>
                            {t("products.modal.title")}
                        </h1>
                    </div>

                    <form
                        className='w-full md:w-[70%] flex flex-col md:gap-3'
                        onSubmit={handleSubmit}
                    >
                        {modalInputs.map((item, index) => {
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
                                        <p className='text-sm text-red-500'>
                                            {errors[item.name]}
                                        </p>
                                    )}

                                    {/*  */}
                                </div>
                            );
                        })}
                        <div
                            className={`flex gap-3 mt-1 ${!errors.agreement ? "mb-20" : "mb-20"}`}
                        >
                            <input
                                type='checkbox'
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className='size-7.5 accent-black '
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
                                {t("products.modal.getPk")}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalFull;
