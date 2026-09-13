import { Trans, useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { remontImg } from "../../data/remontPage";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Anyquestions from "../../components/AnyQuestions/AnyQuestions";
import { icons } from "../../assets/icons/icons";
import { useState } from "react";
const { IconDiamond } = icons;
import { Flex, Modal } from "antd";
import { Button as AntButton } from "antd";
import { createStaticStyles } from "antd-style";

const Remont = () => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalFnOpen, setModalFnOpen] = useState(false);

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
        <div>
            <Container className='max-[500px]:px-4'>
                <Breadcrumbs />
                {/* part1 */}
                <div>
                    <div>
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-medium mb-8'>
                            {t("remontPage.intro.title")}
                        </h1>
                        <p className='text-lg'>{t("remontPage.intro.text")}</p>
                    </div>

                    {/* 2 first images */}
                    <div className='flex flex-col items-center min-[1050px]:flex-row justify-center mb-6 gap-3 mt-5'>
                        {remontImg.part1.map((item, i) => {
                            return (
                                <div key={i}>
                                    <img
                                        className='w-130 rounded-lg aspect-33/17'
                                        src={item.img}
                                        alt={item.alt}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className='flex items-center justify-center'>
                        <Button
                            onClick={() => setModalOpen(true)}
                            className='whitespace-nowrap text-extrabold! max-[380px]:px-4 cursor-pointer'
                            variant='btn_big_more'
                        >
                            {t("remontPage.advantages.Calcbutton")}
                        </Button>

                        {/* modal when the button clicked opens */}
                        {modalOpen && (
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
                                        <h1 className='text-2xl font-bold mb-4'>
                                            {t("remontPage.modalInfo.title")}
                                        </h1>

                                        <p className='text-lg mb-5 text-center'>
                                            {t(
                                                "remontPage.modalInfo.leaveYourInfo",
                                            )}
                                        </p>
                                        {/* form */}

                                        <form action=''>
                                            {t("remontPage.modalInfo.form", {
                                                returnObjects: true,
                                            }).map((item) => {
                                                return (
                                                    <div>
                                                        <label
                                                            htmlFor={item.focus}
                                                        >
                                                            {item.label.replace(
                                                                " <0>*</0>",
                                                                "",
                                                            )}
                                                            <span className='text-red-700'>
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            type={item.type}
                                                            name={item.name}
                                                            id={item.focus}
                                                            placeholder={
                                                                item.placeholder
                                                            }
                                                            className='w-full h-10 border border-gray-300'
                                                        />
                                                    </div>
                                                );
                                            })}
                                            <div className='pt-3.75'>
                                                <Button
                                                    type='submit'
                                                    variant='btn_big_more'
                                                    className='w-full cursor-pointer'
                                                >
                                                    {t(
                                                        "remontPage.advantages.Calcbutton",
                                                    )}
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </Modal>
                            </Flex>
                        )}

                        {/* modal when the button clicked opens */}
                    </div>
                </div>
                {/* part1 */}

                {/* part2 */}
                <div className='text-lg'>
                    <h1 className='mt-5 mb-3 text-xl sm:text-2xl font-medium'>
                        {t("remontPage.ourServices.title")}
                    </h1>
                    <p>{t("remontPage.ourServices.text")}</p>
                    <p>
                        <Trans
                            i18nKey='remontPage.ourServices.important'
                            components={{
                                0: <strong />,
                            }}
                        />
                    </p>
                </div>

                {/* before after images */}
                <div className='lg:px-20 mt-6 flex flex-col items-center min-[1000px]:flex-row w-full gap-10 min-[1000px]:h-120'>
                    {remontImg.beforeAfter.map((item, i) => (
                        <ImgComparisonSlider
                            key={i}
                            className={`text-center  rounded-lg overflow-hidden outline-none ${
                                i === 0
                                    ? "w-full min-[1000px]:w-147.5 min-[1000px]:shrink-0"
                                    : "w-[85%] min-[1000px]:w-75 min-[1000px]:shrink-0"
                            }`}
                            style={{
                                "--divider-color": "#fec400",
                                "--divider-width": "8px",
                                height: "100%",
                                minHeight: 0,
                            }}
                        >
                            <img
                                slot='first'
                                src={item.before}
                                alt={item.before}
                                className='w-full h-full object-cover'
                            />

                            <img
                                slot='second'
                                src={item.after}
                                alt={item.after}
                                className='w-full object-cover'
                                style={{ height: "480px" }}
                            />

                            <div
                                slot='handle'
                                className='flex items-center justify-center w-5 h-5 md:w-10 md:h-10 bg-[#fec400] rounded-full border-2 border-white shadow-md'
                            >
                                {/* svg */}
                            </div>
                        </ImgComparisonSlider>
                    ))}
                </div>
                {/* part2 */}

                <div>
                    <h1 className=' mt-5 mb-3 font-medium text-xl sm:text-2xl'>
                        {t("remontPage.advantages.title")}
                    </h1>
                    <div className='flex flex-col gap-4 mt-2 mb-2.5'>
                        {t("remontPage.advantages.prems", {
                            returnObjects: true,
                        }).map((item, i) => {
                            return (
                                <div key={i} className='flex'>
                                    <span className='mt-1 mr-1'>
                                        {<IconDiamond />}
                                    </span>
                                    <p className='font-normal'>{item.prem}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        <img
                            src={remontImg.repairShop.img}
                            alt={remontImg.repairShop.alt}
                        />
                    </div>
                    <div className='flex mt-5'>
                        {remontImg.repairShopInterior.map((item, i) => {
                            return (
                                <img
                                    key={i}
                                    className='w-[33.333%]'
                                    src={item.img}
                                    alt={item.alt}
                                />
                            );
                        })}
                    </div>

                    <div className='flex items-center justify-center mt-6.25'>
                        <Button variant='btn_big_more'>
                            {t("remontPage.advantages.Calcbutton")}
                        </Button>
                    </div>
                </div>

                <div className='pb-30'>
                    <h1 className='mt-5 mb-3 font-medium text-xl sm:text-2xl'>
                        {t("remontPage.advantages.extraService.title")}
                    </h1>
                    <p className=''>
                        {t("remontPage.advantages.extraService.text")}
                    </p>
                </div>
            </Container>
            <Anyquestions />
        </div>
    );
};

export default Remont;
