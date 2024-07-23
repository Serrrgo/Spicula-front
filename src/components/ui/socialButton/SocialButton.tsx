import { Icon } from '@iconify-icon/react';
import Link from 'next/link';
import React from 'react';

interface ISocialButtonProps {
	href: string;
	icon: string;
	className: string;
}

const SocialButton: React.FC<ISocialButtonProps> = ({
	href,
	icon,
	className,
}) => {
	return (
		<Link
			href={href}
			className={className}
		>
			<Icon
				className={`${className}_icon`}
				height='unset'
				icon={icon}
			/>
		</Link>
	);
};

export default SocialButton;
