import Slider from "./Slider";
import Container from "../Container/Container";
import ru from "../../data/translations/ru";
const currentLang = ru;

const Hero = () => {
    return (
        <Container>
            <Slider currentLang={currentLang} />
        </Container>
    );
};

export default Hero;
