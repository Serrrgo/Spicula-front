import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './FormField.module.sass';
import PassToggle from './PassToggle';

interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	placeholder: string;
	variant?: string;
	state?: 'error' | 'success';
	error?: string;
	disabled?: boolean;
	type?: string;
	isNumber?: boolean;
	isPassword?: boolean;
	togglePassword?: any;
}

const FormField = forwardRef<HTMLInputElement, IFieldProps>(
	(
		{
			label,
			id,
			type,
			placeholder,
			state,
			disabled,
			isNumber,
			error,
			isPassword,
			...rest
		},
		ref,
	) => {
		const [showPassword, setShowPassword] = useState(false);
		const toggleShowPassword = () => setShowPassword(!showPassword);

		return (
			<div className={styles.inputDiv}>
				<label htmlFor={id}>{label}</label>
				<input
					ref={ref}
					disabled={disabled}
					type={
						!isPassword
							? type
							: isPassword && showPassword
								? 'text'
								: 'password'
					}
					//type={type}
					id={id}
					placeholder={placeholder}
					className={``}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault();
						}
					}}
					{...rest}
				/>
				{isPassword ? (
					<PassToggle toggleShowPassword={toggleShowPassword} showPassword={showPassword} />
				) : null}

				<CSSTransition
					in={!!error}
					timeout={300}
					classNames='fade'
					mountOnEnter
					unmountOnExit
				>
					<span className={styles.error}>{error}</span>
				</CSSTransition>
			</div>
		);
	},
);

export default FormField;
