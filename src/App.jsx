import Header from "./components/Header/Header";
import Success from "./pages/Success";
import Service from "./pages/Service";
import Remont from "./pages/Remont";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import { useEffect, useState } from "react";
import Aos from "aos";
import FilteredCatalog from "./pages/FilteredCatalog/FilteredCatalog";
import RecProductSliders from "./components/recProducts/RecProductSliders";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NewsDetails from "./components/NewsSection/NewsDetails";
import NewsSlider from "./components/NewsSection/NewsSectionSlider";
import ScrollToTop from "./ScrollTop";
import Loader from "./components/Loader/Loader";

const App = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const location = useLocation();
    console.log(location);
    const [initialLoading, setInitialLoading] = useState(true);
    const [pageLoading, setPageLoading] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setInitialLoading(false);
            }, 300);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    useEffect(() => {
        setPageLoading(true);

        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {(initialLoading || pageLoading) && <Loader />}
            <ScrollToTop />

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path='success' element={<Success />} />

                    <Route path='service' element={<Service />} />
                    <Route path='remont' element={<Remont />} />
                    <Route path='news' element={<News />} />
                    <Route path='contacts' element={<Contacts />} />
                    <Route path='about' element={<About />} />
                    <Route path='catalog' element={<Catalog />} />

                    <Route
                        path='catalog/:category/:productId'
                        element={<ProductDetails />}
                    />

                    <Route
                        path='catalog/:category'
                        element={<FilteredCatalog />}
                    />

                    <Route path='news/:slug/' element={<NewsDetails />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
