import Cookies from 'js-cookie'

import { axiosClassic } from '@/api/api.interceptor'
import { REFRESH_TOKEN } from '@/constants/token.constants'
import {
	IAuthResponse,
	LoginData,
	RegisterData
} from '@/store/user/user.interface'
import { getAccessToken, saveToStorage } from './auth.helper'

export const AuthService = {
	async login(data: LoginData) {
		const response = await axiosClassic<IAuthResponse>({
			url: `/auth/login`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async register(data: RegisterData) {
		try {
			const accessToken = getAccessToken()
			if (!accessToken) {
				throw new Error('Access token is missing')
			}

			const response = await axiosClassic<IAuthResponse>({
				url: `/auth/register`,
				method: 'POST',
				data,
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			})

			return response.data
		} catch (error) {
			console.error('Registration error:', error)
			throw error
		}
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(REFRESH_TOKEN)

		const response = await axiosClassic.post<string, { data: IAuthResponse }>(
			'/auth/login/access-token',
			{ refreshToken }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	}
}
