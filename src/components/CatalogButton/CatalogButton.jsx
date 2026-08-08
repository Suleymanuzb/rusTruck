const CatalogButton = () => {
    return (
        <button
            className='flex items-center gap-4 px-4 py-2.25
            bg-[#FEC80B]
            rounded-md hover:bg-[#FFD43A] active:bg-[#E9C135]'
        >
            <span className="text-2xl">☰</span>
            <span className="text-[18px]">Каталог</span>
        </button>
    );
};

export default CatalogButton;
