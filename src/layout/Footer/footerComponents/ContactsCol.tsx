import { Icon } from '@iconify-icon/react';
import Link from 'next/link';
import { LAW_DATA } from '@/constants/law.constants';

interface ContactsColProps {
	title: string;
}

const ContactsCol: React.FC<ContactsColProps> = ({ title }) => {
	return (
		<dl className='footer__col'>
			<dt className='footer__col_title'>{title}</dt>
			<dd className='footer__phone'>
				<Link
					className='footer__phone_link'
					href={'tel:88005506752'}
					aria-label={`Позвонить для консультации ${LAW_DATA.phone}`}
				>
					<Icon
						className='footer__phone_icon'
						height='unset'
						icon={'ic:baseline-phone'}
					/>
					{LAW_DATA.phone}
				</Link>
				<span>По вопросам логистики и отдела качества</span>
			</dd>
			<dd className='footer__col_item thin'>
				Официальный магазин косметики Spicula эксперта Ирины Шатовой
			</dd>
			<dd className='footer__col_item'>{LAW_DATA.owner}</dd>
			<dd className='footer__col_item'>{LAW_DATA.inn}</dd>
			<dd className='footer__col_item'>{LAW_DATA.ogrn}</dd>
		</dl>
	);
};

export default ContactsCol;
