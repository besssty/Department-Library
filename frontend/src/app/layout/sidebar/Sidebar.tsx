'use client'
import Filters from '@/app/explorer/filters/Filters'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { protectedRoutes } from '@/providers/auth-provider/protected-routes.data'
import Button from '@/ui/button/Button'
import Heading from '@/ui/Heading'
import cn from 'clsx'
import { FC, useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquare } from 'react-icons/bs'
import Search from '../header/Search'
import { ADMIN_MENU } from './admin-menu.data'

const Sidebar: FC = () => {
	const { isAdminPanel, pathname } = useIsAdminPanel()
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
	const isLargeScreen = window.matchMedia('(min-width: 1366px)').matches

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname?.startsWith(route)
	)

	return (
		<>
			{!isProtectedRoute && !isAdminPanel && !isNavOpen ? (
				<div
					className='visible xl:hidden inline-flex m-1 rounded-3xl bg-white px-4 py-1 border-aqua border align-middle items-center cursor-pointer'
					onClick={() => setIsNavOpen(true)}
				>
					<span className='font-semibold text-lg mr-1'>Фільтри</span>
					<BsArrowRightSquare size={30} />
				</div>
			) : null}

			{!isAdminPanel ? (
				<div
					className={cn(
						'bg-white flex-shrink-0 xl:rounded-3xl xl:visible hidden shadow shadow-gray xl:block',
						isNavOpen ? 'showMenuNav' : 'hideMenuNav'
					)}
				>
					{isNavOpen && (
						<div
							onClick={() => setIsNavOpen(false)}
							className='visible xl:hidden inline-flex m-1 rounded-3xl bg-white px-4 py-1 border-aqua border align-middle items-center cursor-pointer'
						>
							<span className='font-semibold text-lg mr-1'>Фільтри</span>
							<BsArrowLeftSquareFill size={30} />
						</div>
					)}

					{(!isAdminPanel && isNavOpen) ||
					(!!isLargeScreen && !isProtectedRoute && !isAdminPanel) ? (
						<div className='xl:m-2 xl:mt-0 mx-6 mb-2 p-1'>
							<Heading className='mb-5 mt-2 text-center'>Фільтри</Heading>
							<div className='mb-2'>
								<Search />
							</div>
							<Filters />
							<div className='mb-4'>
								<Button
									variant='white'
									size='sm'
									onClick={() => (window.location.href = '/')}
								>
									Скинути фільтри
								</Button>
							</div>
						</div>
					) : null}
				</div>
			) : (
				<div className='m-2'>
					<ul className='p-2 bg-white rounded-3xl'>
						{ADMIN_MENU.map(item => (
							<li key={item.link}>
								<a
									className={cn(
										'block text-lg mx-1 my-2 px-6 hover:text-aqua transition-colors duration-200',
										pathname === item.link ? 'text-aqua' : 'text-black'
									)}
									href={item.link}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}

export default Sidebar
