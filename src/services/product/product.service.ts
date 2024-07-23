import { IProduct, TypeDataFilters, TypeProducts } from '@/types/product.types';
import { API_ROUTES } from '@/config/services-url.config';
import { axiosClassic, axiosWithAuth } from '@/api/interceptors';

export const productService = {
	// ! Получить все продукты
	async getAll(queryData = {} as TypeDataFilters) {
		return axiosClassic.get<TypeProducts>(`${API_ROUTES.PRODUCTS}`, {
			params: queryData,
		});
	},
	// ! Получить продукт по ID
	async getById(id: string) {
		return axiosClassic.get<IProduct>(`${API_ROUTES.PRODUCTS}/by-id/${id}`);
	},
	// ! Получить продукты по Slug
	async getBySlug(slug: string) {
		return axiosClassic.get<IProduct>(`${API_ROUTES.PRODUCTS}/by-slug/${slug}`);
	},
	// ! Получить продукты по категории
	async getByCat(catSlug: string) {
		return axiosClassic.get<IProduct>(
			`${API_ROUTES.PRODUCTS}/by-cat/${catSlug}`,
		);
	},
	// ! Получить похожие продукты
	async getSimilar(id: string) {
		return axiosClassic.get<IProduct>(`${API_ROUTES.PRODUCTS}/similar/${id}`);
	},
	// ! Создать продукт
	async create() {
		return axiosWithAuth.post<IProduct>(`${API_ROUTES.PRODUCTS}`);
	},
	// ! Обновить продукт
	async update(id: string, data: IProduct) {
		return axiosWithAuth.put<IProduct>(`${API_ROUTES.PRODUCTS}/${id}`, {
			data,
		});
	},
	// ! Удалить продукт
};
