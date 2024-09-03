'use client'
import { BookService } from '@/services/book/book.service'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICreateBook } from './create-book.interface'

export const useCreateBook = () => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ICreateBook>({
		mode: 'onChange'
	})

	const { mutate, isSuccess, isError } = useMutation({
		mutationKey: ['create book'],
		mutationFn: (data: ICreateBook) => BookService.create(data)
	})

	const onSubmit: SubmitHandler<ICreateBook> = data => {
		mutate(data)
		reset()
	}

	return { onSubmit, isSuccess, isError, formRegister, handleSubmit, errors }
}
