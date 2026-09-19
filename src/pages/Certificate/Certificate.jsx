import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { LightGalleryCert } from "./LightGalleryCert";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const Certificate = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Container>
                <Breadcrumbs />

                <h1 className='text-3xl mb-8 font-medium'>
                    {t("certificatePage.title")}
                </h1>

                {/*  */}
                <LightGalleryCert />
            </Container>

            <AnyQuestions />
        </div>
    );
};

export default Certificate;
