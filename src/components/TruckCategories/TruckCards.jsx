import truckCategories from "../../data/truckCategories";

const TruckCards = ({ category }) => {

  console.log(typeof category?.id);
  
    const matchingImage = truckCategories.find(
        (item) => item.id === category?.id,
    );

    console.log(typeof matchingImage?.id);

    return (
        <a
            href={`catalog/${category?.path}`}
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
                    <span className='text-[#a2a2a2]'>
                        {category?.howManyModels}
                    </span>
                </div>
            </div>
            <div className='flex justify-end self-end max-[500px]:w-32 max-[500px]:h-32 max-[1200px]:w-35.75 max-[1200px]:h-35.75'>
                <img src={matchingImage?.image} alt={category?.name} />
            </div>
        </a>
    );
};

export default TruckCards;
