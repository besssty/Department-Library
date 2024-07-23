import { Injectable, NotFoundException } from '@nestjs/common'
import { Book, Prisma } from '@prisma/client'
import { CategoryService } from 'src/category/category.service'
import { PaginationService } from 'src/pagination/pagination.service'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { BookDto } from './book.dto'
import { EnumBookSort, GetAllBookDto } from './dto/get-all.product.dto'
import { returnBookObject, returnBookObjectFullest } from './return-book.object'

@Injectable()
export class BookService {
	constructor(
		private prisma: PrismaService,
		private paginationService: PaginationService,
		private categoryService: CategoryService,
		private userService: UserService
	) {}

	async getAll(dto: GetAllBookDto = {}) {
		const { perPage, skip } = this.paginationService.getPagination(dto)

		const filters = this.createFilter(dto)

		const books = await this.prisma.book.findMany({
			where: filters,
			orderBy: this.getSortOption(dto.sort),
			skip,
			take: perPage,
			select: returnBookObject
		})

		return {
			books,
			length: await this.prisma.book.count({ where: filters })
		}
	}

	private getDateRangeFilter(
		startDate?: string,
		endDate?: string
	): Prisma.BookWhereInput {
		return {
			createdAt: {
				gte: startDate ? new Date(startDate) : undefined,
				lte: endDate ? new Date(endDate) : undefined
			}
		}
	}

	private getSearchTermFilter(searchTerm: string): Prisma.BookWhereInput {
		return {
			OR: [
				{
					category: {
						name: {
							contains: searchTerm,
							mode: 'insensitive'
						}
					}
				},

				{
					user: {
						name: {
							contains: searchTerm,
							mode: 'insensitive'
						}
					}
				},
				{
					title: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				}
			]
		}
	}

	private createFilter(dto: GetAllBookDto): Prisma.BookWhereInput {
		const filters: Prisma.BookWhereInput[] = []

		if (dto.startDate || dto.endDate)
			filters.push(this.getDateRangeFilter(dto.startDate, dto.endDate))

		if (dto.searchTerm) filters.push(this.getSearchTermFilter(dto.searchTerm))

		if (dto.categoryId) filters.push(this.getCategoryFilter(+dto.categoryId))

		if (dto.userId) filters.push(this.getUserFilter(+dto.userId))

		return filters.length ? { AND: filters } : {}
	}

	private getSortOption(
		sort: EnumBookSort
	): Prisma.BookOrderByWithRelationInput[] {
		switch (sort) {
			case EnumBookSort.OLDEST:
				return [{ createdAt: 'asc' }]
			default:
				return [{ createdAt: 'desc' }]
		}
	}

	private getCategoryFilter(categoryId): Prisma.BookWhereInput {
		return {
			categoryId
		}
	}

	private getUserFilter(userId): Prisma.BookWhereInput {
		return {
			userId
		}
	}

	async byId(id: number) {
		const book = await this.prisma.book.findFirst({
			where: { id },
			select: returnBookObjectFullest
		})

		if (!book) {
			throw new NotFoundException('Book not found')
		}

		return book
	}

	async getSimilar(id: number) {
		const currentBook = await this.byId(id)

		if (!currentBook) {
			throw new NotFoundException('Current book not found!')
		}

		const books = await this.prisma.book.findMany({
			where: {
				category: { name: currentBook.category.name },
				user: { name: currentBook.user.name },
				NOT: { id: currentBook.id }
			},
			orderBy: { createdAt: 'desc' },
			select: returnBookObjectFullest
		})

		return books
	}

	async create(dto: BookDto) {
		const book = await this.prisma.book.create({
			data: {
				userId: dto.userId,
				title: dto.title,
				link: dto.link,
				categoryId: dto.categoryId
			}
		})

		return { book: this.returnBookFields(book) }
	}

	private returnBookFields(book: Partial<Book>) {
		return {
			title: book.title,
			link: book.link,
			userId: book.userId,
			categoryId: book.categoryId
		}
	}

	async update(id: number, dto: BookDto) {
		const { userId, title, categoryId, link } = dto

		await this.categoryService.byId(categoryId)

		await this.userService.byId(userId)

		return this.prisma.book.update({
			where: { id },
			data: {
				user: { connect: { id: userId } },
				title,
				link,
				category: { connect: { id: categoryId } }
			}
		})
	}

	async delete(id: number) {
		const currentBook = await this.byId(id)
		return this.prisma.book.delete({
			where: { id: currentBook.id }
		})
	}

	async getBook(id: number) {
		return this.prisma.book.findFirst({
			where: { id }
		})
	}
}
