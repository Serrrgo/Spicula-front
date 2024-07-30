import { FC } from 'react';
import { TypeProducts } from '@/types/product.types';
import SmallProductItem from '../catalog/smallProductItem/SmallProductItem';
import LinkButton from '../ui/linkButton/LinkButton';
import { titleFont } from '@/fonts';

const SectionPopulars: FC<TypeProducts> = ({ products }) => {
	return (
		<section className='sectionPopulars'>
			<div className='title sectionPopulars__title'>
				<h2 className={titleFont.className}>Популярные товары</h2>
			</div>
			<div className='sectionPopulars__market'>
				{products.map(product => (
					<SmallProductItem
						key={product.id}
						product={product}
					/>
				))}
			</div>
			<div className='sectionPopulars__link'>
				<LinkButton
					href={''}
					text='Подробнее'
				/>
			</div>
		</section>
	);
};

export default SectionPopulars;
