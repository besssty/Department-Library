import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useUserNames = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get user names'],
		queryFn: () => UserService.getAllNames(),
		select: ({ data }) => data
	})

	return { data, isLoading }
}
