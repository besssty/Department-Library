'use client'

import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { FC } from 'react'
import { useAdminBooks } from './useAdminBooks'

const Books: FC = () => {
	const { data, isFetching, mutate } = useAdminBooks()

	return (
		<>
			<Heading className='mb-7'>Книги</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</>
	)
}

export default Books
