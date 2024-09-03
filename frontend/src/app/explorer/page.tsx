import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { BookService } from '@/services/book/book.service'
import {
	TypeBookDataFilters,
	TypeParamsFilters
} from '@/services/book/book.types'
import { Metadata } from 'next'
import BookExplorer from './BookExplorer'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE
}

export const revalidate = 60

async function getBooks(searchParams: TypeBookDataFilters) {
	const data = await BookService.getAll(searchParams)
	return data
}

export default async function ExplorerPage({
	searchParams
}: TypeParamsFilters) {
	const data = await getBooks(searchParams)
	return <BookExplorer initialBooks={data} />
}
