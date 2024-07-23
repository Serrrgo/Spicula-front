import { useState } from 'react';
import AuthForm from './AuthForm';
import styles from './AuthLayout.module.sass';

const AuthFormLayout = () => {
	const [isLoginForm, setIsLoginForm] = useState(true);
	return (
		<div className={styles.authLayout}>
			<span className={styles.authLayout__titles}>
				<h4
					className={`${styles.authLayout__title} ${isLoginForm ? styles.authactive : ''}`}
					onClick={() => setIsLoginForm(true)}
				>
					Войти
				</h4>
				<h4
					className={`${styles.authLayout__title} ${isLoginForm ? '' : styles.authactive}`}
					onClick={() => setIsLoginForm(false)}
				>
					Зарегистрироваться
				</h4>
			</span>
			<AuthForm isLoginForm={isLoginForm} />
		</div>
	);
};

export default AuthFormLayout;
