import React from "react";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import "./sortDown.css";

const SortDown = () => {
    const { t } = useTranslation();
    const sortOptions = t("filteredPage.intro.sortDown", {
        returnObjects: true,
    });

    const items = sortOptions.flatMap((option, i) => {
        const item = {
            label: option,
            key: option.key,
        };

        if (i < sortOptions.length - 1) {
            return [item, { type: "divider" }];
        }

        return [item];
    });

    return (
        <Dropdown
            menu={{
                items,
                styles: {
                    root: {
                        width: "250px",
                    },
                },
            }}
            trigger={["click"]}
        >
            <a className="mt-1.25" onClick={(e) => e.preventDefault()}>
                <Space>{t("filteredPage.intro.sortText")} </Space>
            </a>
        </Dropdown>
    );
};
export default SortDown;
