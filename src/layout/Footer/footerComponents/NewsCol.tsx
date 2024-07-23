import Link from 'next/link';
import LinkButton from '@/components/ui/linkButton/LinkButton';
import SocialButton from '@/components/ui/socialButton/SocialButton';
import SubscribeForm from '@/layout/Footer/footerComponents/SubscribeForm';
import { LAW_DATA } from '@/constants/law.constants';

interface NewsColProps {
	title: string;
}

const NewsCol: React.FC<NewsColProps> = ({ title }) => {
	return (
		<dl className='footer__col'>
			<dt className='footer__col_title'>{title}</dt>
			<dd className='footer__col_item'>
				<SubscribeForm />
			</dd>
			<dd className='footer__col_item email'>
				Почта{' '}
				<Link
					href={`mailto:${LAW_DATA.email}`}
					aria-label={`Написать на почту ${LAW_DATA.email}`}
				>
					{LAW_DATA.email}
				</Link>
			</dd>
			<dd className='footer__col_item'>
				Режим работы пункта самовывоза с 10:00 до 19:00 по будням, в субботу и
				воскресенье выходные
			</dd>
			<dd className='footer__col_item'>Подпишись на наши соц. сети:</dd>
			<dd className='footer__col_item socmedia'>
				<SocialButton
					href={LAW_DATA.socmedia[0].href}
					icon={LAW_DATA.socmedia[0].iconifySvg}
					className='footer__socmedia'
				/>
				<SocialButton
					href={LAW_DATA.socmedia[1].href}
					icon={LAW_DATA.socmedia[1].iconifySvg}
					className='footer__socmedia'
				/>
			</dd>
		</dl>
	);
};

export default NewsCol;
