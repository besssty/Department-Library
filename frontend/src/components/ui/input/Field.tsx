import cn from 'clsx'
import { forwardRef } from 'react'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={cn('mb-4', className)} style={style}>
				<label>
					<span className='mb-2 block'>
						{Icon && <Icon className='mr-3' />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						className={cn(
							'px-4 py-2 w-full  outline-none border-aqua border focus:border-black transition-all placeholder:text-gray rounded-3xl',
							{
								'border-red': !!error
							}
						)}
						{...rest}
					/>
				</label>
				{error && <div className='text-red mt-1 text-sm'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
