import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavouriteStore } from "../../store/favouritesStore";
import trucks from "../../data/truckData";
import { Link } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
import Button from "../../components/Button/Button";
const {
    IconLine,
    IconTable,
    SearchIcon,
    KorzinkaIcon,
    IconHeartBgWhite,
    DownloadIcon,
    IconMessage,
    IconHeart,
    IconClose,
} = icons;

const Favourites = () => {
    const { t } = useTranslation();
    const modalInputs = t("products.modal.inputs", {
        returnObjects: true,
    });

    const language = t("language");

    const [isOpen, setIsopen] = useState(false);
    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        modalInputs.forEach((item) => {
            const value = formData[item.name];

            if (!value.trim()) {
                newErrors[item.name] = item.must;
            }
        });

        if (!agreed) {
            newErrors.agreement = "Необходимо дать согласие";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsopen(false);
            setAgreed(false);
            setErrors({});

            navigate("/success");
        }
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleOpenModal = () => setIsopen(true);

    const handleCloseModal = () => setIsopen(false);

    const categories = t("header.megaMenu.categories.types", {
        returnObjects: true,
    });

    const favourites = useFavouriteStore((state) => state.favourites);

    console.log("FAVOURITES PAGE:", favourites);

    return (
        <Container>
            <Breadcrumbs />
            <div className='mb-8'>
                <h1 className='text-2xl md:text-3xl font-medium'>
                    {t("favourites.title")}
                </h1>
            </div>

            <div>
                <div className='flex items-center gap-20 mb-5'>
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

            {/* favorite carts */}
            <div className='grid grid-cols-4 gap-7'>
                {favourites.map((t, i) => {
                    const trucksFavourited = trucks.find(
                        (each) => each.id === t.id,
                    );

                    const category = categories.find(
                        (item) => item.id === t.id,
                    );

                    return (
                        <div key={i} className='relative h-full'>
                            <div className='relative'>
                                <Link to={`/catalog/${category.slug}/${t.id}`}>
                                    <img
                                        className='w-full block aspect-12/10 object-cover rounded-t-sm'
                                        src={trucksFavourited.images.image}
                                    />
                                </Link>

                                <div className='hidden md:absolute top-[1.5%] right-[2%]'>
                                    <span className='text-transparent hover:text-[#fec80b] cursor-pointer'>
                                        <IconHeart />
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white px-0.5 py-2 min-[500px]:px-3 sm:py-4'>
                                <div>
                                    <a className='md:text-center xl:text-start mb-4 line-clamp-2 text-[14px] min-[1200px]:text-lg w-full'>
                                        {trucksFavourited[language]?.truckType}
                                    </a>
                                    <p className='text-center md:text-start font-medium leading-[1.18] mb-3 md:text-xl'>
                                        {trucksFavourited[language]?.price}
                                    </p>
                                </div>
                                <div className='max-[1360px]:flex max-[1360px]:items-center max-[1360px]:flex-col min-[1360px]:flex min-[1360px]:items-center min-[1360px]:gap-3 '>
                                    <Link
                                        to={`/catalog/${category.slug}/${t.id}`}
                                        variant='btn_big'
                                        className='w-full max-[1360px]:mb-3 py-2.5 font-normal text-sm bg-[#FEC80B] transform duration-300 cursor-pointer hover:bg-[#FFD43A] active:bg-[#E9C135] rounded-md leading-none md:py-4 text-center'
                                    >
                                        {
                                            trucksFavourited?.[language]
                                                ?.buttons?.more
                                        }
                                    </Link>
                                    <Button
                                        onClick={handleOpenModal}
                                        className='hidden md:flex gap-2.5 cursor-pointer  whitespace-nowrap'
                                        variant='getKp'
                                        arrowDown='true'
                                    >
                                        {
                                            trucksFavourited[language]?.buttons
                                                .getPk
                                        }
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {isOpen && (
                    <div>
                        {isOpen && (
                            <div className='fixed inset-0 z-10 bg-black/50'></div>
                        )}

                        <div className=' modal fixed z-10 w-80 md:min-w-120 bg-white top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg px-6 pt-8 pb-6'>
                            <div
                                onClick={handleCloseModal}
                                className='absolute top-1 right-1'
                            >
                                <span className='text-3xl cursor-pointer'>
                                    <IconClose />
                                </span>
                            </div>

                            <div className='relative flex flex-col items-center md:gap-5 w-full'>
                                <div className='text-2xl'>
                                    <h1 className='font-medium text-center w-full text-xl md:text-2xl'>
                                        {t("products.modal.title")}
                                    </h1>
                                </div>

                                <form
                                    className='w-full md:w-[70%] flex flex-col md:gap-3'
                                    onSubmit={handleSubmit}
                                >
                                    {modalInputs.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='flex flex-col w-full mt-1'
                                            >
                                                <label
                                                    className='mb-1.25 text-sm'
                                                    htmlFor={item.name}
                                                >
                                                    {item.label}
                                                </label>
                                                <input
                                                    id={item.name}
                                                    name={item.name}
                                                    className='outline-none border border-[#a2a2a2] rounded focus:border-[#fec80b] focus:shadow-[0_0_4px_#fec80b] transform duration-300 placeholder:text-gray-400 py-3 pl-3 pr-10.25'
                                                    type={item.type}
                                                    placeholder={
                                                        item.placeholder
                                                    }
                                                    value={formData[item.name]}
                                                    onChange={(e) => {
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            [item.name]:
                                                                e.target.value,
                                                        }));
                                                    }}
                                                />
                                                {/*  */}
                                                {errors[item.name] && (
                                                    <p className='text-sm text-red-500'>
                                                        {errors[item.name]}
                                                    </p>
                                                )}

                                                {/*  */}
                                            </div>
                                        );
                                    })}
                                    <div
                                        className={`flex gap-3 mt-1 ${!errors.agreement ? "mb-20" : "mb-0"}`}
                                    >
                                        <input
                                            type='checkbox'
                                            checked={agreed}
                                            onChange={(e) =>
                                                setAgreed(e.target.checked)
                                            }
                                            className='size-7.5 accent-black '
                                        />

                                        <p className='text-sm leading-none text-gray-400'>
                                            {t("products.modal.agreement.text")}
                                            <a
                                                href='/upload/privacy_policy.pdf'
                                                className='text-indigo-600 hover:text-blue-800 ml-1'
                                            >
                                                {t(
                                                    "products.modal.agreement.link",
                                                )}
                                            </a>
                                        </p>
                                    </div>

                                    {errors.agreement && (
                                        <p className='text-sm text-red-500 mb-3'>
                                            {errors.agreement}
                                        </p>
                                    )}

                                    <div className='w-full'>
                                        <Button
                                            type='submit'
                                            variant='btn_big_more'
                                            className='w-full whitespace-nowrap'
                                        >
                                            {t("products.modal.getPk")}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Favourites;
