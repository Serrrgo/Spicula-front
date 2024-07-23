import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/user.service';

function useUpdateUserProfile() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['updateUserProfile'],
		mutationFn: async () => {
			const response = await userService.getProfile();
			return response;
		},
		onSuccess: (data) => {
			// Вы можете здесь обновить кэш, если нужно
			queryClient.setQueryData(['profile'], data);
		},
	});
}
