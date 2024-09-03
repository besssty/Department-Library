'use client'

import { ICatalog } from '@/types/catalog.interface'
import { FC } from 'react'
import Heading from '../Heading'
import Loader from '../Loader'
import BookItem from './book-item/BookItem'

const Catalog: FC<ICatalog> = ({ books, isLoading, title }) => {
	if (isLoading) return <Loader />
	return (
		<section>
			{title && <Heading className='mb-1 text-center'>{title}</Heading>}
			{books.length ? (
				<>
					<div className='lg:grid lg:grid-cols-3 lg:gap-6 sm:grid-cols-2 sm:grid'>
						{books.map(book => (
							<BookItem key={book.id} book={book} />
						))}
					</div>
				</>
			) : (
				<Heading>Книжки не знайдені!</Heading>
			)}
		</section>
	)
}

export default Catalog
