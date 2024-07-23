export interface IUser {
	id: number
	email: string
	name: string
	phone: string
	isAdmin: boolean
}

export interface IFullUser extends IUser {
	avatarPath: string
}

export type TypeUser = {
	email: string
	password?: string
	name: string
	phone: string
}

export interface IUserName {
	id: number
	name: string
}
