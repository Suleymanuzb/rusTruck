import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "./gallery.css";
import { useState } from "react";

import certificate1 from "../../assets/images/certificate/1.jpg";
import certificate2 from "../../assets/images/certificate/2.jpg";
import certificate3 from "../../assets/images/certificate/3.jpg";
import certificate4 from "../../assets/images/certificate/4.jpg";
import certificate5 from "../../assets/images/certificate/5.jpg";
import certificate6 from "../../assets/images/certificate/6.jpg";
import certificate7 from "../../assets/images/certificate/7.jpg";
import certificate8 from "../../assets/images/certificate/8.jpg";
import certificate9 from "../../assets/images/certificate/9.jpg";
import certificate10 from "../../assets/images/certificate/10.jpg";
import certificate11 from "../../assets/images/certificate/11.jpg";

import { icons } from "../../assets/icons/icons";
const { IconZoom } = icons;

export const LightGalleryCert = () => {
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
                    data-src={certificate1}
                    data-responsive={certificate1}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow border border-gray-200 rounded-lg cursor-pointer'
                        src={certificate2}
                    />
                </a>
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={certificate2}
                    data-responsive={certificate2}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={certificate3}
                    />
                </a>
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={certificate3}
                    data-responsive={certificate3}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={certificate3}
                    />
                </a>
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={certificate4}
                    data-responsive={certificate4}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={certificate4}
                    />
                </a>
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={certificate5}
                    data-responsive={certificate5}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={certificate6}
                    />
                </a>
            
            
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={certificate6}
                    data-responsive={certificate6}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={certificate7}
                    />
                </a>

                
                <a
                    className={
                        "gallery__item aspect-4/5 cursor-pointer group relative overflow-hidden"
                    }
                    data-lg-size='800-1200'
                    data-src={certificate6}
                    data-responsive={certificate7}
                    data-sub-html=''
                >
                    <span className='rounded-lg absolute inset-0 flex items-center justify-center group-hover:bg-black/50 transition-all duration-200'>
                        <span className='text-4xl text-white opacity-0 group-hover:opacity-100'>
                            <IconZoom />
                        </span>
                    </span>
                    <img
                        className='img-fluid w-full h-full shadow-2xl border border-gray-200 rounded-lg cursor-pointer'
                        src={certificate7}
                    />
                </a>
            </LightGallery>
        </div>
    );
};

const HeaderComponent = () => <div className='header'></div>;
