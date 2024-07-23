import { IBook } from './book.interface'

export interface ICatalog {
	books: IBook[]
	isLoading?: boolean
	title?: string
}
