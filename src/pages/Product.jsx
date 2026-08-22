import { useParams } from "react-router-dom";
import trucks from "../data/truckData";

const Product = ({ currentLang }) => {
    const { category, slug } = useParams();

    const truck = trucks.find((item) => item.slug === slug);

    if (!truck) {
        return <h1>Техника не найдена</h1>;
    }

    const language = currentLang.language;

    return (
        <div>
            <h1>{truck[language].truckType}</h1>

            <img src={truck.images.image} alt={truck[language].truckType} />

            <p>{truck[language].price}</p>

            <p>Категория: {category}</p>
        </div>
    );
};

export default Product;
