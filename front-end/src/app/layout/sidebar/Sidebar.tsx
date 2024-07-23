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

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname?.startsWith(route)
	)

	return (
		<>
			{!isProtectedRoute && !isAdminPanel ? (
				<>
					<div
						className='visible xl:hidden inline-flex m-1 rounded-3xl bg-white px-4 py-1 border-aqua border align-middle items-center cursor-pointer'
						onClick={() => setIsNavOpen(prev => !prev)}
					>
						<span className='font-semibold text-lg mr-1'>Фільтри</span>
						<BsArrowRightSquare size={30} />
					</div>
					<div>
						<div
							className={cn(
								'bg-white flex-shrink-0 xl:rounded-3xl xl:visible hidden shadow shadow-gray  xl:block',
								isNavOpen ? 'showMenuNav' : 'hideMenuNav'
							)}
						>
							<div
								onClick={() => setIsNavOpen(false)}
								className='visible xl:hidden inline-flex m-1 rounded-3xl bg-white px-4 py-1 border-aqua border align-middle items-center cursor-pointer'
							>
								<span className='font-semibold text-lg mr-1'>Фільтри</span>
								<BsArrowLeftSquareFill size={30} />
							</div>
							{!isAdminPanel ? (
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
					</div>
					{isAdminPanel ? (
						<div className='m-2 table flex-shrink-0 h-12 bg-white rounded-3xl'>
							<ul className='p-2'>
								{isAdminPanel
									? ADMIN_MENU.map(item => (
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
										))
									: null}
							</ul>
						</div>
					) : null}{' '}
				</>
			) : null}
		</>
	)
}

export default Sidebar
