import Link from 'next/link';
import React from 'react';
import type { IGlobalLink } from '@/types/globalLinks.types';

interface LinksColProps {
	title: string;
	linksArr: IGlobalLink[];
}

const LinksCol: React.FC<LinksColProps> = ({ title, linksArr }) => (
	<dl className='footer__col'>
		<dt className='footer__col_title'>{title}</dt>
		{linksArr.map((item, i) => (
			<dd
				className='footer__col_item'
				key={i}
			>
				<Link
					href={item.href}
					aria-label={item.title}
				>
					{item.title}
				</Link>
			</dd>
		))}
	</dl>
);

export default LinksCol;
