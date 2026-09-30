import { useTranslation } from "react-i18next";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import play from "../../assets/images/photoGallery/play.png";
import { useState } from "react";

const VideoPage = () => {
    const { t } = useTranslation();

    const [isPlay, setIsPlay] = useState(null);
    // console.log(isPlay);

    return (
        <Container>
            <Breadcrumbs />

            <div>
                <div className='flex items-center justify-between mb-8'>
                    <div>
                        <h1 className='font-medium text-xl sm:text-2xl md:text-3xl lg:text-3xl'>
                            {t("videoPage.title")}
                        </h1>
                    </div>
                    <div>
                        <Button
                            variant='btn_big_border'
                            className='hidden cursor-pointer py-4! lg:flex items-center justify-center whitespace-nowrap'
                        >
                            <Link to={"/photoGallery"}>
                                {t("videoPage.watchPhoto")}
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* videos */}
                <div className='grid md:grid-cols-2 gap-5 md:gap-10'>
                    {t("videoPage.videos", { returnObjects: true }).map(
                        (item, i) => {
                            return (
                                <div className=''>
                                    <div className='relative w-full h-78.75'>
                                        <iframe
                                            src={item.link}
                                            title='YouTube video player'
                                            frameBorder='0'
                                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                            referrerPolicy='strict-origin-when-cross-origin'
                                            allowFullScreen
                                            className='block relative w-full h-full object-cover'
                                        ></iframe>

                                        <div
                                            onClick={() => setIsPlay(i)}
                                            className={`${isPlay === i ? "hidden" : "border inset-0 absolute w-full h-full flex items-center justify-center bg-black/50 cursor-pointer"}`}
                                        >
                                            <img src={play} alt='play' />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='pt-2 md:pt-5 font-medium md:text-xl'>
                                            {item.title}
                                        </h1>
                                    </div>
                                </div>
                            );
                        },
                    )}
                </div>
            </div>
        </Container>
    );
};

export default VideoPage;
