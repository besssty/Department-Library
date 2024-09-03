import { errorCatch } from '@/api/api.helper'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, LoginData, RegisterData } from './user.interface'

/* register */
export const register = createAsyncThunk<IAuthResponse, RegisterData>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.register(data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* login */
export const login = createAsyncThunk<IAuthResponse, LoginData>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.login(data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* logout */
export const logout = createAsyncThunk('auth/logout', async () =>
	removeFromStorage()
)

/* checkAuth */
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
