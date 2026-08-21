import { useRef } from "react";
import Container from "../Container/Container";
import IconButton from "../IconButton/IconButton";
import ProductSliders from "./ProductsSliders";

const Products = ({ currentLang }) => {
    const swiperRef = useRef(null);
    return (
        <div className='bg-gray-100 py-10 md:py-14'>
            <Container className="max-[500px]:px-4">
                <div className='flex justify-between mb-8'>
                    <h1 className='text-2xl md:text-[40px] text-medium'>
                        {
                            currentLang.header.megaMenu.categories
                                .recommendedProducts
                        }
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

                <ProductSliders ref={swiperRef} currentLang={currentLang} />
            </Container>
        </div>
    );
};

export default Products;
