import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "./gallery.css";
import { useState } from "react";

import document1Of1 from "../../assets/images/reviews/1document/1.jpg";
import document2Of1 from "../../assets/images/reviews/1document/2.jpg";
import document3Of1 from "../../assets/images/reviews/1document/3.jpg";
import document4Of1 from "../../assets/images/reviews/1document/4.jpg";
import document5Of1 from "../../assets/images/reviews/1document/5.jpg";
import { icons } from "../../assets/icons/icons";
const { IconZoom } = icons;

export const LightGalleryComp = () => {
    // State to store the selected easing value
    const [easing, setEasing] = useState("0.680, -0.550, 0.265, 1.550");

    // Handler for when the select value changes
    const handleEasingChange = (event) => {
        setEasing(event.target.value);
    };

    return (
        <div className='App'>
            <HeaderComponent />
            <LightGallery
                plugins={[lgZoom]}
                elementClassNames={
                    "gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5!"
                }
                easing={easing}
                zoomFromOrigin={false}
            >
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={document1Of1}
                    data-responsive={document1Of1}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow border border-gray-200 rounded-lg cursor-pointer'
                        src={document1Of1}
                    />
                </a>
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={document2Of1}
                    data-responsive={document2Of1}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={document2Of1}
                    />
                </a>
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={document3Of1}
                    data-responsive={document3Of1}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={document3Of1}
                    />
                </a>
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={document4Of1}
                    data-responsive={document4Of1}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={document4Of1}
                    />
                </a>
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={document5Of1}
                    data-responsive={document5Of1}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={document5Of1}
                    />
                </a>
            </LightGallery>
        </div>
    );
};

const HeaderComponent = () => <div className='header'></div>;
