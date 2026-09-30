import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import AddedCartToKorzina from "./AddedToKorzinka";
import { useTranslation } from "react-i18next";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";
import FormSection from "./FormSection";
import { useCartStore } from "../../store/cartStore";

const Korzinka = () => {
    const { t } = useTranslation();
    const cart = useCartStore((state) => state.cart);

    return (
        <div className='bg-[#f9f9f9]  pb-16'>
            <Container>
                <Breadcrumbs />
                <h1 className='mb-8 text-3xl font-medium'>
                    {t("korzinka.title")}
                </h1>

                <AddedCartToKorzina />
            </Container>

            {cart.length >= 1 && (
                <Container>
                    <FormSection />
                </Container>
            )}

            <AnyQuestions />
        </div>
    );
};

export default Korzinka;
