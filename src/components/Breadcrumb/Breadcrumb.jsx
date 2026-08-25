import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const { t } = useTranslation();

    const categories = t("header.megaMenu.categories.types", {
        returnObjects: true,
    });

    const location = useLocation();

    const parts = location.pathname.split("/").filter(Boolean);
    console.log("parts pr removes all /", parts);

    return (
        <div>
            {parts.map((part, index) => {
                const decodedPart = decodeURIComponent(part);

                const selectedCategory = categories.find(
                    (item) => item.slug === decodedPart,
                );
                console.log(selectedCategory);

                const breadcrumbName = selectedCategory
                    ? selectedCategory.name
                    : decodedPart;

                const isLast = index === parts.length - 1;
                console.log(isLast);

                return (
                    <span className='' key={part}>
                        {breadcrumbName}
                        {!isLast && " / "}
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
