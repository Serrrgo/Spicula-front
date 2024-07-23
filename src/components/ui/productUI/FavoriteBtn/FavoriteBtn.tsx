import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { useProfile } from '@/hooks/useProfile';
import styles from './FavoriteBtn.module.sass';
import { userService } from '@/services/user.service';

const FavoriteBtn: FC<{ prodId: string }> = ({ prodId }) => {
	const { data, refetch } = useProfile();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => userService.toggleFavorites(prodId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
		},
	});
	const isExist =
		data && data?.favorites
			? data?.favorites.some(favItem => favItem.productId === prodId)
			: false;
	//console.log(isExist);
	return (
		<Icon
			className={`${styles.favbtn} ${isExist ? styles.favbtnActive : ''}`}
			onClick={() => mutate()}
			height='unset'
			icon={isExist ? 'prime:heart-fill' : 'prime:heart'}
			//style={isExist ? { color: '#ff88cf' } : {}}
		/>
	);
};

export default FavoriteBtn;
