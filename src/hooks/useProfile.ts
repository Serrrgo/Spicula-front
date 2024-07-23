import { useQuery } from '@tanstack/react-query';
import { IUserProfile } from '@/types/user.types';
import { userService } from '@/services/user.service';

export function useProfile() {
	return useQuery<IUserProfile>({
		queryKey: ['profile'],
		queryFn: userService.getProfile,
		staleTime: 10 * 60 * 1000,
		//enabled: false,
	});
}
