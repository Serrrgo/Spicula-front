import { IAuthError } from '@/store/user/user.interface';
import { IUserProfile } from './user.types';

export interface IAuthForm {
	email: string;
	password: string;
	firstName?: string;
}

export interface ITokens {
	accessToken: string;
	refreshToken?: string;
}

// * Ответ от сервера при авторизации/регистрации
export interface IAuthResponse extends ITokens {
	user: IUserProfile;
	error?: IAuthError;
}

// ! метод Omit вырезает указанные поля, которые не будут редактироваться
// ! метод Partial делает всё остальное необязательными полями
export type TypeUserForm = Omit<IUserProfile, 'id'> & { password?: string };
