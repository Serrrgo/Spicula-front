import { ICategory } from '@/types/category.types';
import { API_ROUTES } from '@/config/services-url.config';
import { axiosClassic, axiosWithAuth } from '@/api/interceptors';

export const categoryService = {
	// ! Получить все категории
	async getAll() {
		return axiosClassic.get<ICategory>(`${API_ROUTES.CATEGORIES}`);
	},
	// ! Получить категории по ID
	async getById(catId: number) {
		return axiosClassic.get<ICategory>(
			`${API_ROUTES.CATEGORIES}/by-id/${catId}`,
		);
	},
	// ! Получить категории по Slug
	async getBySlug(slug: string) {
		return axiosClassic.get<ICategory>(
			`${API_ROUTES.CATEGORIES}/by-slug/${slug}`,
		);
	},
	// ! Создать категорию
	async create() {
		return axiosWithAuth.post<ICategory>(`${API_ROUTES.CATEGORIES}`);
	},
	// ! Обновить категорию
	async update(catId: number, catName: string, slug: string) {
		return axiosWithAuth.put<ICategory>(`${API_ROUTES.CATEGORIES}/${catId}`, {
			catName,
			slug,
		});
	},
	// ! Удалить категорию
	async delete(catId: number) {
		return axiosWithAuth.delete<ICategory>(`${API_ROUTES.CATEGORIES}/${catId}`);
	},
};
