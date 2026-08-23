import { useParams } from "react-router-dom";
import trucks from "../../data/truckData";
import Container from "../../components/Container/Container";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";

const ProductDetails = () => {
    const { productId } = useParams();
    console.log(productId);
    const { i18n } = useTranslation();

    const currentTruck = trucks.find((truck) => truck.id === Number(productId));
    console.log(currentTruck);
    const product = currentTruck?.[i18n.language];
    // console.log(product);

    return (
        <Container>
            <h1 className='text-3xl font-medium mb-2 mt-5'>
                {product.truckType}
            </h1>

            <div className='flex gap-5 mt-7'>
                <div>
                    {currentTruck.images && (
                        <img
                            src={currentTruck.images.image}
                            className='rounded-lg'
                        />
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
                        className=''
                    />
                </div>
            )}

            {product?.characteristics && (
                <div>
                    {product?.characteristics.map((item) => {
                        return (
                            <div>
                                <h1 className="bg-">{item.sectionTitle}</h1>
                                {item.items.map((each) => {
                                    return (
                                        <div>
                                            <p>{each.title}</p>
                                            <p>{each.value}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </Container>
    );
};

export default ProductDetails;
