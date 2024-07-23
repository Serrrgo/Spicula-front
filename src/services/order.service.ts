import { IOrder } from '@/types/order.types';
import { API_ROUTES } from '@/config/services-url.config';
import { axiosWithAuth } from '@/api/interceptors';

type TypeOrderData = {
	rating: number;
	text: string;
};

export const orderService = {
	// ! Получить все заказыы
	async getAll() {
		return axiosWithAuth.get<IOrder>(`${API_ROUTES.ORDERS}`);
	},

	// ! Создать заказы
	// !!! Обновить заказы
	// !!! Получить заказыы по ID
	// !!! Удалить заказы
};
