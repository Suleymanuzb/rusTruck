import { Link } from "react-router-dom";
import truckCategories from "../../data/truckCategories";
import trucks from "../../data/truckData";
import { useTranslation } from "react-i18next";

const TruckCards = ({ category }) => {
    const { t } = useTranslation();

    const matchingImage = truckCategories.find(
        (item) => item.id === category?.id,
    );

    const howManyOfThem = trucks.filter(
        (truck) => truck.categoryId === category.id,
    );

    return (
        <Link
            to={`/catalog/${category.slug}`}
            data-aos='fade-up'
            className='flex! flex-col justify-between pt-4.5 pl-4 border border-gray-200 rounded-lg hover:shadow-[0_0_35px_rgba(254,200,11,0.20),0_0_70px_rgba(254,200,11,0.12)] hover:border hover:border-[#FEC80B] cursor-pointer h-61.25!  min-[1200px]:h-86!'
        >
            <div>
                <span
                    className={`block text-[18px] min-[1200px]:text-2xl leading-[1.2] ${category?.name.includes(" ") ? "line-clamp-2" : "truncate"}`}
                >
                    {category?.name}
                </span>
                <div>
                    <p className='text-base text-[#a2a2a2] pt-1.5'>
                        {howManyOfThem.length}
                        <span className='ml-1'>{`${howManyOfThem.length === 1 ? t("categoriesCards.howMany.model") : howManyOfThem.length <= 4 ? t("categoriesCards.howMany.modeli") : howManyOfThem.length <= 5 ? t("categoriesCards.howMany.models") : t("categoriesCards.howMany.models")}`}</span>
                    </p>
                </div>
            </div>
            <div className='flex md:justify-end md:self-end max-[500px]:w-32 max-[500px]:h-32 max-[1200px]:w-35.75 max-[1200px]:h-35.75'>
                <img src={matchingImage?.image} alt={category?.name} />
            </div>
        </Link>
    );
};

export default TruckCards;
