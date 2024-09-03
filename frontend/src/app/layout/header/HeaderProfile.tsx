import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'
import { FC } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'

const HeaderProfile: FC = () => {
	const { user } = useAuth()
	const { logout } = useActions()
	const { isShow, ref, setIsShow } = useOutside(false)

	return (
		<div className='relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<CgProfile
					size={25}
					className='hover:text-aqua transition-colors duration-200 text-black inline-block'
				/>
			</button>
			{isShow && (
				<div className='absolute right-0 top-0  mt-8 bg-white  shadow shadow-gray whitespace-nowrap text-sm font-medium  rounded-3xl block p-4'>
					<div className='flex justify-between items-center align-middle'>
						<span>Посилання</span>
						<button onClick={() => setIsShow(!isShow)}>
							<RxCross2 />
						</button>
					</div>
					<div className='mt-2'>
						<button
							className='px-3 py-2 mb-2 hover:bg-opacity-20 border-l-2 hover:bg-gray transition-colors duration-200'
							onClick={() => (window.location.href = '/my-profile')}
						>
							Особистий кабінет
						</button>
						<button
							className='px-3 py-2 flex items-center hover:bg-opacity-20 border-l-2 align-middle justify-center hover:bg-gray transition-colors duration-200'
							onClick={() => logout()}
						>
							Вийти з акаунту
							<FiLogOut className='ml-1' />
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default HeaderProfile
