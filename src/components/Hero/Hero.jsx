import Slider from "./Slider";
import Container from "../Container/Container";
import { icons } from "../../assets/icons/icons";
const { RusTruckLogo } = icons;

const Hero = () => {
    return (
        <Container className='px-0.75!'>
            <div className='md:max-w-338 md:w-full md:px-[1.6rem] md:mx-auto'>
                <Slider />
            </div>
        </Container>
    );
};

export default Hero;
