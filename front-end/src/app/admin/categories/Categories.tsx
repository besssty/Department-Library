'use client'

import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'
import { FC } from 'react'
import { useAdminCategories } from './useAdminCategories'

const Categories: FC = () => {
	const { data, isFetching } = useAdminCategories()

	return (
		<>
			<Heading className='mb-7'>Категорії</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</>
	)
}

export default Categories
