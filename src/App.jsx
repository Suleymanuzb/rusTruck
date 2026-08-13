import ru from "./data/translations/ru";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IconButton from "./components/IconButton/IconButton";
import TruckCategories from "./components/TruckCategories/TruckCategories";
import H1 from "./components/Typography/H1";

const App = () => {
    const currentLang = ru;
    return (
        <>
            <Header currentLang={currentLang} />
            <Hero currentLang={currentLang} />
            <TruckCategories currentLang={currentLang} />
            <AboutCompany currentLang={currentLang} />
        </>
    );
};

export default App;
