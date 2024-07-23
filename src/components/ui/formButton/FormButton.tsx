import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import styles from './FormButton.module.sass';
import { montserrat } from '@/fonts';

interface IFormButton {
	text: string;
	icon?: string;
	isValid?: boolean;
	onClick?: any;
}

const FormButton: React.FC<IFormButton> = ({
	text,
	icon,
	onClick,
	isValid,
}) => {
	return (
		<button
			disabled={isValid}
			className={`${styles.linkButton} ${montserrat.className}`}
			onClick={onClick}
		>
			{text}
			{icon ? (
				<Icon
					className={styles.icon}
					icon={icon}
					height='unset'
				/>
			) : null}
		</button>
	);
};

export default FormButton;
