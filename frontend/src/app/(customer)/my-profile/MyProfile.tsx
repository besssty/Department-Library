import Heading from '@/ui/Heading'
import { FC } from 'react'
import CreateBook from './create-book/CreateBook'
import FilterByDate from './filter-by-date/FilterByDate'
import UserBookList from './user-book-list/UserBookList'
import UserInfo from './user-info/UserInfo'

const MyProfile: FC = () => {
	return (
		<div>
			<div className='mr-5 xl:max-w-full max-w-[260px] overflow-hidden lg:table'>
				<Heading>Ваші дані</Heading>
				<UserInfo />
			</div>
			<div className='hidden lg:table mt-8'>
				<Heading>Ваші книги</Heading>
				<UserBookList />
			</div>
			<div className='table mt-8'>
				<Heading>Додати книгу</Heading>
				<CreateBook />
			</div>
			<div className='table mt-8'>
				<Heading>Получити список книг</Heading>
				<FilterByDate />
			</div>
		</div>
	)
}

export default MyProfile
