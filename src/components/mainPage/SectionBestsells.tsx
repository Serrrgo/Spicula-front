import { FC } from 'react';
import { TypeProducts } from '@/types/product.types';
import Carousel from './sectionBestsells/Carousel/Carousel';
import { titleFont } from '@/fonts';

const SectionBestsells: FC<TypeProducts> = ({ products }) => {
	return (
		<section className='sectionBestsellers'>
			<div className='title sectionBestsellers__title'>
				<h2 className={titleFont.className}>Бестселлеры</h2>
			</div>
			<Carousel products={products} />
		</section>
	);
};

export default SectionBestsells;
