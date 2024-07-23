import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

export interface IAdminList {
	listItems?: IListItem[]
	isLoading: boolean

	removeHandler?: (id: number) => void
}
