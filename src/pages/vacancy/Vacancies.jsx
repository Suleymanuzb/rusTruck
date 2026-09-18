import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import DropDown from "./DropDown";
import { icons } from "../../assets/icons/icons";
import { useState } from "react";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";
const { ChevronUp } = icons;

const Vacancies = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    // console.log(isOpen);

    const handleAccardion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <section>
            <Container>
                <Breadcrumbs />

                <h1 className='text-3xl font-medium mb-8'>
                    {t("vacancyPage.title")}
                </h1>

                <div>
                    <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`flex items-center justify-between p-4 transform duration-500 ${isOpen ? "bg-[#fec400] rounded-tl-lg rounded-tr-lg" : "bg-white border border-[#fec400] rounded-lg"} cursor-pointer`}
                    >
                        <div>
                            <h1 className='text-2xl font-medium select-none'>
                                {t("vacancyPage.avtoElectric")}
                            </h1>
                        </div>

                        <div
                            onClick={() => setIsOpen((prev) => !prev)}
                            className={`text-xl cursor-pointer active:scale-85 transform duration-305 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            <ChevronUp />
                        </div>
                    </div>
                </div>

                <div
                    className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                    <div className='overflow-hidden'>
                        <div className='border border-gray-300 border-t-0 rounded-b-lg pt-8 px-4  mb-3'>
                            {t("vacancyPage.accardion", {
                                returnObjects: true,
                            }).map((item, i) => {
                                return (
                                    <div key={i} className='mb-8'>
                                        <h1 className='mb-2 font-medium'>
                                            {item.title}
                                        </h1>
                                        {item.firstTexts.map((each, i) => {
                                            return (
                                                <div>
                                                    <p key={i} className='pl-4'>
                                                        <span className='text-xl font-medium pr-1'>
                                                            ·
                                                        </span>{" "}
                                                        {each.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* <div className='mb-20'></div>  */}
            </Container>

            <AnyQuestions disableAnimation />
        </section>
    );
};

export default Vacancies;
