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
import NewsSection from "../components/NewsSection/NewsSection";

const Home = () => {
    return (
        <>
            <Hero />
            <TruckCategories />
            <AboutCompany />
            <CompanyStatistics />
            <ScrollSlider />
            <Products />
            <NewsSection />
            <AnyQuestions />
        </>
    );
};

export default Home;
