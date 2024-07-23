import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import Link from 'next/link';
import styles from './LinkButton.module.sass';
import { montserrat } from '@/fonts';

interface ILinkButton {
	href: string;
	text: string;
	icon?: string;
}

const LinkButton: React.FC<ILinkButton> = ({ text, href, icon }) => {
	return (
		<Link
			className={`${styles.linkButton} ${montserrat.className}`}
			href={href}
		>
			{text}
			{icon ? (
				<Icon
					className={styles.icon}
					icon={icon}
					height='unset'
				/>
			) : null}
		</Link>
	);
};

export default LinkButton;
