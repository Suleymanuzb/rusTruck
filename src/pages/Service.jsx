import { useTranslation } from "react-i18next";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Container from "../components/Container/Container";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import AnyQuestions from "../components/AnyQuestions/AnyQuestions";
import p from "../assets/images/service/p.png";

const Service = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Container>
                <Breadcrumbs />
                <h1 className='max-w-200 text-3xl font-medium mb-8'>
                    {t("servicePage.part.title")}
                </h1>
                <div className='flex gap-10'>
                    {/*  */}
                    <div className=' lg:w-[70%]'>
                        <div className='w-full lg:pr-12.5'>
                            <div className="border flex gap-20">
                                <p>{t("servicePage.part.text")}</p>

                                  <div className='hidden md:flex flex-col lg:hidden  md:items-center rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.08),0_10px_20px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.04)] h-95.5 md:h-115  px-2 py-4 sm:p-6'>
                            <div className='w-38 h-38 self-center'>
                                <img
                                    className='w-full h-full object-cover overflow-hidden rounded-[99999px]'
                                    src={p}
                                    alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center mt-2'>
                                <div className='text-center'>
                                    <h1>Amanov Suleyman</h1>
                                    <p>
                                        менеджер по вопросам гарантии и
                                        сервисного обслуживания
                                    </p>
                                </div>
                            </div>
                            <div className='text-center mt-auto!'>
                                <p>(831) 225-00-55 (доб 124)</p>
                                <p>kb1@rtrf.ru</p>
                            </div>
                        </div>
                            </div>
                        </div>

                        <div className='mt-18 w-[85%]'>
                            <h1 className='mb-8 text-2xl font-medium'>
                                {t("servicePage.support.title")}
                            </h1>

                            <div>
                                {t("servicePage.support.texts", {
                                    returnObjects: true,
                                }).map((item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='flex my-8 gap-4'
                                        >
                                            <p className='p-5 bg-[#fec400] rounded-full h-8 w-8 flex items-center justify-center -mt-1 font-medium text-xl'>
                                                {item.number}
                                            </p>
                                            <p>
                                                <Trans
                                                    i18nKey={`servicePage.support.texts.${i}.text`}
                                                    components={{
                                                        1: (
                                                            <Link
                                                                to={item.href}
                                                                className='underline'
                                                            />
                                                        ),
                                                    }}
                                                />
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='flex flex-col gap-8.5 w-full mt-10 mb-10'>
                                <h1 className='w-full'>
                                    {t("servicePage.support.theyWillContact")}
                                </h1>

                                <p>{t("servicePage.support.anyQuestions")}</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div className='lg:block w-[30%] hidden'>
                        <div className='hidden lg:flex flex-col  md:items-center rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.08),0_10px_20px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.04)] h-95.5 md:h-115  px-2 py-4 sm:p-6'>
                            <div className='w-38 h-38 self-center'>
                                <img
                                    className='w-full h-full object-cover overflow-hidden rounded-[99999px]'
                                    src={p}
                                    alt=''
                                />
                            </div>
                            <div className='flex flex-col items-center mt-2'>
                                <div className='text-center'>
                                    <h1>Amanov Suleyman</h1>
                                    <p>
                                        менеджер по вопросам гарантии и
                                        сервисного обслуживания
                                    </p>
                                </div>
                            </div>
                            <div className='text-center mt-auto!'>
                                <p>(831) 225-00-55 (доб 124)</p>
                                <p>kb1@rtrf.ru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <AnyQuestions />
        </div>
    );
};

export default Service;
