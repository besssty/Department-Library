import { filtersSlice } from '@/app/explorer/filters/filters.slice'
import * as userActions from './user/user.actions'

export const rootActions = {
	...userActions,
	...filtersSlice.actions
}
