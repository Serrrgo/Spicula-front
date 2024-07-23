import MainAction from '@/components/mainPage/sectionHead/action/MainAction';
import MainDisplay from '@/components/mainPage/sectionHead/dispaly/MainDisplay';
import { displayData } from '@/components/mainPage/sectionHead/dispaly/display.data';
import MainSubtitle from '@/components/mainPage/sectionHead/subtitle/MainSubtitle';
import MainTitle from '@/components/mainPage/sectionHead/title/MainTitle';
import { titleFont } from '@/fonts';

const SectionHead = () => {
	return (
		<section className='sectionHead'>
			<div className='sectionHead__title'>
				<MainTitle />
				<MainSubtitle />
			</div>
			<div className='sectionHead__action'>
				<MainAction />
			</div>
			{displayData.map((item, i) => (
				<MainDisplay
					className={titleFont.className}
					name={item.name}
					src={item.imgSrc}
					href={item.href}
					reverse={(i + 1) % 2 ? false : true}
					key={i}
				/>
			))}
		</section>
	);
};

export default SectionHead;
