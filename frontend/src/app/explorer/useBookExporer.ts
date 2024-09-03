import { BookService } from '@/services/book/book.service'
import { TypePaginationBooks } from '@/types/book.interface'
import { useQuery } from '@tanstack/react-query'
import { useFilters } from './useFilters'

const useBookExplorer = (initialBooks: TypePaginationBooks) => {
	const { queryParams } = useFilters()

	const { data, isFetching } = useQuery({
		queryKey: ['book explorer', queryParams],
		queryFn: () => BookService.getAll(queryParams),
		initialData: initialBooks
	})

	return { data, isFetching }
}

export default useBookExplorer
