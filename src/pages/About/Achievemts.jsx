import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import { icons } from "../../assets/icons/icons";
const { IconTick } = icons;
import achiementSection from "../../assets/images/About/about-track.png";

const Achievements = () => {
    const { t } = useTranslation();

    return (
        <Container className='px-4! md:px-6.25 pb-16'>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-medium mb-10'>
                {t("aboutPage.whatWeAchieved.title")}
            </h1>

            <div className='flex flex-col gap-7 md:flex-row items-center justify-between'>
                <div className='flex flex-col gap-4'>
                    {t("aboutPage.whatWeAchieved.achievements", {
                        returnObjects: true,
                    }).map((item, i) => {
                        return (
                            <div key={i} className='flex gap-4'>
                                <h className='w-5 h-5 bg-amber-300 rounded-full mt-[5px] flex items-center justify-center shrink-0'>
                                    <span className='text-[12px]'>
                                        <IconTick />
                                    </span>
                                </h>

                                <p className='text-lg'>{item.text}</p>
                            </div>
                        );
                    })}
                </div>

                <div className='w-[70%] self-start flex justify-end'>
                    <img src={achiementSection} alt='' />
                </div>
            </div>
        </Container>
    );
};

export default Achievements;
