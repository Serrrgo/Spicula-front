import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import LinkButton from '@/components/ui/linkButton/LinkButton';
import AddToCartBtn from '@/components/ui/productUI/AddToCartBtn';
import FavoriteBtn from '@/components/ui/productUI/FavoriteBtn/FavoriteBtn';
import { IProduct } from '@/types/product.types';
import styles from './SmallProductItem.module.sass';

interface SmallProductItem extends HTMLAttributes<HTMLDivElement> {
	product: IProduct;
}

const SmallProductItem: FC<SmallProductItem> = ({ product, ...props }) => {
	return (
		<div
			className={styles.smallprod}
			{...props}
		>
			<div className={styles.smallprod__imgwrapper}>
				<Image
					src={product.images[0]}
					alt={product.name}
					style={{ objectFit: 'cover' }}
					fill
				/>
				<FavoriteBtn prodId={product.id} />
			</div>
			<div className={styles.smallprod__descrwrapper}>
				<h4 className={styles.name}>{product.name}</h4>
				<h5 className={styles.brand}>{product.brand}</h5>
				<p className={styles.rate}>4.5</p>
				<p className={styles.rewiews}>10 отзывов</p>
				{/*<p>{product.reviews.length}</p>*/}
				<p className={styles.description}>{product.description}</p>
				<p className={styles.price}>
					{product.price
						? `${product.price.toString().slice(0, -3)} ${product.price.toString().slice(-3)} р.`
						: 'от ... р.'}
				</p>
				<div className={styles.btnsWrap}>
					<LinkButton
						href={''}
						text='Подробнее'
					/>
					<AddToCartBtn
						className={styles.cartbtn}
						product={product}
					/>
				</div>
			</div>
		</div>
	);
};

export default SmallProductItem;
