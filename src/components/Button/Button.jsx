const Button = ({ children, variant, arrow, className = ""}) => {
    const variants = {
        btn_big:
            "bg-[#FEC80B] hover:bg-[#FFD43A] active:bg-[#E9C135]  rounded-md leading-none md:px-8 md:py-4",
        btn_big_border:
            "bg-transparent border-2 hover:bg-[#FFD43A] border-[#FEC80B] hover:bg-[#FFD43A] text-black px-6 py-3 active:bg-[#E9C135] rounded-md leading-none md:px-8 md:py-4",
        btn_big_more:
            "bg-[#FEC80B] text-black hover:bg-[#FFD43A] active:bg-[#E9C135] px-10 py-2 rounded",
        Big_btn:
            "bg-[#FEC80B] text-black hover:bg-[#FFD43A]  active:bg-[#E9C135] py-3 px-[95px]",
    };

    return (
        <button
            className={`
                ${variants[variant]} ${className}
            `}
        >
            {children}
            {arrow === "left" && <span>←</span>}
            {arrow === "right" && <span>→</span>}
        </button>
    );
};

export default Button;
