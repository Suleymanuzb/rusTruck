const H2 = ({ children, variant = "regular" }) => {
    const variants = {
        regular: "text-[32px] font-normal leading-[120%]",
        medium: "text-[32px] font-medium leading-[120%]",
        extrabold: "text-[32px] font-extrabold leading-[120%]",
    };

    return (
        <h2 className={`text-black ${variants[variant]}`}>
            {children}
        </h2>
    );
};

export default H2;
