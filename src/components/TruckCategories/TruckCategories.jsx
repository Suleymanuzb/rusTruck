import { useRef } from "react";
import Container from "../Container/Container";
import IconButton from "../IconButton/IconButton";
import TruckSliders from "./TruckSliders";

const TruckCategories = () => {
    const swiperRef = useRef(null);

    return (
        <Container className='pt-19.75'>
            <div className='flex items-center justify-between mb-8'>
                <h2 className='text-[40px] font-medium leading-[1.9]'>
                    Категории
                </h2>

                <div className='flex items-center gap-3'>
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

            <TruckSliders ref={swiperRef} />
        </Container>
    );
};

export default TruckCategories;
