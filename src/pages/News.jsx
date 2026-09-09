import Container from "../components/Container/Container";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";

const News = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Breadcrumbs />
            <h1 className="mb-8 text-3xl font-medium">{t("newsPage.intro.title")}</h1>
        </Container>
    );
};

export default News;
