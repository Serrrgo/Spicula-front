//import './Header.sass';
import { NAV_LINKS } from '../../../../config/header-data';
import NavLinks from './headerComponents/NavLinks';
import NavLogo from './headerComponents/NavLogo';
import NavPersonal from './headerComponents/NavPersonal';
import NavSearch from './headerComponents/NavSearch';
import { montserrat } from '@/styles/fonts';

const Header = () => {
	return (
		<header>
			<nav className={`nav ${montserrat.className}`}>
				<NavLogo />
				<NavLinks linksArr={NAV_LINKS} />
				<NavSearch />
				<NavPersonal />
			</nav>
		</header>
	);
};

export default Header;
