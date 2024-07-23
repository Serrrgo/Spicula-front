import Link from 'next/link';
import React from 'react';
import type { IGlobalLink } from '../../../types/globalLinks.types';

interface LinksColProps {
	linksArr: IGlobalLink[];
}

const NavLinks: React.FC<LinksColProps> = ({ linksArr }) => (
	<ul className='nav__menu'>
		{linksArr.map((item, i) => (
			<li
				className='nav__menu_item'
				key={i}
			>
				<Link
					href={item.href}
					className='nav__menu_link'
					aria-label={item.title}
				>
					{item.title}
				</Link>
			</li>
		))}
	</ul>
);

export default NavLinks;
