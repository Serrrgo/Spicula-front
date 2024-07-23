//import { createAsyncThunk } from '@reduxjs/toolkit';
//import { IAuthForm, IAuthResponse } from '@/types/auth.types';
//import { errorCatch } from '@/api/error';
//import { IAuthError } from './user.interface';
//import { removeFromStorage } from '@/services/auth/auth-token.service';
//import { authService } from '@/services/auth/auth.service';

//export const register = createAsyncThunk<
//	IAuthResponse,
//	IAuthForm,
//	{ rejectValue: IAuthError }
//>('auth/register', async (data, thunkApi) => {
//	try {
//		const response = await authService.main('register', data);
//		return response;
//	} catch (error) {
//		return thunkApi.rejectWithValue({ message: errorCatch(error) });
//	}
//});

//export const login = createAsyncThunk<
//	IAuthResponse,
//	IAuthForm,
//	{ rejectValue: IAuthError }
//>('auth/login', async (data, thunkApi) => {
//	try {
//		const response = await authService.main('login', data);
//		return response;
//	} catch (error) {
//		return thunkApi.rejectWithValue({ message: errorCatch(error) });
//	}
//});

//export const checkAuth = createAsyncThunk<IAuthResponse>(
//	'auth/check-auth',
//	async (_, thunkApi) => {
//		try {
//			const response = await authService.getNewTokens();
//			return response;
//		} catch (error) {
//			return thunkApi.rejectWithValue(errorCatch(error));
//		}
//	},
//);

//export const logout = createAsyncThunk('auth/logout', async () =>
//	removeFromStorage(),
//);
