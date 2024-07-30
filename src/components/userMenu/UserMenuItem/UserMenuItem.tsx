import Link from 'next/link';
import { IUserMenuItem } from '@/config/user-menu.confog';
import styles from './UserMenuItem.module.sass';

export function UserMenuItem({ item }: { item: IUserMenuItem }) {
	return (
		<div
			className={`${styles.userMenuItem} ${item.isActive ? styles.active : ''}`}
		>
			<Link
				href={item.link}
				className={item.isActive ? styles.active : ''}
			>
				{item.name}
			</Link>
		</div>
	);
}

export default UserMenuItem;
