import { StatisticsService } from '@/services/statistics/statistics.service'
import { useQuery } from '@tanstack/react-query'

export const useStatistics = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['statistics'],
		queryFn: () => StatisticsService.getMain(),
		select: ({ data }) => data
	})

	return { data, isFetching }
}
