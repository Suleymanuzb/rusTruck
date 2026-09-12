import { Trans, useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { remontImg } from "../../data/remontPage";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Anyquestions from "../../components/AnyQuestions/AnyQuestions";
import { div } from "motion/react-client";

const Remont = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Container>
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
                        {remontImg.part1.map((item) => {
                            return (
                                <div>
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
                        <Button variant='btn_big_more'>
                            {t("remontPage.advantages.Calcbutton")}
                        </Button>
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
                <div className='px-25 mt-6 flex flex-col min-[1000px]:flex-row w-full gap-4 h-120'>
                    {remontImg.beforeAfter.map((item, i) => {
                        return (
                            <ImgComparisonSlider
                                style={{
                                    "--divider-color": "#fec400",
                                    "--divider-width": "8px",
                                    width: "100%",
                                    height: "100%",
                                }}
                                key={i}
                                className={`rounded-lg overflow-hidden outline-none ${
                                    i === 0
                                        ? "basis-[70%] h-full"
                                        : "basis-[30%] h-full"
                                }`}
                            >
                                <img
                                    slot='first'
                                    src={item.before}
                                    alt={item.before}
                                    className='w-full h-full object-cover'
                                ></img>
                                <img
                                    slot='second'
                                    src={item.after}
                                    alt={item.after}
                                    className='w-full h-full object-cover'
                                ></img>

                                <div
                                    slot='handle'
                                    className='flex items-center justify-center w-10 h-10 bg-[#fec400] rounded-full border-2 border-white shadow-md focus:outline-none'
                                    style={{
                                        cursor: "ew-resize",
                                        pointerEvents: "auto",
                                    }}
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='18'
                                        height='18'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='white'
                                        strokeWidth='3'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    >
                                        <path d='m9 18-6-6 6-6' />
                                        <path d='m15 6 6 6-6 6' />
                                    </svg>
                                </div>
                            </ImgComparisonSlider>
                        );
                    })}
                </div>
                {/* part2 */}

                <div>
                    <h1 className='mt-5 mb-3 text-2xl font-medium text-xl sm:text-2xl'>
                        {t("remontPage.advantages.title")}
                    </h1>
                    <div className='flex flex-col gap-4 mt-2'>
                        {t("remontPage.advantages.prems", {
                            returnObjects: true,
                        }).map((item) => {
                            return (
                                <div className='flex'>
                                    <p className='font-thin w-2.5 h-2.5 mt-3.5 bg-[#fec400] inline-block transform rotate-45 mr-3'></p>
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
                        {remontImg.repairShopInterior.map((item) => {
                            return (
                                <img
                                    className='w-[33.333%]'
                                    src={item.img}
                                    alt={item.alt}
                                />
                            );
                        })}
                    </div>

                    <div className='flex items-center justify-center mt-6.25'>
                        <Button variant='btn_big'>
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
