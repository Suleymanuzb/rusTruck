import React from "react";
import { Dropdown, Space } from "antd";
import { icons } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";
const { IconRussianFlag, IconAmericanFlag, IconUzbekFlag } = icons;

const App = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    console.log(currentLanguage);

    const languages = [
        {
            label: (
                <div className='flex items-center gap-2  hover:text-[#fec80b] active:scale-95 transform duration-200'>
                    <div className='w-7.5 h-7.5 rounded-full! bg-[#fec80b] flex justify-center items-center hover:border-red-500 hover:border-[0.5px] mt-2'>
                        <IconAmericanFlag />
                    </div>
                    <div>
                        <span className="text-[10px]">EN</span>
                    </div>
                </div>
            ),
            key: "en",
        },
        {
            label: (
                <div className='flex items-center gap-2  hover:text-[#fec80b] active:scale-95 transform duration-200'>
                    <div className='w-7.5 h-7.5 rounded-full! bg-[#fec80b] flex justify-center items-center hover:border-red-500 hover:border-[0.5px] mt-2'>
                        <IconUzbekFlag />
                    </div>
                    <div>
                        <span className="text-[10px]">UZ</span>
                    </div>
                </div>
            ),
            key: "uz",
        },
        {
            label: (
                <div className='flex items-center gap-2  hover:text-[#fec80b] active:scale-95 transform duration-200'>
                    <div className='w-7.5 h-7.5 rounded-full! bg-[#fec80b] flex justify-center items-center hover:border-red-500 hover:border-[0.5px] mt-2'>
                        <IconRussianFlag />
                    </div>
                    <div>
                        <span className="text-[10px]">RU</span>
                    </div>
                </div>
            ),
            key: "ru",
        },
    ];

    const items = languages.filter(
        (language) => language.key !== currentLanguage,
    );

    const handleClick = (info) => {
        i18n.changeLanguage(info.key);
    };

    return (
        <Dropdown
            menu={{ items, onClick: handleClick }}
            trigger={["click"]}
            classNames={{
                root: "my-language-popup",
            }}
            className=' my-language-menu'
        >
            <div className='w-10 h-10 rounded-full bg-[#fec80b] border-red-500 border-[0.5px] flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md active:scale-85 transition-all  cursor-pointer'>
                {currentLanguage === "ru" ? (
                    <IconRussianFlag />
                ) : currentLanguage === "uz" ? (
                    <IconUzbekFlag />
                ) : (
                    <IconAmericanFlag />
                )}
            </div>
        </Dropdown>
    );
};
export default App;
