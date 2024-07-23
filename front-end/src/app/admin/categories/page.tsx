import { NO_INDEX_PAGE } from '@/constants/app.constants'
import Categories from './Categories'

export const metadata = {
	title: 'Categories',
	...NO_INDEX_PAGE
}

export default function CategoriesPage() {
	return <Categories />
}
