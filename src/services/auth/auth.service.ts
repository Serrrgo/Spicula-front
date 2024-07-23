import { IAuthForm, IAuthResponse } from '@/types/auth.types';
import { API_ROUTES } from '@/config/services-url.config';
import { axiosClassic } from '@/api/interceptors';
import { removeFromStorage, saveTokenStorage } from './auth-token.service';

export const authService = {
	// ! Логин или регистрация
	async main(type: 'login' | 'register', data: IAuthForm) {
		// * отправляем запрос на авторизацию или регистрацию
		const response = await axiosClassic.post<IAuthResponse>(
			`${API_ROUTES.AUTH}/${type}`,
			data,
		);
		// * если в ответе есть AccessToken, сохраняем его
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
		return response.data;
	},

	// ! Обновление Refresh-токена
	async getNewTokens() {
		// * отправляем запрос на обновление токена
		const response = await axiosClassic.post<IAuthResponse>(
			`${API_ROUTES.AUTH}/login/access-token`,
		);
		console.log('Auth-access by getNewTokens');
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
		return response.data;
	},

	// ! Логаут
	async logout() {
		const response = await axiosClassic.post<boolean>(
			`${API_ROUTES.AUTH}/logout`,
		);
		if (response.data) removeFromStorage();
		return response.data;
	},
};
