import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { TypeBookDataFilters } from '@/services/book/book.types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'

export const useFilters = () => {
	const { updateQueryParam } = useActions()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { replace } = useRouter()

	const { queryParams } = useTypedSelector(state => state.filters)

	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({
				key: key as keyof TypeBookDataFilters,
				value
			})
		})
	}, [searchParams, updateQueryParam])

	function debounce(func: (...args: any[]) => void, delay: number) {
		let timer: NodeJS.Timeout
		return (...args: any[]) => {
			clearTimeout(timer)
			timer = setTimeout(() => func(...args), delay)
		}
	}

	const debouncedUpdateQueryParam = useMemo(
		() => debounce(updateQueryParam, 300),
		[updateQueryParam]
	)

	const updateQueryParams = async (
		key: keyof TypeBookDataFilters,
		value: string
	) => {
		const newParams = new URLSearchParams(searchParams.toString())

		newParams.set('page', '1')

		value ? newParams.set(key, String(value)) : newParams.delete(key)

		const newPathname = location.href.includes('explorer')
			? pathname
			: `${pathname}explorer`

		replace(newPathname + `?${newParams.toString()}`)
		// 2 раза изменяется, 2 раза запрос
		debouncedUpdateQueryParam({ key, value })
	}

	return { updateQueryParams, queryParams }
}
