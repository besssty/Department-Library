import { FC } from 'react'
import CategoryGroup from './category-group/CategoryGroup'
import UserNameGroup from './user-name-group/UserNameGroup'

const Filters: FC = () => {
	return (
		<>
			<div>
				<CategoryGroup />
				<UserNameGroup />
			</div>
		</>
	)
}

export default Filters
