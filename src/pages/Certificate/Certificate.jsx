import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { LightGalleryCert } from "./LightGalleryCert";

const Certificate = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Breadcrumbs />

            <h1 className='text-3xl mb-8 font-medium'>
                {t("certificatePage.title")}
            </h1>

            {/* here */}
            <LightGalleryCert />
            {/* here */}
        </Container>
    );
};

export default Certificate;
