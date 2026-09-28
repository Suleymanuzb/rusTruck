import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";

const Favourites = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Breadcrumbs />
            <div>
                <h1 className='text-2xl md:text-3xl font-medium'>
                    {t("favourites.title")}
                </h1>
            </div>

            <div>
                <div className='flex items-center gap-20'>
                    <label htmlFor='all' className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            name=''
                            id='all'
                            className='appearance-none border w-5 h-5 rounded-full checked:border-5 checked:shadow-[0_0_12px_4px_rgba(0,0,0,0.25)]'
                        />

                        <span>{t("favourites.all")}</span>
                    </label>
                    <label htmlFor='all' className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            name=''
                            id='all'
                            className='appearance-none border w-5 h-5 rounded-full checked:border-5 checked:shadow-[0_0_12px_4px_rgba(0,0,0,0.25)]'
                        />

                        <span>{t("favourites.available")}</span>
                    </label>
                    <label htmlFor='all' className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            name=''
                            id='all'
                            className='appearance-none border w-5 h-5 rounded-full checked:border-5 checked:shadow-[0_0_12px_4px_rgba(0,0,0,0.25)]'
                        />

                        <span>{t("favourites.notInSale")}</span>
                    </label>
                </div>
            </div>
        </Container>
    );
};

export default Favourites;
