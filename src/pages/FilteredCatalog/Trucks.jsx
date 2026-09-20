import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { icons } from "../../assets/icons/icons";
import { useState } from "react";
const {
    IconLine,
    IconTable,
    SearchIcon,
    KorzinkaIcon,
    IconHeartBgWhite,
    DownloadIcon,
} = icons;

const Trucks = ({ matchingTrucks, i18n, category }) => {
    const [liked, setLiked] = useState(null);

    return (
        <div className='grid grid-cols-3 gap-5'>
            {matchingTrucks.map((truck) => {
                const truckCurrentLang = truck?.[i18n.language];

                return (
                    <div key={truck.id} className={` bg-white  w-auto`}>
                        <div className='relative'>
                            <Link to={`/catalog/${category}/${truck.id}`}>
                                <img
                                    src={truck.images.image}
                                    alt='truck'
                                    className={`aspect-9/7.5 object-cover ${!truck.available ? "opacity-30" : ""}`}
                                />

                                {!truck.available && (
                                    <div className='absolute z-30 inset-0 flex items-center justify-center '>
                                        <span className='text-xl px-5 py-2'>
                                            Нет в продаже
                                        </span>
                                    </div>
                                )}
                            </Link>
                        </div>
                        <div className='mb-10 px-3 py-4'>
                            <p className='text-lg mb-4 leading-[130%] line-clamp-2'>
                                {truckCurrentLang?.truckType}
                            </p>
                            <h5 className='text-[22px] font-medium mb-3'>
                                {truckCurrentLang?.price}
                            </h5>

                            <div className='flex items-center gap-2'>
                                <Button
                                    variant='btn_big'
                                    className='text-sm px-4! whitespace-nowrap'
                                >
                                    {truckCurrentLang?.buttons.more}
                                </Button>

                                <button>
                                    <KorzinkaIcon />
                                </button>
                                <button onClick={() => setLiked(truck.id)}>
                                    <IconHeartBgWhite
                                        className={`w-6 h-6 cursor-pointer ${liked === truck.id ? "text-[#fec400]" : "text-white"}`}
                                    />
                                </button>

                                <button className='flex gap-1.5 whitespace-nowrap text-[13px] text-gray-500'>
                                    {truckCurrentLang?.buttons.getPk}

                                    <DownloadIcon className='w-3 h-3.5 ' />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Trucks;
