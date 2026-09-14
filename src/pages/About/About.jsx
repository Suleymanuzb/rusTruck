import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";
import Achievements from "./Achievemts";
import Advertisement from "./Advertisement";
import BackgroundImage from "./BackgroundImage";
import IndustriesServed from "./IndustriesServed";
import OfferCard from "./OfferCard";

const About = () => {
    return (
        <>
            <BackgroundImage />
            <OfferCard />
            <Achievements />
            <IndustriesServed />
            <Advertisement />
            <AnyQuestions />
        </>
    );
};

export default About;
