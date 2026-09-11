import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import trucks from "../../data/truckData";
import { Fragment } from "react";
import { TruckNews } from "../../data/TruckNews";
import Container from "../Container/Container";

const Breadcrumbs = () => {
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
    const truckNewsUrl = parts[1];

    const isCatalog = parts[0] === "catalog";
    const isNews = parts[0] === "news";

    const currentTruckNews = isNews
        ? TruckNews.find((truckNews) => truckNews.slug === truckNewsUrl)
        : undefined;

    const truckNewsLan = currentTruckNews?.[i18n.language];

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
            return selectedCategory?.name;
        }

        if (index === 2 && parts[0] === "catalog") {
            return product?.truckType;
        }

        if (index === 1 && parts[0] === "news") {
            return truckNewsLan?.mainTitle;
        }

        return part;
    };

    return (
        <nav className='text-[14px] mb-6'>
            <Link to={"/"} className='text-[#777]'>
                {t("breadcrumbs.home")}
            </Link>

            {parts.map((part, index) => {
                const path = "/" + rawParts.slice(0, index + 1).join("/");
                const isLast = index === parts.length - 1;

                return (
                    <Fragment key={part}>
                        <span>{" / "}</span>

                        {isLast ? (
                            <span className='text-[#222] font-medium'>
                                {getLabel(part, index)}
                            </span>
                        ) : (
                            <Link
                                to={path}
                                className='cursor-pointer text-[#777]'
                            >
                                {getLabel(part, index)}
                            </Link>
                        )}
                    </Fragment>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
