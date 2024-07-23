import { IFilterWrapper } from '@/types/filter-wrapper.interface'
import { FC, PropsWithChildren } from 'react'

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
	title,
	children
}) => {
	return (
		<div className='mb-6'>
			<div className='mb-3 font-semibold text-black'>{title}</div>
			<div>{children}</div>
		</div>
	)
}

export default FilterWrapper
