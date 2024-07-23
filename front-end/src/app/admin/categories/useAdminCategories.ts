'use client'

import { getAdminUrl } from '@/config/url.config'
import { CategoryService } from '@/services/category.service'
import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'
import { useQuery } from '@tanstack/react-query'

export const useAdminCategories = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['get admin categories'],
		queryFn: () => CategoryService.getAll(),
		select: ({ data }) =>
			data.map((category): IListItem => {
				return {
					id: category.id,
					editUrl: getAdminUrl(`/categories/edit/${category.id}`),
					items: [category.name]
				}
			})
	})

	return {
		data,
		isFetching
	}
}
