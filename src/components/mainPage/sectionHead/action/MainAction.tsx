import LinkButton from '@/components/ui/linkButton/LinkButton';
import styles from './MainAction..module.sass';
import { titleFont } from '@/styles/fonts';

const MainAction = () => {
	return (
		<span className={`${titleFont.className} ${styles.actionSpan}`}>
			<h2>Вопрос о товаре?</h2>
			<LinkButton
				text='Написать'
				href={'/'}
				icon='prime:envelope'
			/>
		</span>
	);
};

export default MainAction;
