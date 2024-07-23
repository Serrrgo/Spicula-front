'use client';

import { Icon } from '@iconify-icon/react';
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

interface ISubscribeForm {
	subscribeEmail: string;
}

const SubscribeForm = () => {
	const [isFocused, setIsFocused] = useState(false);
	const { register, handleSubmit, reset } = useForm<ISubscribeForm>();
	const onSubmit: SubmitHandler<ISubscribeForm> = (data) => {
		alert(`На вашу почту ${data.subscribeEmail} отправлено письмо`);
		reset({ subscribeEmail: '' });
	};
	//const onError: SubmitErrorHandler<ISubscribeForm> = (data) => {
	//	console.log(data);
	//};
	return (
		<form
			className={`footer__form ${isFocused ? 'focused' : ''}`}
			onSubmit={handleSubmit(onSubmit)}
		>
			<input
				className='footer__form_input'
				placeholder='Введите ваш e-mail'
				type='email'
				onFocus={() => setIsFocused(true)}
				{...register('subscribeEmail', {
					required: true,
					onBlur: () => setIsFocused(false),
				})}
			/>
			<button className='footer__form_button'>
				<Icon
					icon='prime:envelope'
					height='unset'
					className='footer__form_icon'
				/>
			</button>
		</form>
	);
};

export default SubscribeForm;
