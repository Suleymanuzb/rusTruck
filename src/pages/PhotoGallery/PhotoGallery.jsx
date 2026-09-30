import { useTranslation } from "react-i18next";
import Container from "../../components/Container/Container";
import App from "./FancyBox";
import Button from "../../components/Button/Button";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useState } from "react";

const PhotoGallery = () => {
    const [gallery, setGallery] = useState("Автомобили");
    console.log(gallery);

    const { t } = useTranslation();
    return (
        <Container className='mb-20'>
            <Breadcrumbs />

            <div className='flex items-start justify-between '>
                <h1 className='mt-2.5 text-lg sm:text-xl md:text-2xl font-medium mb-8'>
                    {t("photoGallery.title")}
                </h1>

                <Button
                    variant='btn_big_border'
                    className='hidden cursor-pointer py-4! lg:flex items-center justify-center whitespace-nowrap'
                >
                    {t("photoGallery.watchVideo")}
                </Button>
            </div>

            <div className='flex flex-wrap items-center gap-5 mb-8'>
                {t("photoGallery.filters", { returnObjects: true }).map(
                    (item, i) => {
                        return (
                            <div key={i}>
                                <button
                                    onClick={() => setGallery(item)}
                                    className={`border border-gray-200 py-2.5 px-5 rounded  text-base hover:bg-[#fec400] cursor-pointer ${gallery === item ? "bg-[#fec400]" : "bg-white"} outline-none whitespace-nowrap`}
                                >
                                    {item}
                                </button>
                            </div>
                        );
                    },
                )}
            </div>

            <App gallery={gallery} setGallery={setGallery} />
        </Container>
    );
};

export default PhotoGallery;
