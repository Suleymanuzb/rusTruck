import { useTranslation } from "react-i18next";
import workersImg from "../../data/workersImg";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

const Employees = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <div>
                <h1 className='mb-8 text-3xl font-medium'>
                    {t("contactsPage.employeeSection.title")}
                </h1>
                <div className='grid md:grid-cols-3 gap-5 md:gap-4 lg:grid-cols-4 lg:gap-6.5'>
                    {t("contactsPage.employeeSection.employees", {
                        returnObjects: true,
                    }).map((each, i) => {
                        const matchingEmpImg = workersImg.find(
                            (p) => p.id === each.id,
                        );

                        return (
                            <div
                                key={i}
                                className='flex flex-col gap-3 md:items-center rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.08),0_10px_20px_rgba(0,0,0,0.06),0_20px_40px_rgba(0,0,0,0.04)] h-85 md:h-115 p-6'
                            >
                                <div className='w-38 h-38'>
                                    <img
                                        className='w-full h-full object-cover overflow-hidden rounded-[99999px]'
                                        src={matchingEmpImg.img}
                                        alt=''
                                    />
                                </div>
                                <div className='flex flex-col md:items-center'>
                                    <p className='text-2xl font-medium text-start! md:text-center'>
                                        {each.name}
                                    </p>
                                    <p className='text-[#A2A2A2] md:text-center'>
                                        {each.position}
                                    </p>
                                </div>

                                <div className='flex flex-col md:items-center md:mt-auto! leading-1.3'>
                                    <Link to={`tel:${each.phoneNumber}`}>
                                        {each.phoneNumber}
                                    </Link>
                                    <Link
                                        className=''
                                        to={`tel:${each.extraNumber}`}
                                    >
                                        {each.extraNumber}
                                    </Link>
                                    <Link
                                        className=''
                                        to={`mailto:${each.email}`}
                                    >
                                        {each.email}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default Employees;
