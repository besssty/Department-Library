import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { BookDto } from './book.dto'
import { BookService } from './book.service'
import { GetAllBookDto } from './dto/get-all.product.dto'

@Controller('books')
export class BookController {
	constructor(private readonly bookService: BookService) {}

	@UsePipes(new ValidationPipe())
	@Get()
	async getAll(@Query() queryDto: GetAllBookDto) {
		return this.bookService.getAll(queryDto)
	}

	@Get('similar/:id')
	async getSimilar(@Param('id') id: string) {
		return this.bookService.getSimilar(+id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post()
	async createBook(@Body() dto: BookDto) {
		return this.bookService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async updateBook(@Param('id') id: string, @Body() dto: BookDto) {
		return this.bookService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async deleteBook(@Param('id') id: string) {
		return this.bookService.delete(+id)
	}

	@Get(':id')
	async getBook(@Param('id') id: string) {
		return this.bookService.getBook(+id)
	}
}
