import { useTranslation } from "react-i18next";
import Container from "../components/Container/Container";
import TruckCards from "../components/TruckCategories/TruckCards";
import AnyQuestions from "../components/AnyQuestions/AnyQuestions";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumbs";

const Catalog = () => {
    const { t } = useTranslation();

    const catalogItems = t("header.megaMenu.categories.types", {
        returnObjects: true,
    });

    return (
        <section>
            <Container>
                <Breadcrumb />
                <div className='grid grid-cols-4 gap-7'>
                    {catalogItems.map((category, i) => {
                        return (
                            <TruckCards
                                key={`catalog item ${i + 1}`}
                                category={category}
                            />
                        );
                    })}
                </div>
            </Container>
            <AnyQuestions />
        </section>
    );
};

export default Catalog;
