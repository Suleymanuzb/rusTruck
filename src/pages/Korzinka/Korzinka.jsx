import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useCartStore } from "../../store/cartStore";
import trucks from "../../data/truckData";
import { useTranslation } from "react-i18next";

const Korzinka = () => {
    const cart = useCartStore((state) => state.cart);
    console.log("CART:", cart);
    const { i18n, t } = useTranslation();

    return (
        <Container>
            <Breadcrumbs />

            <div>
                {cart.map((truckId) => {
                    const trucksInCart = trucks.find(
                        (each) => each.id === truckId,
                    );

                    const product = trucksInCart?.[i18n.language];

                    return (
                        <div className='flex' key={truckId}>
                            <div>
                                <img
                                    src={trucksInCart.images.image}
                                    alt='truck'
                                    className='aspect-square object-cover'
                                />
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <h3>{product.truckType}</h3>
                                        <div className='flex justify-between text-gray-400 text-sm '>
                                            <p>
                                                {t(
                                                    "filteredPage.trucksInLine.capacityOfTruck",
                                                )}
                                            </p>
                                            <p className='border-b border-dotted  border-gray-400 flex-1 mb-1.75 '></p>
                                            <p>
                                                {Math.floor(
                                                    Math.random() * 100,
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        {/* <h3>{product.truckType}</h3> */}
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Korzinka;
