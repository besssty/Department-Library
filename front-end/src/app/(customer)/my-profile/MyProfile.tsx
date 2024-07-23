import Heading from '@/ui/Heading'
import { FC } from 'react'
import CreateBook from './create-book/CreateBook'
import UserBookList from './user-book-list/UserBookList'
import UserInfo from './user-info/UserInfo'
import FilterByDate from './filter-by-date/FilterByDate'

const MyProfile: FC = () => {
	return (
		<div>
			<div className='mr-5 xl:max-w-full max-w-[260px] overflow-hidden lg:table'>
				<Heading>Ваші дані</Heading>
				<UserInfo />
			</div>
			<div className='hidden lg:table'>
				<Heading>Ваші книги</Heading>
				<UserBookList />
			</div>
			<div className='table'>
				<Heading>Додати книгу</Heading>
				<CreateBook />
			</div>
			<div>
				<FilterByDate />
			</div>
		</div>
	)
}

export default MyProfile
