import { useParams } from "react-router-dom";
import trucks from "../../data/truckData";
import Container from "../../components/Container/Container";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import useFancybox from "./FancyHook";
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";

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
            <div className='mb-6'>
                <ul>
                    <li>
                        <Breadcrumbs />
                    </li>
                </ul>
            </div>

            <h1 className='text-3xl font-medium mb-2 mt-5'>
                {product.truckType}
            </h1>

            <div className='flex gap-5 mt-7'>
                <div className='w-[66%]'>
                    <div ref={fancyboxRef}>
                        {currentTruck?.images && (
                            <div>
                                <a
                                    data-fancybox='gallery'
                                    href={currentTruck?.images?.image}
                                >
                                    <img
                                        src={currentTruck?.images?.image}
                                        className='w-full rounded-lg object-cover aspect-19/12'
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
                <div>
                    <span className='text-3xl font-medium ml-3'>
                        {product.price}
                    </span>

                    <div className='flex gap-3 mt-4'>
                        <Button variant='btn_big_more' className='px-6 py-2.5'>
                            {product.buttons.addToCart}
                        </Button>
                        <button className='bg-transparent border-2 hover:bg-[#FEC80B] border-[#FEC80B] text-black active:bg-[#E9C135] rounded-md leading-none px-7 py-2.5'>
                            {product.buttons.getPk}
                        </button>
                    </div>

                    <div className='mt-6'>
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
                                        {item.title}
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
                    <h1 className='mb-7 text-3xl font-medium'>
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
                                                className='text-left bg-[#FEC80B] py-4 px-3 text-sm'
                                            >
                                                {item.sectionTitle}
                                            </td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {item.items.map((each, index) => {
                                            return (
                                                <tr
                                                    className='border border-gray-100 py-3'
                                                    key={index}
                                                >
                                                    <td className='w-1/2 p-3 border-r border-gray-100'>
                                                        {each.title}
                                                    </td>
                                                    <td className='w-1/2 p-3'>
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
