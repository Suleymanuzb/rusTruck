import { useRef } from "react";
import Container from "../Container/Container";
import IconButton from "../IconButton/IconButton";

import { useTranslation } from "react-i18next";
import NewsSlider from "./NewsSectionSlider";

const NewsSection = () => {
    const { t } = useTranslation();

    const swiperRef = useRef(null);
    return (
        <div className='pt-30.75! md:py-14'>
            <Container className='max-[500px]:px-4'>
                <div className='flex justify-between mb-8'>
                    <h1 className='text-2xl md:text-[40px] text-medium'>
                        {t("newsSection.intro.title")}
                    </h1>

                    <div className='hidden md:flex items-center gap-3'>
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

                <NewsSlider ref={swiperRef} />
            </Container>
        </div>
    );
};

export default NewsSection;
