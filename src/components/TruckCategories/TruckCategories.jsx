import { useRef } from "react";
import Container from "../Container/Container";
import IconButton from "../IconButton/IconButton";
import TruckSliders from "./TruckSliders";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const TruckCategories = ({ currentLang }) => {
    const swiperRef = useRef(null);

    const { t } = useTranslation();

    return (
        <Container className='pt-19.75 pb-20'>
            <div className='flex items-center justify-between mb-8'>
                <h2 className='text-[40px] font-medium leading-[1.9]'>
                    {t("header.megaMenu.categories.title")}
                </h2>

                <div className='flex items-center gap-3'>
                    <IconButton
                        direction='left'
                        onClick={() => swiperRef.current?.slidePrev()}
                    />
                    <IconButton
                        direction='right'
                        onClick={() => swiperRef.current?.slideNext()}
                    />
                </div>
            </div>

            <TruckSliders ref={swiperRef} t={t} />
        </Container>
    );
};

export default TruckCategories;
