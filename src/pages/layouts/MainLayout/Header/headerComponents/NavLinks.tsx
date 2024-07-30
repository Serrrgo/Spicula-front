import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import type { IGlobalLink } from '../../../../../types/globalLinks.types';

interface LinksColProps {
	linksArr: IGlobalLink[];
}

const NavLinks: React.FC<LinksColProps> = ({ linksArr }) => {
	const router = useRouter();
	//console.log(`Pathname = ${router.pathname}`);
	//linksArr.map(item => console.log(item.href));
	return (
		<ul className='nav__menu'>
			{linksArr.map((item, i) => (
				<li
					className='nav__menu_item'
					key={i}
				>
					<Link
						href={item.href}
						className={
							router.pathname == item.href
								? `nav__menu_link active`
								: `nav__menu_link`
						}
						aria-label={item.title}
					>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;
