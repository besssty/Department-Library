import { useUserNames } from '@/hooks/queries/useUserNames'
import Loader from '@/ui/Loader'
import Checkbox from '@/ui/checkbox/Checkbox'
import { FC, useState } from 'react'
import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

const UserNameGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { data, isLoading } = useUserNames()
	const [searchText, setSearchText] = useState<string>('')

	const filteredUsers = data?.filter(user =>
		user.name.toLowerCase().includes(searchText.toLowerCase())
	)

	return (
		<FilterWrapper title='Автор'>
			<input
				type='text'
				value={searchText}
				onChange={e => setSearchText(e.target.value)}
				placeholder='Пошук по автору'
				className=' text-sm py-2 px-4 text-black outline-none rounded-3xl border border-aqua mb-2'
			/>
			<div className='h-36 w-[240px] overflow-y-scroll'>
				{isLoading ? (
					<Loader />
				) : filteredUsers?.length ? (
					filteredUsers.map(user => {
						const isChecked = queryParams.userId === user.id.toString()

						return (
							<Checkbox
								isChecked={isChecked}
								onClick={() => {
									updateQueryParams(
										'userId',
										isChecked ? '' : user.id.toString()
									)
								}}
								key={user.id}
								className='mb-2 text-sm'
							>
								{user.name}
							</Checkbox>
						)
					})
				) : (
					<p>Автора не знайдено</p>
				)}
			</div>
		</FilterWrapper>
	)
}

export default UserNameGroup
