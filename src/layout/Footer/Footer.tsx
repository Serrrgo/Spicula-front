//import './Footer.sass';
import { CLIENT_LINKS, SHOP_LINKS } from './footer.data';
import ContactsCol from './footerComponents/ContactsCol';
import LinksCol from './footerComponents/LinksCol';
import NewsCol from './footerComponents/NewsCol';
import { montserrat } from '@/styles/fonts';

const Footer = () => {
	return (
		<footer className={montserrat.className}>
			<LinksCol
				title='Клиентам'
				linksArr={CLIENT_LINKS}
			/>
			<LinksCol
				title='Магазин'
				linksArr={SHOP_LINKS}
			/>
			<ContactsCol title={'Контакты'} />
			<NewsCol title={'Новостная рассылка'} />
		</footer>
	);
};

export default Footer;
