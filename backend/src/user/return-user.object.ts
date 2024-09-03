import { Prisma } from '@prisma/client'

export const returnUserObject: Prisma.UserSelect = {
	id: true,
	email: true,
	name: true,
	password: false,
	phone: true
}

export const returnUserNameObject: Prisma.UserSelect = {
	id: true,
	name: true
}
