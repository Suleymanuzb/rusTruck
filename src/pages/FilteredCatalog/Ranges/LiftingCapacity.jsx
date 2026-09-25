import { Slider } from "antd";
import { useState } from "react";

const LiftingCapacity = ({ selectedCategory }) => {
    const [rangeValues, setRangeValues] = useState([0, 10]);

    return (
        <div className='mb-8'>
            <h1 className='text-lg font-medium'>
                {selectedCategory?.loaderCapacity ||
                    "Грузоподъёмность КМУ, тонн"}
            </h1>

            <Slider
                className='my-slider'
                range={true}
                min={0}
                max={10}
                step={0.1}
                value={rangeValues}
                onChange={setRangeValues}
            />

            <div className='flex items-center gap-2'>
                <div className='border border-[#a2a2a2] rounded w-32 flex items-center gap-2 p-3'>
                    <label htmlFor='' className='opacity-40'>
                        {selectedCategory?.rangeSliderTexts?.from}
                    </label>

                    {/* "от" (Min) Input Box */}
                    <input
                        type='number'
                        value={rangeValues[0]}
                        onChange={(e) => {
                            const val =
                                e.target.value === ""
                                    ? ""
                                    : Number(e.target.value);
                            setRangeValues((prev) => [val, prev[1]]);
                        }}
                        step={0.1}
                        min={0}
                        max={10}
                        className='outline-none appearance-none w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                    />
                </div>

                {/* "до" (Max) Input Box */}
                <div className='border border-[#a2a2a2] rounded w-32 flex items-center gap-2 p-3'>
                    <label htmlFor='' className='opacity-40'>
                        {selectedCategory.rangeSliderTexts.upTo}
                    </label>
                    <input
                        value={rangeValues[1]}
                        onChange={(e) => {
                            const val =
                                e.target.value === ""
                                    ? ""
                                    : Number(e.target.value);
                            setRangeValues((prev) => [prev[0], val]);
                        }}
                        step={0.1}
                        min={0}
                        max={10}
                        type='number'
                        className='outline-none appearance-none w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                    />
                </div>
            </div>
        </div>
    );
};

export default LiftingCapacity;
