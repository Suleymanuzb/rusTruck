import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Flex, Modal } from "antd";
import { Button as AntButton } from "antd";
import { createStaticStyles } from "antd-style";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ModalRemont = ({
    modalOpen,
    setModalOpen,
    modalFnOpen,
    setModalFnOpen,
}) => {
    const { t } = useTranslation();
    const formInfo = t("remontPage.modalInfo.form", { returnObjects: true });

    // form actions
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        formInfo.forEach((item) => {
            const value = formData[item.name];

            if (!value.trim()) {
                newErrors[item.name] = item.must;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setModalOpen(false);
            setErrors({});
            console.log("Form is valid");

            navigate("/success");
        }
    };

    // form actions

    const lineStyle = {
        lineHeight: "28px",
    };
    const classNames = createStaticStyles(({ css }) => ({
        container: css`
            border-radius: 10px;
            padding: 10px;
        `,
    }));
    const styles = {
        mask: {
            backgroundImage: `linear-gradient(to top, #18181b 0, rgba(21, 21, 22, 0.2) 100%)`,
        },
        body: {
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "6px",
            paddingRight: "6px",
        },
    };

    const sharedProps = {
        centered: true,
        classNames,
    };

    const stylesFn = (info) => {
        if (info.props.footer) {
            return {
                container: {
                    borderRadius: 14,
                    border: "1px solid #ccc",
                    padding: 0,
                    overflow: "hidden",
                },
                header: {
                    padding: 16,
                },
                body: {
                    padding: 16,
                },
                footer: {
                    padding: "16px 10px",
                    backgroundColor: "#fafafa",
                },
            };
        }
        return {};
    };

    const footer = (
        <>
            <AntButton
                onClick={() => setModalFnOpen(false)}
                styles={{
                    root: {
                        borderColor: "#ccc",
                        color: "#171717",
                        backgroundColor: "#fff",
                    },
                }}
            >
                Cancel
            </AntButton>
            <AntButton
                type='primary'
                styles={{ root: { backgroundColor: "#171717" } }}
                onClick={() => setModalOpen(true)}
            >
                Submit
            </AntButton>
        </>
    );

    return (
        <Flex gap='medium'>
            <Modal
                {...sharedProps}
                footer={null}
                styles={styles}
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <div className='bg-white'>
                    <h1 className='text-lg text-center sm:text-xl md:text-2xl font-bold mb-4'>
                        {t("remontPage.modalInfo.title")}
                    </h1>

                    <p className='sm:text-lg mb-5 text-center'>
                        {t("remontPage.modalInfo.leaveYourInfo")}
                    </p>
                    {/* form */}

                    <form
                        action='#'
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-5'
                    >
                        {t("remontPage.modalInfo.form", {
                            returnObjects: true,
                        }).map((item, i) => {
                            return (
                                <div key={i}>
                                    <label htmlFor={item.focus}>
                                        {item.label.replace(" <0>*</0>", "")}
                                        <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type={item.type}
                                        name={item.name}
                                        id={item.focus}
                                        placeholder={item.placeholder}
                                        value={formData[item.name]}
                                        onChange={(e) => {
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                [item.name]: e.target.value,
                                            }));
                                        }}
                                        className={`w-full h-10 border border-gray-300 rounded px-2 outline-none ${errors[item.name] ? "border-red-500" : "border-black"}`}
                                    />
                                    {errors[item.name] && (
                                        <p className='absolute text-[10px] text-red-500'>
                                            {errors[item.name]}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                        <div className='pt-3.75'>
                            <Button
                                type='submit'
                                variant='btn_big_more'
                                className='w-full cursor-pointer max-[500px]:px-2.5'
                            >
                                {t("remontPage.advantages.Calcbutton")}
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </Flex>
    );
};

export default ModalRemont;
