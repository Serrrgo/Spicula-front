import axios, { type CreateAxiosDefaults } from 'axios';
import { errorCatch } from './error';
import {
	getAccessToken,
	removeFromStorage,
} from '@/services/auth/auth-token.service';
import { authService } from '@/services/auth/auth.service';

// ? СОЗДАНИЕ ЭКЗЕМПЛЯТОРВ AXIOS

// * Определение базовых опций:
const options: CreateAxiosDefaults = {
	baseURL: `${process.env.BACKEND_URL}/api`, // ! в продакшн лучше вынести в .env
	headers: {
		'Content-Type': 'application/json', // * тип контента, который ожидается от клиента
	},
	withCredentials: true, // ! декларация работы с серверными куками
};
// * Создание самих экземпляров:
const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

// ? НАСТРОЙКА ИНТЕРСЕПТОРОВ
// ? Интерсепторы позволяют выполнять код или изменять запросы и ответы перед их отправкой или после получения

//// * Интерсептор запроса авторизации, возвращает модифицированный запрос для отправки
axiosWithAuth.interceptors.request.use((config) => {
	const accessToken = getAccessToken(); // * получаем токен доступа
	// * проверяем, существует ли в конфигурации запроса объект заголовков и доступен ли токен
	if (config?.headers && accessToken) {
		// * в случае успеха назначем соответствующий заголовок для авторизации
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

//// * Интерсептор авторизации, возвращает модифицированный запрос для отправки
axiosWithAuth.interceptors.response.use(
	// * в случае успеха просто возвращаем конфиг
	(config) => config,
	// * поведение в случае ошибки
	async (error) => {
		const originalRequest = error.config;
		if (
			// * проверка условий возникновения ошибки (возможно дело в сроке действия куки)
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			// * проверка повторяемости ошибки
			error.config &&
			!error.config._isRetry
		) {
			// * фиксация повторяемости
			originalRequest._isRetry = true;
			try {
				await authService.getNewTokens();
				return axiosWithAuth.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage();
			}
		}
		throw error;
	},
);

export { axiosClassic, axiosWithAuth };
