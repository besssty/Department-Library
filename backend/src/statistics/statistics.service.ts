import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class StatisticsService {
	constructor(private prisma: PrismaService) {}

	async getMain() {
		const usersCount = await this.prisma.user.count()
		const bookCount = await this.prisma.book.count()

		return [
			{
				name: 'Users',
				value: usersCount
			},
			{
				name: 'Books',
				value: bookCount
			}
		]
	}
}
