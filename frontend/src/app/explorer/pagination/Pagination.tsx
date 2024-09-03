import { IPagination } from '@/types/pagination.interface'
import Button from '@/ui/button/Button'
import { FC } from 'react'

const Pagination: FC<IPagination> = ({
	numberPages,
	changePage,
	currentPage
}) => {
	return (
		<div className='text-center mt-12 place-content-center flex'>
			{Array.from({
				length: numberPages > 1 ? Math.ceil(numberPages) : 1
			}).map((_, index) => {
				const pageNumber = (index + 1).toString()

				return (
					<Button
						key={pageNumber}
						size='md'
						variant={currentPage === pageNumber ? 'black' : 'white'}
						onClick={() => changePage(pageNumber)}
						className='mx-3'
						disabled={currentPage === pageNumber}
					>
						{pageNumber}
					</Button>
				)
			})}
		</div>
	)
}

export default Pagination
