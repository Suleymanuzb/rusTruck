import NavigationItem from "./NavigationItem";

const Navigation = ({ navigation }) => {
    return (
        <nav className='flex items-center gap-10'>
            <NavigationItem to='/about' hasDropdown>
                {navigation.about}
            </NavigationItem>

            <NavigationItem to='/media' hasDropdown>
                {navigation.media}
            </NavigationItem>

            <NavigationItem to='/service'>{navigation.service}</NavigationItem>

            <NavigationItem to='/news'>{navigation.news}</NavigationItem>

            <NavigationItem to='/contacts'>
                {navigation.contacts}
            </NavigationItem>
        </nav>
    );
};

export default Navigation;
