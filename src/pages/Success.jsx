import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import { useEffect } from "react";

const Success = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <div>
                <Link to='/' className='inline-block text-gray-400 mb-6'>
                    Главная
                </Link>
                <h1 className='text-3xl fomt-bold mb-8'>Заявка принята</h1>
            </div>

            <div className=' flex flex-col items-center justify-center py-12.5'>
                <span className='bg-[#e8f5e9] w-20 h-20 flex items-center justify-center text-6xl text-[#4caf50] rounded-full transform rotate-9 mb-5'>
                    ✓
                </span>
                <p className='text-lg font-bold mb-5'>Спасибо за заявку!</p>
                <p className='mb-7.5 text-[#555] text-lg'>
                    В ближайшее время менеджер свяжется с вами для уточнения
                    деталей.
                </p>

                <Link
                    to='/'
                    className='bg-[#007bff] text-white font-bold rounded px-7.5 py-3'
                >
                    Вернуться на главную
                </Link>
            </div>
        </Container>
    );
};

export default Success;
