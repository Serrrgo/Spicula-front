import Image from 'next/image';
import styles from './MainSubtitle.module.sass';
import mainImg1 from '@/public/mainPage/main-img-1.jpg';
import mainImg2 from '@/public/mainPage/main-img-2.jpg';

const MainSubtitle = () => {
	return (
		<div className={styles.subWrap}>
			<Image
				src={mainImg1}
				className={styles.subWrap__img1}
				alt='spicula-title-1'
			/>
			<Image
				src={mainImg2}
				className={styles.subWrap__img2}
				alt='spicula-title-2'
			/>
			<p className={styles.subWrap__subtitle}>
				<span />
				Mагазин инновационной косметики эксперта Ирины&nbsp;Шатовой
			</p>
		</div>
	);
};

export default MainSubtitle;
