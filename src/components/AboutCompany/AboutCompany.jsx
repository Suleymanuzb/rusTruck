import { useEffect } from "react";
import aboutCompanyImage from "../../assets/images/aboutComapny/aboutCompany.png";
import Button from "../Button/Button";
import Container from "../Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const AboutCompany = () => {
    const { t } = useTranslation();
    const aboutCompanyParahraphs = t("aboutCompany.intro.paragraphs", {
        returnObjects: true,
    });

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Container className='pt-20'>
            <div className='flex flex-col min-[1200px]:flex-row'>
                <div className='flex flex-col items-start  sm:w-[75%] min-[1200px]:w-[45%]'>
                    <h1
                        data-aos='fade-right'
                        className='font-medium text-[42px] leading-[1.19] mb-5.5'
                        dangerouslySetInnerHTML={{
                            __html: t("aboutCompany.intro.title"),
                        }}
                    ></h1>
                    {aboutCompanyParahraphs.map((p, index) => {
                        return (
                            <div key={index}>
                                <p
                                    data-aos='fade-right'
                                    className={`text-lg ${p.text.includes("Наша компания") ? "mb-10" : "mb-16"}`}
                                >
                                    {p.text}
                                </p>
                            </div>
                        );
                    })}
                    <Button
                        data-aos='zoom-out-up'
                        data-aos-duration='1000'
                        variant='btn_big_more'
                        arrow='right'
                        className='hidden lg:flex items-center [&>span]:text-4xl text-xl font-light [&>span]:ml-2 [&>span]:font-thin'
                    >
                        {t("aboutCompany.intro.button")}
                    </Button>
                </div>

                <div data-aos='fade-left' className='flex w-full justify-end'>
                    <img
                        className='w-full max-[1000px]:w-[80%] max-[800px]:w-[90%]  max-[600px]:w-full max-[1200px]:w-[70%]'
                        src={aboutCompanyImage}
                        alt=''
                    />
                </div>
            </div>
        </Container>
    );
};

export default AboutCompany;
