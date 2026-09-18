import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";

const Vacancies = () => {
  const { t } = useTranslation();
  
  
    return (
        <section>
            <Container>
                <Breadcrumbs />

                <h1>here will be vacancy page</h1>
            </Container>
        </section>
    );
};

export default Vacancies;
