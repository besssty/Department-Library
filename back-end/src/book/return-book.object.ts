import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/return-category.object'
import { returnUserObject } from 'src/user/return-user.object'

export const returnBookObject: Prisma.BookSelect = {
	id: true,
	user: { select: returnUserObject },
	title: true,
	link: true,
	createdAt: true,
	category: { select: returnCategoryObject }
}

export const returnBookObjectFullest: Prisma.BookSelect = {
	...returnBookObject
}
