'use client';

import { Icon } from '@iconify-icon/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SITE_PAGES } from '@/config/pages-url.config';
import { openModal } from '@/store/auth/auth.slice';
import { useTypedSelector } from '@/store/storeHooks/useTypedSelector';

interface IUserButtonsProps {
	pageHref: string;
	icon: string;
	text?: string;
}

const NavPersonal = () => {
	const dispatch = useDispatch();
	const { push } = useRouter(); // ! from 'next/navigation'
	const [userName, setUserName] = useState('');
	const isUser = useTypedSelector(state => state.user.user);
	useEffect(() => {
		if (isUser && isUser.firstName && isUser.secondName) {
			setUserName(
				`${isUser.firstName} ${isUser.secondName.charAt(0).toUpperCase()}.`,
			);
		} else if (isUser && isUser.firstName) {
			setUserName(isUser.firstName);
		}
	}, [isUser]);
	const UserButton: React.FC<IUserButtonsProps> = ({
		icon,
		text,
		pageHref,
	}) => (
		<span>
			<button
				className='nav__personal_link'
				onClick={() => {
					if (userName != '') push(pageHref);
					else dispatch(openModal());
				}}
			>
				{text}
				{icon != '' ? (
					<Icon
						icon={icon}
						height='unset'
						className='nav__personal_icon'
					/>
				) : null}
			</button>
		</span>
	);
	return (
		<div className='nav__personal'>
			<UserButton
				pageHref={SITE_PAGES.CLIENT}
				icon='prime:heart'
			/>
			<UserButton
				pageHref={SITE_PAGES.CLIENT}
				icon='prime:shopping-bag'
			/>
			<UserButton
				pageHref={SITE_PAGES.CLIENT}
				icon={userName != '' ? '' : 'prime:sign-out'}
				text={userName == '' ? 'Войти' : userName}
			/>
		</div>
	);
};

export default NavPersonal;
