'use client';

import { Icon } from '@iconify-icon/react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

interface ISearchForm {
	searchForm: string;
}
const NavSearch = () => {
	const { register, handleSubmit } = useForm<ISearchForm>();
	const onSubmit: SubmitHandler<ISearchForm> = (data) => {
		alert(`Поисковой запрос ${data.searchForm}`);
	};
	return (
		<div className='nav__search'>
			<form
				className='nav__search_span'
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					className='nav__search_input'
					placeholder='Поиск'
					type='text'
					{...register('searchForm', { required: true })}
				/>
				<button className='nav__search_button'>
					<Icon
						icon='prime:search'
						height='unset'
						className='nav__search_icon'
					/>
				</button>
			</form>
		</div>
	);
};

export default NavSearch;
