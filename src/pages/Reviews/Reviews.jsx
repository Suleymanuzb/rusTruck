import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";

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

                    <div></div>
                </div>
            </Container>
        </section>
    );
};

export default Reviews;
