import React from "react";
import { Pagination } from "antd";
import { useTranslation } from "react-i18next";
import { icons } from "../../assets/icons/icons";
const { ChevronLeft, ChevronRight } = icons;
import "./pagination.css";

const App = ({ finalFilteredTrucks, currentPage, setCurrentPage }) => {
    const { t } = useTranslation();

    return (
        <Pagination
            className='my-pagination'
            current={currentPage}
            total={finalFilteredTrucks.length}
            pageSize={3}
            onChange={(page) => setCurrentPage(page)}
            itemRender={(page, type, originalElement) => {
                if (type === "prev") {
                    return (
                        <p className='flex items-center gap-1'>
                            <span>
                                <ChevronLeft />
                            </span>
                            {t("pagination.prev")}
                        </p>
                    );
                }

                if (type === "next") {
                    return (
                        <p className='flex items-center gap-1'>
                            {t("pagination.next")}{" "}
                            <span>
                                <ChevronRight />
                            </span>
                        </p>
                    );
                }

                return originalElement;
            }}
        />
    );
};
export default App;
