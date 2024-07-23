export interface IPagination {
	numberPages: number
	changePage: (page: string) => void
	currentPage?: number | string
}
