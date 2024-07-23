import Home from '@/app/Home'
import { BookService } from '@/services/book/book.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	description: 'Кафедра'
}

export const revalidate = 60

async function getBooks() {
	const data = await BookService.getAll({
		page: 1,
		perPage: 9
	})

	return data
}

export default async function HomePage() {
	const data = await getBooks()

	return <Home length={data.length} books={data.books} />
}
