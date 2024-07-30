import { FC, useEffect, useState } from 'react';
import SmallProductItem from '@/components/catalog/smallProductItem/SmallProductItem';
import { IProduct } from '@/types/product.types';
import CarouselBtn from '../carouselBtns/СarouselBtn';

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const [productWidth, setProductWidth] = useState(0);
	useEffect(() => {
		const updateProductWidths = () => {
			const container = document.querySelector(
				`.sectionBestsellers__carousel`,
			) as HTMLElement;
			if (container) {
				const productWidth = container.offsetWidth / 4;
				setProductWidth(productWidth);
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
			container.scrollBy({ left: -productWidth * 4, behavior: 'smooth' });
		}
	};

	const scrollRight = () => {
		const container = document.querySelector(
			`.sectionBestsellers__carousel_container`,
		);
		if (container) {
			container.scrollBy({ left: productWidth * 4, behavior: 'smooth' });
		}
	};
	//console.log(products);
	return (
		<div className='sectionBestsellers__carousel'>
			<div className='sectionBestsellers__carousel_container'>
				{products ? (
					<div
						className='sectionBestsellers__carousel_wrapper'
						style={{ width: `${productWidth * products.length}px` }}
					>
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
			<span />
			<div
				className='sectionBestsellers__carousel_btns'
				style={{ width: `${productWidth}px` }}
			>
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
