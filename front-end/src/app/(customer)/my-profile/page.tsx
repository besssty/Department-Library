import { NO_INDEX_PAGE } from '@/constants/app.constants'
import MyProfile from './MyProfile'

export const metadata = {
	title: 'My-profile',
	...NO_INDEX_PAGE
}

export default function MyProfilePage() {
	return <MyProfile />
}
