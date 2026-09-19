import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";

const OurPartners = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title =
            "Партнёры завода-производителя автоспецтехники «РусТрак»";
    }, []);

    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <Container>
                <Breadcrumbs />

                <h1 className='text-2xl font-medium mb-8'>
                    {t("partnersPage.title")}
                </h1>

                <div className='flex flex-col gap-19'>
                    {t("partnersPage.companies", { returnObjects: true }).map(
                        (item) => {
                            return (
                                <div className='max-w-200'>
                                    <h1 className='mb-8 text-2xl font-medium'>
                                        {item.title}
                                    </h1>
                                    <p
                                        className={`${item.text.includes("компаний «КАМАЗ»") && !expanded ? "line-clamp-6" : ""}`}
                                    >
                                        {item.text}
                                    </p>

                                    {item.text.includes("компаний «КАМАЗ»") && (
                                        <p
                                            onClick={() =>
                                                setExpanded((prev) => !prev)
                                            }
                                            className='underline mt-1 cursor-pointer opacity-50'
                                        >
                                            {expanded
                                                ? "Свернуть"
                                                : "Читать полностью"}
                                        </p>
                                    )}

                                    <Link
                                        className='text-gray-400! font-normal underline'
                                        to={item.link}
                                    >
                                        {item.link}
                                    </Link>
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

export default OurPartners;
