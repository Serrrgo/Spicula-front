'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FormButton from '@/components/ui/formButton/FormButton';
import { IAuthForm } from '@/types/auth.types';
//import { login } from '@/store/user/user.actions';
import { useTypedSelector } from '@/store/storeHooks/useTypedSelector';
//import { login, register } from '@/store/user/user.actions';
import useAuth from '@/hooks/useAuth';
import formatFormData from '@/utils/formatFormData';
import { getErrorMessage } from '@/utils/getErrorMessage';
import FormField from '../ui/formField/FormField';
import styles from './AuthLayout.module.sass';
import { userService } from '@/services/user.service';

interface AuthFormProps {
	isLoginForm: boolean;
}

const AuthForm: FC<AuthFormProps> = ({ isLoginForm }) => {
	const { login, register } = useAuth();
	const isError = useTypedSelector(state => state.user.error);

	const {
		register: formRegister,
		handleSubmit,
		formState,
		resetField,
	} = useForm<IAuthForm>({ mode: 'onChange' });
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['profile'],
		mutationFn: () => userService.getProfile(),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
		},
	});

	const onSubmit: SubmitHandler<IAuthForm> = async data => {
		let { email, password, firstName } = data;
		if (!isLoginForm && firstName) {
			data.email = email.trim().toLowerCase();
			data.password = password.trim();
			data.firstName = formatFormData(firstName);
		}
		if (isLoginForm) {
			login(data, {
				onSuccess: result => {
					mutate();
					toast.success(`С возвращением, ${result.user.firstName}`);
				},
				onError: error => toast.error(getErrorMessage(error)),
			});
		} else {
			register(data, {
				onSuccess: result => {
					mutate();
					toast.success(`Здравствуйте, ${result.user.firstName}`);
				},
				onError: error => toast.error(getErrorMessage(error)),
			});
		}
	};
	//try {
	//	const result = await dispatch(
	//		isLoginForm ? login(data) : register(data),
	//	).unwrap();
	//	if (isLoginForm)
	//		toast.success(`С возвращением, ${result.user.firstName}`);
	//	else toast.success(`Здравствуйте, ${result.user.firstName}`);
	//	queryClient.setQueryData(['profile'], result.user);
	//	dispatch(closeModal());
	//} catch (error) {
	//	const typedError = error as IAuthError;

	//}
	//};

	return (
		<form
			className={styles.authForm}
			onSubmit={handleSubmit(onSubmit)}
		>
			{!isLoginForm ? (
				<FormField
					type='text'
					id='firstName'
					label='Ваше имя:'
					placeholder='Введите имя'
					error={formState.errors.firstName?.message}
					{...formRegister('firstName', {
						required: 'Введите Ваше имя',
					})}
				/>
			) : null}
			<FormField
				type='email'
				id='email'
				label='Email:'
				placeholder='Введите e-mail'
				error={formState.errors.email?.message}
				{...formRegister('email', {
					required: 'Введите e-mail',
					pattern: {
						value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
						message: 'Введите корректный e-mail',
					},
				})}
			/>
			<FormField
				isPassword={true}
				type={'password'}
				id='password'
				label='Пароль:'
				placeholder='Введите пароль'
				error={formState.errors.password?.message}
				{...formRegister('password', {
					required: 'Введите пароль',
					minLength: {
						value: 6,
						message: 'Длина пароля минимум 6 символов',
					},
				})}
			/>
			<FormButton
				isValid={!formState.isValid}
				text={isLoginForm ? 'Войти' : 'Зарегистрироваться'}
			/>
			{/*{isError ? getErrorMessage(isError) : null}*/}
		</form>
	);
};

export default AuthForm;
