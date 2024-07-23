import { TypePaginationBooks } from '@/types/book.interface'
import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'

const Home: FC<TypePaginationBooks> = ({ books }) => {
	return (
		<div className='bg-white rounded-3xl  p-4 shadow shadow-gray'>
			<Catalog title='Свіжі книги' books={books} />
		</div>
	)
}

export default Home
