import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const parts = location.pathname
        .split("/")
        .filter(Boolean)
        .map((part) => decodeURIComponent(part));

    // if (parts.length === 0) return null;

    // const translated = t(`breadcrumbs.${pathNames[0]}`);

    return (
        <nav>
            <Link to={"/"} className='text-3xl'>
                {t("breadcrumbs.home")}
            </Link>

            {parts.map((part, index) => {
                const path = "/" + parts.slice(0, index + 1).join("/");

                return (
                    <div>
                        <Link to={path} key={part} className='text-3xl'>
                            {" / "}
                            {t(`breadcrumbs.${part}`)}
                        </Link>

                        {part === "catalog" && (
                            <Link to={path} key={part} className='text-3xl'>
                                {" / "}
                                {t(`header.megaMenu.categories.${part}`)}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
