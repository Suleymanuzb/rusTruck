import Button from "./components/Button/Button";

const App = () => {
    return (
        <>
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
        </>
    );
};

export default App;
