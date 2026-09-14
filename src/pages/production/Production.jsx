import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";

import productionImg from "../../assets/images/production/production-1.jpg";
import productionImg2 from "../../assets/images/production/production-scheme.jpg";

import factoryImage1 from "../../assets/images/production/4/photo_production.jpg";
import factoryImage2 from "../../assets/images/production/4/photo_production2.jpg";
import factoryImage3 from "../../assets/images/production/4/photo_production3.jpg";
import factoryImage4 from "../../assets/images/production/4/photo_production4.jpg";

import repairShop from "../../assets/images/production/4/production-2.jpg";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const Production = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Container>
                <h1 className='text-2xl md:text-3xl font-medium mb-8'>
                    {t("productionPage.intro.title")}
                </h1>

                <div>
                    <img src={productionImg} alt='trucks' />
                </div>

                <p className='mb-14.5 mt-8 max-w-210'>
                    {t("productionPage.intro.text")}
                </p>

                <div className='mb-6'>
                    <img src={productionImg2} alt='scheme' />
                </div>

                <div className='flex flex-col gap-14 mb-14'>
                    {t("productionPage.scheme", {
                        returnObjects: true,
                    }).map((item, i) => {
                        return (
                            <div key={i}>
                                <h1 className='text-2xl font-medium mb-4.5'>
                                    {item.title}
                                </h1>
                                <p>{item.text}</p>
                            </div>
                        );
                    })}
                </div>

                {/* 4 images */}
                <div className='flex items-center gap-5 mb-8'>
                    <div>
                        <img src={factoryImage1} alt='factory image' />
                    </div>
                    <div>
                        <img src={factoryImage2} alt='factory image' />
                    </div>
                    <div>
                        <img src={factoryImage3} alt='factory image' />
                    </div>
                    <div>
                        <img src={factoryImage4} alt='factory image' />
                    </div>
                </div>

                <div>
                    {t("productionPage.details", { returnObjects: true }).map(
                        (item, i) => {
                            return (
                                <div key={i}>
                                    <div className='max-w-210'>
                                        <h1 className='text-2xl font-medium mb-4.5'>
                                            {item.title}
                                        </h1>

                                        <p>{item.text}</p>

                                        <p className='mt-14'>
                                            {item.extratext}
                                        </p>
                                    </div>

                                    {i === 0 && (
                                        <div className='my-14'>
                                            <img
                                                src={repairShop}
                                                alt='repair shop'
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        },
                    )}
                </div>
            </Container>

            <AnyQuestions />
        </div>
    );
};

export default Production;
