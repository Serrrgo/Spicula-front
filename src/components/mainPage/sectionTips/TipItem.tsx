import Image from 'next/image';
import styles from './TipItem.module.sass';

interface ITipItemProps {
	title: string;
	text: string;
	imgSrc: string;
}

const TipItem: React.FC<ITipItemProps> = ({ title, text, imgSrc }) => {
	const setTextHTML = () => ({
		__html: text,
	});
	const setTitleHTML = () => ({
		__html: title,
	});
	return (
		<article className={styles.wrap}>
			<Image
				src={imgSrc}
				alt={title}
				style={{ objectFit: 'cover' }}
				fill
			/>
			<p dangerouslySetInnerHTML={setTextHTML()} />
			<h3 dangerouslySetInnerHTML={setTitleHTML()} />
		</article>
	);
};

export default TipItem;
