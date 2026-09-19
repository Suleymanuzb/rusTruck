import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const Loan = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Container>
                <Breadcrumbs />

                <div className=''>
                    {t("loanPage.texts", { returnObjects: true }).map(
                        (item, i) => {
                            if (item.title.includes("компании РусТрак")) {
                                return (
                                    <div key={i}>
                                        <h1 className='mb-8 text-2xl font-medium'>
                                            {item.title}
                                        </h1>
                                        <p className='lg:text-lg md:text-base text-sm  max-w-205'>
                                            {" "}
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            }
                            return (
                                <div key={i}>
                                    <h1 className='text-2xl font-medium mt-18 mb-8'>
                                        {item.title}
                                    </h1>
                                    <p className='lg:text-lg md:text-base text-sm  max-w-250'>
                                        {item.text}
                                    </p>

                                    <div className='flex flex-col gap-8'>
                                        {item.threeTypesOFLeasing?.map(
                                            (each, i) => {
                                                return (
                                                    <div
                                                        key={i}
                                                        className='flex gap-2 md:gap-5'
                                                    >
                                                        <div>
                                                            <p className='font-medium text-xl py-0.5 px-2.5 md:px-4 md:py-2 rounded-[999px] bg-[#fec400] '>
                                                                {each.number}
                                                            </p>
                                                        </div>
                                                        <div className='flex flex-col gap-2 max-w-170'>
                                                            <h1 className='lg:text-lg md:text-base text-sm  font-medium '>
                                                                {each.type}
                                                            </h1>
                                                            <p>{each.desc}</p>
                                                        </div>
                                                    </div>
                                                );
                                            },
                                        )}
                                    </div>

                                    <p className='lg:text-lg md:text-base text-sm  max-w-250'>
                                        {item?.extra}
                                    </p>
                                </div>
                            );
                        },
                    )}
                </div>
            </Container>

            <AnyQuestions />
        </div>
    );
};

export default Loan;
