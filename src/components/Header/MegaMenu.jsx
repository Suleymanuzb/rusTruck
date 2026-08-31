import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";

const MegaMenu = () => {
    const { t } = useTranslation();

    const categories = t("header.megaMenu.categories.types", {
        returnObjects: true,
    });

    const aboutUs = t("header.megaMenu.aboutUs.links", {
        returnObjects: true,
    });

    const media = t("header.megaMenu.media.links", {
        returnObjects: true,
    });

    const service = t("header.megaMenu.service.links", {
        returnObjects: true,
    });

    return (
        <div className='fixed overflow-y-auto left-0 top-36.5 bottom-0 z-10 w-screen bg-gray-200 pt-4'>
            <Container>
                <div className='min-[575px]:grid min-[575px]:grid-cols-2 gap-y-5 md:grid-cols-20'>
                  
                    <div className='border md:col-span-6'>
                        <h1 className=' text-[1.6rem] leading-normal mb-4 font-bold text-black'>
                            {t("header.megaMenu.categories.title")}
                        </h1>
                        <ul>
                            {categories.map((cat) => (
                                <li
                                    key={cat.id}
                                    className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                >
                                    <Link to={`/${cat.slug}`}>{cat.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='md:col-span-6'>
                        <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black '>
                            {t("header.megaMenu.aboutUs.title")}
                        </h1>
                        <ul>
                            {aboutUs.map((link) => {
                                return (
                                    <li
                                        key={link.path}
                                        className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                    >
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className='grid md:col-span-8 md:grid lg:grid-cols-8 md:gap-x-10'>
                        <div className='md:col-span-4'>
                            <h1 className='text-[1.6rem] leading-normal mb-4 font-bold text-black '>
                                {t("header.megaMenu.media.title")}
                            </h1>
                            <ul>
                                {media.map((link) => {
                                    return (
                                        <li
                                            key={link.path}
                                            className='mb-[1.2rem] cursor-pointer leading-[1.3] transition-all duration-300 hover:text-[#ffd43a]'
                                        >
                                            <Link to={link.path}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className='md:col-span-4'>
                            <ul>
                                {service.map((link) => {
                                    return (
                                        <li
                                            key={link.path}
                                            className='font-bold text-[1.6rem] leading-normal transition-all duration-300 hover:text-[#ffd43a] cursor-pointer mb-6'
                                        >
                                            <Link to={link.path}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MegaMenu;
