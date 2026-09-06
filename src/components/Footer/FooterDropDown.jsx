import { AnimatePresence, motion } from "framer-motion";

const FooterDropDown = ({ openDropDown, children }) => {
    return (
        <div>
            <div className='min-[768px]:hidden'>
                <AnimatePresence initial={false}>
                    {openDropDown && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className='overflow-hidden'
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className='hidden min-[768px]:block'>{children}</div>
        </div>
    );
};

export default FooterDropDown;
