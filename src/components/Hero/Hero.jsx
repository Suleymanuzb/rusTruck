import Slider from "./Slider";
import Container from "../Container/Container";

const Hero = ({ currentLang }) => {
    return (
        <div className='md:max-w-338 md:w-full md:px-[1.6rem] md:mx-auto'>
            <Slider currentLang={currentLang} />
        </div>
    );
};

export default Hero;
