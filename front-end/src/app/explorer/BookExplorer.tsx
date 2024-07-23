'use client'
import { TypePaginationBooks } from '@/types/book.interface'
import Catalog from '@/ui/catalog/Catalog'
import { FC, useEffect } from 'react'
import Pagination from './pagination/Pagination'
import useBookExplorer from './useBookExporer'
import { useFilters } from './useFilters'

const BookExplorer: FC<{ initialBooks: TypePaginationBooks }> = ({
	initialBooks
}) => {
	const { updateQueryParams, queryParams } = useFilters()

	const { data, isFetching } = useBookExplorer(initialBooks)
	const perPage = queryParams.perPage ? Number(queryParams.perPage) : 9

	return (
		<>
			<div className='bg-white rounded-3xl  p-4 shadow shadow-gray'>
				<div>
					<Catalog books={data.books} title='Пошук' isLoading={isFetching} />
				</div>
				<div>
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={Math.ceil(data.length / perPage)}
					/>
				</div>
			</div>
		</>
	)
}

export default BookExplorer
