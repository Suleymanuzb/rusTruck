import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import NotFoundTruck from "../assets/images/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container className='max-[768px]:px-4'>
            <div className='flex items-center justify-between min-[1200px]:justify-around md:pb-37.5 min-[1200px]:px-25'>
                <div className='flex flex-col items-center justify-center max-[768px]:items-center max-[768px]:justify-center max-[768px]:self-center max-[768px]:w-full max-[768px]:pt-12.5  max-[768px]:pb-28'>
                    <h1 className='text-[#fec400] text-[80px] md:text-[190px] font-medium'>
                        404
                    </h1>
                    <p className='text-[#FEC80B] max-[768px]:text-lg text-4xl mb-5 whitespace-nowrap'>
                        Страница не найдена
                    </p>
                    <p className='max-w-83 max-[468px]:text-[14px] text-center mb-8'>
                        Пожалуйста воспользуйтесь навигацией или формой поиска,
                        чтобы найти интересующую Вас информацию.
                    </p>
                    <Link
                        to='/catalog'
                        variant='btn_big_more'
                        className='bg-[#FEC80B] text-black hover:bg-[#FFD43A] active:bg-[#E9C135] px-17 py-2 rounded text-center whitespace-nowrap'
                    >
                        Перейти в каталог
                    </Link>
                </div>

                <div className='hidden md:block min-[768px]:w-[45%]: max-[1200px]:w-[45%] min-[1200px]:w-[50%]'>
                    <img
                        className='w-full h-full object-cover max-w-none'
                        src={NotFoundTruck}
                        alt=''
                    />
                </div>
            </div>
        </Container>
    );
};

export default NotFound;
