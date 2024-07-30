import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserMenuItem from '@/components/userMenu/UserMenuItem/UserMenuItem';
import { UserMenu } from '@/config/user-menu.confog';
import { useTypedSelector } from '@/store/storeHooks/useTypedSelector';
import styles from './UserLayout.module.sass';
import { titleFont } from '@/styles/fonts';

export default function UserLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	const isUser = useTypedSelector(state => state.user.user);
	const [userName, setUserName] = useState('');
	useEffect(() => {
		if (isUser && isUser.firstName && isUser.secondName) {
			setUserName(
				`${isUser.firstName} ${isUser.secondName.charAt(0).toUpperCase()}.`,
			);
		} else if (isUser && isUser.firstName) {
			setUserName(isUser.firstName);
		}
	}, [isUser]);
	//console.log(isUser);
	return (
		<section className={styles.dashboard}>
			<span>
				<h3 className={styles.name}>{userName}</h3>
			</span>
			<span>
				<h3 className={`${styles.title}, ${titleFont.className}`}>
					{UserMenu.find(item => item.link == router.pathname)?.name}
				</h3>
			</span>
			<aside className={styles.aside}>
				{UserMenu.map(item => {
					item.isActive = item.link == router.pathname ? true : false;
					return (
						<UserMenuItem
							item={item}
							key={item.link}
						/>
					);
				})}
			</aside>
			<div className={styles.container}>
				<h2></h2>
				{children}
			</div>
		</section>
	);
}
