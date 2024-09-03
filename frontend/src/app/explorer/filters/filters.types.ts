import { TypeBookDataFilters } from '@/services/book/book.types'

export interface IFilterState {
	isFilterUpdated: boolean
	queryParams: TypeBookDataFilters
}

export interface IFilterActionsPayload {
	key: keyof TypeBookDataFilters
	value: string
}
