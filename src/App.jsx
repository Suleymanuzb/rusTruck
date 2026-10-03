import Header from "./components/Header/Header";
import Success from "./pages/Success";
import Service from "./pages/Service";
import Remont from "./pages/Remont/Remont";
import News from "./pages/News/News";
import Contacts from "./pages/Contact/Contacts";
import About from "./pages/About/About";
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
import NotFound from "./pages/NotFound";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import OurPartners from "./pages/ourPartners/OurPartners";
import Production from "./pages/production/Production";
import Suppliers from "./pages/suppliers/Suppliers";
import Reviews from "./pages/Reviews/Reviews";
import Vacancies from "./pages/vacancy/Vacancies";
import Certificate from "./pages/Certificate/Certificate";
import Loan from "./pages/Loan/Loan";
import Korzinka from "./pages/Korzinka/Korzinka";
import Favourites from "./pages/Favourites/Favourites";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import VideoPage from "./pages/VideoPage/VideoPage";
import Ads from "./pages/Ads/Ads";
import Search from "./pages/Search/Search";
import top from "./assets/images/top-icon.svg";

const App = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const location = useLocation();
    // console.log(location);
    const [initialLoading, setInitialLoading] = useState(true);
    const [pageLoading, setPageLoading] = useState(false);

    const [showTopButton, setShowTopButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

            {/* Scroll to top button */}

            <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`fixed right-9 bottom-5 z-9999 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer transition-opacity duration-500 ${showTopButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <img src={top} alt='на вверх' />
            </div>

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
                    <Route path='partners' element={<OurPartners />} />

                    <Route path='production' element={<Production />} />

                    <Route path='suppliers' element={<Suppliers />} />
                    <Route path='reviews' element={<Reviews />} />
                    <Route path='vacancies' element={<Vacancies />} />
                    <Route path='certificate' element={<Certificate />} />
                    <Route path='leasing' element={<Loan />} />
                    <Route path='korzinka' element={<Korzinka />} />
                    <Route path='favourites' element={<Favourites />} />
                    <Route path='photogallery' element={<PhotoGallery />} />
                    <Route path='video' element={<VideoPage />} />
                    <Route path='promo' element={<Ads />} />
                    <Route path='search' element={<Search />} />

                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
