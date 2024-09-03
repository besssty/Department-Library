import { axiosClassic, instance } from '@/api/api.interceptor'
import { IFullUser, IUser, IUserName, TypeUser } from '@/types/user.interface'

const USERS = 'users'

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},

	async getAllNames() {
		return axiosClassic<IUserName[]>({
			url: USERS,
			method: 'GET'
		})
	},

	async updateProfile(data: TypeUser) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	}
}
