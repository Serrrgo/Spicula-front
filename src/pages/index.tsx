import { GetStaticProps } from 'next';
import { FC } from 'react';
import { TypeProducts } from '@/types/product.types';
import MainPage from './MainPage';
//import '@/components/mainPage/mainPage.sass';
import { productService } from '@/services/product/product.service';

export interface TypedStaticProps {
	populars: TypeProducts;
	bestsells: TypeProducts;
}

export const getStaticProps: GetStaticProps<TypedStaticProps> = async () => {
	const { data: populars } = await productService.getAll({
		page: 5,
		perPage: 8,
	});
	const { data: bestsells } = await productService.getAll({
		page: 8,
		perPage: 8,
	});
	return {
		props: { populars, bestsells },
		revalidate: 60 * 60 * 24,
	};
};

export const Main: FC<TypedStaticProps> = ({ populars, bestsells }) => {
	return (
		<MainPage
			populars={populars}
			bestsells={bestsells}
		/>
	);
};
export default Main;
