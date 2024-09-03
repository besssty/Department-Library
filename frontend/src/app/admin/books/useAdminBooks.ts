'use client'

import { getAdminUrl } from '@/config/url.config'
import { BookService } from '@/services/book/book.service'
import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'
import { formatDate } from '@/utils/format-date'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminBooks = () => {
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get admin books'],
		queryFn: () => BookService.getAll(),

		select: data =>
			data.books.map((book): IListItem => {
				return {
					id: book.id,
					editUrl: getAdminUrl(`/books/edit/${book.id}`),
					items: [
						book.title,
						book.user.name,
						book.category.name,
						formatDate(book.createdAt)
					]
				}
			})
	})

	const { mutate } = useMutation({
		mutationKey: ['delete book'],
		mutationFn: (id: number) => BookService.delete(+id),
		onSuccess: () => {
			refetch()
		}
	})

	return {
		mutate,
		data,
		isFetching
	}
}
