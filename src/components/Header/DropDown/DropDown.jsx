import { AnimatePresence, motion } from "framer-motion";

const DropDown = ({ openDropDown, children }) => {
    return (
        <>
            <div className='min-[576px]:hidden'>
                <AnimatePresence initial={false}>
                    {openDropDown && (
                        <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                opacity: 0.2,
                            }}
                            className='overflow-hidden'
                        >
                            {children}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            {/* 576px and above */}
            <div className='hidden min-[576px]:block'>{children}</div>
        </>
    );
};

export default DropDown;
