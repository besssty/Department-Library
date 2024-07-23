import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

export interface IAdminActions extends Pick<IListItem, 'editUrl'> {
	removeHandler?: () => void
}
