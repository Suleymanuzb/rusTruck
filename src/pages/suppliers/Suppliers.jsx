import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";
import { useEffect } from "react";

const Suppliers = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title =
            "Поставщикам и партнёрам  | Производитель автоспецтехники РусТрак";
    }, []);

    return (
        <div>
            <Container>
                <Breadcrumbs />
                <div>
                    <h1 className='mb-8 text-2xl md:text-3xl font-medium'>
                        {t("suppliersPage.title")}
                    </h1>

                    <div>
                        {t("suppliersPage.invite", { returnObjects: true }).map(
                            (item, i, arr) => {
                                return (
                                    <div
                                        key={i}
                                        children
                                        className='text-lg max-w-207'
                                    >
                                        {item.title && (
                                            <h1 className='pb-8 w-full text-2xl md:text-3xl font-medium'>
                                                {item.title}
                                            </h1>
                                        )}
                                        <p
                                            className={
                                                i === 0 || i === arr.length - 1
                                                    ? "mb-8.75"
                                                    : ""
                                            }
                                        >
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            },
                        )}
                    </div>

                    <div>
                        <h1 className='mb-8.75 text-lg'>
                            {t("suppliersPage.whatWeValue.title")}
                        </h1>

                        <div className='flex flex-col gap-3 mb-6'>
                            {t("suppliersPage.whatWeValue.values", {
                                returnObjects: true,
                            }).map((item) => {
                                return (
                                    <div className='flex items-center gap-3 text-lg'>
                                        <p className='bg-[#fec400] rounded-full h-7 w-7 flex items-center justify-center -mt-1 text-xl shrink-0!'>
                                            {item.number}
                                        </p>
                                        <p>{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div>
                            <h1 className='mb-8.75 text-lg'>
                                {t("suppliersPage.whatWeValue.importants")}
                            </h1>

                            <div className='mb-6'>
                                {t("suppliersPage.whatWeValue.imp", {
                                    returnObjects: true,
                                }).map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <p className='text-lg'>
                                                {item.text}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <h1 className='max-w-190'>
                            {t("suppliersPage.whatWeValue.contractText")}
                        </h1>
                        <p className='text-lg'>
                            {t("suppliersPage.whatWeValue.wish")}
                        </p>
                        <p></p>
                    </div>
                </div>
            </Container>

            <AnyQuestions />
        </div>
    );
};

export default Suppliers;
