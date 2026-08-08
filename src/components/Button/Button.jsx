const Button = ({ children, variant, arrow, disabled = false }) => {
    const variants = {
        btn_big: "bg-[#FEC80B] hover:bg-[#FFD43A] disabled:bg-[#E9C135]",
        btn_big_border:
            "bg-transparent border-2 hover:bg-[#FFD43A] border-[#FEC80B] hover:bg-[#FFD43A] text-black px-6 py-3 disabled:bg-[#E9C135]",
        btn_big_more:
            "bg-[#FEC80B] text-black hover:bg-[#FFD43A] disabled:bg-[#E9C135] px-6 py-3",
        Big_btn: "bg-[#FEC80B] text-black py-3 px-[95px]",
    };

    return (
        <button
            disabled={disabled}
            className={`
                ${variants[variant]}
                px-8
                py-4
                rounded-md
            `}
      >
        {children}
        {arrow === "left" && <span>←</span>}
        {arrow === "right" && <span>→</span>}
        </button>
    );
};

export default Button;
