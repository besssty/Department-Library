'use client'

import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import { FC } from 'react'
import { AuthRegister } from '../auth/AuthRegister'
import styles from './Dashboard.module.scss'
import { useStatistics } from './useStatistics'

const Dashboard: FC = () => {
	const { data, isFetching } = useStatistics()

	return (
		<>
			<Heading className='mb-8'>Дошка статистики</Heading>
			{isFetching ? (
				<Loader />
			) : data?.length ? (
				<>
					<div className={styles.wrapper}>
						{data.map((item, index) => (
							<div key={item.name} className={styles.item}>
								<div>
									{item.name === 'Users'
										? 'Користувачі'
										: item.name === 'Books'
											? 'Книги'
											: item.name}
								</div>
								<div>{item.value}</div>
								<div>{index === data.length - 1}</div>
							</div>
						))}
					</div>
					<div className='flex'>
						<div className='mt-6 flex items-start justify-start'>
							<div className='ml-5'>
								<AuthRegister />
							</div>
						</div>
					</div>
				</>
			) : (
				<div>Статистику не завантажено!</div>
			)}
		</>
	)
}

export default Dashboard
