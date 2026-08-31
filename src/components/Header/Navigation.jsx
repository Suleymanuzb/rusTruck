import NavigationItem from "./NavigationItem";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { useTranslation } from "react-i18next";
import MegaMenu from "./MegaMenu";

const Navigation = ({ openMenu, setOpenMenu }) => {
    const { t } = useTranslation();

    return (
        <div>
            <nav className='relative flex items-center max-[1200px]:gap-3 min-[1200px]:gap-10 '>
                <NavigationItem
                    hasDropdown
                    isOpen={openMenu === "about"}
                    onClick={() => {
                        setOpenMenu(openMenu === "about" ? null : "about");
                    }}
                >
                    {t("header.navigation.about")}
                </NavigationItem>

                <NavigationItem
                    hasDropdown
                    isOpen={openMenu === "media"}
                    onClick={() => {
                        setOpenMenu(openMenu === "media" ? null : "media");
                    }}
                >
                    {t("header.navigation.media")}
                </NavigationItem>

                <NavigationItem to='/service'>
                    {t("header.navigation.service")}
                </NavigationItem>

                <NavigationItem to='/news'>
                    {t("header.navigation.news")}
                </NavigationItem>

                <NavigationItem to='/contacts'>
                    {t("header.navigation.contacts")}
                </NavigationItem>

                {/* About modal */}
                {openMenu && (
                    <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                )}
            </nav>
        </div>
    );
};

export default Navigation;
