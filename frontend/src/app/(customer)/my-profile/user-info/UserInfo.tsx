'use client'

import Loader from '@/ui/Loader'
import { FC } from 'react'
import { useProfile } from './useProfile'

const UserInfo: FC = () => {
	const { data, isFetching } = useProfile()

	if (isFetching) {
		return (
			<div>
				<Loader />
			</div>
		)
	}

	return (
		<>
			<div className='bg-white px-6 py-6 rounded-3xl grid lg:grid-cols-4 border border-aqua'>
				<div className='mr-4'>
					<div className='font-semibold'>ID</div>
					<div className='border-aqua border px-3 py-2 rounded-3xl text-center mb-3'>
						{data?.id}
					</div>
				</div>
				<div className='mr-4'>
					<div className='font-semibold'>Ім'я</div>
					<div className='border-aqua border px-3 py-2 rounded-3xl text-center  mb-3'>
						{data?.name}
					</div>
				</div>
				<div className='mr-4'>
					<div className='font-semibold'>Електронна адреса</div>
					<div className='border-aqua border px-3 py-2 rounded-3xl text-center  mb-3'>
						{data?.email}
					</div>
				</div>
				<div>
					<div className='font-semibold'>Телефон</div>
					<div className='border-aqua border px-3 py-2 rounded-3xl text-center'>
						{data?.phone}
					</div>
				</div>
			</div>
		</>
	)
}

export default UserInfo
