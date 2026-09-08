import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import trucks from "../../data/truckData";

const Breadcrumb = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const rawParts = location.pathname.split("/").filter(Boolean);

    const parts = rawParts.map((part) => decodeURIComponent(part));

    // if (parts.length === 0) return null;

    const categories = t("header.megaMenu.categories.types", {
        returnObjects: true,
    });

    const categorySlug = parts[1];
    const productId = parts[2];

    const isCatalog = parts[0] === "catalog";

    const currentTruck = isCatalog
        ? trucks.find((truck) => truck.id === Number(productId))
        : undefined;

    const selectedCategory = isCatalog
        ? categories.find((item) => item.slug === categorySlug)
        : undefined;
    const product = currentTruck?.[i18n.language];

    const getLabel = (part, index) => {
        if (index === 0) {
            return t(`breadcrumbs.${part}`);
        }

        if (index === 1 && parts[0] === "catalog") {
            return selectedCategory.name;
        }

        if (index === 2 && parts[0] === "catalog") {
            return product?.truckType;
        }

        return part;
    };

    return (
        <nav>
            <Link to={"/"} className='text-3xl'>
                {t("breadcrumbs.home")}
            </Link>

            {parts.map((part, index) => {
                const path = "/" + rawParts.slice(0, index + 1).join("/");
                const isLast = index === parts.length - 1;

                return isLast ? (
                    <span key={part} className='text-pink-500 text-3xl'>
                        {" / "}
                        {getLabel(part, index)}
                    </span>
                ) : (
                    <Link to={path} key={part} className='text-3xl'>
                        {" / "}
                        {getLabel(part, index)}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
