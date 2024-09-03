'use client'

import { IAdminActions } from '@/types/admin-actions.interface'
import { FC } from 'react'
import { RiDeleteRow } from 'react-icons/ri'
import styles from './Admin.actions.module.scss'

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	// const { push } = useRouter()

	return (
		<div className={styles.actions}>
			{/* editUrl && (			Кнопка під редагування
				<button onClick={() => push(editUrl)}>
					<RiEdit2Line />
				</button>
			)  */}
			{removeHandler && (
				<>
					<div>
						<button
							className='flex items-center align-middle hover:text-aqua text-red transition-all duration-200'
							onClick={removeHandler}
						>
							<span>Видалити</span>
							<RiDeleteRow className='ml-2' />
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default AdminActions
