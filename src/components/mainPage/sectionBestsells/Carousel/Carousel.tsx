import { FC, useEffect, useState } from 'react';
import SmallProductItem from '@/components/catalog/smallProductItem/SmallProductItem';
import { IProduct } from '@/types/product.types';
import CarouselBtn from '../carouselBtns/СarouselBtn';

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const [productWidth, setProductWidth] = useState(0);
	useEffect(() => {
		const updateProductWidths = () => {
			const container = document.querySelector(`.sectionBestsellers__carousel`);
			if (container) {
				const containerWidth = container.clientWidth;
				const calculatedProductWidth = containerWidth * 0.22; // 25% ширины контейнера
				setProductWidth(calculatedProductWidth);
			}
		};

		updateProductWidths();
		window.addEventListener('resize', updateProductWidths);

		return () => {
			window.removeEventListener('resize', updateProductWidths);
		};
	}, []);

	const scrollLeft = () => {
		const container = document.querySelector(
			`.sectionBestsellers__carousel_container`,
		);
		if (container) {
			container.scrollBy({ left: -productWidth, behavior: 'smooth' });
		}
	};

	const scrollRight = () => {
		const container = document.querySelector(
			`.sectionBestsellers__carousel_container`,
		);
		if (container) {
			container.scrollBy({ left: productWidth, behavior: 'smooth' });
		}
	};
	return (
		<div className='sectionBestsellers__carousel'>
			<div className='sectionBestsellers__carousel_container'>
				{products ? (
					<div className='sectionBestsellers__carousel_wrapper'>
						{products.map(product => (
							<SmallProductItem
								key={product.id}
								product={product}
								style={{ width: `${productWidth}px` }}
							/>
						))}
					</div>
				) : (
					<h2>В выбранной категории продуктов не найдено</h2>
				)}
			</div>
			<div className='sectionBestsellers__btns-wrap'>
				<CarouselBtn
					direction='left'
					onClick={() => scrollLeft()}
				/>
				<CarouselBtn
					direction='right'
					onClick={() => scrollRight()}
				/>
			</div>
		</div>
	);
};

export default Carousel;
