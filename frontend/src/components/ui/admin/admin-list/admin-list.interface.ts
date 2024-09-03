export interface IListItem {
	id: number
	viewUrl?: string
	editUrl?: string
	items: string[]
}

export interface IAdminListItem {
	listItem: IListItem
	removeHandler?: () => void
}
