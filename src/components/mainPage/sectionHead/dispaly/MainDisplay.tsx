import Image from 'next/image';
import LinkButton from '@/components/ui/linkButton/LinkButton';
import styles from './MainDisplay.module.sass';

interface IDisplayProps {
	className: string;
	name: string;
	src: string;
	reverse: boolean;
	href: string;
}

const Display: React.FC<IDisplayProps> = ({
	className,
	name,
	src,
	reverse,
	href,
}) => {
	const ImageComp = () => (
		<div className={styles.imgwrapper}>
			<Image
				src={src}
				alt={name}
				style={{ objectFit: 'cover' }}
				fill
			/>
		</div>
	);
	const TextComp = () => (
		<div className={styles.textwrapper}>
			<span>
				{' '}
				<h2>{name}</h2>
				<LinkButton
					text='Перейти в каталог'
					href={href}
					icon='prime:arrow-up-right'
				/>
			</span>
		</div>
	);
	return (
		<div className={`${className} ${styles.display}`}>
			{reverse ? <TextComp /> : <ImageComp />}
			{reverse ? <ImageComp /> : <TextComp />}
		</div>
	);
};

export default Display;
