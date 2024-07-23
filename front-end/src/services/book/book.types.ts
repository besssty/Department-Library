export const BOOKS = 'books'

export type TypeBookData = {
	title: string
	link: string
	userId: number
	categoryId: number
}

export type TypeBookDataFilters = {
	page?: string | number
	perPage?: string | number
	sort?: EnumBookSort | string
	searchTerm?: string
	categoryId?: string
	userId?: string | number
	startDate?: string
	endDate?: string
}

export enum EnumBookSort {
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export type TypeParamsFilters = {
	searchParams: TypeBookDataFilters
}
