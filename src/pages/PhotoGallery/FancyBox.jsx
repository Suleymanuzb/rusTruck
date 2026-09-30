import useFancybox from "../ProductDetails/FancyHook";
import { galleryPhotos } from "./galleryPhtotos";

function App({ gallery, setGallery }) {
    const [fancyboxRef] = useFancybox({});

    console.log(gallery);

    let activeImages;

    if (gallery === "Автомобили") {
        activeImages = galleryPhotos.avtomobili;
    } else if (gallery === "Производство") {
        activeImages = galleryPhotos.production;
    } else if (gallery === "О компании") {
        activeImages = galleryPhotos.aboutCompany;
    } else if (gallery === "Выставки") {
        activeImages = galleryPhotos.showcase;
    } else {
        activeImages = galleryPhotos.avtomobili;
    }

    return (
        <div
            ref={fancyboxRef}
            className='grid md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-4'
        >
            {activeImages.map((item, i) => {
                return (
                    <div
                        key={i}
                        className={`${i === 4 || i === 19 ? "col-span-2 row-span-2" : "row-span-1"}`}
                    >
                        <a
                            href={item.image}
                            data-fancybox
                            data-caption='Рустрак Галерея'
                        >
                            <img
                                className='aspect-13/9 object-cover'
                                src={item.image}
                                alt='Sample image'
                            />
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
