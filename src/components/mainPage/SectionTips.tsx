import TipItem from './sectionTips/TipItem';
import { tipsData } from './sectionTips/tips.data';
import { titleFont } from '@/fonts';

const SectionTips = () => {
	return (
		<section className='sectionTips'>
			<div className='title sectionTips__title'>
				<h2 className={titleFont.className}>Наши преимущества</h2>
			</div>
			{tipsData.map((item, i) => (
				<TipItem
					title={item.title}
					text={item.text}
					imgSrc={item.imgSrc}
					key={i}
				/>
			))}
		</section>
	);
};

export default SectionTips;
