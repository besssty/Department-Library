import { IUser } from '@/types/user.interface'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface RegisterData {
	name: string
	phone: string
	email: string
	password: string
	isAdmin: boolean
}

export interface LoginData {
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
