import { SITE_PAGES } from '@/config/pages-url.config';
import type { IGlobalLink } from '../../../../types/globalLinks.types';

export const CLIENT_LINKS: IGlobalLink[] = [
	{
		title: 'Каталог',
		href: SITE_PAGES.CATALOG,
	},
	{
		title: 'Личный кабинет',
		href: SITE_PAGES.USER,
	},
	{
		title: 'О нас',
		href: SITE_PAGES.ABOUT,
	},
	{
		title: 'Условия пользования',
		href: SITE_PAGES.TERMS_DOC,
	},
	{
		title: 'Политика конфиденциальности',
		href: SITE_PAGES.PRIVATE_DOC,
	},
];

export const SHOP_LINKS = [
	{
		title: 'Доставка и оплата',
		href: SITE_PAGES.DELIVERY_DOC,
	},
	{
		title: 'Бесплатная консультация',
		href: SITE_PAGES.CONSULT_DOC,
	},
];
