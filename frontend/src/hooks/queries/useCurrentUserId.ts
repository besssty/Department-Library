'use client'

import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useCurentUserId = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['get profile id'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data.id
	})

	const currentUserId = data

	return { currentUserId, isFetching }
}
