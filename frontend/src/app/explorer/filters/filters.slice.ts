import { EnumBookSort } from '@/services/book/book.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IFilterActionsPayload, IFilterState } from './filters.types'

const initialState: IFilterState = {
	isFilterUpdated: false,
	queryParams: {
		sort: EnumBookSort.NEWEST,
		searchTerm: '',
		page: 1,
		perPage: 8
	}
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (state, action: PayloadAction<IFilterActionsPayload>) => {
			const { key, value } = action.payload
			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
		resetFilterUpdate: state => {
			state.isFilterUpdated = false
		}
	}
})
