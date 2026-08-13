import Container from "../Container/Container";

const CompanyStatistics = ({ currentLang }) => {
    return (
        <div className='bg-[#fec80b] mt-20'>
            <Container className="grid  md:grid-cols-6 pt-13.25 pb-16.25 gap-y-10">
                {currentLang.CompanyStatistics.fullThreeStats.map(
                    (statistic, index) => {
                        return (
                            <div
                                key={index}
                                className='col-span-2'
                            >
                                <div className="flex flex-col mb-6">
                                    <span className="text-[100px] font-medium leading-none">{statistic.numberOfStats}</span>
                                    <span className="text-[32px] font-medium leading-[1.18] ">{statistic.unit}</span>
                                </div>
                                <p className="leading-normal  md:max-w-78">{statistic.description}</p>
                            </div>
                        );
                    },
                )}
            </Container>
        </div>
    );
};

export default CompanyStatistics;
