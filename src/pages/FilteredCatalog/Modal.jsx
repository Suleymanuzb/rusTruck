import { Flex, Modal } from "antd";
import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import "./modal.css";
import Button from "../../components/Button/Button";

const ModalIsAvailable = ({ open, onClose, truck, truckCurrentLang }) => {
    const { t } = useTranslation();

    const modalInputs = t("truckDetailsForm.form", { returnObjects: true });
    const [ready, setReady] = useState(false);
    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        tel: "",
    });

    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        modalInputs.forEach((item) => {
            if (!item.name) return;

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
            setAgreed(false);
            console.log("Form is valid");
            setReady(true);
        }
    };

    const sharedContent = (
        <div
            className={`relative px-5 pt-13 pb-9 rounded-lg ${ready ? "bg-[#fec400]" : ""}`}
        >
            {ready && (
                <div className='px-5 w-full absolute top-1/2  z-50 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center'>
                    <h1 className='text-2xl font-medium'>
                        {t("truckDetailsForm.success.title")}
                    </h1>
                    <p className='mt-2 text-base max-w-110 text-center'>
                        {t("truckDetailsForm.success.text")}
                    </p>

                    <div className='mt-17'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='border px-25 py-2 rounded active:bg-black cursor-pointer active:text-white active:border-black ouline-none'
                        >
                            {t("truckDetailsForm.success.button")}
                        </button>
                    </div>
                </div>
            )}

            <div className={`flex flex-col ${ready ? "opacity-0" : ""}`}>
                <div>
                    <h1 className='text-2xl font-medium mb-4'>
                        {t("truckDetailsForm.title")}
                    </h1>
                </div>

                <div className='flex items-center gap-3 border-gray-200 rounded mb-8'>
                    <div>
                        <img
                            className='w-45 h-20 object-cover'
                            src={truck.images.image}
                            alt='truck'
                        />
                    </div>
                    <div className=''>
                        <h1 className='text-base'>
                            {truckCurrentLang.truckType}
                        </h1>
                    </div>
                </div>

                <form
                    className='p-2 max-w-80 w-full mx-auto'
                    onSubmit={handleSubmit}
                >
                    {t("truckDetailsForm.form", { returnObjects: true }).map(
                        (item, i) => {
                            return (
                                <div key={i} className='flex flex-col relative'>
                                    <label
                                        className='mb-1.25'
                                        htmlFor={item.focus}
                                    >
                                        {item.label}
                                    </label>
                                    {item.label && (
                                        <input
                                            placeholder={item.placeholder}
                                            className={`border p-1.5 outline-none rounded focus:border-[#fec400] focus:shadow-[0_0_6px_rgba(254,196,0,0.6)] border-gray-300 mb-3`}
                                            type={item.type}
                                            name={item.name}
                                            id={item.focus}
                                            value={formData[item.name]}
                                            onChange={(e) =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    [item.name]: e.target.value,
                                                }))
                                            }
                                        />
                                    )}

                                    {errors[item.name] && (
                                        <p className='absolute text-[10px] text-red-400 bottom-[-3%] left-0 '>
                                            {errors[item.name]}
                                        </p>
                                    )}
                                </div>
                            );
                        },
                    )}

                    <div className='flex gap-2  max-w-80 w-full mx-auto p-2 relative'>
                        <input
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className='rounded cursor-pointer transform duration-300 appearance-none border w-6 h-5 checked:bg-black checked:after:text-white checked:after:content-["✓"] checked:flex checked:items-center checked:justify-center checked:text-xl'
                            type='checkbox'
                        />

                        <div className='w-full'>
                            <p className='w-full text-[10px] leading-[110%]'>
                                <Trans
                                    defaults={t("truckDetailsForm.agreement")}
                                    components={[
                                        <a
                                            href='https://rtrf.ru/upload/privacy_policy.pdf'
                                            className='underline'
                                        />,
                                    ]}
                                />
                            </p>
                        </div>

                        {errors.agreement && (
                            <p className='absolute text-[10px] text-red-400 bottom-[-35%] left-0 '>
                                {errors.agreement}
                            </p>
                        )}
                    </div>

                    <div className='mt-7  w-full flex items-center justify-center'>
                        <button
                            type='submit'
                            className='bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded leading-none py-3 w-full'
                        >
                            {t("truckDetailsForm.button")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    const sharedProps = {
        centered: true,
    };

    return (
        <Flex gap='medium'>
            <Modal
                {...sharedProps}
                mask={{ enabled: true, blur: true }}
                open={open}
                onOk={onClose}
                onCancel={onClose}
                footer={null}
            >
                {sharedContent}
            </Modal>
        </Flex>
    );
};
export default ModalIsAvailable;
