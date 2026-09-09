import { useParams } from "react-router-dom";
import trucks from "../../data/truckData";
import Container from "../../components/Container/Container";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import useFancybox from "./FancyHook";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const ProductDetails = () => {
    const [fancyboxRef] = useFancybox();

    const { productId } = useParams();
    // console.log(productId);
    const { i18n } = useTranslation();

    const currentTruck = trucks.find((truck) => truck.id === Number(productId));
    // console.log(currentTruck);

    const product = currentTruck?.[i18n.language];

    return (
        <Container>
            <Breadcrumbs />

            <h1 className='text-xl md:text-3xl font-medium mb-2 mt-5'>
                {product.truckType}
            </h1>

            <div className='flex flex-col lg:flex-row gap-5 mt-7'>
                <div className='w-full lg:w-[66%]'>
                    <div ref={fancyboxRef}>
                        {currentTruck?.images && (
                            <div>
                                <a
                                    data-fancybox='gallery'
                                    href={currentTruck?.images?.image}
                                >
                                    <img
                                        src={currentTruck?.images?.image}
                                        className='w-full rounded-lg object-cover aspect-19/10.5 lg:aspect-19/12.5'
                                    />
                                </a>
                            </div>
                        )}

                        {currentTruck?.gallery?.slice(1).map((gal, index) => (
                            <a
                                key={index}
                                data-fancybox='gallery'
                                href={gal.image}
                                className='hidden'
                            />
                        ))}
                    </div>

                    {product.discount && (
                        <div className='pt-5 mt-2.5 min-h-10 text-sm'>
                            <p className='text-red-500 text-center'>
                                {product.discount}
                            </p>
                        </div>
                    )}
                </div>
                {/* right side */}
                <div>
                    <span className='text-3xl font-medium ml-3'>
                        {product.price}
                    </span>

                    <div className='flex flex-col items-start md:flex-row lg:flex-col min-[1200px]:flex-row! gap-3 mt-4'>
                        <Button
                            variant='btn_big_more'
                            className='w-55 px-6 py-2.5 whitespace-nowrap'
                        >
                            {product.buttons.addToCart}
                        </Button>
                        <button className='w-55 bg-transparent border-2 hover:bg-[#FEC80B] border-[#FEC80B] text-black active:bg-[#E9C135] rounded-md leading-none px-7 py-2.5 whitespace-nowrap'>
                            {product.buttons.getPk}
                        </button>
                    </div>

                    <div className='mt-6 hidden lg:block'>
                        {product.specifications.truckInfo.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className='flex items-center justify-between mb-2'
                                >
                                    <p
                                        className={
                                            item.title.includes(
                                                "характеристики",
                                            )
                                                ? "text-[rgb(162,162,162)] underline hover:no-underline cursor-pointer"
                                                : "text-black"
                                        }
                                    >
                                        {item.title}:
                                    </p>
                                    <p>{item.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {currentTruck.images.drawing && (
                <div
                    key={currentTruck.id}
                    className='border border-gray-100 mt-5'
                >
                    <img
                        src={currentTruck.images.drawing}
                        alt='drawing image'
                    />
                </div>
            )}

            {product.description && (
                <div className='flex items-center  w-full p-[3.2rem] bg-[linear-gradient(to_right,#fec80b_61%,black_31%)] mt-12'>
                    <div>
                        <h1 className='font-medium mb-4 text-3xl'>
                            {product.description.title}
                        </h1>
                        <div className='w-[60%]'>
                            <p className='text-[10px]'>
                                {product.description.text}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {product?.characteristics && (
                <div className='mt-14'>
                    <h1 className='mb-7 max-[768px]:text-2xl text-3xl font-medium'>
                        {product?.charectiristicsTitle}
                    </h1>
                    {product?.characteristics.map((item, i) => {
                        return (
                            <div key={i}>
                                <table className='w-full'>
                                    <thead>
                                        <tr>
                                            <td
                                                colSpan={2}
                                                className='font-medium text-left bg-[#FEC80B] p-2 sm:py-4 sm:px-3 max-[450px]:text-[12px] text-sm sm:text-lg md:text-xl'
                                            >
                                                {item.sectionTitle}
                                            </td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {item.items.map((each, index) => {
                                            return (
                                                <tr
                                                    className='border border-gray-100 p-2 sm:py-3 max-[768px]:text-[12px]!'
                                                    key={index}
                                                >
                                                    <td className='w-1/2 p-2 sm:p-3 border-r border-gray-100'>
                                                        {each.title}
                                                    </td>
                                                    <td className='w-1/2 p-2 sm:p-3 max-[768px]:text-start text-center'>
                                                        {each.value}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        );
                    })}
                </div>
            )}
        </Container>
    );
};

export default ProductDetails;
