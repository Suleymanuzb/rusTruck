import { Trans, useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { remontImg } from "../../data/remontPage";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Anyquestions from "../../components/AnyQuestions/AnyQuestions";
import { icons } from "../../assets/icons/icons";
import ModalRemont from "./Modal";
import { useState } from "react";
const { IconDiamond } = icons;

const Remont = () => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalFnOpen, setModalFnOpen] = useState(false);

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
                            <ModalRemont
                                modalOpen={modalOpen}
                                setModalOpen={setModalOpen}
                                modalFnOpen={modalFnOpen}
                                setModalFnOpen={setModalFnOpen}
                            />
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
                        <Button
                            variant='btn_big_more'
                            className='cursor-pointer max-[500px]:px-2.5'
                            onClick={() => setModalOpen(true)}
                        >
                            {t("remontPage.advantages.Calcbutton")}
                        </Button>

                        {modalOpen && (
                            <ModalRemont
                                modalOpen={modalOpen}
                                setModalOpen={setModalOpen}
                                modalFnOpen={modalFnOpen}
                                setModalFnOpen={setModalFnOpen}
                            />
                        )}
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
