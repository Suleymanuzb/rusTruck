import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

export function Layout({ currentLang }) {
    return (
        <>
            <Header currentLang={currentLang} />
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    );
}
