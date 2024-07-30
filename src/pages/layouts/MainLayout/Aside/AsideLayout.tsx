'use client';

import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { closeModal } from '@/store/auth/auth.slice';
import { useTypedSelector } from '@/store/storeHooks/useTypedSelector';
import AuthFormLayout from '../../../../components/authForm/AuthFormLayout';
import styles from './AsideLayout.module.sass';

const AsideLayout = () => {
	const isVisible = useTypedSelector(state => state.auth.isVisible);
	const dispatch = useDispatch();
	return (
		<CSSTransition
			in={isVisible}
			timeout={500}
			classNames='fade'
			mountOnEnter
			unmountOnExit
		>
			<aside className={styles.asideLayout}>
				<AuthFormLayout />
				<Icon
					className={styles.asideLayout__close}
					icon='prime:times'
					height='none'
					onClick={() => dispatch(closeModal())}
				/>
			</aside>
		</CSSTransition>
	);
};

export default AsideLayout;
