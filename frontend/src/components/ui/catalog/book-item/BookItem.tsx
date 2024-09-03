import { useFilters } from '@/app/explorer/useFilters'
import { IBook } from '@/types/book.interface'
import { formatDate } from '@/utils/format-date'
import { FC } from 'react'

const BookItem: FC<{ book: IBook }> = ({ book }) => {
	const { updateQueryParams } = useFilters()

	return (
		<div>
			<div className='bg-white rounded-3xl  p-1 m-3 block shadow shadow-gray'>
				<div className='m-3'>
					<a className='grid'>
						<div className='flex justify-between'>
							<h3 className='font-semibold text-sm justify-center items-center'>
								Назва:
							</h3>
							<h3 className='text-sm justify-center items-center'>
								{formatDate(book.createdAt)}
							</h3>
						</div>
						<button
							className='font-medium text-sm text-left hover:text-aqua transition-all duration-200'
							onClick={() =>
								updateQueryParams('searchTerm', book.title.toString())
							}
						>
							{book.title}
						</button>
						<h3 className='font-semibold text-sm'>Автор:</h3>
						<button
							className='font-medium text-sm text-left hover:text-aqua transition-all duration-200'
							onClick={() =>
								updateQueryParams('userId', book.user.id.toString())
							}
						>
							{book.user.name}
						</button>
					</a>
					<div className='flex mt-1 mb-2'>
						<span className='font-semibold text-xs mr-2'>Категорія:</span>
						<button
							onClick={() =>
								updateQueryParams('categoryId', book.category.id.toString())
							}
							className='text-black text-xs mr-1 hover:text-aqua transition-all duration-200'
						>
							{book.category.name}
						</button>
					</div>
					<div>
						<a
							target='_blank'
							href={book.link}
							className='bg-white px-2 py-1 rounded-3xl text-sm font-semibold border-aqua border hover:bg-aqua hover:text-white transition-all duration-200'
						>
							Посилання
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookItem
