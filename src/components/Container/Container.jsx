const Container = ({ className = "", children = "" }) => {
    return (
        <div
            className={`w-full max-w-[1352px] px-[1.6rem] mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

export default Container;
