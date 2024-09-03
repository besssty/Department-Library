import { ICheckbox } from '@/types/checkbox.interface'
import cn from 'clsx'
import { type FC, type PropsWithChildren } from 'react'

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({
	isChecked,
	className,
	onClick,
	children
}) => {
	return (
		<button
			className={cn(
				{
					'flex items-center border-aqua border px-2 py-1 rounded-3xl text-black font-semibold bg-white hover:bg-aqua hover:text-white transition-all duration-200':
						!isChecked
				},
				{
					'text-white bg-aqua flex items-center border-aqua border px-2 py-1 rounded-3xl font-semibold hover:bg-aqua hover:text-white transition-all duration-200':
						isChecked
				},
				className
			)}
			onClick={onClick}
		>
			<span>{children}</span>
		</button>
	)
}

export default Checkbox
