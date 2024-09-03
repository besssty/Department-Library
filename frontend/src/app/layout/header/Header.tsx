'use client'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { FC } from 'react'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import HeaderProfile from './HeaderProfile'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<div className='w-full bg-white rounded-3xl shadow shadow-gray'>
			<div className=' flex h-[68px] justify-between'>
				<div className='flex items-center justify-center ml-3 xl:ml-14'>
					<a href={'/'}>
						{isAdminPanel ? (
							<h2 className='text-2xl text-black font-semibold hover:text-aqua transition-all duration-200'>
								Admin
							</h2>
						) : (
							<h2 className='text-2xl text-black font-semibold hover:text-aqua transition-all duration-200'>
								Кафедра
							</h2>
						)}
					</a>
				</div>
				<div className='flex items-center justify-end gap-10 mr-4 xl:mr-14'>
					{user?.isAdmin && !isAdminPanel && (
						<a
							href='/admin'
							className='hover:text-aqua transition-colors duration-200 text-black inline-block text-lg'
						>
							<MdOutlineAdminPanelSettings size={29} />
						</a>
					)}
					{!!user && <HeaderProfile />}
					{!user && (
						<a className='text-black' href={'/auth'}>
							Увійти в акаунт
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
