import { NO_INDEX_PAGE } from '@/constants/app.constants'
import Books from './Books'

export const metadata = {
	title: 'Books',
	...NO_INDEX_PAGE
}

export default function BookPage() {
	return <Books />
}
