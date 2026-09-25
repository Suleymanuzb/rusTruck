import { Slider, Switch } from "antd";
import { useState } from "react";

const TankCapacity = ({ selectedCategory }) => {
    const [rangeValues, setRangeValues] = useState([0, 10000]);

    return (
        <div className='mb-8'>
            <h1>{selectedCategory.TankCapacity.title}</h1>

            <Slider
                range
                className='my-slider'
                min={0}
                max={1000}
                value={rangeValues}
                onChange={setRangeValues}
            />

            <div className='flex items-center gap-2'>
                <div className='p-3 border border-[#a2a2a2] w-32 rounded flex items-center gap-1.5'>
                    <label htmlFor='#' className='opacity-30'>
                        {selectedCategory.TankCapacity.from}
                    </label>
                    <input
                        className='outline-none appearance-none w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                        type='number'
                        value={rangeValues[0]}
                        min={0}
                        max={10000}
                        onChange={(e) => {
                            const value =
                                e.target.value === ""
                                    ? ""
                                    : Number(e.target.value);
                            setRangeValues((prev) => [value, prev[1]]);
                        }}
                    />
                </div>
                <div className='p-3 border border-[#a2a2a2] w-32 rounded flex items-center gap-1.5'>
                    <label htmlFor='#' className='opacity-30'>
                        {selectedCategory.TankCapacity.upTo}
                    </label>
                    <input
                        className='outline-none appearance-none w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                        type='number'
                        value={rangeValues[1]}
                        min={0}
                        max={10000}
                        onChange={(e) => {
                            const value =
                                e.target.value === ""
                                    ? ""
                                    : Number(e.target.value);
                            setRangeValues((prev) => [prev[0], value]);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TankCapacity;
