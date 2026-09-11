import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";

const Adress = () => {
    const { t } = useTranslation();

    const address = "603035 г. Нижний Новгород, ул. Торфяная, д. 35";

    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
    return (
        <Container>
            <div className='mb-30'>
                <h1 className='mt-6 mb-8 sm:text-2xl md:text-3xl font-medium'>
                    {t("contactsPage.adressSection.title")}
                </h1>

                <div className='flex flex-col md:flex-row'>
                    <div className='bg-[#fec400] p-5 md:p-8 flex flex-col gap-1'>
                        <p className='mb-4.5 md:mb-9 md:leading-1.5 text-lg'>
                            {t("contactsPage.adressSection.adress")}
                        </p>
                        <p className='text-lg font-bold'>
                            {t("contactsPage.adressSection.forLocals")}{" "}
                            <span className='font-normal'>
                                {t(
                                    "contactsPage.adressSection.numberFotLocals",
                                )}
                            </span>
                        </p>

                        <p className='text-lg font-bold'>
                            {t("contactsPage.adressSection.forStates")}{" "}
                            <span className='font-normal'>
                                {t(
                                    "contactsPage.adressSection.numberForStates",
                                )}
                            </span>
                        </p>
                        <p className='text-lg font-bold'>
                            {t("contactsPage.adressSection.emailText")}{" "}
                            <span className='font-normal'>
                                {t("contactsPage.adressSection.email")}
                            </span>
                        </p>

                        <div className='mt-7.5 md:mt-15'>
                            <p className='text-xl font-bold leading-none'>
                                {t(
                                    "contactsPage.adressSection.redisterText",
                                )}{" "}
                            </p>
                            <span className='font-normal text-lg'>
                                {t("contactsPage.adressSection.registerNumber")}
                            </span>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <iframe
                            src={mapUrl}
                            className='w-full h-full border-0 rounded'
                            loading='lazy'
                            allowFullScreen
                            referrerPolicy='no-referrer-when-downgrade'
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Adress;
