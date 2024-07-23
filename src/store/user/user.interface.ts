import { IUserProfile } from '@/types/user.types';

export interface IUserState extends IUserProfile {
	isAdmin?: boolean;
}
export interface IAuthError {
	message: string;
	statusCode?: number;
}

export interface IInitialState {
	user: IUserState | null;
	isLoading: boolean;
	error?: string | null;
}
