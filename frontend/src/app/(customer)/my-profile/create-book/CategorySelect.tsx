import { useCategories } from '@/hooks/queries/useCategories'
import { forwardRef, SelectHTMLAttributes } from 'react'

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
	placeholder: string
}

export const CategorySelect = forwardRef<HTMLSelectElement, ISelect>(
	({ placeholder, ...rest }, ref) => {
		const { data } = useCategories()

		return (
			<label className='grid mr-3 mb-4'>
				<span className='mb-2 block'>{placeholder}</span>
				{data?.length ? (
					<select
						ref={ref}
						className='px-4 py-2 w-full outline-none border-aqua border focus:border-aqua-primary transition-all placeholder:text-aqua rounded-3xl cursor-pointer'
						{...rest}
					>
						{data.map(category => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				) : (
					<div>Error!</div>
				)}
			</label>
		)
	}
)
