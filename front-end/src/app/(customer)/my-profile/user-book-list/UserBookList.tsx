'use client'

import { useUserBooks } from '@/hooks/queries/useUserBooks'
import Loader from '@/ui/Loader'
import { FC } from 'react'
import { RiDeleteRow } from 'react-icons/ri'
import { USER_BOOK } from './user-book.data'

const UserBookList: FC = () => {
	const { data, isFetching, mutate } = useUserBooks()

	if (isFetching) {
		return (
			<div>
				<Loader />
			</div>
		)
	}

	return (
		<div className='max-h-[450px] overflow-y-scroll'>
			<div className='grid xl:bg-white py-3 px-4 mb-2 rounded-t border border-b-0 border-l-aqua border-t-aqua border-r-aqua grid-cols-6'>
				{USER_BOOK.map(item => (
					<div key={item.label} className='border-r-2 border-aqua px-3'>
						<div className='font-semibold'>{item.label}</div>
					</div>
				))}
			</div>
			{data?.map(book => {
				return (
					<div key={book.id} className='lg:max-w-full '>
						<div className='grid xl:bg-white py-3 px-4 mb-2 border-r-aqua border-l-aqua border border-t-0 border-b-0 grid-cols-6'>
							<div className='border-r-2 border-aqua px-3'>
								<div>{book.id}</div>
							</div>
							<div className='border-r-2 border-aqua px-3'>
								<div>{book.title}</div>
							</div>
							<div className='border-r-2 border-aqua px-3'>
								<div>{book.categoryId}</div>
							</div>
							<div className='border-r-2 border-aqua px-3'>
								<div>{book.createdAt}</div>
							</div>
							<div className='border-r-2 border-aqua px-3'>
								<a href={book.link}>Нажміть 👈</a>
							</div>
							<div className='border-r-2 border-aqua px-3'>
								<button
									className='flex items-center align-middle hover:text-aqua text-red transition-all duration-200'
									onClick={() => mutate(book.id)}
								>
									<span>Видалити</span>
									<RiDeleteRow className='ml-2' />
								</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default UserBookList
