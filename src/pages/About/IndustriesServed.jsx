import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import doubleImage1 from "../../assets/images/About/double/double1.webp";
import doubleImage2 from "../../assets/images/About/double/double2.webp";

const IndustriesServed = () => {
    const { t } = useTranslation();

    return (
        <Container className='flex flex-col md:flex-row items-center gap-3 md:gap-5 pt-14.5 mb-39'>
            <div className='flex flex-col gap-12 max-[768px]:h-auto bg-[#fec400] w-full! md:w-[30%] max-[1200px]:w-[60%] max-[1200px]:gap-12 max-[1200px]:py-12 min-[1200px]:w-[30%]! max-[1247px]:py-5 max-[1247px]:gap-2 pt-16 py-10 px-5 rounded-lg h-120 max-[900px]:gap-10'>
                {t("aboutPage.industriesServed.leftCard", {
                    returnObjects: true,
                }).map((item) => {
                    return (
                        <div className='flex flex-col'>
                            <h1 className='text-xl md:text-3xl font-medium'>
                                {item.title}
                            </h1>
                            <p>{item.text}</p>
                        </div>
                    );
                })}
            </div>
            <div className='grid max-[768px]:w-full max-[1200px]:w-[40%] h-120 max-[1200px]:grid-cols-1 grid-cols-2 gap-2.5 md:gap-5'>
                <div className='min-h-0'>
                    <img
                        className='h-full w-full rounded-lg object-cover'
                        src={doubleImage1}
                        alt='trucks'
                    />
                </div>
                <div className='min-h-0'>
                    <img
                        className='h-full w-full rounded-lg object-cover'
                        src={doubleImage2}
                        alt='trucks'
                    />
                </div>
            </div>
        </Container>
    );
};

export default IndustriesServed;
