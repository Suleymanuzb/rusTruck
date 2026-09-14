import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";

const Advertisement = () => {
    const { t } = useTranslation();

    return (
        <Container className='pt-14 pb-19'>
            <div className='flex flex-col md:gap-10 '>
                {t("aboutPage.adv.texts", { returnObjects: true }).map(
                    (item, i) => {
                        return (
                            <p className='max-w-185' key={i}>
                                {item.text}
                            </p>
                        );
                    },
                )}
            </div>
        </Container>
    );
};

export default Advertisement;
