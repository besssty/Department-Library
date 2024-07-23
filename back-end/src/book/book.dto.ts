import { Prisma } from '@prisma/client'
import { IsNumber, IsString } from 'class-validator'

export class BookDto implements Prisma.BookUpdateInput {
	@IsNumber()
	userId: number

	@IsString()
	title: string

	@IsNumber()
	categoryId: number

	@IsString()
	link: string
}
