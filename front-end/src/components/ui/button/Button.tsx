import { IButton } from '@/types/button.interface'
import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'md',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-3xl font-medium transition-all duration-200 border-aqua  border block m-auto',
				{
					'text-white bg-aqua hover:text-black hover:bg-white':
						variant === 'black',
					'text-black bg-white hover:text-white hover:bg-aqua':
						variant === 'white',
					'px-4 py-1 text-sm font-semibold': size === 'sm',
					'px-4 py-1 text-md rounded-lg': size === 'md',
					'px-15 py-3 text-lg': size === 'lg'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
