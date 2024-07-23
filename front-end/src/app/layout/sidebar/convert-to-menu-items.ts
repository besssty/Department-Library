import { ICategory } from '@/types/category.interface'
import { IMenuItem } from './menu.interface'

export const convertToMenuItemsCategory = (
	categories: ICategory[]
): IMenuItem[] =>
	categories.map(category => ({
		label: category.name,
		link: `/explorer?categoryId=${category.id}`
	}))
