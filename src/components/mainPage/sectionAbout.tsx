import Image from 'next/image';
import { LAW_DATA } from '@/constants/law.constants';
import LinkButton from '../ui/linkButton/LinkButton';
//import SocialsLink from '@/layout/Footer/footerComponents/SocialsLink';
import SocialButton from '../ui/socialButton/SocialButton';
import { titleFont } from '@/fonts';
import Sign from '@/public/mainPage/shatova_sign.svg';

const sectionAbout = () => {
	return (
		<section className='sectionAbout'>
			<div className='sectionAbout__title'>
				<h2 className={titleFont.className}>О нас</h2>
			</div>
			<div className='sectionAbout__photo'>
				<Image
					src='/mainPage/shatova_i.png'
					alt='Шатова Ирина'
					style={{ objectFit: 'cover' }}
					fill
				/>
			</div>
			<article className='sectionAbout__text'>
				<h4 className='sectionAbout__text_title'>
					&laquo;Любая история начинается с&nbsp;личных моментов в&nbsp;жизни,
					моя&nbsp;&mdash; не&nbsp;исключение&raquo;.
				</h4>
				<Sign className='sectionAbout__text_sign' />
				<p className='sectionAbout__text_text'>
					В&nbsp;концепции ухода за&nbsp;кожей направленного действия
					с&nbsp;активами нового поколения. На&nbsp;результат действия уходовых
					средств влияет не&nbsp;только тщательно подобранный состав
					ингредиентов, но&nbsp;и&nbsp;наличие в&nbsp;нем актуальной системы
					доставки их&nbsp;к&nbsp;клеткам кожи. Синергия науки и&nbsp;природы,
					инновационных ингредиентов и&nbsp;передовых систем доставки
					активов,&nbsp;&mdash; такими критериями руководствуется Ирина Шатова
					при подборе ассортимента магазина.
				</p>
			</article>
			<div className='sectionAbout__action'>
				<span className='sectionAbout__action_btnspan'>
					<LinkButton
						href='/'
						text='Подробнее'
					/>
				</span>
				<span className='sectionAbout__action_socialspan'>
					<SocialButton
						href={LAW_DATA.socmedia[0].href}
						icon={LAW_DATA.socmedia[0].iconifySvg}
						className='sectionAbout__socbtn'
					/>
					<SocialButton
						href={LAW_DATA.socmedia[1].href}
						icon={LAW_DATA.socmedia[1].iconifySvg}
						className='sectionAbout__socbtn'
					/>
				</span>
			</div>
		</section>
	);
};

export default sectionAbout;
