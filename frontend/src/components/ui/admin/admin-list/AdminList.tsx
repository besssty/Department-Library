import { IAdminList } from '@/types/admin-list.interface'
import Loader from '@/ui/Loader'
import { FC } from 'react'
import styles from './AdminList.module.scss'
import AdminListItem from './AdminListItem'

const AdminList: FC<IAdminList> = ({
	isLoading,
	removeHandler,
	listItems = []
}) => {
	return (
		<div className='h-96 overflow-y-scroll'>
			{isLoading ? (
				<Loader />
			) : listItems.length ? (
				listItems.map(listItem => (
					<AdminListItem
						key={listItem.id}
						removeHandler={
							removeHandler ? () => removeHandler(listItem.id) : undefined
						}
						listItem={listItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Елементи не знайдено</div>
			)}
		</div>
	)
}

export default AdminList
