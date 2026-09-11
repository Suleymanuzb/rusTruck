import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Adress from "./Adress";
import Employees from "./Employees";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const Contacts = () => {
    return (
        <div>
            <Container>
                <Breadcrumbs />
            </Container>
            <Adress />
            <Employees />
            <AnyQuestions />
        </div>
    );
};

export default Contacts;
