import { useLocation, Link } from "react-router-dom";
import { Fragment } from "react";

const Breadcrumbs = () => {
    const location = useLocation();

    const pathname = location.pathname;
    const parts = pathname.split("/").filter(Boolean);

    // console.log(parts);

    return (
        <nav>
            <Link to={"/"}>Главная</Link>

            {parts.map((part, i) => {
                const path = "/" + parts.slice(0, i + 1).join("/");

                return (
                    <Fragment key={i}>
                        <span>/</span>

                        <Link to={path}>{part}</Link>
                    </Fragment>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
