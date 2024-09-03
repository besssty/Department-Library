import { axiosClassic, instance } from '@/api/api.interceptor'

import { ICreateBook } from '@/app/(customer)/my-profile/create-book/create-book.interface'
import { IBook, TypePaginationBooks } from '@/types/book.interface'
import { BOOKS, TypeBookData, TypeBookDataFilters } from './book.types'

export const BookService = {
	async getAll(queryData = {} as TypeBookDataFilters) {
		const { data } = await axiosClassic<TypePaginationBooks>({
			url: BOOKS,
			method: 'GET',
			params: queryData
		})
		return data
	},

	async getSimilar(id: string | number) {
		return axiosClassic<IBook[]>({
			url: `${BOOKS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IBook>({
			url: `${BOOKS}/${id}`,
			method: 'GET'
		})
	},

	async create(data: ICreateBook) {
		return instance({
			url: BOOKS,
			method: 'POST',
			data
		})
	},

	async update(id: string | number, data: TypeBookData) {
		return instance<IBook>({
			url: `${BOOKS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IBook>({
			url: `${BOOKS}/${id}`,
			method: 'DELETE'
		})
	}
}
