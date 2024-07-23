import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { IAuthForm } from '@/types/auth.types';
import { closeModal } from '@/store/auth/auth.slice';
import { IAuthError } from '@/store/user/user.interface';
import {
	clearUser,
	setError,
	setLoading,
	setUser,
} from '@/store/user/user.slice';
import { authService } from '@/services/auth/auth.service';
import { userService } from '@/services/user.service';

export default function useAuth() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();

	const loginMutation = useMutation({
		mutationKey: ['profile'], // ! идентификатор мутации
		onMutate: () => {
			dispatch(setLoading(true));
			dispatch(setError(null));
		},
		mutationFn: (data: IAuthForm) => authService.main('login', data),
		onSuccess: data => {
			dispatch(setUser(data.user));
			queryClient.setQueryData(['profile'], data.user);
			dispatch(closeModal());
		},
		onError: (error: AxiosError<IAuthError>) => {
			dispatch(setError(error.response?.data.message as string));
		},
		onSettled: () => {
			dispatch(setLoading(false));
		},
	});

	const registerMutation = useMutation({
		mutationKey: ['profile'], // ! идентификатор мутации
		onMutate: () => {
			dispatch(setLoading(true));
			dispatch(setError(null));
		},
		mutationFn: (data: IAuthForm) => authService.main('register', data),
		onSuccess: data => {
			dispatch(setUser(data.user));
			queryClient.setQueryData(['profile'], data.user);
			dispatch(closeModal());
		},
		onError: (error: AxiosError<IAuthError>) => {
			dispatch(setError(error.response?.data.message as string));
		},
		onSettled: () => {
			dispatch(setLoading(false));
		},
	});

	const checkAuthMutation = useMutation({
		mutationKey: ['profile'], // ! идентификатор мутации
		mutationFn: () => userService.getProfile(),
		onSuccess: data => {
			dispatch(setUser(data));
			queryClient.setQueryData(['profile'], data);
		},
		onError: () => {
			dispatch(clearUser());
		},
	});

	const logoutMutation = useMutation({
		mutationKey: ['profile'], // ! идентификатор мутации
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			dispatch(clearUser());
			queryClient.invalidateQueries({ queryKey: ['profile'] });
		},
	});

	return {
		login: loginMutation.mutate,
		register: registerMutation.mutate,
		checkAuth: checkAuthMutation.mutate,
		logout: logoutMutation.mutate,
	};
}
