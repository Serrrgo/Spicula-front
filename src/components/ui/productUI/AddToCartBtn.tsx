import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { FC, HTMLAttributes } from 'react';
import { IProduct } from '@/types/product.types';
import { useCart } from '@/store/storeHooks/useCart';
import { useCartActions } from '@/store/storeHooks/useCartActions';


interface AddToCartBtnProps extends HTMLAttributes<HTMLDivElement> {
	product: IProduct;
}

const AddToCartBtn: FC<AddToCartBtnProps> = ({ product, className, ...props }) => {
	const { items } = useCart();
	const { addToCart, removeFromCart } = useCartActions();
	const currentItem = items.find(
		cartItem => cartItem.product.id === product.id,
	);
	return (
		<Icon
			className={className} {...props}
			height='unset'
			icon={
				currentItem
					? 'iconamoon:shopping-bag-fill'
					: 'iconamoon:shopping-bag-light'
			}
			//onClick={() => {
			//	currentItem
			//		? removeFromCart({ id: currentItem.id })
			//		: addToCart({ product, quantity: 1, price: product.price });
			//}}
		/>
	);
};

export default AddToCartBtn;