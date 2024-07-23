import { IReview } from '@/types/review.types';
import { API_ROUTES } from '@/config/services-url.config';
import { axiosClassic, axiosWithAuth } from '@/api/interceptors';

type TypeReviewData = {
	rating: number;
	text: string;
};

export const reviewService = {
	// ! Получить все отзывы
	async getAll() {
		return axiosClassic.get<IReview>(`${API_ROUTES.REVIEWS}`);
	},
	// ! Создать отзыв
	async create(prodId: string, data: TypeReviewData) {
		return axiosWithAuth.post<IReview>(
			`${API_ROUTES.REVIEWS}/create/${prodId}`,
			{ data },
		);
	},
  
	// !!! Обновить отзыв
	// !!! Получить отзывы по ID
	// !!! Удалить отзыв

};
