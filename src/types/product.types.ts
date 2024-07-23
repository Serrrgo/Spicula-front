import { IBase } from './root.types';

export interface IProduct extends IBase {
	brand: string;
	sku: string;
	name: string;
	slug: string;
	description: string;
	text: string;
	images: string[];
	haveVars: boolean;

	price?: number;
	priceOld: number;
	quantity: number;
	//categories: ICategory[];
	//reviews: IReview[];
	//favorites: IProduct[];
}

export type TypeProducts = {
	products: IProduct[];
	//length: number;
};

export interface IProductDetails {
	product: IProduct;
}

// ! фильтры и пагинация
export type TypeDataFilters = {
	sort?: EnumProductsSort;
	searchItem?: string;
	page?: string | number;
	perPage?: string | number;
};

export enum EnumProductsSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest',
}
