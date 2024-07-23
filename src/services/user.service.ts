import { TypeUserForm } from '@/types/auth.types';
import { IUserProfile } from '@/types/user.types';
import { API_ROUTES } from '@/config/services-url.config';
import { axiosWithAuth } from '@/api/interceptors';

class UserService {
	// ! Получить профиль
	async getProfile() {
		const response = await axiosWithAuth.get<IUserProfile>(
			`${API_ROUTES.USER}`,
		);
		return response.data;
	}
	// ! Обновить профиль
	async updateProfile(data: TypeUserForm) {
		const response = await axiosWithAuth.put(`${API_ROUTES.USER}`, data);
		return response.data;
	}
	// ! Обновить список избранного
	async toggleFavorites(productId: string) {
		const response = await axiosWithAuth.patch(
			`${API_ROUTES.USER}/favorites/${productId}`,
		);
		return response.data;
	}
}

export const userService = new UserService();
