import Link from 'next/link';
import { SITE_PAGES } from '@/config/pages-url.config';
import SpiculaLogo from '@/public/SPICULA-logo.svg';

const NavLogo = () => {
	return (
		<Link
			className='nav__logo'
			href={SITE_PAGES.HOME}
		>
			<SpiculaLogo />
		</Link>
	);
};

export default NavLogo;
