import { HTMLAttributes } from 'react';
import styles from './СarouselBtn.module.sass';
import ArrowLeft from '@/public/mainPage/arrow-left.svg';
import ArrowRight from '@/public/mainPage/arrow-right.svg';

interface СarouselBtnProps extends HTMLAttributes<HTMLButtonElement> {
	direction: 'right' | 'left';
}

const СarouselBtn: React.FC<СarouselBtnProps> = ({ direction, ...props }) => {
	return (
		<button
			className={styles.arrowBtn}
			{...props}
		>
			{direction == 'left' ? (
				<ArrowLeft className={styles.arrowBtn__arrow} />
			) : null}
			{direction == 'right' ? (
				<ArrowRight className={styles.arrowBtn__arrow} />
			) : null}
		</button>
	);
};

export default СarouselBtn;
