import { useEffect } from "react";
import AnyQuestions from "../../components/AnyQuestions/AnyQuestions";
import Achievements from "./Achievemts";
import Advertisement from "./Advertisement";
import BackgroundImage from "./BackgroundImage";
import IndustriesServed from "./IndustriesServed";
import OfferCard from "./OfferCard";

const About = () => {
    useEffect(() => {
        document.title = "Информация о производителе автоспецтехники «РусТрак»";
    }, []);

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
