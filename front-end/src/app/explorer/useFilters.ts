import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { TypeBookDataFilters } from '@/services/book/book.types'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useFilters = () => {
	const { updateQueryParam } = useActions()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const { queryParams, isFilterUpdated } = useTypedSelector(
		state => state.filters
	)

	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({
				key: key as keyof TypeBookDataFilters,
				value
			})
		})
	}, [searchParams, updateQueryParam])

	const updateQueryParams = async (
		key: keyof TypeBookDataFilters,
		value: string
	) => {
		const newParams = new URLSearchParams(searchParams.toString())

		newParams.set('page', '1')

		value ? newParams.set(key, String(value)) : newParams.delete(key)

		updateQueryParam({ key, value })

		const newPathname = location.href.includes('explorer')
			? pathname
			: `${pathname}explorer`

		window.location.replace(`${newPathname}?${newParams.toString()}`)
	}

	return { updateQueryParams, queryParams, isFilterUpdated }
}
