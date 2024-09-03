'use client'

import { BookService } from '@/services/book/book.service'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFilterByDate } from './filter-by-date.interface'
import { IBook, TypePaginationBooks } from '@/types/book.interface'

export const useFilterByDate = () => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IFilterByDate>({
		mode: 'onChange'
	})
	const [books, setBooks] = useState<IBook[]>([])
	const { mutate, isSuccess, isError } = useMutation({
		mutationKey: ['get books by date and userId'],
		mutationFn: (data: IFilterByDate) => BookService.getAll(data),
		onSuccess: (data: TypePaginationBooks) => {
			setBooks(data.books) 
		}
	})

	const onSubmit: SubmitHandler<IFilterByDate> = data => {
		mutate(data)
		reset()
	}

	return {
		onSubmit,
		isSuccess,
		isError,
		formRegister,
		handleSubmit,
		errors,
		books
	}
}
