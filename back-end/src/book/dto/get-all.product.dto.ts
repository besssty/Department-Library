import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator'
import { PaginationDto } from 'src/pagination/pagination.dto'

export enum EnumBookSort {
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export class GetAllBookDto extends PaginationDto {
	@IsOptional()
	@IsDateString()
	startDate?: string

	@IsOptional()
	@IsDateString()
	endDate?: string

	@IsOptional()
	@IsEnum(EnumBookSort)
	sort?: EnumBookSort

	@IsOptional()
	@IsString()
	searchTerm?: string

	@IsOptional()
	@IsString()
	categoryId?: string

	@IsOptional()
	@IsString()
	userId?: string
}
