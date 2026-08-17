import Container from "../Container/Container";
import IconButton from "../IconButton/IconButton";
import ProductSliders from "./ProductsSliders";

const Products = ({ currentLang }) => {
    return (
        <div className='bg-gray-100 py-14'>
            <Container>
                <div className='flex justify-between'>
                    <h1 className='text-[40px] text-medium'>
                        {currentLang.products.intro.title}
                    </h1>

                    <div className='flex items-center gap-3'>
                        <IconButton direction='left' />
                        <IconButton direction='right' />
                    </div>
                </div>

                <ProductSliders currentLang={currentLang} />
            </Container>
        </div>
    );
};

export default Products;
