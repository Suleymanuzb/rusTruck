import Container from "../../components/Container/Container";
import BreadCrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const Ads = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Container className='mb-20'>
                <BreadCrumbs />

                <div>
                    <h1 className='font-medium text-xl sm:text-2xl md:text-3xl lg:text-3xl'>
                        {t("adverts.title")}
                    </h1>

                    {t("adverts.ads", {
                        returnObjects: true,
                    }).map((item, i) => {
                        return (
                            <div key={i} className='flex flex-col mt-4'>
                                <h4 className='font-medium text-2xl mb-2'>
                                    {item.title}
                                </h4>
                                {item?.text?.map((each, i) => {
                                    return (
                                        <div key={i}>
                                            <Link
                                                className='underline!'
                                                to={each.link}
                                            >
                                                {each?.text}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </Container>

            <AnyQuestions />
        </div>
    );
};

export default Ads;
