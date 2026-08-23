import AboutCompany from "../components/AboutCompany/AboutCompany";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import IconButton from "../components/IconButton/IconButton";
import TruckCategories from "../components/TruckCategories/TruckCategories";
import H1 from "../components/Typography/H1";
import CompanyStatistics from "../components/CompanyStatistics/CompanyStatistics";
import AnyQuestions from "../components/AnyQuestions/AnyQuestions";
import ScrollSlider from "../components/ScrollSilder/ScrollSlider";
import Products from "../components/recProducts/RecProducts";

const Home = ({ currentLang }) => {
    return (
        <>
            <Hero currentLang={currentLang} />
            <TruckCategories currentLang={currentLang} />
            <AboutCompany currentLang={currentLang} />
            <CompanyStatistics currentLang={currentLang} />
            <ScrollSlider currentLang={currentLang} />
            <Products currentLang={currentLang} />
            {/* <AnyQuestions currentLang={currentLang} /> */}
        </>
    );
};

export default Home;
