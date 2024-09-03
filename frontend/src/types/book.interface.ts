import { ICategory } from './category.interface'
import { IUser } from './user.interface'

export interface IBook {
	id: number
	user: IUser
	title: string
	link: string
	createdAt: string
	category: ICategory
}

export interface IBookDetails {
	user: IBook
}

export type TypeBooks = {
	books: IBook[]
}

export type TypePaginationBooks = {
	length: number
	books: IBook[]
}
