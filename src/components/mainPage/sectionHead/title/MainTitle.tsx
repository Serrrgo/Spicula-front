import styles from './MainTitle.module.sass';
import { titleFont } from '@/fonts';

const MainTitle = () => {
	return (
		<h1 className={`${styles.title} ${titleFont.className}`}>
			<span>
				ВД<span>О</span>ХН<span>О</span>ВЛЯЕМ
			</span>
			<span>
				НА КРАС<span>О</span>ТУ
			</span>
		</h1>
	);
};

export default MainTitle;
