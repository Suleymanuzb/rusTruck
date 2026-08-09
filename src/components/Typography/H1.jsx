const H1 = ({ children, variant = "regular", className = "" }) => {
    const variants = {
        regular: "text-[42px] font-normal leading-[120%]",
        medium: "text-[42px] font-medium leading-[120%]",
        extrabold: "text-[40px] font-extrabold leading-[120%]",
    };

    return <h1 className={`text-black ${variants[variant]} ${className}`}>{children}</h1>;
};

export default H1;
