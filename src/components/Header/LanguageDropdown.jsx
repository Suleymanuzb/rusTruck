import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { icons } from "../../assets/icons/icons";
import { useTranslation } from "react-i18next";

const { IconLanguage, IconAmericanFlag, IconRussianFlag, IconUzbekFlag } =
    icons;

const LanguageDropdown = () => {
    const { i18n } = useTranslation();

    const languages = [
        {
            key: "en",
            label: "English",
            icon: <IconAmericanFlag />,
        },
        {
            key: "ru",
            label: "Русский",
            icon: <IconRussianFlag />,
        },
        {
            key: "uz",
            label: "O‘zbekcha",
            icon: <IconUzbekFlag />,
        },
    ];

    const items = languages.map((language) => ({
        key: language.key,

        label: (
            <button
                type='button'
                onClick={() => i18n.changeLanguage(language.key)}
                className={`
                    flex items-center gap-2
                    rounded-lg  py-2
                    text-[14px] font-medium
                    transition-all duration-200
                    ${
                        i18n.language === language.key
                            ? "bg-[#FEC80B]/10 text-[#111]"
                            : "text-gray-700 hover:bg-gray-100"
                    }
                `}
            >
                <span className='flex h-5 w-5 items-center justify-center'>
                    {language.icon}
                </span>

                <span className='flex-1 text-left'>{language.label}</span>

                {i18n.language === language.key && (
                    <span className='h-1.5 w-1.5 rounded-full bg-[#FEC80B]' />
                )}
            </button>
        ),
    }));

    return (
        <Dropdown
            menu={{
                items,
                className:
                    "!rounded-xl !p-1.5 !shadow-[0_10px_35px_rgba(0,0,0,0.12)]",
            }}
            trigger={["click"]}
            placement='bottomRight'
        >
            <button
                type='button'
                className='
                    flex items-center gap-2
                    rounded-lg
                    px-2.5 py-2
                    text-gray-800
                    transition-all duration-200
                    hover:bg-gray-100
                    active:scale-95
                '
            >
                <IconLanguage />

                <span className='hidden text-sm font-medium sm:block'>
                    {i18n.language.toUpperCase()}
                </span>
            </button>
        </Dropdown>
    );
};

export default LanguageDropdown;
