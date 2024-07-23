'use client'

import { useCurentUserId } from '@/hooks/queries/useCurrentUserId'
import { BookService } from '@/services/book/book.service'
import { formatDate } from '@/utils/format-date'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useUserBooks = () => {
	const { currentUserId } = useCurentUserId()
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get user books', currentUserId],
		queryFn: () => BookService.getAll({ userId: currentUserId }),
		select: data =>
			data.books.map(book => {
				return {
					id: book.id,
					title: book.title,
					userId: book.user.id,
					categoryId: book.category.name,
					createdAt: formatDate(book.createdAt),
					link: book.link
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
		data,
		mutate,
		isFetching
	}
}
