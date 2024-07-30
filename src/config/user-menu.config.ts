import { DASHBOARD_PAGES } from './pages-url.config';

export interface IUserMenuItem {
	link: string;
	name: string;
  isActive?: boolean
}

export const UserMenu: IUserMenuItem[] = [
	{
		link: DASHBOARD_PAGES.CART,
		name: 'Корзина',
	},
	{
		link: DASHBOARD_PAGES.ORDERS,
		name: 'Заказы',
	},
	{
		link: DASHBOARD_PAGES.PROFILE,
		name: 'Профиль',
	},
	{
		link: DASHBOARD_PAGES.FAVS,
		name: 'Избранное',
	},
	{
		link: DASHBOARD_PAGES.ADDRESSES,
		name: 'Адреса',
	},
	{
		link: DASHBOARD_PAGES.SUPPORT,
		name: 'Поддержка',
	},
];
