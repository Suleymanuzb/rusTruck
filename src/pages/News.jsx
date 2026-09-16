import Container from "../components/Container/Container";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { TruckNews } from "../data/TruckNews";
import i18next from "i18next";
import { icons } from "../assets/icons/icons";
const { IconArrowRight } = icons;

const News = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Breadcrumbs />
            <h1 className='mb-8 text-3xl font-medium'>
                {t("newsPage.intro.title")}
            </h1>

            <div>
                {TruckNews.map((item, index) => {
                    const truckNewsLanguage = item?.[i18next.language];
                    console.log(truckNewsLanguage);
                    {
                        if (index === 0) {
                            return (
                                <div key={index} className='flex gap-6.25'>
                                    <div className='w-1/2'>
                                        <img
                                            src={item.gallerImages[0].image}
                                            alt='truck image'
                                            className='rounded-lg'
                                        />
                                    </div>

                                    <div className='w-1/2'>
                                        <p className='mb-2.75'>{item.date}</p>

                                        <h1 className='text-2xl font-medium line-clamp-2'>
                                            {truckNewsLanguage.mainTitle}
                                        </h1>

                                        <button className='opacity-50 flex items-center gap-4'>
                                            {truckNewsLanguage.moreButton}
                                            <span>
                                                <IconArrowRight />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        </Container>
    );
};

export default News;
