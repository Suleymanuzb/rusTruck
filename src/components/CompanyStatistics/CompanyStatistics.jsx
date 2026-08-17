import Container from "../Container/Container";
import {
    animate,
    useMotionValue,
    useTransform,
    motion,
    useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const CompanyStatistics = ({ currentLang }) => {
    function CountMotion({ value, duration = 2.5 }) {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-50px" });

        const count = useMotionValue(0);
        const rounded = useTransform(count, (latest) => Math.round(latest));

        useEffect(() => {
            if (isInView) {
                const controls = animate(count, Number(value) || 0, {
                    duration,
                    ease: "easeOut",
                });
                return () => controls.stop();
            }
        }, [isInView, value, duration, count]);

        return <motion.span ref={ref}>{rounded}</motion.span>;
    }

    return (
        <div className='bg-[#fec80b] mt-20'>
            <Container className='grid  md:grid-cols-6 pt-13.25 pb-16.25 gap-y-10'>
                {currentLang.CompanyStatistics.fullThreeStats.map(
                    (statistic, index) => {
                        return (
                            <div key={index} className='col-span-2'>
                                <div className='flex flex-col mb-6'>
                                    <p className='text-[100px] font-medium leading-none'>
                                        <CountMotion
                                            value={statistic.numberOfStats}
                                            duration={1.5}
                                        />
                                    </p>
                                    <span className='text-[32px] font-medium leading-[1.18] '>
                                        {statistic.unit}
                                    </span>
                                </div>
                                <p className='leading-normal  md:max-w-78'>
                                    {statistic.description}
                                </p>
                            </div>
                        );
                    },
                )}
            </Container>
        </div>
    );
};

export default CompanyStatistics;
