import { remontImg } from "../../data/remontPage";
import { ImgComparisonSlider } from "@img-comparison-slider/react";


function BeforeAfterSlider() {
    return (
        <ImgComparisonSlider>
            {remontImg.beforeAfter.map((item,i) => {
                return (
                    <div>
                        <img
                            slot='first'
                            src={item.before}
                            alt={item.before}
                        ></img>
                        <img
                            slot='second'
                            src={item.after}
                            alt={item.after}
                        ></img>
                    </div>
                );
            })}
        </ImgComparisonSlider>
    );
}

export default BeforeAfterSlider;
