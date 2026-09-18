import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import { LightGalleryComp } from "./LightGalleryComp";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const Reviews = () => {
    const { t } = useTranslation();

    return (
        <section>
            <Container>
                <Breadcrumbs />

                <div>
                    <h1 className='mb-8 text-3xl font-medium'>
                        {t("reviewsPage.title")}
                    </h1>

                    {/* light Gallery  */}
                    <LightGalleryComp />
                    {/* light Gallery  */}
                </div>
            </Container>
            <AnyQuestions />
        </section>
    );
};

export default Reviews;
