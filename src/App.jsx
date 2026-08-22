import ru from "./data/translations/ru";

import Header from "./components/Header/Header";
import Success from "./pages/Success";
import Service from "./pages/Service";
import Remont from "./pages/Remont";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import { useEffect } from "react";
import Aos from "aos";
import Product from "./pages/Product";

const App = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const currentLang = ru;

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout currentLang={currentLang} />}>
                    <Route index element={<Home currentLang={currentLang} />} />
                    <Route
                        path='success'
                        element={<Success currentLang={currentLang} />}
                    />
                    <Route
                        path='service'
                        element={<Service currentLang={currentLang} />}
                    />
                    <Route
                        path='remont'
                        element={<Remont currentLang={currentLang} />}
                    />
                    <Route
                        path='news'
                        element={<News currentLang={currentLang} />}
                    />
                    <Route
                        path='contacts'
                        element={<Contacts currentLang={currentLang} />}
                    />
                    <Route
                        path='about'
                        element={<About currentLang={currentLang} />}
                    />
                    <Route
                        path='catalog'
                        element={<Catalog currentLang={currentLang} />}
                    />
                    <Route
                        path='catalog/:category/:slug'
                        element={<Product currentLang={currentLang} />}
                    />
                </Route>
            </Routes>
        </>
    );
};

export default App;
