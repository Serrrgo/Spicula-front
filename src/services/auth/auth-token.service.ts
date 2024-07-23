import Cookies from 'js-cookie';
import { IAuthResponse } from '@/types/auth.types';

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken',
}

// * Получаем токен из куки и возвращаем его или null, ели не получили
export const getAccessToken = (): string | null => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
	return accessToken || null;
};

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}');
};

export const saveTokenStorage = (accessToken: string) => {
	//const accessToken = data.accessToken;
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.CLIENT_DOMAIN, // ! устанавливаем домен, в пределах которого куки будут доступны
		sameSite: 'strict', // ! куки будет отправляться только с запросами, исходящими непосредственно с сайта, который установден
		expires: 1, // ! срок жизни куки (1 день)
	});
};

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN);
	localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data.accessToken);
	localStorage.setItem('user', JSON.stringify(data.user));
};
