import { useUserNames } from '@/hooks/queries/useUserNames'
import { forwardRef, SelectHTMLAttributes } from 'react'

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
	placeholder: string
}

export const UserNamesSelect = forwardRef<HTMLSelectElement, ISelect>(
	({ placeholder, ...rest }, ref) => {
		const { data } = useUserNames()

		return (
			<label className='grid mr-3 mb-4'>
				<span className='mb-2 block font-semibold'>{placeholder}</span>
				{data?.length ? (
					<select
						size={7}
						ref={ref}
						className='cursor-pointer outline-none'
						{...rest}
					>
						{data.map(user => (
							<option key={user.id} value={user.id} className='p-1'>
								{user.name}
							</option>
						))}
					</select>
				) : (
					<div className='text-red'>Error!</div>
				)}
			</label>
		)
	}
)
