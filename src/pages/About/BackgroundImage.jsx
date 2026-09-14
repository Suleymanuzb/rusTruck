import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import aboutBackgroundImageSection from "../../assets/images/About/about-company.jpg";
import { icons } from "../../assets/icons/icons";
const { IconAbout } = icons;

const BackgroundImage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Container>
                <Breadcrumb />
            </Container>

            <div
                className='bg-no-repeat bg-center bg-cover relative'
                style={{
                    backgroundImage: `url(${aboutBackgroundImageSection})`,
                }}
            >
                <Container>
                    <h1 className='text-lg md:text-2xl text-white pt-12 pb-49 max-w-130'>
                        {t("aboutPage.intro.title")}
                    </h1>
                </Container>

                <Container className='relative pb-12 sm:pb-16'>
                    <div className='absolute bottom-[-38%] max-[1445px]:bottom-[-36%] left-4 sm:left-12 lg:left-9 w-28 sm:w-27 md:w-30 aspect-4/5'>
                        {/* 1. Folded tab behind on the bottom-left */}
                        <div className='absolute bottom-0 -left-3 sm:-left-4 w-5 sm:w-6 h-5 sm:h-6 bg-[#C59B27] rounded-bl-xl'></div>

                        {/* 2. Main House Shape (Bright Yellow) */}
                        <div className='relative z-10 w-full h-full bg-[#FFCA00] flex flex-col items-center justify-center p-2 sm:p-4 text-black [clip-path:polygon(50%_0%,100%_25%,100%_100%,0%_100%,0%_25%)]'>
                            <span className='text-5xl font-medium tracking-tight'>
                                {t("aboutPage.intro.labelTexty")}
                            </span>
                            <span className='text-xs sm:text-sm font-semibold text-center mt-0.5 leading-tight'>
                                {t("aboutPage.intro.labelText")}
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default BackgroundImage;
