import Button from "./components/Button/Button";
import CatalogButton from "./components/CatalogButton/CatalogButton";
import IconButton from "./components/IconButton/IconButton";
import H1 from "./components/Typography/H1";

const App = () => {
    return (
        <>
            <div className='ml-4'>
                <div className='mt-4'>
                    <Button variant='btn_big'>Открыть каталог</Button>
                </div>

                <div className='mt-4'>
                    <Button variant='btn_big_border'>Открыть каталог</Button>
                </div>

                <div className='mt-4'>
                    <Button variant='btn_big_more'>Подробнее →</Button>
                </div>

                <div className='mt-4'>
                    <Button variant='Big_btn'>Подробнее →</Button>
                </div>

                <div className='mt-4 flex gap-2'>
                    <IconButton direction='right' />
                    <IconButton direction='left' />
                </div>

                <H1 variant='regular'>H1 Regular</H1>

                <H1 variant='extrabold'>H1 ExtraBold</H1>

                <div className='mt-4'>
                    <CatalogButton />
                </div>
            </div>
        </>
    );
};

export default App;
